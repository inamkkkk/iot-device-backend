const express = require('express');
const deviceController = require('../controllers/deviceController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/data', authMiddleware, deviceController.receiveData);

module.exports = router;