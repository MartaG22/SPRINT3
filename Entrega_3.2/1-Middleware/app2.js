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

function operacions(a, b) {

    let resultatSumar = a + b;

    let resultatRestar = a - b;
    let resultatMultiplicar = a * b;
    console.log(`El resultat de sumar ${a} més ${b} és ${resultatSumar}`);
    console.log(`El resultat de restar ${a} menys ${b} és ${resultatRestar}`);
    console.log(`El resultat de multiplicar ${a} per ${b} és ${resultatMultiplicar}`);



    middleware.data[0](a, b);
    // middleware.use(cub(a, b));
    // middleware.use(meitat(a, b));


    // middleware.use(cub(a, b));
    // middleware.use(meitat(a, b));
    // console.log("data", middleware.data[0]);
    // console.log("JSON", middleware.data[0]);

    let resultQuadrat = middleware.data[0];
    let resultSumaQuadrat = resultQuadrat[0] + resultQuadrat[1]
    console.log(`El resultat de SUMAR el QUADRAT de ${a} per ${b} és ${resultSumaQuadrat}`);



    let resultCub = middleware.data[0];
    let resultRestaQuadrat = resultCub[0] - resultCub[1]
    console.log(`El resultat de RESTAR el CUB de ${a} per ${b} és ${resultRestaQuadrat}`);


    let resultMeitat = middleware.data[0];
    let resultMeitatQuadrat = resultMeitat[0] / resultMeitat[1]
    console.log(`El resultat de DIVIDIR la MEITAT de ${a} per ${b} és ${resultMeitatQuadrat}`);
    console.log(middleware)
}


function quadrat(a, b) {
    let resultQuadratNum1 = a * a;
    let resultQuadratNum2 = b * b;
    console.log(resultQuadratNum1, resultQuadratNum2);
    let quadrats = [resultQuadratNum1, resultQuadratNum2]
    // res.send((resultQuadratNum1, resultQuadratNum2));
    return (quadrats);

};


function cub(a, b) {
    let resultCubNum1 = a * a * a;
    let resultCubNum2 = b * b * b;
    console.log(resultCubNum1, resultCubNum2);
    let cubs = [resultCubNum1, resultCubNum2]
    return (cubs);

    // res.send((resultQuadratNum1, resultQuadratNum2));
    // result = operacions(resultCubNum1, resultCubNum2);
    // return (console.log(result));
};


function meitat(a, b) {
    let resultMeitatNum1 = a / 2;
    let resultMeitatNum2 = b / 2;
    console.log(resultMeitatNum1, resultMeitatNum2);
    let meitats = [resultMeitatNum1, resultMeitatNum2]

    return (meitats);

    // res.send((resultQuadratNum1, resultQuadratNum2));
    // result = operacions(resultMeitatNum1, resultMeitatNum2);
    // return (console.log(result));
};

const middleware = new Middleware(operacions);
middleware.use(quadrat);
middleware.use(cub);
middleware.use(meitat);


// middleware.use(quadrat);
// middleware.use(cub);
// middleware.use(meitat);


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

operacions(nombres.num1, nombres.num2);
// operacions(nombres.num1, nombres.num2);
// middleware.use(nombres.num1, nombres.num2);