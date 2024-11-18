const { decryptObject } = require("../Encryption/aes");
require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });

const token = "Wh3oHNoEKHI1PpC3rBL8rJvHEyZjoLFiK5YsOnTCp6LXQPwwY8zmjbDm0bkJZGf4n7vo92c+s48If6uKHvYoxUZI0CrIdNW0A8sMHjq8hg5Ix8iCUjcvB6oRs+/9CJ9LYmTlK4tRGDL1ckqX1OT9tBHqFr/lsyylLYi3AhlLDNjGlTvV6GSFOBC4uShGu+ID";
const key = "0c6693ac-a2ee-11" + process.env.SECRET_KEY; // The key used for encryption

const decryptedObject = decryptObject(token, key);
console.log("Decrypted Object:", decryptedObject);
