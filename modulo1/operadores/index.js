//Exercícios de interpretação de código
/* 1. Leia o código abaixo. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)

console.log("d. ", typeof resultado) */
//a. false ; b. false ; c. true ; d. boolean

/* 2. Seu colega se aproxima de você falando que o código dele não funciona como devia.  Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console? 
    
    ```jsx
    let primeiroNumero = prompt("Digite um numero!")
    let segundoNumero = prompt("Digite outro numero!")
    
    const soma = primeiroNumero + segundoNumero
    
    console.log(soma)
    ``` */
    //O problema é que ele está pedindo um número, mas esqueceu de colocar "Number" para transformar a resposta do usuário em número, o programa está lendo como uma string. No console terá um erro.

    let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)