/* Construeix una aplicació que creï diversos Jugadors/es.
Els jugadors/es podran ser afegits a un Joc, que mostrarà un marcador amb les puntuacions i el guanyador/a. */

const Marcador = require("./marcador");

class Jugador {
    constructor(nomJugador) {
        this.nomJugador = nomJugador;
        this.punts = 0;
        // marcador.jugadors.push(nomJugador); //EC

        // this.marcador = Marcador.instancia;
    };
};

module.exports = Jugador;


/*function JugadorACanviarPunts() {
    let i = 0;
    let puntsJugadorJoc;
    for (i = 0; i <= 10; i++) {     // 10 rondes de jocs
        jocs.forEach(joc => {

            let puntsAModificar = 0;
            let quantitatJugadors = joc.jugadors.length;
            let posicioJugador = parseInt(Math.random() * quantitatJugadors);

            let missatge;
            puntsAModificar = modificarPunts()
            if (puntsAModificar > 0) {
                missatge = `S'han sumat ${puntsAModificar}`
            } else {
                missatge = `S'han restat ${puntsAModificar}`
            }
            // console.log("marcador a jocs:", joc.jugadors[posicioJugador].nomJugador, "punts a Modificar:", puntsAModificar);
            joc.jugadors[posicioJugador].punts += puntsAModificar;
            puntsJugadorJoc = joc.jugadors[posicioJugador].punts;
            console.log(`RONDA ${i} *** JOC: ${joc.nomJoc} ==>> ${missatge} al jugador ${joc.jugadors[posicioJugador].nomJugador}`
            // NumJugador: ", posicioJugador, joc.jugadors[posicioJugador].nomJugador, ", punts: ", puntsJugadorJoc);

            // if (puntsJugadorJoc < 0) {
            //     joc.jugadors[posicioJugador].punts = 0;
            // };

            // console.log("marcador-joc:", puntsJugadorJoc);
            // console.log("JOC:", joc.nomJoc, "NumJugador:", posicioJugador, joc.jugadors[posicioJugador].nomJugador, ", punts:", puntsJugadorJoc);


        });
    };
    // return console.log(`S'han tret ${puntsTrets} punts a ${jugador.nom}.`);
    // return console.log(`S'han pujat ${puntsAfegits} punts a ${jugador.nom}.`);

}*/
