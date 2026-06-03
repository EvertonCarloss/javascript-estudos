// Cria referência ao form e ao elemento h3 (Onde será exibido a resposta)
const frm = document.querySelector('form');
const resp = document.querySelector('h3');

// Cria um "Ouvinte" de evento, acionando quando o botão submit for clicado
frm.addEventListener('submit', (e) => {
  // Obtém o nome digitado no form
  const nome = frm.inNome.value;

  // Exibe a resposta do programa
  resp.innerText = `Olá ${nome}`;

  // Evita envio do form
  e.preventDefault();
});

/* Para referênciar um elemento HTML identicado no documento, podemos utilizar os métodos QUERYSELECTOR() ou GETELEMENTBYID(). Esse métodos permitem referenciar qualquer elemento da página.

getElementById() - Ele precisa conter um atributo id. 

Ex: <input type="text" id="inNome">

querySelector() - Ele é mais amplo, permite criar uma referência a um elemento HTML, pela sua tag name, id ou classe.

Ex: 

    const resp = document.querySelector("h3")       // primeiro elemento h3 da página
    const cor = document.querySelector("#inCor")    // elemento com id=inCor
    const lista = document.querySelector(".lista")  // elemento da class=lista


querySelectorAll() - Cria uma lista com todos os elementos que correspondam ao seletor
*/

/* Sintaxe de um evento utilizando arrow function

Ex:

    frm.addEventListener("submit", (e) => { comandos })


A propriedade VALUE - Obtém ou altera o conteúdo de um campo.
A propriedade INNERTEXT - Serve para alterar ou obter o conteúdo de elemento de texto. Pode alterar o texto também.


  Objeto – representa uma instância de uma classe.

  Método – representa uma instrução ou um conjunto de instruções que executam uma tarefa.

  Propriedade – representa uma característica (atributo) de um objeto.


  utilizamos o objeto "document", que a partir da execução do
  método 'querySelector()' pode referenciar as tags form e h3 da página. Já a
  propriedade 'value' é utilizada para obter o conteúdo digitado no campo de
  formulário. A propriedade 'innerText', por sua vez, altera um atributo do
  documento, que faz com que a resposta seja exibida na página.



*/
