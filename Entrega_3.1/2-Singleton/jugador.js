/* Construeix una aplicació que creï diversos Jugadors/es.
Els jugadors/es podran ser afegits a un Joc, que mostrarà un marcador amb les puntuacions i el guanyador/a. */

const Marcador = require("./marcador");

class Jugador {
    constructor(nomJugador) {
        this.nomJugador = nomJugador;
        this.punts = 0;
        // marcador.jugadors.push(nomJugador); //EC

        this.marcador = Marcador.instancia;
    };
};

module.exports = Jugador;