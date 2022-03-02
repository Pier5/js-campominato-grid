// L'utente indica un livello di difficoltà in base al quale viene 
// generata una griglia di gioco quadrata, 
// in cui ogni cella contiene un numero (in ordine) 
// tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49

let btnPlay = document.querySelector('#btn-play');
let output = document.querySelector('.output');
let outputTwo = document.querySelector('.output-two');
let easy = document.querySelector('#easy');
let medium = document.querySelector('#medium');
let hard = document.querySelector('#hard');

btnPlay.addEventListener('click', function() {
    output.classList.add('shadow');
    outputTwo.innerHTML = '';
    
    if(easy.selected) {
        for (let i = 1; i <= 100; i++) {
            let elemento = document.createElement('div');
            elemento.classList.add('box');
            elemento.innerHTML = i;
            outputTwo.append(elemento);
        }   
    } else if (medium.selected) {
        for (let i = 1; i <= 81; i++) {
            let elemento = document.createElement('div');
            elemento.classList.add('box');
            elemento.innerHTML = i;
            outputTwo.append(elemento);
        }
    } else if (hard.selected) {
        for (let i = 1; i <= 49; i++) {
            let elemento = document.createElement('div');
            elemento.classList.add('box');
            elemento.innerHTML = i;
            outputTwo.append(elemento);
        }  
    }
})