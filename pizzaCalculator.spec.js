const { calculateNumberOfPizzas } = require("./pizzaCalculator");

/**
 * 😄 = Esse é o início do nosso TDD
 */
describe(`Pizza Calculator`, () => {
  it(`Calculates the pizza rounded up to 8 slices`, () => {
    expect(calculateNumberOfPizzas(4)).toBe(1);
    expect(calculateNumberOfPizzas(9)).toBe(2);
  });
});

/**
 * ÁREA DE NOTAS EM GERAL
 */
/**
 * 😄 = Isso é uma arrow function.
 */
// () => {}
