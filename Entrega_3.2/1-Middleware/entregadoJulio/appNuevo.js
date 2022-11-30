// Primer instanciaras la classe calculadora i la de middlewares, afegiràs els middlewares a la classe (amb un mètode de l'estil "middlewares.use(funció)" )
// i llavors executaràs els middlewares amb la funció objectiu i les dades (P.e: middlewares.run(calculadora.sumar, dades) ).

// La classe de middlewares guardarà les dades i les passarà per tots els middlewares definits amb use i al final les passarà a la funció calculadora.sumar.




//  Crea en un fitxer inicial una petita aplicació que sumi, resti i multipliqui rebent els paràmetres en un JSON. [X]
//  Crea en un fitxer extern una classe que emmagatzemi middlewares (funcions).
//  Insereix a la invocació middlewares que facin el quadrat, el cub i la divisió entre 2 dels operands inicials en cadascuna de les operacions.
//  Invoca les execucions de la suma, la resta i la multiplicació, de manera que es vagin mostrant per la consola les modificacions que es van fent als valors abans del resultat final.


const fs = require('fs');
const Calculadora = require('./calculadora.js');
const Middleware = require('./middleware.js');

// Carreguem el fitxer extern JSON
let data = fs.readFileSync('./nombres.json');
let dades = JSON.parse(data);
console.log("nombres", dades);

// const app = new Middleware();

// Calculadora inicial
const calcul = new Calculadora;
console.log("<<<  CALCULADORA INICIAL  >>>");
console.log("Sumar:", calcul.sumar(dades))
console.log("Sumar:", calcul.restar(dades))
console.log("Sumar:", calcul.multiplicar(dades))


const middleware = new Middleware(calcul);

// 1er Middleware  ==>> al quadrat
middleware.use((req, next) => {
    let m = req.a ** 2;
    let n = req.b ** 2;
    console.log(`Primer Middleware -->> al quadrat <<-->> Resultat: ${m} i ${n}`);
    next();
});

// 2on Middleware  ==>> al cub
middleware.use((req, next) => {
    let m = req.a ** 3;
    let n = req.b ** 3;
    console.log(`Segón Middleware -->> al cub <<-->> Resultat: ${m} i ${n}`);
    next();
});

// 3er Middleware  ==>> meitat
middleware.use((req, next) => {
    let m = req.a / 2;
    let n = req.b / 2;
    console.log(`Tercer Middleware -->> meitat <<-->> Resultat: ${m} i ${n}`);
    next();
});

// const app = new Middleware(calculadora);
// app.use

// middleware.run(calculadora.sumar, dades)

// middleware.use(quadrat);
// middleware.use(cub);
// middleware.use(meitat);

// middlewares.run(calculadora.sumar, dades);

// function calculadora(a,b) {
//     try {
//         let result = middleware.run(calculadora.sumar, dades);
//         console.log("middleware 1", result );

//     } catch (err) {
//         console.log(err);
//     }
// }


function quadrat(a, b) {
    let resultQuadratNum1 = a ** 2;
    let resultQuadratNum2 = b ** 2;
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

// calculadora();