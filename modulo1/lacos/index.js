//Exercícios de interpretação de código

/* 1. O que o código abaixo está fazendo? Qual o resultado impresso no console?
    
    ```jsx
    let valor = 0
    for(let i = 0; i < 5; i++) {
      valor += i
    }
    console.log(valor)
    ``` */
//O programa está somando +1 índice por vez até chegar em 4 (um número menor que 5) e somando os números entre si. O resultado será 10 (1 + 2 + 3 + 4 = 10)

/* 2. Leia o código abaixo:
    
    ```jsx
    const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
    for (let numero of lista) {
      if (numero > 18) {
    		console.log(numero)
    	}
    }
    ```
    
    a) O que vai ser impresso no console?
        R - Todos os númeors maiores do que 18 (19, 21,23,25, 27 e 30)

    b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso? 
        R - Sim, usando indexOf()

        const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30];
        for (let numero of lista) {
        console.log(`O index de ${numero} é ${lista.indexOf(numero)}`)
        }
*/

/* 3. Qual seria o resultado impresso no console, se o usuário digitasse o número `4` ?
    
    ```jsx
    const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
    let quantidadeAtual = 0
    while(quantidadeAtual < quantidadeTotal){
      let linha = ""
      for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
        linha += "*"
      }
      console.log(linha)
      quantidadeAtual++
    } */
// Iriam ter 4 linhas, a primeira com 1 asterisco, a segunda com 2 e assim por diante.

// Exercícios de escrita de código

//1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 

let temPet = Number(prompt("Quantos bichinhos de estimação você tem?"))

//    a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
//    b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array
//    c) Por fim, imprima o array com os nomes dos bichinhos no console

if (temPet === 0)
    console.log("Que pena! Você pode adotar um pet!");

    else { let nomesPets = [];
        for (i = 0; i < temPet; i++) {
            nomesPets[i] = prompt(`Digite aqui os nomes de todos os seu pets ${i+1}`);
        }
    console.log("Aqui estão os nomes dos seus pets:");
    for (let pet of nomesPets) {
        console.log(`Este é seu pet ${nomesPets.indexOf(pet) + 1}: ${pet}`)
    }
    }

//2. Considere que você tenha acesso a um `array`  (chamado de 'array original') que é composto somente de números. Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:
    
//    a) Escreva um programa que **imprime** cada um dos valores do array original.
    
//    b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10
    
//    c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original e **imprima** esse novo array
    
//    d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.
    
//   e) Escreva um programa que imprima no console o maior e o menor números contidos no array original
    
    