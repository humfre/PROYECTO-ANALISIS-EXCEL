// Ejemplo de página en React que utiliza componentes y servicios
import React from 'react';
import FileUpload from '../components/FileUpload';
import FileService from '../services/FileService';

const HomePage = () => {
  const handleUpload = (file) => {
    FileService.uploadFile(file)
      .then(response => {
        console.log('Archivo subido correctamente', response);
        // Lógica adicional según la respuesta del servidor
      })
      .catch(error => {
        console.error('Error al subir archivo', error);
        // Manejo de errores
      });
  };

  return (
    <div>
      <h1>Subir Archivo de Excel</h1>
      <FileUpload onUpload={handleUpload} />
      {/* Otros componentes y contenido de la página */}
    </div>
  );
};

export default HomePage;
