/* Construeix una aplicació que creï diversos Jugadors/es.
Els jugadors/es podran ser afegits a un Joc, que mostrarà un marcador amb les puntuacions i el guanyador/a.
L'aplicació ha de poder afegir o treure punts a cada jugador/a perquè el marcador canviï.
La classe Marcador ha d'implementar un patró Singleton com a requisit indispensable. */


const Jugador = require("./jugador.js");

class Joc {
    constructor(nomJoc) {
        // this.nomJoc = nomJoc;
        this.nomJoc = nomJoc;
        this.jugadors = [];

        // this.jugador = nomJugador;
        // this.punts = punts;

    }
    

    afegirJugadorAlJoc(jugador) {
        console.log('jugador a joc', jugador);
        this.jugadors.push(jugador);

    }        


};
// console.log(jugador)
module.exports = Joc;


