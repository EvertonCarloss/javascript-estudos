/* OBJETOS - Conjunto de variáveis e funções, que são chamadas de propriedades e métodos.*/

let pessoa = {
  nome: 'Everton',
  idade: 28,
  profissao: 'Desenvolvedor Front-End Junior',
  possuiFaculdade: true,
};
// Saída;
pessoa.nome; // Acessa o objeto e depois pega o que estiver dentro de nome.
pessoa.possuiFaculdade;
// Propriedades e métodos consistem em nome (chave) e valor;

/* MÉTODOS - É uma propriedade que possui uma função no local do seu valor. */
let quadrado = {
  lados: 4,
  area: function (lado) {
    return lado * lado;
  },
  petimetro: function (lado) {
    // Acessa a variável da função acima;
    return this.lados * lado;
  },
};

// Saída;
quadrado.lados; // 4;
// Chamando o objeto passando um valor para o parametro lado;
quadrado.area(5); //25
quadrado.petimetro(5); //20

// Abreviação de "area: function() {} para area(){}, no ES6+"
let quadradoDois = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  },
};

/* ORGANIZAR O CÓDIGO - Objetos servem para organizar o código em pequenas partes reutilizáveis. */
Math.PI; // 3.14;
Math.random(); // Gera varios números aleatorios de 0 a 1;

let pi = Math.PI;
console.log(pi); // 3.14;

// Math é um objeto nativo de Javascript. Já percebeu que console é um objeto e log() é um método?

// CRIAR UM OBJETO - Um objeto é criado utilizando as chaves {}
let carro = {};
let pessoa = {};

console.log(typeof carro); // Objeto;

/* DOT NOTATION GET - Acesse propriedades de um objeto utilizando o ponto "." */
let menu = {
  width: 800,
  heigth: 50,
  backgroundColor: '#E4E',
};

// Atribuindo o valor de backgroundColor a outra variavel;
let bg = menu.backgroundColor; // "E4E"

/* DOT NOTATION SET - Substitua o valor de uma propriedade utilizando o "." e o "=" após o nome da mesma */
let menuDois = {
  width: 800,
  heigth: 50,
  backgroundColor: '#E7E',
};

menuDois.backgroundColor = '#000';
console.log(menu.backgroundColor); // "#000"

/* ADICIONAR PROPRIEDADE E MÉTODOS - Basta adicionar um novo nome e definir o valor */
let menuTres = {
  width: 700,
};
// Vai adiconar essas duas propriedades novas dentro do objeto menuTres
menu.heigth = 60;
menu.position = 'fixed';

/* PALAVRA CHAVE THIS - This irá fazer uma referência ao próprio objeto */
let heigthDois = 120;
let menuQuatro = {
  width: 500,
  heigth: 40,
  metadeHeigth() {
    // Acessando o heigth do objeto.
    return this.heigth / 2;
  },
};

// Saída;
menu.metadeHeigth(); //25
// Sem o this , seria 60 por conta do heigthDois = 120 declarado fora do objeto;
// This irá retornar o próprio objeto

// PROTÓTIPO E HERANÇA - O objeto herda propriedades e métodos do objeto que foi utilizado para criar o mesmo;
let menuQuatro = {
  width: 200,
};

// Método que verifica se existe a propriedade dentro do objeto;
menu.hasOwnProperty('width'); // Retornar true, por que existe, caso contrario retornaria false. Sempre irá retornar um valor booleano;
menu.hasOwnProperty('heigth'); // Retornará false, por que não existe dentro do objeto;
