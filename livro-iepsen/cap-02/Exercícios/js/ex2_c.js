/* Um supermercado está com uma promoção – Para aumentar
suas vendas no setor de higiene, cada etiqueta de produto deve exibir
uma mensagem anunciando 50% de desconto (para um item) na compra
de três unidades do produto. Elaborar um programa que leia descrição e
preço de um produto. Após, apresente as mensagens indicando a
promoção */

// Referência aos elementos
const form = document.querySelector('form');
const produto = document.querySelector('#inProduto');
const preco = document.querySelector('#inPreco');
const saidaPromocao = document.querySelector('#inPromocao');
const saidaDesconto = document.querySelector('#inDesconto');

// Ouvinte;
form.addEventListener('submit', (e) => {
  // Entrada;
  const nomeProduto = produto.value;
  const precoProduto = parseFloat(preco.value);

  // Processamento;
  const precoComDesconto = precoProduto * 0.5;
  const valorTresProdutos = precoProduto * 2 + precoComDesconto;

  // Saída;
  saidaPromocao.innerText = `${nomeProduto} - Promoção: Leve 3 por R$: ${valorTresProdutos.toFixed(2)}`;
  saidaDesconto.innerText = `O 3º produto custa apenas R$: ${precoComDesconto.toFixed(2)}`;

  // Evita reload;
  e.preventDefault();
});
