const Jugador = require("./jugador.js");
const marcador = require("./marcador.js");
const modificarPunts = require('./helper/modificarPunts.js');


class Joc {
    constructor(nomJoc) {
        this.nomJoc = nomJoc;
        this.jugadors = [];
    }


    afegirJugadorAlJoc(jugador1, jugador2, jugador3, jugador4) {
        this.jugadors.push(jugador1, jugador2, jugador3, jugador4);
        console.log(`Jugadors afegits al joc  *** ${this.nomJoc}, amb marcador 0  --->>> *** << ${this.jugadors[0].nomJugador} >> * << ${this.jugadors[1].nomJugador} >> * << ${this.jugadors[2].nomJugador} >> * << ${this.jugadors[3].nomJugador} >>`);
    }

    
    // canviarPunts() {
    //     console.log("HHHOOLLAAAAAA")
    //     let i = 0;
    //     let puntsJugadorJoc;
    //     for (i = 0; i < 10; i++) {     // 10 rondes de jocs
    //         let ronda = i + 1;
    //         console.log(`\nRONDA ${ronda}: `);
    //         jocc.forEach(joc => {

    canviarPuntsJoc(joc, posicioJugador) {
        let puntsAModificar = 0;
        // let quantitatJugadors = joc.jugadors.length;
        // let posicioJugador = parseInt(Math.random() * quantitatJugadors);

        let missatge;
        puntsAModificar = modificarPunts()
        if (puntsAModificar > 0) {
            missatge = `S'han sumat ${puntsAModificar} punts`
        } else {
            missatge = `S'han restat ${-puntsAModificar} punts`
        }
        
        //! ESTA PARTE ES LA QUE TIENE QUE IR EN JOC I GUARDATS AL MARCADOR
        console.log("Holaaaaaaaaaaaaaa!!! MARCADOR:", marcador.punts)
        marcador.punts += puntsAModificar;
        console.log("Marcador.punts", marcador.punts)
        let puntsJugadorJoc = marcador.punts;
        console.log(` JOC: ${this.nomJoc} ==>> ${missatge} al jugador ${this.jugadors[posicioJugador].nomJugador}`);

        if (puntsJugadorJoc < 0) {
            marcador.punts = 0;
        };

    };
};







//! ESTA PARTE ES LA QUE TIENE QUE ESTABA EN APP (TIENE IR EN JOC I GUARDATS AL MARCADOR)



module.exports = Joc;