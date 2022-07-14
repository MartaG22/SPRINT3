/* Construeix una aplicació que creï diversos Jugadors/es.
Els jugadors/es podran ser afegits a un Joc, que mostrarà un marcador amb les puntuacions i el guanyador/a.
L'aplicació ha de poder afegir o treure punts a cada jugador/a perquè el marcador canviï.
La classe Marcador ha d'implementar un patró Singleton com a requisit indispensable. */
const Jugador = require("./jugador.js");
const marcador = require("./marcador.js");


class Joc {
    constructor(nomJoc) {
        // this.nomJoc = nomJoc;
        this.nomJoc = nomJoc;
        this.jugadors = [];
        // marcador.jocs[nomJoc] = []; //EC

        // this.jugador = nomJugador;
        // this.punts = punts;

    }


    afegirJugadorAlJoc(jugador1, jugador2, jugador3, jugador4) {
        this.jugadors.push(jugador1, jugador2, jugador3, jugador4);
        this.jugadors.forEach(jugador => {
            console.log("jugador:", jugador.marcador, "punts:", jugador.punts);
        });
        // console.log(this.jugadors);
        // console.log(`Jugadors afegits al joc ${this.nomJoc} ***** ${this.jugadors.nomJugador}`);
        console.log(`Jugadors afegits al joc  *** ${this.nomJoc} *** << ${this.jugadors[0].nomJugador} >> * << ${this.jugadors[1].nomJugador} >> * << ${this.jugadors[2].nomJugador} >> * << ${this.jugadors[3].nomJugador} >>`);
        // const long = arrayJugadors.lenght
        // console.log(count)
    }


};
// console.log(jugador)
module.exports = Joc;


