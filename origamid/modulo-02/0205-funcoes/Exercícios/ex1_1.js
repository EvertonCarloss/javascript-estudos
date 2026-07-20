/* Exercício 1: Crie uma função chamada calcularDesconto que recebe o preço de um produto e o percentual de desconto. Ela deve retornar o preço final com desconto aplicado. Exibe o resultado no DOM.*/

// Acessando o form;
const form = document.querySelector('form');
// Saída;
const saidaResultado = document.querySelector('#resultado');
const preco = document.querySelector('#valorProduto');
const porcento = document.querySelector('#porcentagem');

// Função;
function calcularDesconto(precoProduto, percentualDesconto) {
  let precoDesconto = precoProduto * (percentualDesconto / 100);
  return precoProduto - precoDesconto;
}

form.addEventListener('submit', (e) => {
  // Evita o recarregamento da página
  e.preventDefault();

  // Dom acessando fora da função;
  const precoProduto = Number(form.inValor.value);
  const percentualDesconto = Number(form.inPercetual.value);

  //  Função recebe os valores como argumentos;
  const precoFinal = calcularDesconto(precoProduto, percentualDesconto);

  // Saída;
  preco.innerText = `Valor Produto R$ ${precoProduto.toFixed(2)}`;
  porcento.innerText = `Desconto de ${percentualDesconto}%`;
  saidaResultado.innerText = `O valor final com desconto é de R$ ${precoFinal.toFixed(2)}`;
});
