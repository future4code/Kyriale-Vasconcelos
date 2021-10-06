// Exercícios de interpretação de código

/* 1.  Indique todas as mensagens impressas no console, **SEM EXECUTAR o programa**.
    
    ```jsx
    let array
    console.log('a. ', array)
    
    array = null
    console.log('b. ', array)
    
    array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    console.log('c. ', array.length)
    
    let i = 0
    console.log('d. ', array[i])
    
    array[i+1] = 19
    console.log('e. ', array)
    
    const valor = array[i+6]
    console.log**('f. ', valor)**
    ``` */
    // a. undefined ; b. null ; c. 11 ; d. 3 ; e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]; f. 9

 // 2. Leia o código abaixo com atenção 
    /*     ```jsx
    const frase = prompt("Digite uma frase")
    
    console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
    ```
        Qual será o valor impresso no console se a entrada do usuário for: `"Subi num ônibus em Marrocos"`? */

    // SUBI NUM ÔNIBUS EM MIRROCOS, 27


// Exercícios de escrita de código

/* 1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:
    
    O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!
*/
let nomeUsuario = prompt("Qual seu nome?")
let emailUsuario = prompt ("quel seu e-mail?")

console.log("O email", emailUsuario, "foi cadastrado com sucesso. Seja bem-vindo(a),", nomeUsuario,"!")

/* 2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:
    
    a) Imprima no console o array completo
    
    b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.
    
    c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no consolea nova lista */

const comidas = ['feijoada', 'tapioca', 'cuscuz', 'carne de sol com fritas', 'brownie']
//a.
console.log("a) " + comidas)

//b.
console.log("b) Estas são as minhas comidas preferidas: ")
console.log(comidas[i=0])
console.log(comidas[i=1])
console.log(comidas[i=2])
console.log(comidas[i=3])
console.log(comidas[i=4])

//c)
let comidaUsuario = prompt("Qual a sua comida preferida?")

comidas[1] = comidaUsuario
console.log("c) " + comidas)

//3. Faça um programa, seguindo os passos:
/*    a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
   b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
    c) Imprima o array no console
    d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
    e) Remova da lista o item de índice que o usuário escolheu.
    f) Imprima o array no console */

//a.
    let listaDeTarefas =[]
    console.log("a) " + listaDeTarefas)

//b, c.
let tarefa1Usuario = prompt("Escreva aqui 1 tarefa que você vai fazer hoje")
let tarefa2Usuario = prompt("Escreva aqui mais uma tarefa que você vai fazer hoje")
let tarefa3Usuario = prompt("Escreva aqui só mais uma tarefa que você vai fazer hoje")

listaDeTarefas = [tarefa1Usuario, tarefa2Usuario, tarefa3Usuario]
console.log("b, c) " + listaDeTarefas)

//d.
let tarefaFeita = prompt("Digite o ÍNDICE da tarefa já realizada: 0, 1 ou 2")
// Alternativa para escolher as tarefas de 1 a 3:
/* let tarefaFeita = prompt("Quais das 3 tarefas você já fez hoje? Escolha apenas uma e responda com um número de 1 a 3")
let escolha = listaDeTarefas[tarefaFeita - 1] */

//e.
let escolha = listaDeTarefas[tarefaFeita]
listaDeTarefas.splice(tarefaFeita, 1)

//f.
console.log("Tarefa feita: ", escolha)
console.log("d, e, f) Tarefas que faltam: ", listaDeTarefas)
