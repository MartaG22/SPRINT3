// const Jugador = require("./jugador.js");
const Joc = require("./joc.js");
const Jugador = require("./jugador.js");
const Marcador = require("./marcador.js");


// Afegim jocs:

const joc1 = new Joc('Set i Mig');
const joc2 = new Joc('Remigio');
const joc3 = new Joc('Parxís');
const joc4 = new Joc('Dòmino');

const jocs = [joc1, joc2, joc3, joc4];



// Afegim jugadors:

const jugador1 = new Jugador("Pepito");
const jugador2 = new Jugador("María");
const jugador3 = new Jugador("Juanito");
const jugador4 = new Jugador("Ramón");
const jugador5 = new Jugador("Maricarmen");
const jugador6 = new Jugador("Inés");
const jugador7 = new Jugador("Andreu");
const jugador8 = new Jugador("Juan");

const jugadors = [jugador1, jugador2, jugador3, jugador4, jugador5, jugador6, jugador7, jugador8];


// Afegim jugadors als jocs:

let jugadorAJoc = jugadors[5]
jocs[2].afegirJugadorAlJoc(jugadors[jugadorAJoc]);


// function afegirJuagadorAlJoc(){
//     for

// };


console.log(jocs);
console.log(jugadors);



/*// otra forma:

const arrayJocs = [];
const joc1 = new Joc('Set i Mig');
const joc2 = new Joc('Remigio');
const joc3 = new Joc('Parxís');
const joc4 = new Joc('Dòmino');

arrayJocs.push(joc1, joc2, joc3, joc4);

console.log(arrayJocs);
*/

