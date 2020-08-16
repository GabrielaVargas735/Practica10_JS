// Práctica 10 - Cronómetro

let cronometro = 0; conteo = 0;

function inicia(){
    const iniciar = document.getElementById('cronometro');
    cronometro++;
    iniciar.innerHTML = cronometro;
}
function contador (){
    conteo = window.setInterval(inicia,1000);
}
const botomStart = document.getElementById('iniciar');
botomStart.addEventListener('click',contador);

function parar(){
    const detener = document.getElementById('cronometro');
    window.clearInterval(conteo);
}
const botomStop = document.getElementById('detener');
botomStop.addEventListener('click', parar);

function limpiar(){
    const clean = document.getElementById('cronometro');
    cronometro = 0;
    clean.innerHTML = cronometro;
}
const botomClean = document.getElementById('limpiar');
botomClean.addEventListener('click',limpiar);