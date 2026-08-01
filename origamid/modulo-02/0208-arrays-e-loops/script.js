/* Arrays e Loops - 

Array - É um grupo de valores geralmente relacionados. Servem para guardarmos diferentes valores em uma única variável.

*/

let videoGames = ['Switch', 'PS5', 'X-box'];

// Comando para saída;
videoGames[0]; // Saida = Switch. Se tratando de array, o primeiro valor começa por 0. Ex: 0,1,2,3;
videoGames[2]; // X-box
//  Acesse um elemento da array utilizando [n];

/* Métodos e propriedades de uma array */

// Remove o último item e retorna ele.
videoGames.pop();

// Adiciona ao final do array;
videoGames.push('PS6');

// Verifica quantos objetos tem dentro da array;
videoGames.length; // 3

// For Loop - Fazem algo repetidamente até que uma condição seja atingida;
for (let numero = 0; numero < 10; numero++) {
  console.log(numero);
}
// O for loop possui 3 partes, Inicio, condição e incremento;

// While Loop
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
// O For loop é o mais comum;

// Arrays e loops;
let games = ['Notebook', 'Celular', 'Tablet', 'Computador'];
for (let i = 0; i < games.length; i++) {
  console.log(games[i]);
}

// Break - O loop irá parar caso encontre a palavra break;
let gamesDois = ['Notebook', 'Celular', 'Tablet', 'Computador'];
for (let i = 0; i < gamesDois.length; i++) {
  console.log(gamesDois[i]);
  if (gamesDois[i] === 'Tablet');
  break;
}

// ForEach - è um método que executa uma função para cada item da array. É uma forma mais simples de utilizarmos um loop com arrays(ou array-like);
let loop = ['Infinito', 'Além'];
loop.forEach(function (item) {
  console.log(item);
});
// Podemos passar os seguintes parâmetros: Item, index e array;

// Não se confunda com a sintaxe;
var numero = 0;
var maximo = 50;
for (; numero < maximo; ) {
  console.log(numero);
  numero++;
}

// EXERCÍCIO;

// 1 - Crie uma array com os anos que o brasil ganhou a Copa;
let copaBrasil = [1959, 1962, 1994, 2002];

// 2 -Interaja com a array utilizando um loop, para mostrar no console a segunte mensagem "O Brasil ganhou a copa de ${ano}"
for (let i = 0; i < copaBrasil.length; i++) {
  console.log(`O brasil ganhou a copa de ${copaBrasil[i]}`);
}

// 3 - Interaja com um loop nas frutas abaixo e pare ao chegar em Pera;
let frutas = ['Banana', 'Maça', 'Pera', 'Uva', 'Melância'];
for (let i = 0; i < frutas.length; i++) {
  console.log(`${frutas[i]}`);
  if (frutas[i] === 'Pera') {
    break;
  }
}

// 4 - Coloque a última fruta da array acima em uma variável, sem remover a mesma array.
let ultimaFruta = frutas[4];
