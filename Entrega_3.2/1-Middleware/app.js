//  Crea en un fitxer inicial una petita aplicació que sumi, resti i multipliqui rebent els paràmetres en un JSON. [X]
//  Crea en un fitxer extern una classe que emmagatzemi middlewares (funcions).
//  Insereix a la invocació middlewares que facin el quadrat, el cub i la divisió entre 2 dels operands inicials en cadascuna de les operacions.
//  Invoca les execucions de la suma, la resta i la multiplicació, de manera que es vagin mostrant per la consola les modificacions que es van fent als valors abans del resultat final.

const fs = require('fs');
const Middleware = require('./middleware.js');
// const Middleware = require('./middleware');
const middleware = new Middleware(operacions);

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
    let resultQuadrat = quadrat(a, b);
    let resultCub = cub(a, b);
    let resultMeitat = meitat(a, b);

    // middleware.pasarNumeros(cub(a, b));
    // middleware.pasarNumeros(meitat(a, b));

    // middleware.use(cub(a, b));
    // middleware.use(meitat(a, b));
    // console.log("data", middleware.data[0]);
    // console.log("JSON", middleware.data[0]);

    // let resultQuadrat = middleware.pasarNumeros

    // Resultats amb els QUADRATS:
    console.log("Resultats dels Quadrats: ", resultQuadrat);
    let resultSumarQuadrat = resultQuadrat[0] + resultQuadrat[1];
    console.log(`El resultat de SUMAR el QUADRAT de ${a} per ${b} és ${resultSumarQuadrat}`);

    // let resultQuadrat = middleware.data[0];
    let resultRestarQuadrat = resultQuadrat[0] - resultQuadrat[1];
    console.log(`El resultat de RESTAR el QUADRAT de ${a} per ${b} és ${resultRestarQuadrat}`);

    // let resultQuadrat = middleware.data[0];
    let resultMultiplicarQuadrat = resultQuadrat[0] * resultQuadrat[1];
    console.log(`El resultat de MULTIPLICAR el QUADRAT de ${a} per ${b} és ${resultMultiplicarQuadrat}`);


    // Resultats amb els CUBS:
    console.log("Resultats dels Cubs: ", resultCub);
    let resultSumarCubs = resultCub[0] + resultCub[1];
    console.log(`El resultat de SUMAR el CUBS de ${a} per ${b} és ${resultSumarCubs}`);

    // let resultQuadrat = middleware.data[0];
    let resultRestarCubs = resultCub[0] - resultQuadrat[1];
    console.log(`El resultat de RESTAR el CUBS de ${a} per ${b} és ${resultRestarCubs}`);

    // let resultQuadrat = middleware.data[0];
    let resultMultiplicarCubs = resultCub[0] * resultCub[1];
    console.log(`El resultat de MULTIPLICAR el CUBS de ${a} per ${b} és ${resultMultiplicarCubs}`);


    // Resultats amb els MEITATS:
    console.log("Resultats de les Meitats: ", resultMeitat);
    let resultSumarMeitats = resultMeitat[0] + resultMeitat[1];
    console.log(`El resultat de SUMAR el CUBS de ${a} per ${b} és ${resultSumarMeitats}`);

    // let resultQuadrat = middleware.data[0];
    let resultRestarMeitats = resultMeitat[0] - resultMeitat[1];
    console.log(`El resultat de RESTAR el CUBS de ${a} per ${b} és ${resultRestarMeitats}`);

    // let resultQuadrat = middleware.data[0];
    let resultMultiplicarMeitats = resultMeitat[0] * resultMeitat[1];
    console.log(`El resultat de MULTIPLICAR el CUBS de ${a} per ${b} és ${resultMultiplicarMeitats}`);


    console.log(middleware)
}


function quadrat(a, b) {
    let resultQuadratNum1 = a * a;
    let resultQuadratNum2 = b * b;
    // console.log("rersultats", resultQuadratNum1, resultQuadratNum2);
    let quadrats = [resultQuadratNum1, resultQuadratNum2];
    // console.log("quadrats", quadrats);
    // res.send((resultQuadratNum1, resultQuadratNum2));
    return (quadrats);
};


function cub(a, b) {
    let resultCubNum1 = a * a * a;
    let resultCubNum2 = b * b * b;
    // console.log(resultCubNum1, resultCubNum2);
    let cubs = [resultCubNum1, resultCubNum2]
    return (cubs);
};


function meitat(a, b) {
    let resultMeitatNum1 = a / 2;
    let resultMeitatNum2 = b / 2;
    // console.log(resultMeitatNum1, resultMeitatNum2);
    let meitats = [resultMeitatNum1, resultMeitatNum2]
    return (meitats);
};



middleware.use(quadrat);
middleware.use(cub);
middleware.use(meitat);
operacions(nombres.num1, nombres.num2);
// middleware.use(nombres.num1, nombres.num2);