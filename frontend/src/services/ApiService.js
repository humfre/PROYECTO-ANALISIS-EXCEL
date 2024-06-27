// Ejemplo de servicio para interactuar con el backend (axios)
import axios from 'axios';

const API_URL = 'http://localhost:8000/api'; // URL del backend

const FileService = {
  uploadFile: (file) => {
    const formData = new FormData();
    formData.append('file', file);

    return axios.post(`${API_URL}/upload`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  }
};

export default FileService;
