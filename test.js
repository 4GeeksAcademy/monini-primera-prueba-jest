const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// Prueba para convertir de euro a dólar
test("One euro should be 1.07 dollars", () => {
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(dollars).toBeCloseTo(3.745);
});

// Prueba para convertir de dólar a yen
test("One dollar should be approximately 146.26 yen", () => {
    const yen = fromDollarToYen(1);
    const expected = (1 / 1.07) * 156.5;
    expect(yen).toBeCloseTo(expected); 
});

// Prueba para convertir de Yen a Libra
test("One yen should be approximately 0.00556 pounds", () => {
    const pounds = fromYenToPound(1);
    const expected = (1 / 156.5) * 0.87;
    expect(pounds).toBeCloseTo(expected);  
});