/* Funções: Bloco de código que pode ser executado e reutilizado. */

// Declaração de um função com parametro;
function areaQuadrado(lado) {
  return lado * lado;
}
// Ativar Função;
areaQuadrado();

// Para executarmos uma função utilizamos os parenteses;
function pi() {
  return 3.14;
}
let total = 5 * pi();

/* Parâmetros e Argumentos;

Ao criar uma função, você pode definir parâmetros.
Ao executar uma função, você pode passar argumentos.

*/

// Peso e altura são os parâmetros;
function imc(peso, altura) {
  let imc = peso / (altura * altura);
  return imc;
}
imc();
// Separar por virgula cada parâmetro. Você pode definir mais de um parâmetro ou nenhum também.

/* Parênteses executa a função */
function corFavorita(cor) {
  if (cor === 'azul') {
    return 'Você gosta do céu!';
  } else if (cor === 'verde') {
    return 'Você gosta de correr';
  } else {
    return 'Você não gosta de nada!';
  }
}
corFavorita(); // Retorna "Você não gosta de nada"

/* Argumentos podem ser funções*/
// Chamadas de CALLBACK, geralmente são funções que ocorrem após algum evento.
addEventListener('click', function () {
  console.log('Clicou');
});
// A função possui dois argumentos;
// Primeiro é a string "click";
// Segundo é uma função anônima;

/* Funções anônimas são aquelas em que o nome da função não é definido, escritas como "function(){} ou ()=> {}" */

/*
Pode ou não retornar um valor;

Quando não definimos o return, ela irá retornar undefined. O código interno da função é executado normalmente, independente de existir valor de return ou não;

*/

function imcDois(peso, altura) {
  const imc = peso / altura ** 2;
  console.log(imc);
}
imcDois(80, 1.8); // Retorna o imc;
console.log(imcDois(80, 1.8)); // Retorna o imc e undefined;

/* VALORES RETORNADOS - Uma função pode retornar qualquer tipo de dado e até outras funções */

function terceiraIdade(idade) {
  if (typeof idade !== 'number') {
    return `Informe a sua idade`;
  } else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}
// Cuidado, retornar diferentes tipos de dados na mesma função não é uma boa ideia.

/* ESCOPO - Variáveis e funções definidas dentro de um bloco {}, não são visíveis fora dela*/

function precisoVisitar(paisesVisitados) {
  let totalPaises = 193;
  return `Ainda falta visitar ${totalPaises - paisesVisitados} paises para visitar`;
}
// console.log(totalPaises); // Erro, totalPaises não foi definido;

/* ESCOPO LÉXICO - Funções conseguem acessar variáveis que foram criadas no contexto PAI */

let profissao = 'Designer';

function dados() {
  let nome = 'Everton';
  let idade = 28;
  function outrosDados() {
    let endereco = 'Rio de Janeiro';
    let idade = 30;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

console.log(dados()); // Retorna "Everton, 29, Rio de Janeiro, Designer"
// outrosDados(); // Retorna um erro

/* HOISTING -  Antes de executar uma função, o JS "Move" todas as funções declaradas para a memória */

imcTres(100, 1.8);

function imcTres(peso, altura) {
  const imc = peso / altura ** 2;
  console.log(imc);
}
