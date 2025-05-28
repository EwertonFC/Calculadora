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

    // Verifica se o número atual já tem vírgula
    let ultimoNumero = "";
    for (let i = textoAtual.length - 1; i >= 0; i--) {
      const c = textoAtual[i];
      if (["+", "-", "*", "/"].includes(c)) break;
      ultimoNumero = c + ultimoNumero;
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
  for (let op of ["+", "-", "*", "/"]) {
    if (textoAtual.includes(op)) return;
  }

  tela.innerText += operador;
}

function calcular() {
  let texto = tela.innerText;

  let operador = null;
  for (let op of ["+", "-", "*", "/"]) {
    if (texto.includes(op)) {
      operador = op;
      break;
    }
  }
  if (!operador) return;

  let indexOp = texto.indexOf(operador);
  let parte1 = texto.slice(0, indexOp);
  let parte2 = texto.slice(indexOp + 1);

  if (parte1 === "" || parte2 === "") return;

  parte1 = parte1.replace(",", ".");
  parte2 = parte2.replace(",", ".");

  let a = parseFloat(parte1);
  let b = parseFloat(parte2);

  if (isNaN(a) || isNaN(b)) return;

  let resultado;

  switch (operador) {
    case "+": resultado = a + b; break;
    case "-": resultado = a - b; break;
    case "*": resultado = a * b; break;
    case "/":
      if (b === 0) {
        tela.innerText = "Erro";
        return;
      }
      resultado = a / b;
      break;
  }

  let textoResultado = resultado.toFixed(2);

    textoResultado = textoResultado.replace(".", ",");

  tela.innerText = textoResultado;
}




function limparDisplay() {
  tela.innerText = "";
}

// Eventos
botoes.forEach((btn) => btn.addEventListener("click", caracteres));
operadores.forEach((op) => op.addEventListener("click", operadoresFunc));
igual.addEventListener("click", calcular);
limpar.addEventListener("click", limparDisplay);
