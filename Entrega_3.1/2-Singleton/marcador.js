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

    mostrarMarcador () {
        this.equipos.sort( (a, b) => b.puntos - a.puntos );
        let posicion = 0;
        let ultimosPuntos = 0;
        const consoleColor = '\x1b[36m%s\x1b[0m';

        console.log(consoleColor,"### CLASIFICACIÓN ###")

        for (let equipo of this.equipos) {
            if (equipo.puntos !== ultimosPuntos) {
                posicion++;
            }
            console.log(consoleColor,`${posicion}. ${equipo.equipo} (${equipo.puntos} puntos)`);
            //console.log("holi: ", equipo.puntos, ultimosPuntos);
            
            ultimosPuntos = equipo.puntos;            
        }

        //console.table(this.equipos);

        console.log("#####################");
    }


    // afegirPunts(){
    //     const jugadorsLenght = arrayJugadors.lenght
    //     let getJugador = 

    // }

    // intentarMarcarPunto(jugador) {
    //     let num = Math.random();
    //     if (num > 0.50) {
    //         console.log(`Punto del jugador ${jugador.nombre} del equipo ${jugador.equipo}`);
    //         this.marcador.anadirPunto(jugador.equipo);
    //     }
    // }



}


// const instancia1 = new Marcador('domino', 'Pepito');
// // const instancia2 = new Marcador('parchis', 'Juanito');
// // 
// console.log(`Nombre en la instancia1 es: ${instancia1.joc}, ${instancia1.jugador}, ${instancia1.punts} punts`)
// // console.log(`Nombre en la instancia2 es: ${instancia2.joc}, ${instancia1.jugador}`)


module.exports = new Marcador();
// module.exports = Marcador();