const encryptObjectWithJWT = require("../Encryption/jwt_encryption");
require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });

const EncryptedPayload = {
    "name" : "Hammad Kamran",
    "email" : "bsce20029@itu.edu.pk",
    "password" : "xyz123",
    "phoneNo" : "03090000323"
}
const object = {
  EncryptedPayload : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSGFtbWFkIEthbXJhbiIsImVtYWlsIjoiYnNjZTIwMDI5QGl0dS5lZHUucGsiLCJwYXNzd29yZCI6Inh5ejEyMyIsInBob25lTm8iOiIwMzA5MDAwMDMyMyIsImlhdCI6MTczMTkxNzc1OX0.AwEgUcKJ0iTtNofpz3L6wM_9z_JU0yN8w9NkPOmUzQw",
  EncryptionDetails : {
    "platformName" : "Postman",
    "platformVersion" : "1.0"
  }
}

console.log("ENCRYPTED PAYLOAD::: ", encryptObjectWithJWT( EncryptedPayload, "0c6693ac-a2ee-11" + process.env.SECRET_KEY));
console.log("ECNRYPTED OBJECT::: ", encryptObjectWithJWT(object, process.env.SECRET_KEY));
