/* Construeix una aplicació que creï diversos Jugadors/es.
Els jugadors/es podran ser afegits a un Joc, que mostrarà un marcador amb les puntuacions i el guanyador/a.
L'aplicació ha de poder afegir o treure punts a cada jugador/a perquè el marcador canviï.
La classe Marcador ha d'implementar un patró Singleton com a requisit indispensable. */

class Joc {
    constructor(nomJoc) {
        this.nomJoc = nomJoc;
    }
}