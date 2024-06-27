// Ejemplo de componente en React
import React from 'react';

const FileUpload = () => {
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    // Lógica para manejar la subida del archivo
  };

  return (
    <div>
      <input type="file" onChange={handleFileUpload} />
    </div>
  );
};

export default FileUpload;

