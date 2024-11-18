const jwt = require('jsonwebtoken');

const decryptObjectWithJWT = (token, key) => {
  try {
    console.log("Token:: " , token);
    const decodedObject = jwt.verify(token, key);
    return decodedObject;
  } catch (error) {
    console.log(error);
    throw new Error('Decryption failed: ' + error.message);
  }
};

module.exports = {decryptObjectWithJWT};
