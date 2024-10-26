const crypto = require('crypto');
const secretKey = "7683ea2fa40fe6a7fc2ff70ef7ebeb7aac25b818cffe8857ca1b8f05af0434c2"


function encryptionMiddleware(req, res, next) {
    try {
        const encryptedArray = encryptObject(req.body);
        req.body = encryptedArray;
        next();
    }
    catch (error) {
        console.log("Error in encryptionMiddleware:::", error);
        const LogError=require("../Constants/Errorlog")
        LogError(req,res,"handleSignupRequest",error)
    }
}
function shouldExclude(key) {
    const exclusions = ["Email","PrivateChat","GroupName","MessageTime","Position","Percentage","email","marks","Marks",'id', 'Id', 'ID', 'createdAt',"ComponentType","componenttype","ComponentName","componentname", 'updatedAt', 'OTP', 'otp', 'Date',"Birthday", 'status', 'Status',"Time","File","url",'Num',"StudentAnswer","NotifyUsers"];
    return exclusions.some(exclusion => key.includes(exclusion));
}
function encryptData(data) {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(secretKey, 'hex'), iv);
    let encryptedData = cipher.update(data, 'utf-8', 'hex');
    encryptedData += cipher.final('hex');
    return iv.toString('hex') + ':' + encryptedData;
}
function encryptObject(obj, excludeFields = []) {
    const encryptedObj = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const value = obj[key];
            if (excludeFields.includes(key) || shouldExclude(key)) {
                encryptedObj[key] = value;
            }
             else if (typeof value === 'object' && value !== null) {
                if (key === 'idObject') {
                    encryptedObj[key] = value;
                } else {
                    encryptedObj[key] = encryptObject(value, excludeFields);
                }
            } else {
                encryptedObj[key] = encryptData(value.toString());
            }
        }
    }
    return encryptedObj;
}

function encryptArray(array) {
    return array.map(item => {
        if (typeof item === 'object') {
            return encryptData(JSON.stringify(item));
        } else {
            return encryptData(item.toString());
        }
    });
}
module.exports =  {encryptionMiddleware,encryptData,encryptObject} ;