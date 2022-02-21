const { calculateNumberOfPizzas } = require("./pizzaCalculator");

/**
 * 😄 = Esse é o início do nosso TDD
 */
describe(`Pizza Calculator`, () => {
  it(`Calculates based on the orders and menu`, () => {
    /**
     * 😄 =Isso é um mapa ou dicionario.
     * chave = valor.
     * Chave = margherita, Valor {  name: "Margherita", price: 9 }
     * Com isso, chave name , valor "Margherita"
     */
    const menu = {
      margherita: { name: "Margherita", price: 9 },
      mushroomAndHam: { name: "Regina", price: 11 },
      veggie: { name: "Vegetariana", price: 13 },
    };
    const orders = [
      {
        flavor: "margherita",
        quantity: 2,
      },
      {
        flavor: "margherita",
        quantity: 3,
      },
      {
        flavor: "mushroomAndHam",
        quantity: 5,
      },
      {
        flavor: "margherita",
        quantity: 7,
      },
    ];

    expect(calculateNumberOfPizzas(menu, orders)).toEqual({
      margherita: Math.ceil(12 / 8) * menu.margherita.price,
      mushroomAndHam: Math.ceil(5 / 8) * menu.mushroomAndHam.price,
    });
  });
});

/**
 * ÁREA DE NOTAS EM GERAL
 */
/**
 * 😄 = Isso é uma arrow function.
 */
// () => {}
