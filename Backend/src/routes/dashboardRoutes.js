const express = require('express');
const router = express.Router();
const cookieJwtAuth = require("../middleware/cookieJwtAuth.js")
const { dashboard } = require('../controllers/dashboardController.js');

router.get('/',cookieJwtAuth, dashboard);


module.exports = router;


