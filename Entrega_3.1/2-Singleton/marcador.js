// youtube.com/watch?v=Z7Z-PJEIEs  singletton

// https://www.freecodecamp.org/espanol/news/40-proyectos-de-javascript-para-principiantes-ideas-faciles-para-empezar-a-codificar-en-js/

// PATRÓN SINGLETON:


class Marcador {
    static instancia;
    nom = '';

    constructor(joc, jugador) {

        if (!!Marcador.instancia) {
            return Marcador.instancia;
        }

        Marcador.instancia = this;
        this.joc = joc;
        this.jugador = jugador;
        this.punts = 0;
    }


}


// const instancia1 = new Marcador('domino', 'Pepito');
// // const instancia2 = new Marcador('parchis', 'Juanito');
// // 
// console.log(`Nombre en la instancia1 es: ${instancia1.joc}, ${instancia1.jugador}, ${instancia1.punts} punts`)
// // console.log(`Nombre en la instancia2 es: ${instancia2.joc}, ${instancia1.jugador}`)


module.exports = Marcador;