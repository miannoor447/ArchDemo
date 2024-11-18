const { encryptObject } = require("../Encryption/aes");
require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });

const EncryptedPayload = {
    "name" : "Hammad Kamran",
    "email" : "bsce20029@itu.edu.pk",
    "password" : "xyz123",
    "phoneNo" : "03090000323"
}
const object = {
  EncryptedPayload : encryptObject( EncryptedPayload, "0c6693ac-a2ee-11" + process.env.SECRET_KEY),
  EncryptionDetails : {
    "platformName" : "Postman",
    "platformVersion" : "1.0"
  }
}

console.log("ECNRYPTED OBJECT::: ", encryptObject(object, process.env.SECRET_KEY));
