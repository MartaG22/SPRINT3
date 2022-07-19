/* Escriu una aplicació que creï diferents objectes Usuari/ària. 
L'aplicació podrà crear diferents Temes i subscriure els usuaris/es a ells.
Quan un Usuari/ària afegeixi un missatge a un Tema s'enviarà una alerta per la consola des del Tema.
També ho mostraran per consola cadascun dels Usuaris/es que estiguin subscrits al Tema (rebran el missatge).
Crea un Tema amb un Usuari/ària i un altre amb dos i mostra la recepció dels missatges pels usuaris/es. Utilitza el mòdul events. */

//!  EVENT EMITTER:  https://nodejs.org/api/events.html

class Tema {
    constructor(nomTema) {
        this.nomTema = nomTema;
        // this.temes = []

        this.usuaris = [];
    };

    subscripcio(usuari) {
        // console.log(usuari)
        this.usuaris.push(usuari);
        console.log(`S'ha donat d'alta la subscripció al tema ${this.nomTema} de l'usuari ${usuari.nomUsuari}`)


//TODO  intentar hacer validacion si existe da un mensaje de que ya existe y si no, lo crea
        // if (!usuari.nomUsuari) {
        //     console.log(`Aquest usuari ja està subscrit al tema ${this.nomTema}`)
        // } else {
        //     console.log(`S'ha donat d'alta la subscripció al tema ${this.nomTema} de l'usuari ${usuari.nomUsuari}`)
        //     this.usuaris.push(usuari);
        // }
    };

    treureSubscripcio(usuari) {
        baixesUsuaris.push(usuari);
        // console.log("baixes", "tema:", this.nomTema, baixesUsuaris);
        // console.log(arrayTemes)
        let posicioUsuariActual = baixesUsuaris.length - 1;
        this.usuaris = this.usuaris.filter((item) => item != usuari);
        console.log(`S'ha donat de baixa la subscripció al tema ${this.nomTema} de l'usuari ${baixesUsuaris[posicioUsuariActual].nomUsuari}`);
        // console.log("------", baixesUsuaris)
    };

    notificacio(event) {
        this.usuaris.forEach((item) => {
            item.buzon.call(item, event);
        });
    };
};


class Usuari {
    constructor(nomUsuari) {
        this.nomUsuari = nomUsuari;
        console.log(`S'ha creat l'usuari ${this.nomUsuari}`);
    };
    buzon(tema, missatge) {
        // console.log(tema)
        console.log(`Usuari # ${this.nomUsuari} >>> Ha rebut un nou missatge: ${missatge} del tema ${tema.nomTema}`);
    };
};


// Afegim Temes:
const arrayTemes = [];
const tema1 = new Tema("Blau");
const tema2 = new Tema("Groc");
const tema3 = new Tema("Vermell");
const tema4 = new Tema("Verd");

arrayTemes.push(tema1, tema2, tema3);


// Afegim Usuaris:
const usuari1 = new Usuari("Pepito");
const usuari2 = new Usuari("María");
const usuari3 = new Usuari("Juanito");
const usuari4 = new Usuari("Ramón");
const usuari5 = new Usuari("Maricarmen");
const usuari6 = new Usuari("Antonio");

const baixesUsuaris = [];


// Afegim subscriptors als Temes:
arrayTemes[0].subscripcio(usuari1);
arrayTemes[0].subscripcio(usuari2);
arrayTemes[0].subscripcio(usuari3);
arrayTemes[1].subscripcio(usuari2);
arrayTemes[1].subscripcio(usuari3);
arrayTemes[2].subscripcio(usuari4);
arrayTemes[2].subscripcio(usuari5);
arrayTemes[2].subscripcio(usuari6);



arrayTemes[0].notificacio(arrayTemes[0], "Primer missatge");
arrayTemes[1].notificacio(arrayTemes[1], "Segon missatge");
arrayTemes[2].notificacio(arrayTemes[2], "Tercer  missatge");

usuari1.enviarMissatge(tema1, "Missatge pel tema 1")   //!LO QUE ME HA PUESTO OMAR

arrayTemes[0].treureSubscripcio(usuari1);
arrayTemes[0].treureSubscripcio(usuari2);
arrayTemes[1].treureSubscripcio(usuari1);




// arrayTemes[0].subscripcio(usuari2);
// arrayTemes[0].notificacio("Nueva edicion");
//?arrayTemes[2].subscripcio(usuari3);
// arrayTemes[0].notificacio("Segunda edicion");
// arrayTemes[0].treureSubscripcio(usuari1);
// arrayTemes[0].notificacio("Tercera edicion");
//?arrayTemes[3].suscripcio(usuari3, usuari4, usuari5);
// arrayTemes[1].notificacio("Nueva edicion");
// arrayTemes[0].notificacio("Segunda edicion");
// arrayTemes[0].treureSubscripcio(usuari2);
// arrayTemes[0].notificacio("Tercera edicion");

// console.log(arrayTemes);
