/* ESCOPO DE FUNÇÃO - Variáveis declaradas dentro de funções não são acessadas fora das mesmas.  */
function mostrarCarro() {
  let carro = 'Fusca';
  console.log(carro);
}

// Saída;
mostrarCarro(); // Fusca no console.
// console.log(carro); // Erro, carro is not defined;

// Escopo evita o conflito entre nomes.

/* VARIÁVEL GLOBAL(ERRO) - Declarar variáveis sem a palavra chave var, const ou let, cria uma variável que pode ser acessar em qualquer escopo (global). Isso é um erro! */

function mostrarMoto() {
  moto = 'Fazer 150';
  console.log(moto);
}

mostrarMoto(); // Fazer 150;
// console.log(moto); // Erro, moto is not defined

// Previnir o erro de não definir uma variável sem declarar com var, let ou const. Utilizamos o metodo "use strict"

/* ESCOPO DE FUNÇÃO(PAI) - Variáveis declaradas no escopo pai da função, conseguem ser acessadas pelas funções. */
let bicicleta = 'Caloi';

function mostrarBicicleta() {
  let frase = `Minha bicicleta é uma ${bicicleta}`;
  console.log(frase);
}

mostrarBicicleta();
console.log(bicicleta);

/* ESCOPO DE BLOCO - Variáveis criadas com var, vazam o bloco. Por isso com a introdução do ES6 a melhor forma de declararmos uma variável é utilizando const e let, pois estas respeitam o escopo de bloco. */

if (true) {
  var objeto = 'Faca';
  console.log(objeto);
}
console.log(objeto);

// Var vaza o bloco mesmo a condição sendo false.

/* CONST E LET NO LUGAR DE VAR - A partir de agora vamos utilizar apenas const e let para declararmos variáveis. */

/* CRIA UM BLOCO - Chaves {} Criam um escopo de bloco, não confundir com a criação de objetos.*/
{
  var caminhao = 'Carga';
  const ano = 2026;
}

console.log(caminhao); // Saída normal, por que o var vaza, mas o const não. Então só irá sair o caminhão.

/* FOR LOOP - Ao utilizaar var dentro de um for loop, que é um bloco, o valor da variável utilizada irá VAZAR e existir fora do loop. */

let i;
for (let i = 0; i < 10; i++) {
  console.log(`Número: ${i}`);
}
console.log(i); // not is not defined;

/* CONST - Mantém o escopo no bloco, impede a redeclaração e impede a modificação do valor da variável, evitando bugs no código. */

const mes = 'Dezembro';
// mes = 'Janeiro'; // Erro, tentou modificar o valor;
// const semana; // Erro, declarou sem valor;
const data = {
  dia: 28,
  mes: 'Dezembro',
  ano: 2026,
};

console.log((data.dia = 29));
// data = 'Janeiro'; // Erro

/* LET - Mantém o escopo no bloco, impede a redeclaração, mas permite a modificação do valor da variável. */
let anoNascimento;
anoNascimento = 2026;
anoNascimento++;
console.log(anoNascimento);

// let anoNascimento = 2020; // Erro, redeclarou a variável.

// ------------------------------------------------------------------------------------------------

// EXERCÍCIOS

// 1 - Por qual motivo o código abaixo retona com erro?
{
  var cor = 'Preto';
  const marca = 'Fiat';
  let portas = 4;
}

// console.log(var, marca, portas);

// Resposta: por que inseriu uma var ao inver do nome da variável.

// 2 - Como corrigir o erro abaixo?

const dois = 2;
function somarDois(x) {
  return x + dois;
}

function dividirDois(x) {
  return x + dois;
}

console.log(somarDois(4));
console.log(dividirDois(6));

// resposta: Apenas colocando a variável local para global.

//  3 - O que fazer para total retornar 500?
const numero = 50;

for (let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);

// Resposta: Inseri a multiplicação por 5 na saída;
