const encryptObjectWithJWT = require("../Encryption/jwt_encryption");
require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });

const EncryptedPayload = {
    "name" : "Aashir Adnan",
    "email" : "aashiradnan99@gmail.com",
    "password" : "CompSci4ever",
    "phoneNo" : "03039389670"
}
const object = {
  EncryptedPayload : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWFzaGlyIEFkbmFuIiwiZW1haWwiOiJhYXNoaXJhZG5hbjk5QGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiQ29tcFNjaTRldmVyIiwicGhvbmVObyI6IjAzMDM5Mzg5NjcwIiwiaWF0IjoxNzMxNjM3MzE4fQ.Ui41BIAMIzAUZJ_3dfsjHUnmMHxkiIEigVs9CHcKRSw",
  EncryptionDetails : {
    "platformName" : "Postman",
    "platformVersion" : "1.0"
  }
}

console.log(encryptObjectWithJWT(object, process.env.SECRET_KEY));
console.log(encryptObjectWithJWT(EncryptedPayload, "0c6693ac-a2ee-11" + process.env.SECRET_KEY));