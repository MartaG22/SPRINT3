const fs = require('fs');
const Calculadora = require('./calculadora.js');
const Middleware = require('./middleware.js');

let data = fs.readFileSync('./nombres.json');
let nombres = JSON.parse(data);
console.log(nombres);


const calculadora = new Calculadora;
const middleware = new Middleware;

middleware.use(calculadora.sumar)



middleware.use(function (nombres, next) {
    console.log(`El resultat de la suma és ${calculadora.sumar(nombres)}`);

}) 

console.log(`El resultat de la suma és ${calculadora.sumar(nombres)}`);
console.log(`El resultat de la resta és ${calculadora.restar(nombres)}`);
console.log(`El resultat de la multiplicació és ${calculadora.multiplicar(nombres)}`);
