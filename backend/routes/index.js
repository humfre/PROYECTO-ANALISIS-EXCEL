const express = require('express');
const router = express.Router();

const fileController = require('../controllers/fileController');
const analysisController = require('../controllers/analysisController');

router.post('/upload', fileController.uploadFile);
router.post('/analyze', analysisController.analyzeData);

module.exports = router;
