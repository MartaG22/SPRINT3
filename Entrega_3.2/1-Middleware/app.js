//  Crea en un fitxer inicial una petita aplicació que sumi, resti i multipliqui rebent els paràmetres en un JSON. [X]
// - Crea en un fitxer extern una classe que emmagatzemi middlewares (funcions).


const fs = require('fs');
const Middleware = require('./middleware.js');
// const Middleware = require('./middleware');
const classMiddleware = require("./middleware.js")

let data = fs.readFileSync('./nombres.json');
let nombres = JSON.parse(data);
console.log(nombres);
// console.log(typeof (nombres.nombres[0].a));

function operacions(a, b) {
    let resultatSumar = a + b;
    let resultatRestar = a - b;
    let resultatMultiplicar = a * b;
    console.log(`El resultat de sumar ${a} més ${b} és ${resultatSumar}`);
    console.log(`El resultat de restar ${a} menys ${b} és ${resultatRestar}`);
    console.log(`El resultat de multiplicar ${a} per ${b} és ${resultatMultiplicar}`);
}

const middleware = new classMiddleware(operacions);

// function sumar(a, b) {
//     let resultatSumar = a + b;
//     return resultatSumar;
// }

// function restar(a, b) {
//     let resultatRestar = a - b;
//     return resultatRestar;
// }

// function multiplicar(a, b) {
//     let resultatMultiplicar = a * b;
//     return resultatMultiplicar;
// }

operacions(nombres.num1, nombres.num2)