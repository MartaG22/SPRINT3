//  Crea en un fitxer inicial una petita aplicació que sumi, resti i multipliqui rebent els paràmetres en un JSON. [X]
//  Crea en un fitxer extern una classe que emmagatzemi middlewares (funcions).
//  Insereix a la invocació middlewares que facin el quadrat, el cub i la divisió entre 2 dels operands inicials en cadascuna de les operacions.
//  Invoca les execucions de la suma, la resta i la multiplicació, de manera que es vagin mostrant per la consola les modificacions que es van fent als valors abans del resultat final.

const fs = require('fs');
const Middleware = require('./middleware.js');
const middleware = new Middleware(calculadora);

let data = fs.readFileSync('./nombres.json');
let nombres = JSON.parse(data);
console.log(nombres);



function quadrat(a, b) {
    let resultQuadratNum1 = a * a;
    let resultQuadratNum2 = b * b;
    let quadrats = [resultQuadratNum1, resultQuadratNum2];
    return (quadrats);
};


function cub(a, b) {
    let resultCubNum1 = a * a * a;
    let resultCubNum2 = b * b * b;
    let cubs = [resultCubNum1, resultCubNum2]
    return (cubs);
};


function meitat(a, b) {
    let resultMeitatNum1 = a / 2;
    let resultMeitatNum2 = b / 2;
    let meitats = [resultMeitatNum1, resultMeitatNum2]
    return (meitats);
};


function calculadora(a, b) {
    let resultatSumar = a + b;
    let resultatRestar = a - b;
    let resultatMultiplicar = a * b;
    console.log(`El resultat de sumar ${a} més ${b} és ${resultatSumar}`);
    console.log(`El resultat de restar ${a} menys ${b} és ${resultatRestar}`);
    console.log(`El resultat de multiplicar ${a} per ${b} és ${resultatMultiplicar}`);


    let count = middleware.funcions.length;
    let resultatOperacio;
    for (let i = 0; i < count; i++) {
        resultatOperacio = middleware.funcions[i](a, b);
        console.log(resultatOperacio)
        let variantOperacio
        switch (i) {
            case (i = 0):
                variantOperacio = " els QUADRATS";
                break;
            case (i = 1):
                variantOperacio = "els CUBS";
                break;
            case (i = 2):
                variantOperacio = "les MEITATS";
                break;
        }
        let x = resultatOperacio[0];
        let y = resultatOperacio[1];
        let sumarResultats = resultatOperacio[0] + resultatOperacio[1];
        console.log(`El resultat de SUMAR ${variantOperacio} de ${a} més ${b} és:    ${x} + ${y} = ${sumarResultats}`);
        let restarResultats = resultatOperacio[0] - resultatOperacio[1];
        console.log(`El resultat de RESTAR ${variantOperacio} de ${a} menys ${b} és:    ${x} - ${y} = ${restarResultats}`);
        let multiplicarResultats = resultatOperacio[0] * resultatOperacio[1];
        console.log(`El resultat de MULTIPLICAR ${variantOperacio} de ${a} menys ${b} és:    ${x} * ${y} = ${multiplicarResultats}`);

    }

    console.log(middleware)
}


middleware.use(quadrat);
middleware.use(cub);
middleware.use(meitat);
calculadora(nombres.num1, nombres.num2);