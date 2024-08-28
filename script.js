// Função para gerar um CPF aleatório válido
function gerarCPF() {
    const gerarNumeroAleatorio = (quantidade) => {
      let numero = '';
      for (let i = 0; i < quantidade; i++) {
        numero += Math.floor(Math.random() * 10);
      }
      return numero;
    };
  
    const calcularDigitoVerificador = (cpfBase) => {
      let soma = 0;
      for (let i = 0; i < cpfBase.length; i++) {
        soma += parseInt(cpfBase.charAt(i)) * (cpfBase.length + 1 - i);
      }
      let digito = 11 - (soma % 11);
      return digito >= 10 ? 0 : digito;
    };
  
    const base = gerarNumeroAleatorio(9);
    const primeiroDigito = calcularDigitoVerificador(base);
    const segundoDigito = calcularDigitoVerificador(base + primeiroDigito);
    
    return `${base.substr(0, 3)}.${base.substr(3, 3)}.${base.substr(6, 3)}-${primeiroDigito}${segundoDigito}`;
  }
  
  // Função para lidar com o clique do botão
  function handleButtonClick() {
    const input = document.querySelector('.input');
    input.value = gerarCPF();
  }
  
  // Adiciona um listener para o evento de clique no botão
  document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.btn');
    button.addEventListener('click', handleButtonClick);
  });
  