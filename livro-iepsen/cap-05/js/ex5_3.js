//  Declara a variável num com let, pois ela pode ser alterada e será acessada fora do bloco;
let num;

// Repetição faça;
do {
  // Lê o número;
  num = Number(prompt('Número: '));
  // Se num=0 ou é inválido;
  if (num === 0 || isNaN(num)) {
    alert('Digite um número válido...');
  }
} while (num == 0 || isNaN(num));
// String que irá conter a resposta;
let pares = `Pares entre 1 e ${num}:`;
for (let i = 2; i <= num; i + 2) {
  pares = pares + i + ',';
}
// Exibe lista dos números;
alert(pares);
