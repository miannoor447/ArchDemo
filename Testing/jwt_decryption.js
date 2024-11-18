const {decryptObjectWithJWT} = require("../Encryption/jwt_decryption");
require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXR1cm4iOnsiZmllbGRDb3VudCI6MCwiYWZmZWN0ZWRSb3dzIjoxLCJpbnNlcnRJZCI6NCwic2VydmVyU3RhdHVzIjoyLCJ3YXJuaW5nQ291bnQiOjAsIm1lc3NhZ2UiOiIiLCJwcm90b2NvbDQxIjp0cnVlLCJjaGFuZ2VkUm93cyI6MH0sImlhdCI6MTczMTYzODg1N30.kjApVa2H9nb4gsKzhEyJD-UADB-WpZ2RTET7TINL1FY";
const key = "0c6693ac-a2ee-11" + process.env.SECRET_KEY; // The key used for encryption

  const decryptedObject = decryptObjectWithJWT(token, key);
  console.log("Decrypted Object:", decryptedObject);
