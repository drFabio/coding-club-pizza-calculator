/**
 * 😄 = A lógica principal da nossa calculadora de pizzas
 *
 * @todo Na próxima etapa precisamos receber uma lista de fatias, nao só um número
 */
function calculateNumberOfPizzas(pizzaMenu, peopleOrders, costs = {}) {
  const slicesMap = {};
  /**
   * 😄 = Essa é a taxa fixa do entregador
   */
  const deliveryCost = costs.deliveryCost || 0;

  const inHousePrice = costs.inHousePrice || 0;

  /**
   *  🧐 = É um loop de todos os menus
   */
  for (const currentOrder of peopleOrders) {
    const currentFlavor = currentOrder.flavor;
    const slices = currentOrder.quantity;
    if (!slicesMap[currentFlavor]) {
      slicesMap[currentFlavor] = 0;
    }
    slicesMap[currentFlavor] += slices;
  }
  const bill = {};
  /**
   *  🧐 = Uma outra forma de fazer um loop , dessa vez em um
   * dicionário
   */
  Object.keys(slicesMap).forEach((flavor) => {
    const sumOfSlices = slicesMap[flavor];
    const numberOfPizzas = Math.ceil(sumOfSlices / 8);
    bill[flavor] = (
      numberOfPizzas * pizzaMenu[flavor].price * (1 + inHousePrice) +
      deliveryCost
    ).toFixed(2);
  });
  return bill;
}

/**
 *  🧐 = Uma diferenca do navegador e do servidor.
 * O servidor lida com módulos de forma diferente por padrão
 */
module.exports = {
  calculateNumberOfPizzas,
};
