//  Crea en un fitxer inicial una petita aplicació que sumi, resti i multipliqui rebent els paràmetres en un JSON. [X]
//  Crea en un fitxer extern una classe que emmagatzemi middlewares (funcions).
//  Insereix a la invocació middlewares que facin el quadrat, el cub i la divisió entre 2 dels operands inicials en cadascuna de les operacions.
//  Invoca les execucions de la suma, la resta i la multiplicació, de manera que es vagin mostrant per la consola les modificacions que es van fent als valors abans del resultat final.

const fs = require('fs');
const Middleware = require('./middleware.js');
// const Middleware = require('./middleware');

let data = fs.readFileSync('./nombres.json');
let nombres = JSON.parse(data);
console.log(nombres);
// console.log(typeof (nombres.nombres[0].a));
const middleware = new Middleware(operacions);

function operacions(a, b, fn) {
    let resultatSumar = a + b;
    let resultatRestar = a - b;
    let resultatMultiplicar = a * b;
    console.log(`El resultat de sumar ${a} més ${b} és ${resultatSumar}`);
    console.log(`El resultat de restar ${a} menys ${b} és ${resultatRestar}`);
    console.log(`El resultat de multiplicar ${a} per ${b} és ${resultatMultiplicar}`);
    middleware.use(quadrat(a,b));
    console.log(middleware.data);
}


function quadrat(a,b)  {

    let resultQuadratNum1 = a*a;
    let resultQuadratNum2 = b*b;
        console.log(resultQuadratNum1,resultQuadratNum2);

    // res.send((resultQuadratNum1, resultQuadratNum2));
    operacions(resultQuadratNum1,resultQuadratNum2);

};

function cub(a,b)  {
    console.log(resultQuadratNum1,resultQuadratNum2);
    let resultCubNum1 = a*a*a;
    let resultCubNum2 = b*b*b;
    // res.send((resultQuadratNum1, resultQuadratNum2));
    operacions(resultCubNum1,resultCubNum2);

};

function meitat(a,b)  {
    console.log(resultQuadratNum1,resultQuadratNum2);
    let resultMeitatNum1 = a/2;
    let resultMeitatNum2 = b/2;
    // res.send((resultQuadratNum1, resultQuadratNum2));
    operacions(resultMeitatNum1,resultMeitatNum2);

};


middleware.use(quadrat(a,b));
middleware.use(cub);
middleware.use(meitat);


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

// operacions(nombres.num1, nombres.num2);
// operacions(nombres.num1, nombres.num2);
// middleware.use(nombres.num1, nombres.num2);