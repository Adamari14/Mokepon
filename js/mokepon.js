function iniciarJuego(){ 
    let botonMascotaJuador = document.getElementById('boton-mascota') //llamar el argumento en html
    botonMascotaJuador.addEventListener('click' , seleccionarMascotaJugador) //evento , funcion
}

function seleccionarMascotaJugador() {
    let inputHipodoge = document.getElementById('hipodoge') 
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let spanMascotaJugador = document.getElementById('mascota-jugador') //cambio de nombre dinamico mascota-jugador

    if(inputHipodoge.checked) { //Manipulando DOM nombre de mascota-jugador
        spanMascotaJugador.innerHTML = 'Hipodoge'
    } else if(inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = 'Capipepo'
    } else if(inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = 'Ratigueya'
    } else {
        alert("Selecciona una mascota")
    }   

    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo') //cambio de nombre dinamico mascota-enemigo

    if(ataqueAleatorio == 1){ //Manipulando DOM nombre de mascota-enemigo
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
    } else if (ataqueAleatorio == 2){
        spanMascotaEnemigo.innerHTML = 'Capipepo'
    } else {
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
    } 
}

function aleatorio(min,max){ //numeros aleatorios
    return Math.floor(Math.random() * (max - min + 1)+ min)
}

window.addEventListener('load',iniciarJuego)
