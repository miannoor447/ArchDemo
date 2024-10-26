const moment = require('moment');

const generatePayload = (userId) => {
const expiration = moment().add(120,'minutes').unix();
  return {
    id: userId,
    exp: expiration,
  };
};
module.exports = generatePayload;
