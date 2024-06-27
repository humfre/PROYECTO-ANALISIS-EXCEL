const fileService = require('../services/fileService');

exports.uploadFile = async (req, res) => {
  try {
    const file = await fileService.uploadFile(req.file);
    res.status(200).json(file);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
