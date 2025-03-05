function asignarTextoElemento (elemento, texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return
}

let lista = [];

function agregarAmigo(){
    let llamando = document.getElementById('listaAmigos');
    let amigo = document.getElementById('amigo').value;
    if(amigo==""){
        alert ('Por favor ingrese un nombre');
    }else{
    lista.push(amigo);
    }
    if (amigo){
        const li = document.createElement('li');
        li.textContent = amigo;
        llamando.appendChild(li);
        document.getElementById('amigo').value = '';
    }
}

function limpiarInput(){
    let limpiar = document.querySelector('#amigo');
    limpiar.value = '';
    return;
}


let amigosorteado = [];

function sortearAmigo() {
    if (amigosorteado.length >= lista.length) {
        alert('No hay amigos para sortear');
        return; 
    }


    let amigoAleatorio = lista[Math.floor(Math.random() * lista.length)];

    if (amigosorteado.includes(amigoAleatorio)) {
        return sortearAmigo();
    } else {
        amigosorteado.push(amigoAleatorio);
        console.log(amigosorteado);
        asignarTextoElemento('h2', `El amigo secreto es: ${amigoAleatorio}`);
    }
}




