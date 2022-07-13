/* Construeix una aplicació que creï diversos Jugadors/es.
Els jugadors/es podran ser afegits a un Joc, que mostrarà un marcador amb les puntuacions i el guanyador/a.
L'aplicació ha de poder afegir o treure punts a cada jugador/a perquè el marcador canviï.
La classe Marcador ha d'implementar un patró Singleton com a requisit indispensable. */

let quantitatJugadors = 0;

class Joc {
    constructor(nomJoc) {
        // this.nomJoc = nomJoc;
        this.nomJoc = nomJoc;
        this.jugadors = [];

        // this.jugador = nomJugador;
        // this.punts = punts;

    }


    afegirJugadorAlJoc(jugador1, jugador2, jugador3, jugador4) {
        this.jugadors.push(jugador1, jugador2, jugador3, jugador4);
        // console.log(this.jugadors);
        // console.log(`Jugadors afegits al joc ${this.nomJoc} ***** ${this.jugadors.nomJugador}`);
        console.log(`Jugadors afegits al joc  *** ${this.nomJoc} *** << ${this.jugadors[0].nomJugador} >> * << ${this.jugadors[1].nomJugador} >> * << ${this.jugadors[2].nomJugador} >> * << ${this.jugadors[3].nomJugador} >>`);
        quantitatJugadors += 4;
        // const long = arrayJugadors.lenght
        console.log(count)

    }

    afegirPunts() {
        
        // let getJugador = 

    }

    intentarMarcarPunto(jugador) {
        let num = Math.random();
        if (num > 0.50) {
            console.log(`Punto del jugador ${jugador.nombre} del equipo ${jugador.equipo}`);
            this.marcador.anadirPunto(jugador.equipo);
        }
    }

};
// console.log(jugador)
module.exports = Joc;


