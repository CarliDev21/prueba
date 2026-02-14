

const elementoPadre = document.getElementById('contenedor-perfil');

document.getElementById('cargar-btn').addEventListener("click", (e) => {
    console.log("Boton presionado");
    getEmpleado();
});

// Delegación de eventos: Escuchamos en el padre
elementoPadre.addEventListener("click", (e) => {
    // Si el elemento clickeado (target) es un H1 (tagName siempre devuelve mayúsculas)
    if (e.target.tagName === 'H1') {
        alert(`¡Perfil seleccionado: ${e.target.textContent}!`);
    }
});

async function getEmpleado() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        
        // Buena práctica: verificar que la respuesta HTTP sea exitosa (código 200-299)
        if (!response.ok) throw new Error('Network peso was not ok'); 
        
        const data = await response.json();
        
        // Creamos los elementos DENTRO de la función si queremos perfiles múltiples
        const nombreUsuario = document.createElement('h1');
        const correoUsuario = document.createElement('p');
        const companyName = document.createElement('p');

        // Usamos textContent por seguridad
        nombreUsuario.textContent = `Nombre: ${data.name}`;
        correoUsuario.textContent = `Correo: ${data.email}`;
        companyName.textContent = `Empresa: ${data.company.name}`;
        
        elementoPadre.append(nombreUsuario, correoUsuario, companyName); 
        console.log(data);
    } catch (error) {
        console.error("Error al obtener el empleado:", error);
    } 
}


/* async function obtenerProductos(){
    try {
    const res = await fetch('https://dummyjson.com/products')
    const data = await res.json();
    console.log(data);
    } catch (error) {
        console.log("Error: " +error)
    }

}
obtenerProductos(); */



// fetch('https://dummyjson.com/products/1', {
//   method: 'PUT', /* or PATCH */
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({
//     title: 'iPhone Galaxy +1'
//   })
// })
// .then(res => res.json())
// .then(console.log);

// async function obtenerProductos(){
//     try {
//     const res = await fetch('https://dummyjson.com/products')
//     const data = await res.json();
//     console.log(data);
//     } catch (error) {
//         console.log("Error: " +error)
//     }

// }
// obtenerProductos();
/* 
const tag = document.getElementById('btn').addEventListener("click", (e) => {
    console.log("Boton presionado");
    
    console.log(e);
}); */
