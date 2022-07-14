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

const arrayJugadors = [jugador1, jugador2, jugador3, jugador4, jugador5, jugador6, jugador7, jugador8];


// Afegim jugadors als jocs:

// let jugadorAJoc = arrayJugadors[5];
// console.log('jugador a joc ¿app?', jugadorAJoc);
// jocs[2].afegirJugadorAlJoc(jugadorAJoc);


jocs[0].afegirJugadorAlJoc(arrayJugadors[0], arrayJugadors[1], arrayJugadors[2], arrayJugadors[5]);
jocs[1].afegirJugadorAlJoc(arrayJugadors[4], arrayJugadors[5], arrayJugadors[6], arrayJugadors[1]);
jocs[2].afegirJugadorAlJoc(arrayJugadors[7], arrayJugadors[0], arrayJugadors[6], arrayJugadors[3]);
jocs[3].afegirJugadorAlJoc(arrayJugadors[2], arrayJugadors[3], arrayJugadors[4], arrayJugadors[7]);

function canviarPuntuacio() {
    let quantitatJugadors = arrayJugadors.length;
    let puntsPelJugador = parseInt(Math.random() * quantitatJugadors);
    console.log(puntsPelJugador, arrayJugadors[puntsPelJugador].nomJugador);
}

function punts() {
    let restarSumarPunts = parseInt(Math.random() * 2);
    console.log(restarSumarPunts);
    if (restarSumarPunts == 0) {
        //restar
    } else {
        //sumar


    }

}


// intentarMarcarPunto(jugador) {

//     let num = Math.random();
//     if (num > 0.50) {
//         console.log(`Punto del jugador ${jugador.nombre} del equipo ${jugador.equipo}`);
//         this.marcador.anadirPunto(jugador.equipo);
//     }
// }


canviarPuntuacio();
punts();

// function afegirJuagadorAlJoc(){
//     for

// };

// console.log("NOM JUGADORS:" + jocs[0].jugadors[0].nomJugador, jocs[0].jugadors[1].nomJugador)
// console.log(jocs);
// console.log(arrayJugadors);



/*// otra forma:

const arrayJocs = [];
const joc1 = new Joc('Set i Mig');
const joc2 = new Joc('Remigio');
const joc3 = new Joc('Parxís');
const joc4 = new Joc('Dòmino');

arrayJocs.push(joc1, joc2, joc3, joc4);

console.log(arrayJocs);
*/

