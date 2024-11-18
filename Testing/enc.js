const encryptObjectWithJWT = require("../Encryption/jwt_encryption");
require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });

const EncryptedPayload = {
    "name" : "Hammad Kamran",
    "email" : "bsce20029@itu.edu.pk",
    "password" : "xyz123",
    "phoneNo" : "03090000323"
}
const object = {
  EncryptedPayload : encryptObjectWithJWT( EncryptedPayload, "0c6693ac-a2ee-11" + process.env.SECRET_KEY),
  EncryptionDetails : {
    "platformName" : "Postman",
    "platformVersion" : "1.0"
  }
}

console.log("ENCRYPTED PAYLOAD::: ", encryptObjectWithJWT( EncryptedPayload, "0c6693ac-a2ee-11" + process.env.SECRET_KEY));
console.log("ECNRYPTED OBJECT::: ", encryptObjectWithJWT(object, process.env.SECRET_KEY));
