// - Crea en un fitxer extern una classe que emmagatzemi middlewares (funcions).

class Middleware {
    constructor(funcions) {
        this.funcions = [];
    }
    pasarNumeros(numeros){
        this.numeros = [];
    }
    use(fn) {
        this.funcions.push(fn);
    }
}

module.exports = Middleware;