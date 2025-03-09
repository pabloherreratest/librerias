import axios from 'axios';

async function obtenerUsuariosUsandoFetch() {
    
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/usersXYZ');
        const json = await response.json();
        if (!response.ok) {
            throw new Error('Mi control: ' + response.status + ' - ' + response.statusText);
        }
        return json;
    } catch (error) {
        console.error('Error (Fetch):', error);
        return [];
    }
      
}

async function obtenerUsuarios() {
    
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/usersXYZ');           
        return response.data;
    } catch (error) {
        console.error('Error (Axios):', error);
        return [];
    }
      
}

async function obtenerUsuarioPorID(id) {
    
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users/'+id);           
        return response.data;
    } catch (error) {
        console.error('Error (Axios):', error);
        return [];
    }
      
}

    async function crearComentario(postId, name, email, body) {

        const comentario = {
            postId: postId,
            name: name,
            email: email,
            body: body
        };
        
        try {
            const response = await axios.post('https://jsonplaceholder.typicode.com/comments', comentario);           
            return response.data;
        } catch (error) {
            console.error('Error (Axios):', error);
            return [];
        }
        
    }

/*
const listaDeUsuarios01  = await obtenerUsuariosUsandoFetch();
console.log(listaDeUsuarios01); // 📌 Mostrar los datos de la API

const listaDeUsuarios02  = await obtenerUsuarios();
console.log(listaDeUsuarios02); // 📌 Mostrar los datos de la API


const usuario  = await obtenerUsuarioPorID(5);
console.log(usuario.name); // 📌 Mostrar los datos de la API
console.log(usuario.email);
*/

const comentario  = await crearComentario(1, 'Mi comentario', 'pablo@gmail.com', 'Hola mundo, este es mi primer comentario');
console.log(comentario); // 📌 Mostrar los datos de la API