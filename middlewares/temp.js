const SendResponse = require("../Constants/response");
const fs = require('fs');
const path = require('path');
const checkExpiration = require('../Constants/checkExpiration.js');
const executeQueryWithPagination = require('../Constants/executeQueryWithPagination.js');
const {executeQuery} = require('../Constants/queryExecution.js');
const getPaginationParams = require('../Constants/getPaginationParams.js');
const { validateParameters } = require("../Constants/validateParameters.js");
const sendResponse = require("../Constants/response");


let userToken = null;

const objectCache = {};
const objectCache = {};

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const buildQuery = (path, email, userRoleId, permission) => {
    if (path === '/login/handle/request') {
        return `
            SELECT *
            FROM userroles ur
            JOIN rolespermissions rp ON ur.RoleID = rp.RoleID
            JOIN permissions p ON rp.PermissionID = p.PermissionID
            JOIN users u ON u.UserId = ur.UserId
            WHERE u.Email = '${email}' AND p.PermissionType = '${permission}'
        `;
    } else {
        return `
            SELECT *
            FROM userroles ur
            JOIN rolespermissions rp ON ur.RoleID = rp.RoleID
            JOIN permissions p ON rp.PermissionID = p.PermissionID
            WHERE ur.UserRoleId = ${userRoleId} AND p.PermissionType = '${permission}'
        `;
    }
};

const loadHandlerFromDirectory = (req, res, next) => {
    try {
        const requestedPath = req.path.replace('/api/', '');
        const directoryPath = path.join(__dirname, '../', 'APIS', requestedPath);
        if (global.objectCache[requestedPath]){
            return next();
        }
        if (!fs.existsSync(directoryPath)) {
            return SendResponse(res, 404, 'Handler directory does not exist');
        }

        const jsFiles = fs.readdirSync(directoryPath).filter(file => file.endsWith('.js'));

        if (jsFiles.length !== 1) {
            return SendResponse(res, 400, 'Handler file not found or multiple files detected');
        }

        const handlerPath = path.join(directoryPath, jsFiles[0]);
        const handler = require(handlerPath);
        global.objectCache[requestedPath] = handler;
        next();
    } catch (error) {
        console.error('Error loading handler:', error);
        SendResponse(res, 500, 'Internal Server Error');
    }
};
const objectResolver = async (req, res, validationObject) => {
    try {
        const { query, multistep, callback_function: callbacks, method } = validationObject.processing;
        const { pagination } = query;
        const { page, offset, limit } = getPaginationParams(req);
        let queryValues, queryPayload, responseMessage, handler;

        const resolveStep = () => {
            const stepIndex = parseInt(req.query.step) - 1;
            return query[stepIndex] ?? query[0];
        };

        const resolveQueryValues = async (step) => {
            return typeof step.query_values === 'function' ? await step.query_values(req) : step.query_values;
        };

        const step = multistep && req.query.step ? resolveStep() : query[0];
        queryValues = await resolveQueryValues(step);
        queryPayload = step.query_payload;
        handler = multistep && req.query.step ? callbacks[parseInt(req.query.step) - 1] : callbacks[0];
        responseMessage = multistep && req.query.step ? validationObject.responses[parseInt(req.query.step) - 1].successMessage : validationObject.responses[0].successMessage;

        if (!pagination && !callbacks[0]) {
            const results = await executeQuery(res, queryPayload, queryValues);
            return sendResponse(res, 200, responseMessage, results);
        }

        if (pagination && !callbacks[0]) {
            const results = await executeQueryWithPagination(res, queryPayload, queryValues, page, limit);
            return sendResponse(res, 200, responseMessage, results);
        }

        handler(req, res, { page, offset, limit });
    } catch (error) {
        console.error("Error processing validation object:", error);
        res.status(500).json({ error: "Failed to process request" });
    }
};
const permissionChecker = async (req, res, next) => {
    const { page, offset, limit } = getPaginationParams(req);
    const requestedPath = req.path.replace('/api/', '');
    const pathParts = requestedPath.split('/');

    if (pathParts.length < 2) return next();

    const [firstSegment, handler, action] = pathParts.slice(-3);
    const permission = `${handler}${capitalize(firstSegment)}${capitalize(action)}`;
    global.objectCache[requestedPath] = permission;

    if (!global.objectCache[requestedPath]) return sendResponse(res, 404, "Handler does not exist");

    const { email } = req.body || {};
    const query = buildQuery(requestedPath, email, req.query.userRoleId, permission);

    try {
        const permissionResults = await executeQueryWithPagination(res, query, "", page, limit);
        if (permissionResults.length > 0) {
            return next();
        } else {
            return sendResponse(res, 403, 'Forbidden: You do not have permission to access this resource');
        }
    } catch (error) {
        console.error('Error checking permissions:', error);
        return sendResponse(res, 500, 'Internal Server Error');
    }
};

const validateTokenMiddleware = async (req, res, next) => {
    try {
        decodedToken = await checkExpiration(res, req.query.accessToken);
        if (decodedToken) {
            next();
        } else {
            return SendResponse(res, 401, 'Unauthorized: Token expired or invalid');
        }
    } catch (error) {
        console.error('Error validating token:', error);
        return SendResponse(res, 500, 'Internal Server Error');
    }
};

const validateParametersMiddleware = async (req, res, next) => {
    try{
        const requestedPath = req.path.replace('/api/', '');
        
        if (!global.objectCache[requestedPath]) {
            return SendResponse(res, 404, 'Handler not found');
        }

        const api_name = global.objectCache[requestedPath];
        const validationObjectKey = `${api_name}_object`;
        const validationObject = global.validationObjectKey;

        if (!validationObject) {
            return next();
        }

        
        const attributeValidations = {};
        let parameters;
        if (validationObject.processing.multistep){
            step_no = parseInt(req.query.step) - 1;
            parameters = validationObject.processing.parameters[step_no]
        }
        else{
            parameters = validationObject.processing.parameters[0]
        }
        for (const paramName in parameters) {
            if (parameters.hasOwnProperty(paramName)) {
                const paramConfig = parameters[paramName];
                const paramValue = req.body[paramName]; 
                
                if (paramConfig.optional && (paramValue === null)) {
                    continue; 
                }

                if (paramConfig.validations) {
                    for (const validationName in paramConfig.validations) {
                        if (paramConfig.validations.hasOwnProperty(validationName)) {
                            const validationFunction = paramConfig.validations[validationName];
                            if (api_name == "handleLoginRequest"){
                                attributeValidations[paramName] = () => validationFunction(res, paramValue, 'login');
                            }
                            else {
                                attributeValidations[paramName] = () => validationFunction(paramValue);

                            }
                        }
                    }
                }
            }
        }
        //console.log(attributeValidations);

        if (Object.keys(attributeValidations).length > 0) {
            try{
                const validation = await validateParameters(req, res, attributeValidations);
            }
            catch (error){
                return SendResponse(res, 400, "Validation Failed", error.message)
            }
        } 
        if(validationObject.authorization.accessToken || req.headers.accessToken){
            validateTokenMiddleware(req, res, next);
        }

        objectResolver(req, res, validationObject);
    }
    catch (error){
        return sendResponse(res, 400, error.message);
    }

};
