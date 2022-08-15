let ataqueJugador //variable global
let ataqueEnemigo
let vidasJugador = 3 //para contador de vidas
let vidasEnemigo = 3

function iniciarJuego(){ //llamado de eventos
    let sectionSeleccionarAtaque = document.getElementById('Seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none' //oculta la seccion, display para visibilidad

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'none'

    let botonMascotaJugador = document.getElementById('boton-mascota') //llamar el argumento en html
    botonMascotaJugador.addEventListener('click' , seleccionarMascotaJugador) //evento , funcion

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click' , ataqueFuego)

    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click' , ataqueAgua)

    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click' , ataqueTierra)

    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador() {
    let sectionSeleccionarMascota = document.getElementById('Seleccionar-mascota')
    sectionSeleccionarMascota.style.display = 'none' //esconde bloque
    
    let sectionSeleccionarAtaque = document.getElementById('Seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'flex' //muestra bloque, bloque flex

    
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
    let mascotaAleatoria = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo') //cambio de nombre dinamico mascota-enemigo

    if(mascotaAleatoria == 1){ //Manipulando DOM nombre de mascota-enemigo
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
    } else if (mascotaAleatoria == 2){
        spanMascotaEnemigo.innerHTML = 'Capipepo'
    } else {
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
    } 
}

function ataqueFuego(){
    ataqueJugador = 'FUEGO 🔥'
    ataqueAleatorioEnemigo()
}

function ataqueAgua(){
    ataqueJugador = 'AGUA 💧'
    ataqueAleatorioEnemigo()
}

function ataqueTierra(){
    ataqueJugador = 'TIERRA 🌱'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)

    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'FUEGO 🔥'
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'AGUA 💧'
    } else {
        ataqueEnemigo = 'TIERRA 🌱'
    }
    
    combate()
}

function combate(){
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')

    if(ataqueEnemigo == ataqueJugador){
        crearMensaje("EMPATE 😐")

    } else if(ataqueJugador == 'FUEGO 🔥' && ataqueEnemigo == 'TIERRA 🌱'){
        crearMensaje("GANASTE 😄")
        vidasEnemigo-- //contador
        spanVidasEnemigo.innerHTML = vidasEnemigo //cambio dinamico

    } else if(ataqueJugador == 'AGUA 💧' && ataqueEnemigo == 'FUEGO 🔥'){
        crearMensaje("GANASTE 😄")
        vidasEnemigo-- //contador
        spanVidasEnemigo.innerHTML = vidasEnemigo //cambio dinamico

    } else if(ataqueJugador == 'TIERRA 🌱' && ataqueEnemigo == 'AGUA 💧'){
        crearMensaje("GANASTE 😄")
        vidasEnemigo-- //contador
        spanVidasEnemigo.innerHTML = vidasEnemigo //cambio dinamico

    } else {
        crearMensaje("PERDISTE 😢")
        vidasJugador-- //contador
        spanVidasJugador.innerHTML = vidasJugador //cambio dinamico

    }

    revisarVidas()
}

function revisarVidas(){
    if(vidasEnemigo == 0){
        crearMensajeFinal('FELICITACIONES! GANASTE 🎉')
    } else if(vidasJugador == 0){
        crearMensajeFinal('SUERTE PARA LA PROXIMA! PERDISTE 🥺')
    } 
}

function crearMensaje(resultado) { //Creación de historial de mensajes
    let sectionMensajes = document.getElementById('resultado')
    let ataquesDelJugador = document.getElementById('ataques-del-jugador')
    let ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')
    
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)//impresion de mensajes
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal) { 
    let sectionMensajes = document.getElementById('resultado') //direcciona a donde debe aparecer en html

    sectionMensajes.innerHTML = resultadoFinal

    let botonFuego = document.getElementById('boton-fuego') //llamado de boton
    botonFuego.disabled = true //desabilita boton

    let botonAgua = document.getElementById('boton-agua') //llamado de boton
    botonAgua.disabled = true //desabilita boton

    let botonTierra = document.getElementById('boton-tierra') //llamado de boton
    botonTierra.disabled = true //desabilita boton
    
    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'block' //muestra bloque

}

function reiniciarJuego() {
    location.reload() //recargo de pagina
}

function aleatorio(min,max){ //numeros aleatorios
    return Math.floor(Math.random() * (max - min + 1)+ min)
}

window.addEventListener('load',iniciarJuego) 
