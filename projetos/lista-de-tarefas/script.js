/* PLANO V1

  - DADOS: Array "tarefas"; cada tarefa é um objeto {texto, concluída}
  - FUNÇÕES:
  º adicionarTarefa(texto): guarda a tarefa no array
  º exibirTarefas(): monta a lista na tela a partir do array
  
  - FLUXO AO ENVIAR: impede reload > lê e limpa o texto > valida > adiciona > exibe > limpa input e erro
*/

// Acessando o form e os elementos
const form = document.querySelector('#formTarefa');
const inputTarefa = document.querySelector('#inTarefa');
const saidaErro = document.querySelector('#saidaErro');
const listaTarefas = document.querySelector('#listaTarefas');
const saidaTotal = document.querySelector('#saidaTotal');

// Os dados
const tarefas = [];

// Função que guarda a tarefa
function adicionarTarefa(texto) {
  tarefas.push({ texto: texto, concluida: false });
}

// Função que mostra a lista
function exibirTarefas() {
  listaTarefas.innerHTML = '';

  tarefas.forEach((tarefa) => {
    const li = document.createElement('li');
    li.innerText = tarefa.texto;
    listaTarefas.appendChild(li);
  });

  saidaTotal.innerText = `Total: ${tarefas.length} tarefas`;
}

// Evento onde tudo se conecta
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const texto = inputTarefa.value.trim();

  if (texto === '') {
    saidaErro.innerText = 'Digite uma tarefa antes de adicionar.';
    inputTarefa.focus();
    return;
  }

  adicionarTarefa(texto);
  exibirTarefas();

  inputTarefa.value = '';
  saidaErro.innerText = '';
  inputTarefa.focus();
});
