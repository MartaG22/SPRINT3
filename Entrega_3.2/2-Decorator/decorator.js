const fs = require("fs");
const readDivises = fs.readFileSync("./divises.json");
const taulaFactorsConversio = JSON.parse(readDivises);
// const ProducteDecorat = require('./producteDecorat.js')

function conversioDivisa(producte) {
    console.log("producte en DECORATOR:", producte)
    // let divisaInicial = "";
    // let conversioDivisaInical = "";
    // let factorConversio = 0;
    let conversioPreuEUR = 0;

    let divisaInicial = producte.divisa;
    // let conversioDivisaInical = divisaInicial + "_EUR";
    const preuDivisaInicial = producte.preu;

    // factorConversio = taulaFactorsConversio[conversioDivisaInical];
    let factorConversio = taulaFactorsConversio[divisaInicial + "_EUR"];
    conversioPreuEUR = (producte.preu * factorConversio).toFixed(2);
    // new ProducteDecorat(conversioPreuEUR);
    producte.preuEuros = conversioPreuEUR;
    return producte;




    console.log(`Coversió de ${divisaInicial} a EUR:`);
    console.log(`\n El producte: ${producte.nomProducte} amb un preu de ${preuDivisaInicial} ${divisaInicial} costarà ${conversioPreuEUR} EUR\n`);
};



module.exports = conversioDivisa;