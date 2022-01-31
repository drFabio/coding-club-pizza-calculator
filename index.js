/**
 * Opa tudo bom?
 * Tomei a liberdade de anotar o código:
 * 🧐 = Pode ignorar se quiser, é sofisticado
 * 😄 = Informação
 * 👀 = dica importante para lição de casa
 */

/**
 * 😄 = Aqui é onde a memória do sistema fica,
 * Pense nisso como a conta
 */
const orderState = {
  total: 0,
  flavorQuantityMap: {},
};
/**
 * 😄 = Esse é nosso carápio
 */
const flavorMap = {
  margherita: { name: "Margherita", price: 9 },
  mushroomAndHam: { name: "Regina", price: 11 },
  veggie: { name: "Vegetariana", price: 13 },
};

/**
 * 😄 = Quando o botao de adicionar é clicado isso é o que acontece
 */
function handlePizzaForm(event) {
  /**
   * 🧐 = pausa a submissao do formulario para alguma página
   * permitindo que a gente modifique.
   *
   */
  event.preventDefault();
  /**
   *  🧐 = Constrói um formulário que eu possa manipular
   */
  const formData = new FormData(event.target);

  /**
   * 😄 = Para inspecionar o que está acontecendo,
   * Lembre-se que no console do navegador tudo que é escrito aqui
   * Vai aparecer lá
   */
  console.log(`===============================`);
  console.log({
    flavor: formData.get("flavors"),
    flavorQuantity: formData.get("flavorQuantity"),
  });
  console.log(`===============================`);

  /**
   * 😄 = Com o valor do formulário que é texto, a gente transforma para número
   * Isso é o campo cujo o name é flavorQuantity.
   * Tente achá-lo no html
   */
  const quantity = parseInt(formData.get("flavorQuantity")) || 1;
  /**
   * 😄 = Isso é o campo cujo o name é flavors.
   * Tente achá-lo no html
   */
  const flavor = formData.get("flavors");

  /**
   * 😄 = Acha o elemento cujo á propriedade id é sliceList
   * Tente achá-lo no html
   */
  const targetList = document.querySelector("#sliceList");
  /**
   * 😄 = Cria dinamicamente uma tag <li />
   * Para cada pedido de sabor nós vamos precisar de uma nova
   */
  const listItem = document.createElement("li");
  /**
   * 😄 = Coloca o valor do texto da tag para ser algo como
   * 10 margherita
   */
  listItem.innerText = quantity + " " + flavorMap[flavor].name + " ";
  /**
   * 😄 = Efetivamente adiciona a nova tag <li />.
   * Pense nisso como preparar um prato na cozinha e finalmente entregar ele À mesa
   * se nunca chamássemos appendChild o conteúdo nunca apareceria na tela
   */
  targetList.appendChild(listItem);

  /**
   * 🧐 = Invoca a funcao updateSlice, nao se preocupe com isso por hora
   */
  updateSlice(flavor, quantity);
  /**
   * 🧐 = Invoca a funcao updateSummary, nao se preocupe com isso por hora
   */
  updateSummary();
}
/**
 * Gerencia o estado do pedido
 * @param {*} flavor
 * @param {*} quantity
 */
function updateSlice(flavor, quantity) {
  /**
   * 🧐 = pegamos o valor flavorQuantityMap, não se preocupe mto com isso por hora
   */
  const { flavorQuantityMap } = orderState;

  /**
   * 😄 = Caso o valor não exista iniciamos com 0
   */
  if (!flavorQuantityMap[flavor]) {
    flavorQuantityMap[flavor] = 0;
  }

  /**
   * 😄 = Somamos o valor que tinhamos com o que foi recém adicionao
   */
  flavorQuantityMap[flavor] += quantity;
  /**
   * 🧐 = Loopa por todos os valore para atualizar o total
   * Não se preocupe mto com isso por hora
   */
  orderState.total = Object.entries(flavorQuantityMap).reduce(
    (previousSum, [key, quantity]) => {
      /**
       * 👀 = Essa parte é a quantidade de pizzas
       * A gente parece precisar utilizar isso com frequencia
       */
      const quantityOfPizzas = Math.ceil(quantity / 8);
      return previousSum + quantityOfPizzas * flavorMap[key].price;
    },
    0
  );

  /**
   *  😄 = É sempre bom ver o que está acontecendo na "cabeca" da máquina.
   * Lembre-se de checar o console com frequencia
   **/
  console.log(`~~~~~~~~~~~~~ Order state atual ~~~~~~~~~~~~~`);
  console.log(JSON.stringify(orderState));
  console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~`);
}

/**
 * Atualiza o resumo de pizzas
 */
function updateSummary() {
  /**
   * 😄 = Adiciona o valor total com o euro grudado no elemento cujo id é total
   * Tente achá-lo no html
   */
  document.getElementById("total").innerText = orderState.total + " €";

  /**
   * 😄 = Procura o elemento com id de slicesSummary.
   * Tente achá-lo no HTML
   */
  const targetList = document.getElementById("slicesSummary");
  /**
   * 😄 = Limpa o sumário anterior, remove todo o conteúdo
   */
  targetList.innerHTML = "";

  /**
   * 🧐 = Loopa por todos os valore para a
   * Não se preocupe mto com isso por hora
   */
  Object.entries(orderState.flavorQuantityMap).forEach(([flavor, quantity]) => {
    /**
     * 😄 = à partir daqui estou em um unico pedaco de pizza
     */

    /**
     * 😄 = Da pizza atual, lemos o valor do preco no "cardápio"
     */
    const priceOfCurrentFlavor = flavorMap[flavor].price;
    /**
     * 😄 = Da pizza atual, lemos o valor do nome da pizaa no "cardápio"
     */
    const nameOfCurrentFlavor = flavorMap[flavor].name;

    /**
     * 😄 = Calculamos dado o número de fatias quantas pizzas precisaríamos
     */
    const quantityOfPizzas = Math.ceil(quantity / 8);

    /**
     * 😄 = Cheque esses valores no console.
     * Um texto parecido deve aparecer para cada sabor
     */
    console.log("-----------------------");
    console.log("Preco do pedaco atual " + priceOfCurrentFlavor);
    console.log("Nome do pedaco atual " + nameOfCurrentFlavor);
    console.log("Quantidade de pedacos " + quantity);
    console.log("Quantidade de pizzas " + quantityOfPizzas);

    /**
     * 😄 = Cria-se um novo list item (li)
     */
    const listItem = document.createElement("li");

    /**
     * 😄 = "Colocamos o valor como 2 margheritas por 20 €"
     * Por exemplo
     */
    listItem.innerText =
      quantityOfPizzas +
      " " +
      nameOfCurrentFlavor +
      " por " +
      priceOfCurrentFlavor * quantityOfPizzas +
      " €";

    /**
     * 😄 = Addicionamos a lista de forma à imprimir na tela
     */
    targetList.appendChild(listItem);
  });
}
