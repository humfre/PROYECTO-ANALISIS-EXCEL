const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

exports.uploadFile = (file) => {
  // Aquí puedes añadir la lógica para procesar el archivo subido
  return file;
};
