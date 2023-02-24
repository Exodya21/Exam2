document.querySelector('#promptBnt')
    .addEventListener('click', () => ej7());

document.querySelector('#isParBnt')
    .addEventListener('click', () => ej8());

document.querySelector('#cuentaAtrasBtn')
    .addEventListener('click', () => ej9());

document.querySelector('#clean')
    .addEventListener('click', () => document.querySelector('#cuentaAtras').innerHTML = '&nbsp');
    
document.querySelector('#isPalindromoBnt')
    .addEventListener('click', () => palindromo());


function ej7() {
    let mensaje = prompt()
    document.querySelector('#prompt').innerHTML +=`Hola soy ${mensaje}`;
};

function ej8() {
    let a = document.querySelector('#isPar').value;
    if ( a % 2 === 0 ) {
        document.querySelector('#isParResp').innerHTML = 'Es par';
        return
    }
    document.querySelector('#isParResp').innerHTML = 'Es impar';
}

function ej9() {
    let numero = prompt();
    let res = '';

    numero = Number(numero);

    if ( numero < 0 ) {
        document.querySelector('#cuentaAtras').innerHTML = 'No es numero positivo.'
        return
    }
    if ( numero > 20 ) {
        document.querySelector('#cuentaAtras').innerHTML = 'Es mayor que 20.'
        return
    }
    
    while ( numero <= 20 ) {
        res += `${numero} <hr>`
        numero++
    }

    document.querySelector('#cuentaAtras').innerHTML = res;
}

function palindromo() {
    let word = document.querySelector('#isPalindromo').value;
    let drow = word.split('').reverse().join('')

    if (word === drow) {
        document.querySelector('#palindromoRes').innerHTML = 'Si es palíndromo.'
        return
    }

    document.querySelector('#palindromoRes').innerHTML = 'No es palíndromo.'
}

function ej11() {
    let arr = ['blau', 'groc', 'verd']
    let arrEmpty = []

    console.log(arr, arrEmpty);

    for (const color of arr) {
        arrEmpty.push(color)
    }

    console.log(arr, arrEmpty);
}
ej11()