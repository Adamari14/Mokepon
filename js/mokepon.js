const sectionSeleccionarAtaque = document.getElementById('Seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonFuego = document.getElementById('boton-fuego')
const botonAgua = document.getElementById('boton-agua')
const botonTierra = document.getElementById('boton-tierra')
sectionReiniciar.style.display = 'none'
const botonReiniciar = document.getElementById('boton-reiniciar')

const sectionSeleccionarMascota = document.getElementById('Seleccionar-mascota')
const inputHipodoge = document.getElementById('hipodoge') 
const inputCapipepo = document.getElementById('capipepo')
const inputRatigueya = document.getElementById('ratigueya')
const spanMascotaJugador = document.getElementById('mascota-jugador')

const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const sectionMensajes = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')


let ataqueJugador //variable global
let ataqueEnemigo
let vidasJugador = 3 //para contador de vidas
let vidasEnemigo = 3

class Mokepon{
    constructor(nombre, foto, vida){
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
    }
}

let hipodoge = new Mokepon('hipodoge', './assets/mokepons_mokepon_hipodoge_attack.png', 5)
let capipepo = new Mokepon('Capipepo', './assets/mokepons_mokepon_capipepo_attack.png', 5)


function iniciarJuego(){ //llamado de eventos
    
    sectionSeleccionarAtaque.style.display = 'none' //oculta la seccion, display para visibilidad
    sectionReiniciar.style.display = 'none'

    botonMascotaJugador.addEventListener('click' , seleccionarMascotaJugador) //evento , funcion
    botonFuego.addEventListener('click' , ataqueFuego)
    botonAgua.addEventListener('click' , ataqueAgua)
    botonTierra.addEventListener('click' , ataqueTierra)
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador() {
    
    sectionSeleccionarMascota.style.display = 'none' //esconde bloque
    
    
    sectionSeleccionarAtaque.style.display = 'flex' //muestra bloque, bloque flex

    
     //cambio de nombre dinamico mascota-jugador

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
     //cambio de nombre dinamico mascota-enemigo

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
    
    
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)//impresion de mensajes
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal) { 
     //direcciona a donde debe aparecer en html

    sectionMensajes.innerHTML = resultadoFinal

     //llamado de boton
    botonFuego.disabled = true //desabilita boton

     //llamado de boton
    botonAgua.disabled = true //desabilita boton

     //llamado de boton
    botonTierra.disabled = true //desabilita boton
    
    
    sectionReiniciar.style.display = 'block' //muestra bloque

}

function reiniciarJuego() {
    location.reload() //recargo de pagina
}

function aleatorio(min,max){ //numeros aleatorios
    return Math.floor(Math.random() * (max - min + 1)+ min)
}

window.addEventListener('load',iniciarJuego) 
