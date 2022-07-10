// youtube.com/watch?v=Z7Z-PJEIEs  singletton

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
    }
}


const instancia1 = new Marcador('domino', 'Pepito');
// const instancia2 = new Marcador('parchis', 'Juanito');
// 
console.log(`Nombre en la instancia1 es: ${instancia1.joc}, ${instancia1.jugador}`)
// console.log(`Nombre en la instancia2 es: ${instancia2.joc}, ${instancia1.jugador}`)


module.exports = Marcador;