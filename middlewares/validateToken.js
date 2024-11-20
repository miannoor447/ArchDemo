const checkExpiration = require('../Constants/checkExpiration.js');

const validateToken = async (req, res) => {
    try {
        const decodedToken = await checkExpiration(res, req.query.accessToken);
        if (!decodedToken) {
            throw new Error("Invalid Token")
        }
    } catch (error) {
        // Internal server error handling
        const errorObject = {
            frameworkStatusCode: 'E24', // Payload Function Error
            httpStatusCode: 500, // Internal Server Error
            description: `SSC: E24 => ${error.message || error.toString()}`
        };
        console.error('Error validating token:', error);
    }
};

module.exports = validateToken;
