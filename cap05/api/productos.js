// productos.js
import axios from 'axios';

export async function obtenerProductoPorID(id) {
  try {
    const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`);
    return response; // Considerar retornar solo response.data si no necesitas headers u otra metadata
  } catch (error) {
    console.error('Error al obtener el producto:', error); // Este log puede ser redundante si se lanza el error después
    throw error;
  }
}
