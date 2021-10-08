//Exercícios de interpretação de código

//1. Leia o código abaixo
 /*    
    ```jsx
    function minhaFuncao(variavel) {
    	return variavel * 5
    }
    
    console.log(minhaFuncao(2))
    console.log(minhaFuncao(10))
    ```
    
    a) O que vai ser impresso no console?
    
    b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console? */

    // a) 10 e 50
    // b) nada

//2. Leia o código abaixo
    /* 
    ```jsx
    let textoDoUsuario = prompt("Insira um texto");
    
    const outraFuncao = function(texto) {
    	return texto.toLowerCase().includes("cenoura")
    }
    
    const resposta = outraFuncao(textoDoUsuario)
    console.log(resposta)
    ```
    
    a. Explique o que essa função faz e qual é sua utilidade
    
    b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
         i.   `Eu gosto de cenoura`
         ii.  `CENOURA é bom pra vista`
         iii. `Cenouras crescem na terra` */
//a) ela coloca todas as palavras em letras minúsculas e verifica se a frase contém "cenoura", retornando "true" ou "false"
//b) i. true; ii. true; iii false

// Exercícios de escrita de código
/* 1. Escreva as funções explicadas abaixo:
    
    a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como: 
    
    ```
    "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
    ```
    
    Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando que a função não possui entradas, apenas imprime essa mensagem.
    
    b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (`string`), a idade (`number`), a cidade (`string`) e uma profissão (`string`). Ela deve retornar uma `string` que unifique todas as informações da pessoa em uma só mensagem com o template:
    
    ```
    Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].
    ``` */
    