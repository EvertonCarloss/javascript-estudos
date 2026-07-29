/*

Exercício 2: Crie um objeto contaBancaria com as propriedades: titular, saldo inicial de R$1000. Adicione três métodos:

depositar(valor) — adiciona valor ao saldo
sacar(valor) — subtrai valor do saldo, mas exibe mensagem de erro se o saldo for insuficiente
verSaldo() — retorna o saldo atual formatado

Crie três botões no HTML — um pra cada operação. Exibe o resultado no DOM.


*/

// Criando o objeto conta bancaria;

const contaBancario = {
  titular: 'Everton Carlos',
  saldo: 1000,

  // Métodos

  depositar(valor) {
    return (this.saldo += valor);
  },
  sacar(valor) {
    if (valor > this.saldo) {
      return `Erro! Saldo insuficiente.`;
    }
    this.saldo -= valor;
    return `Saque de R$: ${valor.toFixed(2)} realizado!`;
  },
  verSaldo() {
    return `Saldo R$: ${this.saldo.toFixed(2)}`;
  },
};

// Acessando os botões;
const btnDepositar = document.querySelector('#btnDepositar');
const btnSacar = document.querySelector('#btnSacar');
const btnSaldo = document.querySelector('#btnSaldo');

// Acessando a saída;
const saidaDeposito = document.querySelector('#saidaDeposito');
const saidaSacar = document.querySelector('#saidaSacar');
const saidaSaldo = document.querySelector('#saidaSaldo');

// Evento ao clicar no botão depositar;
btnDepositar.addEventListener('click', () => {
  // Declarando uma variavel para receber o valor digitado no deposito;
  const valor = Number(document.querySelector('#inDeposito').value);
  // Atualiza o valor;
  contaBancario.depositar(valor);
  // Saída;
  saidaDeposito.innerText = `Deposito de R$: ${valor.toFixed(2)} `;
});

// Evento ao clicar no botão sacar;
btnSacar.addEventListener('click', () => {
  // Declarando uma variável para receber o valor digitado em sacar;
  const valor = Number(document.querySelector('#inSacar').value);
  saidaSacar.innerText = contaBancario.sacar(valor);
});

// Evento ao clicar no botão saldo;
btnSaldo.addEventListener('click', () => {
  // saída do saldo;
  saidaSaldo.innerText = contaBancario.verSaldo();
});
