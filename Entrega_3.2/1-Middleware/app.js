
const Calculadora = require("./calculadora");
const Middleware = require("./middleware")
const dades = require("./nombres.json");

// Calculadora inicial
const calcul = new Calculadora()

console.log("<<< VALORS INICIALS >>>"); 
console.log(dades);

console.log("\n<<<  CALCULADORA INICIAL  >>>");
console.log(`Sumar  ${dades.a} i ${dades.b}  =  ${calcul.sumar(dades)}`)
console.log(`Restar  ${dades.a} i ${dades.b}  =  ${calcul.restar(dades)}`)
console.log(`Multiplicar  ${dades.a} i ${dades.b}  =  ${calcul.multiplicar(dades)}`)


// INSTANCIEM MIDDLEWARE I PASSEM LES FUNCIONS
const app = new Middleware(calcul);
app.use((req, next) => {
    req.a **= 2;
    req.b **= 2;
    console.log(`Primer Middleware -->> AL QUADRAT <<-->> Resultat:`, req);
    next();
});
app.use((req, next) => {
    req.a **= 3;
    req.b **= 3;
    console.log("Segón Middleware -->> AL CUB <<-->> Resultat:",  req);
    next(); 
});
app.use((req, next)=>{
    req.a /= 2;
    req.b /= 2;
    console.log("Tercer Middleware -->> MEITAT <<-->> Resultat:", req);
    next();
});


//EXECUTEM ELS CÀLCULS AMB ELS MIDDLEWARES
console.log("\n<<< OPERACIONS PASSANT PELS MIDDLEWARES >>>");
console.log("-> SUMAR: ", app.sumar(dades), "\n");
console.log("-> RESTAR: ", app.restar(dades),  "\n");
console.log("-> MULTIPLICAR: ", app.multiplicar(dades),  "\n");