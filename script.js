let botoes = document.querySelectorAll(".botao");
let tela = document.querySelector(".tela");
let limpar = document.querySelector(".ce");
let operadores = document.querySelectorAll(".operador");
let igual = document.querySelector(".igual");

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

  if (["+", "-", "*", "/", ","].includes(ultimoCaractere)) return;

  // Impede mais de um operador
  if (["+", "-", "*", "/"].some(op => textoAtual.includes(op))) return;

  tela.innerText += operador;
}

function calcular() {
  let texto = tela.innerText.replace(",", ".");
  let operador = null;

  for (let op of ["+", "-", "*", "/"]) {
    if (texto.includes(op)) {
      operador = op;
      break;
    }
  }

  if (!operador) return;

  const partes = texto.split(operador);
  if (partes.length !== 2 || partes[1] === "") return;

  const a = parseFloat(partes[0]);
  const b = parseFloat(partes[1]);
  if (isNaN(a) || isNaN(b)) return;

  let resultado;

  switch (operador) {
    case "+": resultado = a + b; break;
    case "-": resultado = a - b; break;
    case "*": resultado = a * b; break;
    case "/": resultado = b === 0 ? "Erro" : a / b; break;
  }

  if (typeof resultado === "number") {
    const arredondado = parseFloat(resultado.toFixed(10));
    tela.innerText = arredondado.toString().replace(".", ",");
  }
   else {
    tela.innerText = resultado;
  }
}

function limparDisplay() {
  tela.innerText = "";
}

// Eventos
botoes.forEach((btn) => btn.addEventListener("click", caracteres));
operadores.forEach((op) => op.addEventListener("click", operadoresFunc));
igual.addEventListener("click", calcular);
limpar.addEventListener("click", limparDisplay);
