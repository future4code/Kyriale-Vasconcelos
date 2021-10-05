//Exercícios de interpretação de código
/* 1. Analise o programa abaixo e diga o que será impresso no console, **SEM EXECUTAR o programa.**
    
    ```jsx
    let a = 10
    let b = 10
    
    console.log(b)
    
    b = 5
    console.log(a, b)
    ``` */
    //R - irá aparecer 10 e 5

 /*    2. Analise o programa abaixo e diga o que será impresso no console, **SEM EXECUTAR o programa.**
    
    ```jsx
    let a = 10
    let b = 20
    c = a
    b = c
    a = b
    
    console.log(a, b, c)
    ``` */
//R - irá aparecer 10, 10 e 10

/* 3. Analise o programa abaixo, entenda o que ele faz e **sugira melhores nomes para as variáveis**. Lembre-se que devemos escolher nomes significativos, usar o padrão **camelCase**. Alem disso, os nomes não podem começar com números ou caracteres especiais.
    
    ```jsx
    let p = prompt("Quantas horas você trabalha por dia?")
    let t = prompt("Quanto você recebe por dia?")
    alert(`Voce recebe ${t/p} por hora`)
    ``` */
    //R - let p => let horasDeTrabalho; let t => valorHora; o programa calcula quanto o usuário recebe por dia de trabalho com base nas horas trabalhadas e quanto ganha por hora.

//Exercícios de escrita de código

//Construa um programa, seguindo os seguintes passos:
/* a) Declare uma variável para armazenar um nome, sem atribuir um valor.
b) Declare uma variável para armazenar uma idade, sem atribuir um valor.
c) Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando `typeof`.
d) Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.
e) Pergunte ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar. */

let nome = prompt("Qual seu nome?")
let idade = Number(prompt("Qual sua idade?"))

console.log(typeof (nome))
console.log(typeof (idade))
// Lembrar de transformar variáveis de texto para número, caso precise
console.log ("Olá", nome,", você tem", idade, "anos.")

//2. Escreva um programa que faça 3 perguntas de Sim ou Não, armazenado em uma variável. Por exemplo: "Você está usando uma roupa azul hoje?". Depois, siga os passos:
/* a) Crie três novas variáveis, contendo as respostas

b) Imprima na tela todas as perguntas seguidas por suas respectivas respostas. Por exemplo:

```
Você está usando uma roupa azul hoje? - SIM
``` */
let pergunta1 = prompt("Responda com sim ou não: Você está de pijama?")
let pergunta2 = prompt("Responda com sim ou não: Você tem algum gato?")
let pergunta3 = prompt("Responda com sim ou não: Você tem algum cachorro?")

console.log ("Você está de pijama? -", pergunta1)
console.log ("Você tem algum gato? -", pergunta2)
console.log ("Você tem algum cachorro? -", pergunta3)

//3. Mude os valores de "a" e "b" entre si e imprima no console os novos valores

let a = 10
let b = 25

let c = b
b = a
a = c

console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10

// DESAFIOS
/* Faça um programa que receba dois números do usuário e faça as seguintes operações, imprimindo os resultados no console da seguinte forma:
1. O primeiro número somado ao segundo número resulta em: x.
2. O primeiro número multiplicado pelo segundo número resulta em: y. */

let numero1 = Number(prompt("Digite o primeiro número"))
let numero2 = Number(prompt("Digite o segundo número"))

let x = numero1 + numero2
let y = numero1 * numero2

console.log("x é igual a", x)
console.log("y é igual a", y)