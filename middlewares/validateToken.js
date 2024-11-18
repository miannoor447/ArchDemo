const checkExpiration = require('../Constants/checkExpiration.js');

const validateToken = async (req, res) => {
    try {
        const decodedToken = await checkExpiration(res, req.query.accessToken);
        if (!decodedToken) {
            // Error: Token expired or invalid
            const errorObject = {
                frameworkStatusCode: 'E40', // Unauthorized due to invalid or expired token
                httpStatusCode: 401, // Unauthorized
                description: "SSC: E40 => Unauthorized: Token expired or invalid"
            };
            return sendResponse(res, errorObject.httpStatusCode, errorObject.description);
        }
    } catch (error) {
        // Internal server error handling
        const errorObject = {
            frameworkStatusCode: 'E24', // Payload Function Error
            httpStatusCode: 500, // Internal Server Error
            description: `SSC: E24 => ${error.message || error.toString()}`
        };
        console.error('Error validating token:', error);
        return sendResponse(res, errorObject.httpStatusCode, errorObject.description);
    }
};

module.exports = validateToken;
