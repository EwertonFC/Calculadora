let sete = document.querySelector(".sete")
let oito = document.querySelector(".oito")
let nove = document.querySelector(".nove")
let divisao = document.querySelector(".divisao")
let quatro = document.querySelector(".quatro")
let cinco = document.querySelector(".cinco")
let seis = document.querySelector(".seis")
let vezes = document.querySelector(".vezes")
let um = document.querySelector(".um")
let dois = document.querySelector(".dois")
let tres = document.querySelector(".tres")
let menos = document.querySelector(".menos")
let zero = document.querySelector(".zero")
let virgula = document.querySelector(".virgula")
let mais = document.querySelector(".mais")
let ce = document.querySelector(".ce")

let tela = document.querySelector(".tela")


function display(event){
    
    const caractere = event.target.innerText;
    tela.innerText += caractere;
}

function limparDisplay(event){
    const valor = event.target.innerText;
    tela.innerText = "";
}

ce.addEventListener("click", limparDisplay)
sete.addEventListener("click", display)
oito.addEventListener("click", display)
nove.addEventListener("click", display)
divisao.addEventListener("click", display)
quatro.addEventListener("click", display)
cinco.addEventListener("click", display)
seis.addEventListener("click", display)
vezes.addEventListener("click", display)
um.addEventListener("click", display)
dois.addEventListener("click", display)
tres.addEventListener("click", display)
menos.addEventListener("click", display)
zero.addEventListener("click", display)
virgula.addEventListener("click", display)
mais.addEventListener("click", display)
