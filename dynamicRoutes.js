const express = require('express');
const multer = require('multer');
const upload = multer();
const {middlewareHandler} = require('./middlewares/middlewares.js');
const sendResponse = require('./Constants/response.js');
const router = express.Router();

router.use('/api', middlewareHandler, upload.any(), async (req, res) => {
    sendResponse(res, 200, "OK");
});

module.exports = router;
