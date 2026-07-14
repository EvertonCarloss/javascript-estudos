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
