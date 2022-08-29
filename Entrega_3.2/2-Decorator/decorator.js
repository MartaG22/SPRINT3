const fs = require("fs");
const readDivises = fs.readFileSync("./divises.json");
const taulaFactorsConversio = JSON.parse(readDivises);


function conversioDivisa(producte) {
    let divisaInicial = "";
    let conversioDivisaInical = "";
    let factorConversio = 0;
    let conversioPreuEUR = 0;

    divisaInicial = producte.divisa;
    conversioDivisaInical = divisaInicial + "_EUR";
    const preuDivisaInicial = producte.preu;

    factorConversio = taulaFactorsConversio[conversioDivisaInical];
    conversioPreuEUR = (producte.preu * factorConversio).toFixed(2);

    console.log(`Coversió de ${divisaInicial} a EUR:`);
    console.log(`\n El producte: ${producte.nomProducte} amb un preu de ${preuDivisaInicial} ${divisaInicial} costarà ${conversioPreuEUR} EUR\n`);
};



module.exports = conversioDivisa;