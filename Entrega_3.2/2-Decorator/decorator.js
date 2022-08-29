const fs = require("fs");
const readDivises = fs.readFileSync("./divises.json");
const taulaFactorsConversio = JSON.parse(readDivises);

// console.log("taula", taulaFactorsConversio)


function conversioDivisa(producte) {
    let divisaInicial = "";
    let conversioDivisaInical = "";
    let factorConversio = 0;
    let conversioPreuEUR = 0;

    divisaInicial = producte.divisa;
    conversioDivisaInical = divisaInicial + "_EUR";
    // console.log("divisa inicial:", conversioDivisaInical);
    // // let coeficientConversio = data.find(divisaInicial);
    // // console.log("coeficient:", coeficientConversio)
    const preuDivisaInicial = producte.preu;
    // console.log("preu:", preuDivisaInicial, ", divisa inicial:", divisaInicial)
    // console.log("producte", producte);


    factorConversio = taulaFactorsConversio[conversioDivisaInical];
    // // let factorConversio =     JSON.parse(conversioDivisaInical)

    // // taulaFactorsConversio

    // console.log("taula", taulaFactorsConversio)
    // console.log("factor:", factorConversio)
    // //Falta ver como encontrar el valor en el JSON para acabar de hacer la conversión!!!
    // console.log("factor conversió:", factorConversio);
    conversioPreuEUR = (producte.preu * factorConversio).toFixed(2);
    // console.log("conversio preu:", conversioPreuEUR)
    // number.toLocaleString()
    console.log(`Coversió de ${divisaInicial} a EUR:`);

    console.log(`\n El producte: ${producte.nomProducte} amb un preu de ${preuDivisaInicial} ${divisaInicial} costarà ${conversioPreuEUR} EUR\n`);


};



module.exports = conversioDivisa;