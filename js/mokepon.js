const sectionSeleccionarAtaque = document.getElementById('Seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('boton-mascota')
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
const contenedorAtaques = document.getElementById('contenedorAtaques')

let mokepones = [] //arreglo
let ataqueJugador = []
let ataqueEnemigo = []
let opcionDeMokepones
let inputHipodoge
let inputCapipepo
let inputRatigueya
let mascotaJugador
let ataquesMokepon
let ataquesMokeponEnemigo
let botonFuego
let botonAgua
let botonTierra
let botones = []
let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasJugador=0
let victoriasEnemigo=0
let vidasJugador=3
let vidasEnemigo=3

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
    
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador() {
    
    sectionSeleccionarMascota.style.display = 'none' //esconde bloque
    sectionSeleccionarAtaque.style.display = 'flex' //muestra bloque, bloque flex

    if(inputHipodoge.checked) { //Manipulando DOM nombre de mascota-jugador
        spanMascotaJugador.innerHTML = inputHipodoge.id
        mascotaJugador = inputHipodoge.id
    } else if(inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = inputCapipepo.id
        mascotaJugador = inputCapipepo.id
    } else if(inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = inputRatigueya.id
        mascotaJugador = inputRatigueya.id
    } else {
        alert("Selecciona una mascota")
    }   

    extraerAtaques(mascotaJugador)
    seleccionarMascotaEnemigo()
}

function extraerAtaques(mascotaJugador){
    let ataques 
    for (let i = 0; i < mokepones.length; i++) {
        if(mascotaJugador === mokepones[i].nombre){
            ataques = mokepones[i].ataques
        }
    }
        mostrarAtaques(ataques)
}

function mostrarAtaques(ataques){
    ataques.forEach((ataque) => {
        ataquesMokepon = `
        <button id=${ataque.id} class="boton-de-ataque BAtaque">${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML += ataquesMokepon
    })
    botonFuego = document.getElementById('boton-fuego')
    botonAgua = document.getElementById('boton-agua')
    botonTierra = document.getElementById('boton-tierra')

    botones = document.querySelectorAll('.BAtaque')//seleccione todos los elementos que tengan algo

}

function secuenciaAtaque(){
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) =>{
           if(e.target.textContent === '🔥'){
                ataqueJugador.push('FUEGO 🔥')
                console.log(ataqueJugador)
                boton.style.background = '#3F4E4F'
                boton.disabled = true   
           } else if(e.target.textContent === '💧'){
                ataqueJugador.push('AGUA 💧')
                console.log(ataqueJugador)
                boton.style.background = '#3F4E4F'
                boton.disabled = true   
           } else {
                ataqueJugador.push('TIERRA 🌱')
                console.log(ataqueJugador)
                boton.style.background = '#3F4E4F'
                boton.disabled = true   
           }
           ataqueAleatorioEnemigo()
        })
    })
   

}

function seleccionarMascotaEnemigo(){
    let mascotaAleatoria = aleatorio( 0,mokepones.length -1)//el rango depende de la longitud del arreglo

    spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre
    ataquesMokeponEnemigo = mokepones[mascotaAleatoria].ataques
    secuenciaAtaque()
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio( 0,ataquesMokeponEnemigo.length -1)

    if (ataqueAleatorio == 0 || ataqueAleatorio == 1) {
        ataqueEnemigo.push('FUEGO 🔥')
    } else if (ataqueAleatorio == 3 || ataqueAleatorio == 4) {
        ataqueEnemigo.push('AGUA 💧')
    } else {
        ataqueEnemigo.push('TIERRA 🌱')
    }

    console.log(ataqueEnemigo)
    iniciarPelea()
}

function iniciarPelea(){
    if(ataqueJugador.length === 5){
        combate()
    }
}

function indexAmbosOponente(jugador, enemigo) {
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

function combate(){

    for(let index=0;index<ataqueJugador.length;index++) {
        if(ataqueJugador[index] == ataqueEnemigo[index]) {
            indexAmbosOponente(index,index)
            crearMensaje("EMPATE👀")
            spanVidasJugador.innerHTML = victoriasJugador

        } else if(ataqueJugador[index]==='FUEGO 🔥' && ataqueEnemigo[index]==='TIERRA 🌱') {
            indexAmbosOponente(index,index)
            crearMensaje("GANASTE😄")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador

         }else if(ataqueJugador[index]==='AGUA 💧' && ataqueEnemigo[index]==='FUEGO 🔥') {
            indexAmbosOponente(index,index)
            crearMensaje("GANASTE😄")
            victoriasJugador++
            spanVidasJugador.innerHTML=victoriasJugador

        } else if(ataqueJugador[index] ==='TIERRA 🌱' && ataqueEnemigo[index]==='AGUA 💧') {
            indexAmbosOponente(index,index)
            crearMensaje("GANASTE😄")
            victoriasJugador++
            spanVidasJugador.innerHTML=victoriasJugador

        } else {
            indexAmbosOponente(index,index)
            crearMensaje("PERDISTE 😢")
            victoriasEnemigo++
            spanVidasEnemigo.innerHTML = victoriasEnemigo
        }
    }
    revisarVidas()
}

function revisarVidas(){
    if(victoriasJugador===victoriasEnemigo){
        crearMensajeFinal("Esto fue un empate!!! 😲")
    } else if(victoriasJugador>victoriasEnemigo){
        crearMensajeFinal("FELICITACIONES! GANASTE 🎉")
    }else{
        crearMensajeFinal('SUERTE PARA LA PROXIMA! PERDISTE 🥺')
    }
}

function crearMensaje(resultado) { //Creación de historial de mensajes
    
    
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo
    

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal) { 
     //direcciona a donde debe aparecer en html
    sectionMensajes.innerHTML = resultadoFinal



    sectionReiniciar.style.display = 'block' //muestra bloque

}

function reiniciarJuego() {
    location.reload() //recargo de pagina
}

function aleatorio(min,max){ //numeros aleatorios
    return Math.floor(Math.random() * (max - min + 1)+ min)
}

window.addEventListener('load',iniciarJuego) 
