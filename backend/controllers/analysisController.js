const analysisService = require('../services/analysisService');

exports.analyzeData = async (req, res) => {
  try {
    const analysisResult = await analysisService.analyzeData(req.body);
    res.status(200).json(analysisResult);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
