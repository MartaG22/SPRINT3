// Crea un Decorator en un arxiu que retorni una funció.
// Aquesta funció efectuarà una conversió de moneda a euros multiplicant pel coeficient de conversió del fitxer adjunt currency_conversions.json en funció de la divisa original.
// Crea una petita aplicació que calculi el cost d'uns quants Articles en euros a partir de les seves divises inicials, aplicant diferents conversions que usin el Decorator del punt anterior.



// https://mauriciogc.medium.com/javascript-patrones-de-dise%C3%B1o-en-js-estructurales-parte-ii-79b87905cefe
// https://blog.logrocket.com/understanding-javascript-decorators/#:~:text=A%20decorator%20(also%20known%20as,treated%20as%20first%2Dclass%20citizens.

const Producte = require("./producte.js");
const conversioDivisa = require("./decorator.js")


// let producte = new Producte();

// Creem productes:
let producte1 = new Producte('Portàtil Acer Swift XSFX14', 1099, "USD");
let producte2 = new Producte('Portàtil Apple MacBook Pro 15"', 1049, "GBP");
let producte3 = new Producte('Portàtil Acer Predator Gaming i7 - 15.6"', 186102, "JPY"); //+++
let producte4 = new Producte('Portàtil Lenovo Yoga 7 i7, 15.6"', 1032, "CHF");
let producte5 = new Producte('Portàtil Lenovo Yoga Slim 9 i7, 14"', 2271, "AUD");
let producte6 = new Producte('Portàtil CHUWI HeroBook Pro 14.1"', 1826.95, "CNY"); 
let producte7 = new Producte('Portàtil HP Omen 16 Gaming 16.1" i7', 1749.99, "CAD");
let producte8 = new Producte('Portàtil LG Gram 15Z95P Laptop 15.6"', 71386.11, "RUB"); 


console.log(producte1, producte2);
conversioDivisa(producte3)

