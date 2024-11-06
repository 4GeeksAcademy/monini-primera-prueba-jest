
// Tasas de conversión
let oneEuroIs = {
    "JPY": 156.5, // Japan yen
    "USD": 1.07,  // US dollar
    "GBP": 0.87,  // British pound
};

// Declaramos una función con el nombre exacto "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    // Retornamos el valor en dólares
    return valueInDollar;
}

// Función para convertir de dólar a yen
const fromDollarToYen = function(valueInDollar) {
    // Convertimos de USD a EUR
    let valueInEuro = valueInDollar / oneEuroIs.USD; 
    // Luego de EUR a JPY
    let valueInYen = valueInEuro * oneEuroIs.JPY;    
    return valueInYen;
}

// Función para convertir de yen a libra
const fromYenToPound = function(valueInYen) {
    // Convertimos de JPY a EUR
    let valueInEuro = valueInYen / oneEuroIs.JPY; 
    // Luego de EUR a GBP
    let valueInPound = valueInEuro * oneEuroIs.GBP; 
    return valueInPound;
}


// Exporta la función para usarla en otros archivos 
// Tenemos que incluir la función en el exports para que sea exportada a otros archivos como test.js
module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound  }