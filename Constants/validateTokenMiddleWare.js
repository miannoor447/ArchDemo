const checkExpiration= require('./checkExpiration');
const sendResponse=require("./response");
const validateTokenMiddleware = async (req, res,next=null) => {
    const authorizationHeader = req.headers["authorization"];
    if (!authorizationHeader || !authorizationHeader.startsWith("Bearer ")) {
      return sendResponse(
        res,
        401,
        "Unauthorized - Missing or invalid token",
        {}
      );
    } else {
      const userToken = authorizationHeader.slice("Bearer ".length);
      const decodedToken = await checkExpiration(res, userToken);
      if (decodedToken) {
        if(next)
        {
          next();
        }
        else{
          return true;
        }
      } else {
        return sendResponse(
          res,
          401,
          "Token is expired",
          {}
        );
      }
    }
  };

  module.exports = validateTokenMiddleware;