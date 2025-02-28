const fecha = new Date(); // Fecha actual
fecha.setDate(fecha.getDate() + 5); // Modifica el objeto original
console.log(fecha); // Muestra la nueva fecha con 5 días añadidos

// Formatear la fecha manualmente (YYYY-MM-DD)
const fechaFormateada = fecha.getFullYear() + '-' + 
                        String(fecha.getMonth() + 1).padStart(2, '0') + '-' + 
                        String(fecha.getDate()).padStart(2, '0');

console.log(fechaFormateada); // Ejemplo: 2024-02-09