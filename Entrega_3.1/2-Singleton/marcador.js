// PATRÓN SINGLETON:
const Jugador = require("./jugador.js");

class Marcador {
    static instancia;
    nom = '';

    constructor(nomJoc, jugador, punts) {
        if (!!Marcador.instancia) {
            return Marcador.instancia;
        };
        Marcador.instancia = this;
        this.joc = {
            nomJoc,
            jugadors: [jugador, punts]
        };
    };

    //! ESTA PARTE ES LA QUE TIENE QUE  (TIENE IR EN JOC I GUARDATS AL MARCADOR)
    mostrarPunts(jugador) {
                console.log(`Jugador: ${jugador.nomJugador}    <<<*****>>>    Punts totals: ${jugador.punts}`);
    };

    mostrarGuanyador(jugadors) {
        let quantitatJugadors = jugadors.length;
        let guanyador;
        let puntsUltimJugador = 0;
        let jugadorActual;
        let puntsJugadorActual;

        //! tengo que mirar los puntos de cada jugador en total de todos los juegos!!!
        for (let i = 0; i < quantitatJugadors; i++) {

            jugadorActual = jugadors[i];
            puntsJugadorActual = jugadors[i].punts;

            if (puntsJugadorActual >= puntsUltimJugador) {
                puntsUltimJugador = puntsJugadorActual;
                guanyador = jugadorActual;
            };
        };

        // console.log(jugadors)
        console.log(`\n<<<***>>>   EL GUANYADOR HA SIGUT:  ${guanyador.nomJugador} amb ${puntsUltimJugador} punts  <<<***>>>`);
    };
};

module.exports = new Marcador();