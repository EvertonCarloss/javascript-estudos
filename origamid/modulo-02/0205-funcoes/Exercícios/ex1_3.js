/* Exercício 3: Crie uma função chamada calcularIdade que recebe o ano de nascimento como parâmetro e retorna a idade da pessoa. Depois crie uma segunda função chamada classificarIdade que recebe a idade e retorna a classificação:

Menos de 12 → Criança
12 a 17 → Adolescente
18 a 59 → Adulto
60 ou mais → Idoso

Exibe a idade e a classificação no DOM. Usa o ano atual fixo no código (2026).*/

// Variável global contendo o atual ano;
const anoAtual = 2026;

// Função CalcularIdade;
function calcularIdade(anoNascimento) {
  return anoAtual - anoNascimento;
}

// Função ClassificarIdade;
function classificarIdade(idade) {
  if (idade < 12) {
    return `Criança!`;
  } else if (idade >= 12 && idade <= 17) {
    return `Adolescente!`;
  } else if (idade >= 18 && idade <= 59) {
    return `Adulto!`;
  } else {
    return `Idoso!`;
  }
}

// Acessando o form;
const form = document.querySelector('form');
// Saída Resultado;
const saidaAnoNascimento = document.querySelector('#anoNascido');
const idadeSaida = document.querySelector('#saidaIdade');

// Evento ao ser clicado;
form.addEventListener('submit', (e) => {
  // Carregamento da página;
  e.preventDefault();

  // Entrada;
  let anoNascido = Number(form.inAno.value);

  // Dom recebendo os dados;
  const ano = calcularIdade(anoNascido);
  const saidaFinal = classificarIdade(ano);

  // Saída texto;
  saidaAnoNascimento.innerText = `Você nasceu em ${anoNascido}`;
  idadeSaida.innerText = `E tem ${ano} anos.\n\nVocê é ${saidaFinal}`;
});
