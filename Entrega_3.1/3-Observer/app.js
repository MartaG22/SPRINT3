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

class Usuari {
    constructor(nomUsuari, missatge) {
        this.nomUsuari = nomUsuari;
        this.missatge = missatge;
    }
}

class Tema {
    constructor(nomTema) {
        this.nomTema = nomTema;
    }
    notify(missatge) {
        this.missatge = missatge;
    }
}