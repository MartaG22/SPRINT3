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
        let index = 0;
        this.subscriptors.forEach(item => {
            item.call(this, index, event);
            index++;
        });
    }
}








const periodico = new Publicador();

function Observer(index, edicion) {
    console.log("Al Observador #" +
        index + " le llegó una nueva edición con el nombre de: " +
        edicion);
}

periodico.subscribe(Observer);
periodico.subscribe(Observer);
periodico.notify("Nueva edicion");