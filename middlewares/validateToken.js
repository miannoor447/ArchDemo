const checkExpiration = require('../Constants/checkExpiration.js');

const validateToken = async (req, res, next) => {
    try {
        decodedToken = await checkExpiration(res, req.query.accessToken);
        if (decodedToken) {
            next();
        } else {
            throw new Error('Unauthorized: Token expired or invalid');
        }
    } catch (error) {
        console.error('Error validating token:', error);
        throw new('Internal Server Error');
    }
};

module.exports = validateToken;
