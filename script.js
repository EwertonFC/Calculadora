let botao = document.querySelectorAll(".botao")
let tela = document.querySelector(".tela")
let clear = document.querySelector(".ce")

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

function display(event){
    
    const caractere = event.target.innerText;
    tela.innerText += caractere;
}

function limparDisplay(event){
    const valor = event.target.innerText;
    tela.innerText = "";
}

botao.forEach(element => {
    element.addEventListener("click", display)
});

clear.addEventListener("click", limparDisplay);

