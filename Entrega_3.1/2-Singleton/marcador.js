// youtube.com/watch?v=Z7Z-PJEIEs  singletton

// https://www.freecodecamp.org/espanol/news/40-proyectos-de-javascript-para-principiantes-ideas-faciles-para-empezar-a-codificar-en-js/

// PATRÓN SINGLETON:


class Marcador {
    static instancia;
    nom = '';

    constructor(joc, jugador, punts) {

        if (!!Marcador.instancia) {
            return Marcador.instancia;
        }

        Marcador.instancia = this;
        this.joc = joc;
        this.jugador = jugador;
        this.punts = punts;
    }


    mostrarPunts(jugador) {
        console.log(`Jugador: ${jugador.nomJugador}    <<<*****>>>    Punts totals: ${jugador.punts}`);
    };

    // mostrarGuanyador(jugadors) {
    //     // console.log("hika")
    //     // this.punts.sort((a, b) => b.puntos - a.puntos);
    //     // let guanyador = jugadors.Math.max(jugadors.punts);
    //     console.log(jugadors);
    //     // let indice = arreglo.indexOf(busqueda);
    // }



    mostrarGuanyador(jugadors) {
        let quantitatJugadors = jugadors.length;
        let guanyador;
        let i = 0;
        let puntsUltimJugador = 0;
        let jugadorActual;
        let puntsJugadorActual;

        for (i = 0; i < quantitatJugadors; i++) {

            jugadorActual = jugadors[i];
            puntsJugadorActual = jugadors[i].punts;

            if (puntsJugadorActual >= puntsUltimJugador) {
                // console.log(`posició jugador actual: ${i} /// punts: ${jugadors[i].punts}`)
                puntsUltimJugador = puntsJugadorActual;
                guanyador = jugadorActual;
                // console.log(jugadorActual)
                // i = quantitatJugadors;
                // let puntsJugadorActual = arrayJugadors[i].punts;
                // if (puntsJugadorActual >= puntsUltimJugador)
                //     arrayJugadorsOrdenatPerPunts.push(puntsJugadorActual)
                // console.log("punts guanyador:", puntsJugadorActual);
            }

        }
        console.log(`\n<<<***>>>   EL GUANYADOR HA SIGUT:  ${guanyador.nomJugador} amb ${puntsUltimJugador} punts  <<<***>>>`);
    }

}




module.exports = new Marcador();
