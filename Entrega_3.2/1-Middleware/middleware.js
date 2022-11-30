
class Middleware {
  constructor(object) {
    this.middlewares = []; 
    this.object = object;
    this.req = {};

    //gets object properties
    const proto = Object.getPrototypeOf(this.object);
    const props = Object.getOwnPropertyNames(proto);

    for (let p of props) {
      if (p !== "constructor") {
        this[p] = (args) => {
          this.req = { ...args };
          this.run(0); 
          return proto[p].call(this, this.req); 
        };
      };
    };
  };

  use(fn) {
    this.middlewares.push(fn);
  };

  run(index) {
    if (index < this.middlewares.length) {
      this.middlewares[index].call(this, this.req, () => this.run(index + 1));
    };
  };
}

module.exports = Middleware;
