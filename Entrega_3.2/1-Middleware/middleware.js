// - Crea en un fitxer extern una classe que emmagatzemi middlewares (funcions).

class Middleware {
    constructor(data) {
        this.data = [];
    }
    use(fn) {
        this.data.push(fn);
    }
}

module.exports = Middleware;