let botao = document.querySelectorAll(".botao")
let tela = document.querySelector(".tela")
let clear = document.querySelector(".ce")
let operador = document.querySelectorAll(".operador")

// operacoes

let soma = (a, b) => a + b;
let subtracao = (a, b) => a - b;
let multiplicacao = (a, b) => a * b;
let divisao = (a, b) => {
    if(b === 0){
        return "Erro! divisao por 0"
    }else {
        return a/b
    }
};

// popular e limpar display da calculadora

function caracteres(event){

    // para o texto do display nao fugir do escopo
    if(tela.innerText.length > 29){
        return
    }
    const caractere = event.target.innerText;
    tela.innerText += caractere;
}

function operadores(event){
    
    const operador = event.target.innerText;
    const textoAtual = tela.innerText;

    if (textoAtual === "") return; // não deixa adicionar operador se estiver vazio

    const ultimoCaractere = textoAtual[textoAtual.length - 1];

    // Não deixa adicionar dois operadores seguidos
    if (["+", "-", "*", "/"].includes(ultimoCaractere)) return;

    // Verifica se já tem algum operador na expressão (só permite um por vez)
    if (["+", "-", "*", "/"].some(op => textoAtual.includes(op))) return;
    
    tela.innerText += operador
    
}

function limparDisplay(event){
    const valor = event.target.innerText;
    tela.innerText = "";
}

// eventos
botao.forEach(element => {
    element.addEventListener("click", caracteres)
});

operador.forEach(element => {
    element.addEventListener("click", operadores)
})

clear.addEventListener("click", limparDisplay);

