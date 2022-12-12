const Jugador = require("./jugador.js");
const Marcador = require("./marcador.js");


class Joc {
    constructor(nomJoc) {
        this.nomJoc = nomJoc;
        this.jugadors = [];
    }


    afegirJugadorAlJoc(jugador1, jugador2, jugador3, jugador4) {
        this.jugadors.push(jugador1, jugador2, jugador3, jugador4);
        console.log(`Jugadors afegits al joc  *** ${this.nomJoc}, amb marcador 0  --->>> *** << ${this.jugadors[0].nomJugador} >> * << ${this.jugadors[1].nomJugador} >> * << ${this.jugadors[2].nomJugador} >> * << ${this.jugadors[3].nomJugador} >>`);
    }

};

module.exports = Joc;


