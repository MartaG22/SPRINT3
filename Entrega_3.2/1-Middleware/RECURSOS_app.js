// Crea en un fitxer inicial una petita aplicació que sumi, resti i multipliqui rebent els paràmetres en un JSON.
// Crea en un fitxer extern una classe que emmagatzemi middlewares (funcions).
// Insereix a la invocació middlewares que facin el quadrat, el cub i la divisió entre 2 dels operands inicials en cadascuna de les operacions.
// Invoca les execucions de la suma, la resta i la multiplicació, de manera que es vagin mostrant per la consola les modificacions que es van fent als valors abans del resultat final.

const { MongoWriteConcernError } = require("mongodb");

/* https://www.ticportal.es/glosario-tic/middleware
https://www.iteramos.com/pregunta/16631/nodejs-que-es-res-y-req-en-expressjs

https://www.youtube.com/watch?v=rA6Fgm7FL9E
https://www.youtube.com/watch?v=j5UBvJhLA-k */


//! JUEGOS DE CODIGO:

https://www.codewars.com/
https://www.codingame.com/start

// !DEVELOPERS TEAM:

// https://www.youtube.com/watch?v=2mEdCSpfOHI
// https://www.youtube.com/watch?v=B2ZJ2N1-iNI  - DAVID ESPANADERO

// https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/JSON
// https://www.youtube.com/watch?v=Y2FpY61h5Z8  //! JSON ___ MUY BIEN EXPLICADO




// https://www.youtube.com/watch?v=qQjALhIEM3A


// https://docs.microsoft.com/es-es/shows/beginners-series-to-nodejs/

// https://www.tabnine.com/code/javascript/functions/fs/promises

// ! EXPLICACIÓN DE OMAR DEL MIDDLEWARE:

calc = new Calc();
app = new MW();

app.add(func => {});

app.run(calc.suma, data);




// ! ENCONTRADOS POR INTERNET:
// ! *** 1
const miMiddleware = (req, res, next) => {
    //resto de codigo
    next();
}
app.use(miMiddleware);


// ! *** 2
app.use((req, res, next) => {
    //resto de codigo
    next();
});