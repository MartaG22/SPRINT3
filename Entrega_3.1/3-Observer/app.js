// https://www.youtube.com/watch?v=pReYTx2frTQ

/* Escriu una aplicació que creï diferents objectes Usuari/ària. 
L'aplicació podrà crear diferents Temes i subscriure els usuaris/es a ells.
Quan un Usuari/ària afegeixi un missatge a un Tema s'enviarà una alerta per la consola des del Tema.
També ho mostraran per consola cadascun dels Usuaris/es que estiguin subscrits al Tema (rebran el missatge).
Crea un Tema amb un Usuari/ària i un altre amb dos i mostra la recepció dels missatges pels usuaris/es. Utilitza el mòdul events. */

class Subject {
    constructor(){
        this.observers = [];
    }

    subscribe(o){
        this.observers.push(o);
    }

    unsubscribe(o){
        this.observers = this.observers.filter(e=> e != 0);
    }

    notify(model){
        this.observers.forEach(observer => {
            observer.notify(model);
        })
    }
}

class TextSubject extends Subject {
    constructor(){
        super();
        this.text = "";
    }

    notify(text){
        this.text = text;

        super.notify()
    }
}