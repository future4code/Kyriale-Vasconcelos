//Exercícios de interpretação de código
/* 1.  Leia o código abaixo
    
    ```jsx
    const filme = {
    	nome: "Auto da Compadecida", 
    	ano: 2000, 
    	elenco: [
    		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
    		"Virginia Cavendish"
    		], 
    	transmissoesHoje: [
    		{canal: "Telecine", horario: "21h"}, 
    		{canal: "Canal Brasil", horario: "19h"}, 
    		{canal: "Globo", horario: "14h"}
    		]
    }
    
    console.log(filme.elenco[0])
    console.log(filme.elenco[filme.elenco.length - 1])
    console.log(filme.transmissoesHoje[2])
    ```
    
    a) O que vai ser impresso no console? */

    // console.log(filme.elenco[0]) -> Matheus Nachtergaele
    // console.log(filme.elenco[filme.elenco.length - 1]) -> Virginia Cavendish
    // console.log(filme.transmissoesHoje[2]) -> canal: "Globo", horario: "14h"

    /* 2. Leia o código abaixo
    
    ```jsx
    const cachorro = {
    	nome: "Juca", 
    	idade: 3, 
    	raca: "SRD"
    }
    
    const gato = {...cachorro, nome: "Juba"}
    
    const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}
    
    console.log(cachorro)
    console.log(gato)
    console.log(tartaruga)
    ```
    
    a) O que vai ser impresso no console?
    //console.log(cachorro) -> nome: "Juca", idade: 3, raca: "SRD"
    // console.log(gato) -> nome: "Juba", idade: 3, raca: "SRD"
    // console.log(tartaruga) -> nome: "Jubo", idade: 3, raca: "SRD"
    
    b) O que faz a sintaxe dos três pontos antes do nome de um objeto? */
    // Ele copia as informações do objeto anterior

  /*   3. Leia o código abaixo
    
    ```jsx
    function minhaFuncao(objeto, propriedade) {
    	return objeto[propriedade]
    }
    
    const pessoa = {
      nome: "Caio", 
      idade: 23, 
      backender: false
    }
    
    console.log(minhaFuncao(pessoa, "backender"))
    console.log(minhaFuncao(pessoa, "altura"))
    ```
    
    a) O que vai ser impresso no console?
    // console.log(minhaFuncao(pessoa, "backender")) -> false
    // console.log(minhaFuncao(pessoa, "altura")) -> undefined

    b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
    // No primeiro, está descrito no objeto que "backender" é false. No segundo, não exite o parâmetro "altura", por isso retorna indefinido.
     */

//Exercícios de escrita de código

/* 1. Resolva os passos a seguir: 
    
    a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente **três apelidos**). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo**:** 
    
    ```jsx
    // Exemplo de entrada
    const pessoa = {
       nome: "Amanda", 
       apelidos: ["Amandinha", "Mandinha", "Mandi"]
    }
    
    // Exemplo de saída
    "Eu sou Amanda, mas pode me chamar de: Amandinha, Mandinha ou Mandi"
     */
    
const humano = {
        nome: "Manuela",
        apelidos: ["Manu", "Lela", "Leleca"]
    }
function dados(objeto) {
    return `Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}`
}

console.log("1.a) ", dados(humano))

/* b) Agora, usando **o operador spread**, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando como argumento o novo objeto */

const humano2 = {
    ...humano,
    apelidos: ["Pipoquinha", "Moleca", "Cachinhos"]
}

console.log("1.b) ", dados(humano2))

/* 2. Resolva os passos a seguir: 
    
    a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 
    */
    const obj1 = {
        nome: "Objeto 01",
        idade: 20,
        profissão: "Escritor"
    }

    const obj2 = {
        nome: "Objeto 2",
        idade: 23,
        profissão: "Cortadores"
    }

    /* b) Escreva uma função que receba um objeto de cada vez e retorne um array com as seguintes informações:
    
    1. O valor de `nome`
    2. O numero de caracteres do valor `nome`
    3. O valor de `idade`
    4. O valor de `profissão`
    5. O numero de caracteres do valor `profissão`
    */
   function exercicio2b(entrada) {
       const resposta = [
           entrada.nome,
           entrada.nome.length,
           entrada.idade,
           entrada.profissão,
           entrada.profissão.length
       ]
       return resposta
   }

   console.log("2.b) ", exercicio2b(obj1))
   console.log("2.b) ", exercicio2b(obj2))

// 3. Resolva os passos a seguir: 
    
//a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`
let carrinho = []
    
//b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (`string`) e disponibilidade (`boolean` - devem começar como `true`)
const fruta1 = {
    nome: "tomate",
    disponibilidade: true
}
const fruta2 = {
    nome: "melancia",
    disponibilidade: true
}
const fruta3 = {
    nome: "banana",
    disponibilidade: true
}
//c) Crie uma função que **receba** um objeto fruta por **parâmetro** e coloque-a dentro do array de `carrinho`. Invoque essa função passando os três objetos criados. 

function compras(frutas) {
    return carrinho.push(frutas)
}

console.log("3.c) ", compras(fruta1))
console.log("3.c) ", compras(fruta2))
console.log("3.c) ", compras(fruta3))

//d) Imprima a variável `carrinho` e garanta que ela agora seja um **array preenchido com três objetos.** 

console.log("3.d) ", carrinho )