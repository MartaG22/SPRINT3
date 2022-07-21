// - Crea en un fitxer inicial una petita aplicació que sumi, resti i multipliqui rebent els paràmetres en un JSON.


// https://www.youtube.com/watch?v=Y2FpY61h5Z8

const fs = require('fs');

let data = fs.readFileSync('./personas.json');
// console.log(data);
let personas = JSON.parse(data);
console.log(personas);
console.log(typeof (personas));
