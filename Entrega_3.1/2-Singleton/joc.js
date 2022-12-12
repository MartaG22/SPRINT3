const Jugador = require("./jugador.js");
const marcador = require("./marcador.js");
const modificarPunts = require("./helper/modificarPunts.js");

class Joc {
    constructor(nomJoc) {
        this.nomJoc = nomJoc;
        this.jugadors = [];
    }

    afegirJugadorAlJoc(jugador1, jugador2, jugador3, jugador4, nouJoc) {
        this.jugadors.push(jugador1, jugador2, jugador3, jugador4);
        marcador.joc = nouJoc;
        marcador.jugadors = this.jugadors;

        for (let i = 0; i < this.jugadors.length; i++) {
                        marcador.jugadors[i].punts = 0;      // Inicialitzem els marcadors a 0
        }
        // console.log("AQSWDEFRGTYHYJUIU;MNFd", marcador.joc, marcador.jugadors);

        console.log(
            `Jugadors afegits al joc  *** ${this.nomJoc}, amb marcador 0  --->>> *** << ${this.jugadors[0].nomJugador} >> * << ${this.jugadors[1].nomJugador} >> * << ${this.jugadors[2].nomJugador} >> * << ${this.jugadors[3].nomJugador} >>`
        );
        // console.log("inicializando MARCADOR en JOC:", marcador)
    }

    canviarPuntsJoc(posicioJugador) {
        let puntsAModificar = 0;
        // let quantitatJugadors = joc.jugadors.length;
        // let posicioJugador = parseInt(Math.random() * quantitatJugadors);

        let missatge;
        puntsAModificar = modificarPunts();
        console.log('puntsAModificar', puntsAModificar,  "juador a Modifiacer", marcador.jugadors[posicioJugador]);     //! ME HE QUEDADO AQUÍ - COMPROBAR QUE EL JUGADOR ES EL QUE TIENE QUE SER
        if (puntsAModificar > 0) {
          missatge = `S'han sumat ${puntsAModificar} punts`;
        } else {
          missatge = `S'han restat ${-puntsAModificar} punts`;
        }
        
        //! ESTA PARTE ES LA QUE TIENE QUE IR EN JOC I GUARDATS AL MARCADOR
        // console.log('mmaarrccaaddoorr', marcador)
        // console.log("Holaaaaaaaaaaaaaa!!! JOC:", joc)
        // console.log("Holaaaaaaaaaaaaaa!!! MARCADOR:", marcador)
        // console.log("A ver si consigo que me salga INDEX JOC", indexJoc);
        //! aquí es donde hay que modificar para que los puntos vayan al jugador que quiero
        
        marcador.jugadors[posicioJugador].punts += puntsAModificar;
        // console.log("NUEVA PUNTUACIÓN:" ,marcador.jugadors[posicioJugador].punts)
        
        // this.jugadors[posicioJugador].punts += puntsAModificar;
        // console.log(" AQUI!!!  Marcador.punts", marcador.punts)
        // console.log("AQUI!!!   Marcador.punts", marcador.jugadors)
        
        // let puntsJugadorJoc = marcador.punts;
        // console.log(puntsJugadorJoc)
        console.log(
          ` JOC: ${this.nomJoc} ==>> ${missatge} al jugador ${this.jugadors[posicioJugador].nomJugador}`
          );
          console.log('puntsAModificar', puntsAModificar,  "juador a Modifiacer", marcador.jugadors[posicioJugador]);  //! ME HE QUEDADO AQUÍ - COMPROBAR QUE EL JUGADOR ES EL QUE TIENE QUE SER
          // console.log("marcador joc:", this.nomJoc, this.jugadors);
          
          let puntsJugadorJoc = marcador.jugadors[posicioJugador].punts;
          if (puntsJugadorJoc < 0) {
            // marcador.punts = 0;
            marcador.jugadors[posicioJugador].punts = 0;
        }
    }

    //? COMENTADO DE MOMENTO    //// probar poner los resultados en MARCADOR!!!
    resultats(arrayJugadors) {
        // console.log("\nPUNTS TOTALS DE CADA JUGADOR:");
        arrayJugadors.forEach((jugador) => {
            console.log(jugador);
            marcador.mostrarPunts(jugador);
        });
        marcador.mostrarGuanyador(arrayJugadors);
    }
}

// Joc.canviarPunts;
// mostrarResultats();   //? COMENTADO DE MOMENTO

// marcador.jugadors[1].punts = 0

//! ESTA PARTE ES LA QUE TIENE QUE ESTABA EN APP (TIENE IR EN JOC I GUARDATS AL MARCADOR)

module.exports = Joc;
