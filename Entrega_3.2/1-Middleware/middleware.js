// - Crea en un fitxer extern una classe que emmagatzemi middlewares (funcions).

class Middleware {
    constructor(data) {
        this.middleware = [];
    }
    use(fn) {
        this.middleware.push(fn);
    }
}

module.exports = Middleware;