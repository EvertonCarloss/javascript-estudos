// Referência ao form e elementos;
const form = document.querySelector('form');
const resposta1 = document.querySelector('#outResp1');
const resposta2 = document.querySelector('#outResp2');
const resposta3 = document.querySelector('#outResp3');

// Evento quando o submit for clicado;
form.addEventListener('submit', (e) => {
  // Evita envio do form;
  e.preventDefault();
  // Entrada;
  const saque = Number(form.inSaque.value);
  // Condição;
  // Se saque não é múltiplo de 10;
  if (saque % 10 != 0) {
    alert(`Valor inválido para notas disponíveis (R$ 10, 50, 100)`);
    form.inSaque.focus();
    return;
  }
  // Calcula notas de 100;
  const notasCem = Math.floor(saque / 100);
  // Quanto ainda sobra;
  let resto = saque % 100;

  // Calcula notas de 50;
  const notasCinquenta = Math.floor(saque / 50);
  // Quanto ainda sobra;
  resto = resto % 50;

  // Calcula notas de 10;
  const notasDez = Math.floor(saque / 10);
  // Exibe as notas se houver, condições;
  if (notasCem > 0) {
    resposta1.innerText = `Notas de R$100: ${notasCem}`;
  }
  if (notasCinquenta > 0) {
    resposta2.innerText = `Notas de R$50: ${notasCinquenta}`;
  }
  if (notasDez > 0) {
    resposta3.innerText = `Notas de R$10: ${notasDez}`;
  }
});
