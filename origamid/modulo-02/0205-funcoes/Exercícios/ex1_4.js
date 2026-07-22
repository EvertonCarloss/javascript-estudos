/*  Exercício 4: Crie uma função chamada calcularFrete que recebe o valor da compra e o estado de destino como parâmetros. Retorna o valor do frete baseado nas regras abaixo:

Compras acima de R$200 → frete grátis (qualquer estado)
SP → R$15,00
RJ → R$20,00
MG → R$25,00
Outros estados → R$50,00

Exibe o valor da compra, o frete e o valor total no DOM.*/

// Função que calcula o frete;
function calcularFrete(valorCompra, estadoDestino) {
  // Frete grátis acima de R$200,00.
  if (valorCompra > 200) return 0;

  // Caso contrário, verifica o estado;
  switch (estadoDestino) {
    case 'SP':
      return 15;
    case 'RJ':
      return 20;
    case 'MG':
      return 25;
    default:
      return 50;
  }
}

// Acessando o form;
const form = document.querySelector('form');
// Saída informando o valor da compra e o frete;
const saidaCompra = document.querySelector('#valorCompra');
const saidaFrete = document.querySelector('#saidaFrete');

// Evento ao ser clicado;
form.addEventListener('submit', (e) => {
  // Evitar carregamento da página;
  e.preventDefault();

  // Entrada de dados;
  let compraValor = Number(form.inValor.value);
  let escolhaEstado = form.inEstado.value;

  // Dom recebendo os valores e calculando o total;
  const frete = calcularFrete(compraValor, escolhaEstado);
  const total = compraValor + frete;

  // Saída;
  saidaCompra.innerText = `Valor da Compra: R$: ${compraValor.toFixed(2)}`;

  if (frete === 0) {
    saidaFrete.innerText = `Frete grátis! Total: R$: ${total.toFixed(2)}`;
  } else {
    saidaFrete.innerText = `Frete R$: ${frete.toFixed(2)} | Total R$: ${total.toFixed(2)}`;
  }
});
