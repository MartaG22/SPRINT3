const Joc = require("./joc.js");
const Jugador = require("./jugador.js");
const marcador = require("./marcador.js");


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
const jugador8 = new Jugador("Antonio");

const arrayJugadors = [jugador1, jugador2, jugador3, jugador4, jugador5, jugador6, jugador7, jugador8];


// Afegim jugadors als jocs:
jocs[0].afegirJugadorAlJoc(arrayJugadors[0], arrayJugadors[1], arrayJugadors[2], arrayJugadors[5]);
jocs[1].afegirJugadorAlJoc(arrayJugadors[4], arrayJugadors[5], arrayJugadors[6], arrayJugadors[1]);
jocs[2].afegirJugadorAlJoc(arrayJugadors[7], arrayJugadors[0], arrayJugadors[6], arrayJugadors[3]);
jocs[3].afegirJugadorAlJoc(arrayJugadors[2], arrayJugadors[3], arrayJugadors[4], arrayJugadors[7]);


function modificarPunts() {
    let punts = 0;
    let restarSumarPunts = parseInt(Math.random() * 2);

    (restarSumarPunts == 0) ? punts = -2 : punts = 3;       // Si restarSumarPunts = 0 --> RESTEM 2 PUNTS // Si Si restarSumarPunts = 1 --> SUMEM 3 PUNTS
    return punts;
}

function JugadorACanviarPunts() {
    let i = 0;
    let puntsJugadorJoc;
    for (i = 0; i < 10; i++) {     // 10 rondes de jocs
        let ronda = i + 1;
        console.log(`\nRONDA ${ronda}: `);
        jocs.forEach(joc => {

            let puntsAModificar = 0;
            let quantitatJugadors = joc.jugadors.length;
            let posicioJugador = parseInt(Math.random() * quantitatJugadors);

            let missatge;
            puntsAModificar = modificarPunts()
            if (puntsAModificar > 0) {
                missatge = `S'han sumat ${puntsAModificar} punts`
            } else {
                missatge = `S'han restat ${-puntsAModificar} punts`
            }

            // console.log("marcador a jocs:", joc.jugadors[posicioJugador].nomJugador, "punts a Modificar:", puntsAModificar);
            joc.jugadors[posicioJugador].punts += puntsAModificar;
            puntsJugadorJoc = joc.jugadors[posicioJugador].punts;
            // console.log("JOC:", joc.nomJoc, "NumJugador:", posicioJugador, joc.jugadors[posicioJugador].nomJugador, ", punts:", puntsJugadorJoc);
            console.log(` JOC: ${joc.nomJoc} ==>> ${missatge} al jugador ${joc.jugadors[posicioJugador].nomJugador}`);

            if (puntsJugadorJoc < 0) {
                joc.jugadors[posicioJugador].punts = 0;
            };

            // console.log("marcador-joc:", puntsJugadorJoc);
            // console.log("JOC:", joc.nomJoc, "NumJugador:", posicioJugador, joc.jugadors[posicioJugador].nomJugador, ", punts:", puntsJugadorJoc);


        });
    };
    // return console.log(`S'han tret ${puntsTrets} punts a ${jugador.nom}.`);
    // return console.log(`S'han pujat ${puntsAfegits} punts a ${jugador.nom}.`);

}

/*function JugadorACanviarPunts() {
    let i = 0;
    let puntsJugadorJoc;
    for (i = 0; i < 10; i++) {     // 10 rondes de jocs
        jocs.forEach(joc => {

            let puntsAModificar = 0;
            let quantitatJugadors = joc.jugadors.length;
            let posicioJugador = parseInt(Math.random() * quantitatJugadors);

            puntsAModificar = modificarPunts()
            // console.log("marcador a jocs:", joc.jugadors[posicioJugador].nomJugador, "punts a Modificar:", puntsAModificar);
            joc.jugadors[posicioJugador].punts += puntsAModificar;
            puntsJugadorJoc = joc.jugadors[posicioJugador].punts;
            console.log("JOC:", joc.nomJoc, "NumJugador:", posicioJugador, joc.jugadors[posicioJugador].nomJugador, ", punts:", puntsJugadorJoc);

            if (puntsJugadorJoc < 0) {
                joc.jugadors[posicioJugador].punts = 0;
            };

            // console.log("marcador-joc:", puntsJugadorJoc);
            // console.log("JOC:", joc.nomJoc, "NumJugador:", posicioJugador, joc.jugadors[posicioJugador].nomJugador, ", punts:", puntsJugadorJoc);


        });
    };
    // return console.log(`S'han tret ${puntsTrets} punts a ${jugador.nom}.`);
    // return console.log(`S'han pujat ${puntsAfegits} punts a ${jugador.nom}.`);

}*/



function mostrarResultats() {
    console.log("\nPUNTS TOTALS DE CADA JUGADOR:")
    arrayJugadors.forEach(jugador => {
        marcador.mostrarPunts(jugador);
    });
    marcador.mostrarGuanyador(arrayJugadors);
};

// function mostrarGuanyador() {
//     let quantitatJugadors = arrayJugadors.length;
//     let guanyador;
//     let trobat;
//     let i = 0;
//     let puntsUltimJugador = 0;
//     let arrayJugadorsOrdenatPerPunts = [];
//     for (i = 0; i < quantitatJugadors; i++) {
//         // console.log(`posició jugador actual: ${i} /// punts: ${arrayJugadors[i].punts}`)

//         let jugadorActual = arrayJugadors[i];
//         let puntsJugadorActual = arrayJugadors[i].punts;

//         if (puntsJugadorActual >= puntsUltimJugador) {
//             console.log(`posició jugador actual: ${i} /// punts: ${arrayJugadors[i].punts}`)
//             puntsUltimJugador = puntsJugadorActual;
//             guanyador = jugadorActual;
//             console.log(jugadorActual)
//             // i = quantitatJugadors;
//             // let puntsJugadorActual = arrayJugadors[i].punts;
//             // if (puntsJugadorActual >= puntsUltimJugador)
//             //     arrayJugadorsOrdenatPerPunts.push(puntsJugadorActual)
//             // console.log("punts guanyador:", puntsJugadorActual);
//         }

//     }
//     console.log("guanyador:", guanyador);
// }


JugadorACanviarPunts();
modificarPunts();
mostrarResultats();



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

