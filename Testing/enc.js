const encryptObjectWithJWT = require("../Encryption/jwt_encryption");
require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });

const EncryptedPayload = {
    "name" : "Hammad Kamran",
    "email" : "bsce20029@itu.edu.pk",
    "password" : "xyz123",
    "phoneNo" : "03090000323"
}
const object = {
  EncryptedPayload : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbmNyeXB0ZWRQYXlsb2FkIjoiZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnVZVzFsSWpvaVFXRnphR2x5SUVGa2JtRnVJaXdpWlcxaGFXd2lPaUpoWVhOb2FYSmhaRzVoYmprNVFHZHRZV2xzTG1OdmJTSXNJbkJoYzNOM2IzSmtJam9pUTI5dGNGTmphVFJsZG1WeUlpd2ljR2h2Ym1WT2J5STZJakF6TURNNU16ZzVOamN3SWl3aWFXRjBJam94TnpNeE5qTTNNekU0ZlEuVWk0MUJJQU1JekFVWkpfM2Rmc2pIVW5tTUh4a2lJRWlnVnM5Q0hjS1JTdyIsIkVuY3J5cHRpb25EZXRhaWxzIjp7InBsYXRmb3JtTmFtZSI6IlBvc3RtYW4iLCJwbGF0Zm9ybVZlcnNpb24iOiIxLjAifSwiaWF0IjoxNzMxOTE3Mzk5fQ.4lLM2huElxbyV00L64qsM70cMAgT8iS_hzFadksA_zo",
  EncryptionDetails : {
    "platformName" : "Postman",
    "platformVersion" : "1.0"
  }
}

console.log("ENCRYPTED OBJECT::: ", encryptObjectWithJWT( EncryptedPayload, "0c6693ac-a2ee-11" + process.env.SECRET_KEY));
console.log("ECNRYPTED PAYLOAD::: ", encryptObjectWithJWT(object, process.env.SECRET_KEY));
