var fondo = document.querySelector('.fondo')
var llanta1 = document.querySelector('.llanta')
var llanta_2 = document.querySelector('.llanta_2')
var polvo = document.querySelector('.polvo')
var luz = document.querySelector('.luces_1')

fondo.addEventListener('click', Mover)

function Mover(){
    fondo.classList.add('fondo_mover')
    llanta1.classList.add('carro_mover')
    llanta_2.classList.add('carro_mover')
    polvo.classList.remove('oculto')
    luz.classList.remove('oculto')
}

