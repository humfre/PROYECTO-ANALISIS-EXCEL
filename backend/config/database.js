// Ejemplo de database.js para conectar con MongoDB usando Mongoose
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log(`MongoDB Conectado: ${conn.connection.host}`);
  } catch (err) {
    console.error(`Error de conexión: ${err.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
