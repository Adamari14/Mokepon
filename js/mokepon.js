function iniciarJuego(){ 
    let botonMascotaJuador = document.getElementById('boton-mascota') //llamar el argumento en html
    botonMascotaJuador.addEventListener('click' , seleccionarMascotaJugador) //evento , funcion
}

function seleccionarMascotaJugador() {
    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let spanMascotaJugador = document.getElementById('mascota-jugador')

    if(inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = 'Hipodoge'
    } else if(inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = 'Capipepo'
    } else if(inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = 'Ratigueya'
    } else {
        alert("Selecciona una mascota")
    }
       


   
}

window.addEventListener('load',iniciarJuego)
