//Exercícios de interpretação de código
/* 
1. Leia o código abaixo:
    
    ```jsx
    const respostaDoUsuario = prompt("Digite o número que você quer testar")
    const numero = Number(respostaDoUsuario)
    
    if (numero % 2 === 0) {
      console.log("Passou no teste.")
    } else {
      console.log("Não passou no teste.")
    }
    ```
    
    a) Explique o que o código faz. Qual o teste que ele realiza? 
        R - Ele vê se o número é par ou ímpar - se a condição for true, ele é par, se for false, é ímpar.
    
    b) Para que tipos de números ele imprime no console "Passou no teste"? 
        R- Números pares
    
    c) Para que tipos de números a mensagem é "Não passou no teste"? 
        R - Números ímpares
        */

  /*       2. O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:
    
        ```jsx
        let fruta = prompt("Escolha uma fruta")
        let preco
        switch (fruta) {
          case "Laranja":
            preco = 3.5
            break;
          case "Maçã":
            preco = 2.25
            break;
          case "Uva":
            preco = 0.30
            break;
          case "Pêra":
            preco = 5.5
            break; // BREAK PARA O ITEM c.
          default:
            preco = 5
            break;
        }
        console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
        ```
        
        a) Para que serve o código acima?
            R - Para conferir os preços das mercadorias com mais agilidade

        b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
            R - " O preço da fruta Maçã é R$ 2.25 " 

        c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
            R - Seria " O preço da fruta Pêra é R$ 5 "
        */

/* 3. Leia o código abaixo:
    
    ```jsx
    const numero = Number(prompt("Digite o primeiro número."))
    
    if(numero > 0) {
      console.log("Esse número passou no teste")
    	let mensagem = "Essa mensagem é secreta!!!"
    }
    
    console.log(mensagem)
    ```
    
    a) O que a primeira linha está fazendo?
        R - Está pedindo para o usuário escrever um número

    b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
        R - "Esse número passou no teste"
        Vai dar erro de mensagem não definida

    c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo. 
        R - Sim, haverá um erro, pois a condição não diz o que fazer se o número for menor ou igual a zero.
    */

// Exercícios de Escrita da Código

//1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).
    
//    a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
//    b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
let idade = Number(prompt ("1) Qual a sua idade?"))

//    c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`

if (idade >= 18) {
    console.log("1) Você pode dirigir")
} else {
    console.log("1) Você não pode dirigir")
}

//2. Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar **M** (matutino) ou **V** (Vespertino) ou **N** (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco `if/else`

let turno = prompt("2) Em qual turno você estuda? Digite M (matutino), V (Vespertino) ou N (Noturno).").toUpperCase()

if (turno === "M") 
    {console.log("2) Bom dia!")}
    else if (turno === "V")
    {console.log("2) Boa tarde!")}
    else if (turno === "N")
    {console.log("2) Boa noite!")}

//3. Repita o exercício anterior, mas utilizando a estrutura de `switch case` agora.

let turno2 = prompt("3) Em qual turno você estuda? Digite M (matutino), V (Vespertino) ou N (Noturno).").toUpperCase()

switch (turno2){
    case "M": console.log("3) Bom dia!")
    break;
    case "V": console.log("3) Boa tarde!")
    break;
    case "N": console.log("3) Boa noite!")
    break
    default:
    console.log("Insira um turno válido")
}

//4. Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia **e** se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: `"Bom filme!"`, caso contrário, imprima `"Escolha outro filme :("`

let genero = prompt("Qual o gênero do filme?").toLocaleLowerCase()
let preco = Number(prompt("Quanto está custando o ingreso?"))

if (genero === "fantasia" && preco <= 15) {
    console.log ("Bom filme!")
    } else {
        console.log("Escolha outro filme :(")
    }

// DESAFIOS
/* 1. Modifique o código do exercício 4 de escrita de código para, antes de imprimir a mensagem `"Bom filme!"`, pergunte ao usuário, pelo `prompt` qual lanchinho ele vai comprar (pipoca, chocolate, doces, etc) e imprima no console as mensagens `"Bom filme!"` e `"Aproveite o seu [LANCHINHO]"`, trocando [LANCHINHO] pelo que o usuário colocou no input.
    - Exemplo
        
        Entradas: `"fantasia"` | `"10"`
        
        Saída:
        
        ```
        [prompt] Qual snack que você quer comprar?
        ```
        
        Entrada: `"chocolate"`
        
        Saída:
        
        ```
        "Bom filme!"
        "Aproveite o seu chocolate"
        ``` */


/*2. Você foi contratado para criar um sistema de vendas de ingressos de jogos de um estádio de futebol. Para esta compra, o usuário deve fornecer algumas informações:
    - Nome completo;
    - Tipo de jogo: IN indica internacional; e DO indica doméstico;
    - Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final
    - Categoria: pode ser as opções 1, 2, 3 ou 4;
    - Quantidade de ingressos
    
    O seu sistema deve solicitar estas informações ao usuário, através do `prompt` . Além disso, ele deve imprimir tudo isso, junto com o valor de cada ingresso e o valor total que o usuário tem que pagar (ou seja, o valor unitário do ingresso multiplicado pela quantidade). Abaixo, há a tabela com os valores de cada ingresso e exemplos de execução do programa. Lembrando que o valor de jogos internacionais é o mesmo de jogos domésticos, mas seus preços devem ser multiplicados pelo valor do dólar (considerar o dólar = R$4,10)
    
    - Tabela de Preços
        
        ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/cd2f55f6-e07f-45fd-9b65-ecf0343a3b3c/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/cd2f55f6-e07f-45fd-9b65-ecf0343a3b3c/Untitled.png)
        
    - Exemplo de saída: Jogo Nacional
        
        ```
        ---Dados da compra--- 
        Nome do cliente:  Soter Padua 
        Tipo do jogo:  Nacional 
        Etapa do jogo:  Final 
        Categoria:  1 
        Quantidade de Ingressos:  10 ingressos 
        ---Valores--- 
        Valor do ingresso:  R$ 1980
        Valor total:  R$ 19800
        
        ```
        
    - Exemplo de saída: Jogo Internacional
        
        ```
        ---Dados da compra--- 
        Nome do cliente:  Soter Padua 
        Tipo do jogo:  Internacional 
        Etapa do jogo:  Final 
        Categoria:  1 
        Quantidade de Ingressos:  10 ingressos 
        ---Valores--- 
        Valor do ingresso:  U$ 482.92682926829275
        Valor total:  U$ 4829.2682926829275
        
        ``` */