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

    mostrarGuanyador(jugadors) {
        // console.log("hika")
        // this.punts.sort((a, b) => b.puntos - a.puntos);
        // let guanyador = jugadors.Math.max(jugadors.punts);
        console.log(jugadors);
        // let indice = arreglo.indexOf(busqueda);
    }

}

// console.log(`Jugadors afegits al joc *** ${ this.nomJoc } *** << ${ this.jugadors[0].nomJugador } >> * << ${ this.jugadors[1].nomJugador } >> * << ${ this.jugadors[2].nomJugador } >> * << ${ this.jugadors[3].nomJugador } >>`);

// mostrarMarcador () {
//     this.equipos.sort( (a, b) => b.puntos - a.puntos );
//     let posicion = 0;
//     let ultimosPuntos = 0;
//     const consoleColor = '\x1b[36m%s\x1b[0m';

//     console.log(consoleColor,"### CLASIFICACIÓN ###")

//     for (let equipo of this.equipos) {
//         if (equipo.puntos !== ultimosPuntos) {
//             posicion++;
//         }
//         console.log(consoleColor,`${ posicion }.${ equipo.equipo }(${ equipo.puntos } puntos)`);
//         //console.log("holi: ", equipo.puntos, ultimosPuntos);

//         ultimosPuntos = equipo.puntos;
//     }

//     //console.table(this.equipos);

//     console.log("#####################");
// }






module.exports = new Marcador();
// module.exports = Marcador();