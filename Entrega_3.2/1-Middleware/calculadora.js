class Calculadora {
    sumar({ a, b }) {
        return a + b;
    };
    restar({ a, b }) {
        return a - b;
    };
    multiplicar({ a, b }) {
        return a * b;
    };
};


module.exports = Calculadora;