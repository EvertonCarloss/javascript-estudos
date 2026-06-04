// Cria referência com os elementos
const form = document.querySelector('form');
const saidaUm = document.querySelector('#inPromocao');
const saidaDois = document.querySelector('#inValorPromocao');

// Criando um ouvinte;
form.addEventListener('submit', (e) => {
  //  Variável que irá receber o que for digitado em medicamento;
  const medicamento = form.inMedicamento.value;
  const preco = Number(form.inPreco.value);

  // Processamento da promoção;
  const precoUnitario = preco;
  const precoDoisItens = precoUnitario * 2;
  // Aqui utilizamos a função Math.floor para arrendondar o número para baixo, então já desconta os centavos.
  const valorTotal = Math.floor(precoDoisItens);

  // Saída
  saidaUm.innerText = `Promoção de ${medicamento}`;
  saidaDois.innerText = `Leve 2 por apenas R$: ${valorTotal.toFixed(2)}`;

  // Tirando o reload da página
  e.preventDefault();
});
