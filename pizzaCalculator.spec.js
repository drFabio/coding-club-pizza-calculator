const { calculateNumberOfPizzas } = require("./pizzaCalculator");

/**
 * 😄 = Esse é o início do nosso TDD
 */
describe(`Pizza Calculator`, () => {
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
  it(`Calculates based on the orders and menu`, () => {
    expect(calculateNumberOfPizzas(menu, orders)).toEqual({
      margherita: (Math.ceil(12 / 8) * menu.margherita.price).toFixed(2),
      mushroomAndHam: (Math.ceil(5 / 8) * menu.mushroomAndHam.price).toFixed(2),
    });
  });
  it(`Calculates the pizza with a percentage of price when in house`, () => {
    expect(
      calculateNumberOfPizzas(menu, orders, { inHousePrice: 0.1 })
    ).toEqual({
      margherita: (Math.ceil(12 / 8) * menu.margherita.price * 1.1).toFixed(2),
      mushroomAndHam: (
        Math.ceil(5 / 8) *
        menu.mushroomAndHam.price *
        1.1
      ).toFixed(2),
    });
    expect(
      calculateNumberOfPizzas(menu, orders, { inHousePrice: 0.15 })
    ).toEqual({
      margherita: (Math.ceil(12 / 8) * menu.margherita.price * 1.15).toFixed(2),
      mushroomAndHam: (
        Math.ceil(5 / 8) *
        menu.mushroomAndHam.price *
        1.15
      ).toFixed(2),
    });
  });
  it.only(`Calculates the pizza the final price with a delivery cost`, () => {
    const deliveryCost = 2.3;
    const margheritaPrice = Math.ceil(12 / 8) * menu.margherita.price + 2.3;
    const mushroomAndHamPrice =
      Math.ceil(5 / 8) * menu.mushroomAndHam.price + 2.3;
    expect(
      calculateNumberOfPizzas(menu, orders, { deliveryCost: 2.3 })
    ).toEqual({
      margherita: margheritaPrice.toFixed(2),
      mushroomAndHam: mushroomAndHamPrice.toFixed(2),
      total: (deliveryCost + margheritaPrice + mushroomAndHamPrice).toFixed(2),
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
