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
                puntsUltimJugador = puntsJugadorActual;
                guanyador = jugadorActual;
            }
        }
        console.log(`\n<<<***>>>   EL GUANYADOR HA SIGUT:  ${guanyador.nomJugador} amb ${puntsUltimJugador} punts  <<<***>>>`);
    }
}

module.exports = new Marcador();