class Publicador {
    constructor() {
        this.subscriptors = [];
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




class Subscriptor {
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


const publicador = new Publicador();
console.log(publicador.subscriptors);

const subscriptor1 = new Subscriptor(1);
const subscriptor2 = new Subscriptor(2);
const subscriptor3 = new Subscriptor(3);


publicador.subscribe(subscriptor1);
publicador.subscribe(subscriptor2);
publicador.notify("Nueva edicion");
publicador.subscribe(subscriptor3);
publicador.notify("Segunda edicion");
publicador.unsubscribe(subscriptor1);
publicador.notify("Tercera edicion");
publicador.subscribe(subscriptor2);
publicador.notify("Nueva edicion");
publicador.subscribe(subscriptor3);
publicador.notify("Segunda edicion");
publicador.unsubscribe(subscriptor1);
publicador.notify("Tercera edicion");

const publicadorPeriodico = new Publicador();

// function Observer(edicion) {
//     console.log("LLegó una nueva edición con el nombre de: " + edicion);
// }


