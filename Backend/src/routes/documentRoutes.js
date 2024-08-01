const express = require('express');
const router = express.Router();
const cookieJwtAuth = require("../middleware/cookieJwtAuth.js")
const { createDocument } = require('../controllers/documentController.js');

router.post('/createDocument',cookieJwtAuth, createDocument);


module.exports = router;


