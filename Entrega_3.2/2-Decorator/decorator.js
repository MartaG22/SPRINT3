// const data = require("./divises.json")
const fs = require("fs");
// const taulaFactorsConversio = JSON.parse(fs.data);
// console.log("taula", taulaFactorsConversio)
// (__dirname + "/currency_conversions.json"));


let readDivises = fs.readFileSync("./divises.json");
let taulaFactorsConversio = JSON.parse(readDivises);
// console.log(taulaFactorsConversio);
console.log("taula", taulaFactorsConversio)


// let taulaFactorsConversio = JSON.parse(fs.readFileSync(data, 'utf8'));
function conversioDivisa(producte) {


    let divisaInicial = producte.divisa;
    let conversioDivisaInical = divisaInicial + "_EUR";
    console.log("divisa inicial:", conversioDivisaInical);
    // let coeficientConversio = data.find(divisaInicial);
    // console.log("coeficient:", coeficientConversio)
    const preuDivisaInicial = producte.preu;
    console.log("preu:", preuDivisaInicial, ", divisa inicial:", divisaInicial)
    console.log("producte", producte);


    let factorConversio = taulaFactorsConversio[conversioDivisaInical];
    // let factorConversio =     JSON.parse(conversioDivisaInical)

    // taulaFactorsConversio

    console.log("taula", taulaFactorsConversio)
    console.log("factor:", factorConversio)
    //Falta ver como encontrar el valor en el JSON para acabar de hacer la conversión!!!
    console.log("factor conversió:", factorConversio);
    let conversioPreuEUR = (preuDivisaInicial * factorConversio).toFixed(2);
    console.log("conversio preu:", conversioPreuEUR)
};



module.exports = conversioDivisa;