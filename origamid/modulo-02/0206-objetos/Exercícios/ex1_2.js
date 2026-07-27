/* 

Exercício 1: Crie um objeto carro com as propriedades: marca, modelo, ano e cor. Adicione um método descricao() que retorna uma frase com todas as informações. Exibe no DOM ao clicar num botão. 

*/

// Objeto carro;
const carro = {
  marca: 'BMW',
  modelo: 'Série 3',
  ano: 2026,
  cor: 'Azul Fosco',
  descricao() {
    return ` Marca: ${this.marca}\nModelo: ${this.modelo}\nAno: ${this.ano}\nCor: ${this.cor}`;
  },
};

// Acessando o botão;
const botao = document.querySelector('input[type="submit"]');
// Saída das informações;
const saidaInformacoes = document.querySelector('#saida');

// Criando evento ao ser clicado;
botao.addEventListener('click', () => {
  // Saída das informações.
  saidaInformacoes.innerText = carro.descricao();
});
