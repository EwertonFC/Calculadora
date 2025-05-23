let botoes = document.querySelectorAll(".botao");
let tela = document.querySelector(".tela");
let limpar = document.querySelector(".ce");
let operadores = document.querySelectorAll(".operador");


function caracteres(event) {
  if (tela.innerText.length >= 30) return;

  const caractere = event.target.innerText;
  const textoAtual = tela.innerText;
  const ultimoCaractere = textoAtual[textoAtual.length - 1];

  if (caractere === ",") {
    if (
      textoAtual === "" ||
      ["+", "-", "*", "/", ","].includes(ultimoCaractere)
    ) {
      return;
    }

    let ultimoNumero = textoAtual;
    for (let i = textoAtual.length - 1; i >= 0; i--) {
      if (["+", "-", "*", "/"].includes(textoAtual[i])) {
        ultimoNumero = textoAtual.slice(i + 1);
        break;
      }
    }
    if (ultimoNumero.includes(",")) return;
  }

  tela.innerText += caractere;
}

function operadoresFunc(event) {
  const operador = event.target.innerText;
  const textoAtual = tela.innerText;
  if (textoAtual === "") return;

  const ultimoCaractere = textoAtual[textoAtual.length - 1];

  // Aqui: também bloqueia operador logo após vírgula
  if (["+", "-", "*", "/", ","].includes(ultimoCaractere)) return;

  tela.innerText += operador;
}

function limparDisplay() {
  tela.innerText = "";
}

botoes.forEach((btn) => btn.addEventListener("click", caracteres));
operadores.forEach((op) => op.addEventListener("click", operadoresFunc));
limpar.addEventListener("click", limparDisplay);

