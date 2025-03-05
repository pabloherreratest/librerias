import axios from 'axios';

async function obtenerUsuariosUsandoFetch() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users2');
        const json = await response.json();
        if(!response.ok) {
            throw new Error(`Error HTTP: ${response.status} - ${response.statusText}`);
        }
        return json;
      } catch (error) {
        console.error("Error al obtener la tarea:", error.message);
        return [];
      }
}

async function obtenerUsuarios() {
    try {
        const respuesta = await axios.get('https://jsonplaceholder.typicode.com/users2');
        return respuesta.data;
    } catch (error) {
        console.error('Error al obtener los datos:', error);
    }
}

async function obtenerUsuarioPorID(id) {
    try {
        const respuesta = await axios.get('https://jsonplaceholder.typicode.com/users/' + id);
        return respuesta.data;
    } catch (error) {
        console.error('Error al obtener el usuario:', error);
    }
}

async function crearPost(userId, title, body) {

    const post = {
        userId: userId,
        id: 101,
        title: title,
        body: body
    }

    try {
        const respuesta = await axios.post('https://jsonplaceholder.typicode.com/posts',post);
        return respuesta.data;
    } catch (error) {
        console.error('Error al obtener el usuario:', error);
    }
}

const listaDeUsuarios01  = await obtenerUsuariosUsandoFetch();
console.log(listaDeUsuarios01); // 📌 Mostrar los datos de la API

const listaDeUsuarios  = await obtenerUsuarios();
console.log(listaDeUsuarios); // 📌 Mostrar los datos de la API

const usuario = await obtenerUsuarioPorID(3);
console.log(usuario); // 📌 Mostrar los datos de un usuario
console.log("username = ", usuario.username); // 📌 Mostrar el nombre de usuario


const nuevoPost = await crearPost(1, 'Ejemplo Axios POST', 'Este es un ejemplo de prueba de POST');
console.log(nuevoPost); // 📌 Mostrar los datos del nuevo post