const sectionSeleccionarAtaque = document.getElementById('Seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonFuego = document.getElementById('boton-fuego')
const botonAgua = document.getElementById('boton-agua')
const botonTierra = document.getElementById('boton-tierra')
sectionReiniciar.style.display = 'none'
const botonReiniciar = document.getElementById('boton-reiniciar')

const sectionSeleccionarMascota = document.getElementById('Seleccionar-mascota')

const spanMascotaJugador = document.getElementById('mascota-jugador')

const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const sectionMensajes = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')
const contenedorTarjetas = document.getElementById('contenedorTarjetas')

let mokepones = [] //arreglo
let ataqueJugador
let ataqueEnemigo
let opcionDeMokepones
let inputHipodoge
let inputCapipepo
let inputRatigueya
let vidasJugador = 3
let vidasEnemigo = 3

//CLASE
class Mokepon{
    constructor(nombre, foto, vida){ //argumentos de esa clase
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

//OBJETOS INSTANCIADOS / desde la clase
let hipodoge = new Mokepon('Hipodoge', './assets/mokepons_mokepon_hipodoge_attack.png', 5)
let capipepo = new Mokepon('Capipepo', './assets/mokepons_mokepon_capipepo_attack.png', 5)
let ratigueya = new Mokepon('Ratigueya', './assets/mokepons_mokepon_ratigueya_attack.png', 5)

mokepones.push(hipodoge, capipepo, ratigueya)//Agregar al arreglo

//OBJETOS LITERARES /guardan info
hipodoge.ataques.push(
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '🌱', id: 'boton-tierra'},    
)

ratigueya.ataques.push(
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '🌱', id: 'boton-tierra'},    
)

capipepo.ataques.push(
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '🌱', id: 'boton-tierra'},  
    { nombre: '🌱', id: 'boton-tierra'},  
    { nombre: '🌱', id: 'boton-tierra'},    
)

function iniciarJuego(){ //llamado de eventos
    
    sectionSeleccionarAtaque.style.display = 'none' //oculta la seccion, display para visibilidad
    
    mokepones.forEach((mokepon) => { //por cada mokepon se hace
        opcionDeMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre} />
        <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
            <p>${mokepon.nombre}</p>
            <img src=${mokepon.foto} alt=${mokepon.nombre}>
        </label>
        `//extraer de Html
    contenedorTarjetas.innerHTML += opcionDeMokepones

     inputHipodoge = document.getElementById('Hipodoge')
     inputCapipepo = document.getElementById('Capipepo')
     inputRatigueya = document.getElementById('Ratigueya')

    })

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

    if(inputHipodoge.checked) { //Manipulando DOM nombre de mascota-jugador
        spanMascotaJugador.innerHTML = inputHipodoge.id
    } else if(inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = inputCapipepo.id
    } else if(inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = inputRatigueya.id
    } else {
        alert("Selecciona una mascota")
    }   

    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo(){
    let mascotaAleatoria = aleatorio(0,mokepones.length -1)//el rango depende de la longitud del arreglo

    spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre
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
