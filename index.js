const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Asegúrate de que las rutas existen y están en el lugar correcto
const routes = require('./routes/index');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Usar rutas
app.use('/api', routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
