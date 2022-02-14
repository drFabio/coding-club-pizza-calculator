/**
 * 😄 = A lógica principal da nossa calculadora de pizzas
 *
 * @todo Na próxima etapa precisamos receber uma lista de fatias, nao só um número
 */
function calculateNumberOfPizzas(numberOfSlices) {
  return Math.ceil(numberOfSlices / 8);
}

/**
 *  🧐 = Uma diferenca do navegador e do servidor.
 * O servidor lida com módulos de forma diferente por padrão
 */
module.exports = {
  calculateNumberOfPizzas,
};
