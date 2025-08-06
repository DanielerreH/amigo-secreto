console.log("✅ app.js cargado correctamente");
let listaDeAmigos = [];

function agregarAmigo() {
    //Aqui se captura el valor del input
    const input = document.getElementById("amigo");
    const nombre = input.value.trim(); //Eliminamos espacios en blanco

    //Validamos si el campo esta vacio
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return; //Si esta vacio, no hacemos nada
    
    
    }

    //Añadimos el nombre al array
    listaDeAmigos.push(nombre);

    //Limpiamos el campo de entrada
    input.value = ""; 

    // Actualizamos el listado de amigos
    mostrarLista();


}

function mostrarLista() {
    const ul = document.getElementById("listaAmigos");
    ul.innerHTML = ""; //Borramos el contenido de la lista

    listaDeAmigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        ul.appendChild(li);

    });
}

function sortearAmigo() {

if (listaDeAmigos.length == 0) {
    alert("No hay amigos en la lista");
    return;

}

const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
const amigoSorteado = listaDeAmigos[indiceAleatorio];
document.getElementById("resultado").innerHTML = `El amigo secreto es: <strong>${amigoSorteado}</strong>`;


}