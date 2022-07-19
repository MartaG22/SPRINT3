/*var Asunto = {
    _state: 0, _observers: [], add: function (observer) {
        this._observadores.empujar(observador);
    },
    getState: function () {
        devuelve_esto._state
    },

    setState: function (value) {
        this._state = valor;
        for (let i = 0; i < this._observers.length; i++) {
            { this._observadores[i].señal(esto); }
        }
    };

    let  Observer  =  { señal: función(sujeto)  { let  currentValue = sujeto.getState(); consola.log(valorActual);  
        } }Asunto.añadir(observador); Asunto.setState(10); // Salida en console.log - 10 */


/* Escriu una aplicació que creï diferents objectes Usuari/ària. 
L'aplicació podrà crear diferents Temes i subscriure els usuaris/es a ells.
Quan un Usuari/ària afegeixi un missatge a un Tema s'enviarà una alerta per la consola des del Tema.
També ho mostraran per consola cadascun dels Usuaris/es que estiguin subscrits al Tema (rebran el missatge).
Crea un Tema amb un Usuari/ària i un altre amb dos i mostra la recepció dels missatges pels usuaris/es. Utilitza el mòdul events. */


// https://nodejs.dev/learn/the-nodejs-events-module


/*https://www.w3schools.com/nodejs/nodejs_events.asp
https://www.tutorialspoint.com/nodejs/nodejs_event_emitter.htm
https://www.freecodecamp.org/news/how-to-code-your-own-event-emitter-in-node-js-a-step-by-step-guide-e13b7e7908e1/
https://www.tutorialspoint.com/nodejs/nodejs_event_emitter.htm*/









// get the Emitter Module
const events = require('events');

//create an object of EventEmitter class by using above reference
var em = new events.EventEmitter();


class Tema {
    constructor() {
        this.temes = [];
    }

    subscribe(usuari) {
        this.usuaris.push(usuari);
    }

    unsubscribe(usuari) {
        this.usuari = this.usuari.filter(
            (item) => item !== usuari
        );
    }

    notify(event) {
        this.usuari.forEach((item) => {
            item.buzon.call(item, event);
        });
    }
}


class Usuari {
    constructor() {
        this.usuaris = [];
        // this.nomUsuari = nomUsuari;
        // this.missatge = missatge;
    }


}

const tema1 = new Tema();
const tema2 = new Tema();


const usuari1 = new Usuari(1);
const usuari2 = new Usuari(2);
const usuari3 = new Usuari(3);


temes.subscribe(usuari1);
tema.subscribe(subscriptor2);
tema.notify("Nueva edicion");
tema.subscribe(subscriptor3);
tema.notify("Segunda edicion");
tema.unsubscribe(subscriptor1);





 //! BUENAAAA
class Tema {
    constructor() {
        this.usuaris = [];
    }


    subscribe(subscriptor) {
        this.subscriptors.push(subscriptor);
    }


    unsubscribe(subscriptor) {
        this.subscriptors = this.subscriptors.filter(
            (item) => item !== subscriptor
        );
    }


    notify(event) {
        this.subscriptors.forEach((item) => {
            item.buzon.call(item, event);
        });
    }
}




class Usuari {
    constructor(id) {
        this.id = id;
        console.log("Se ha creado el subscriptor #: " + id);
    }
    buzon(edicion) {
        console.log(
            "Subscriptor # " + this.id + " recibió una nueva edición: " + edicion
        );
    }
}


const tema = new Tema();
console.log(tema.usuaris);

const usuari1 = new Usuari(1);
const usuari2 = new Usuari(2);
const usuari3 = new Usuari(3);
