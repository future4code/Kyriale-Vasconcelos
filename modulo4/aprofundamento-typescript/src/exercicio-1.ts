/* 
1) O Typescript é uma linguagem um pouco mais criteriosa que o Javascript, então vamos conhecer um pouco desses critérios.

a) Crie uma variável **minhaString** do tipo `string` e atribua um valor a ela. Tente atribuir um número a esta variável. O que acontece?
R-
let minhaString:string = 3
console.log(minhaString)

Mostra uma mensagem de erroacusando que números não podem ser usados em uma variável string.

b) Crie uma variável meuNumero do tipo number e atribua um valor numérico. Como fazer para que essa variável também aceite strings? Ou seja, como criamos no typescript uma variável que aceite mais de um tipo de valor?
R-
let meuNumero:number | string = 3

Para fazer com que a variável aceite mais de um tipo, deve-se fazer a type union, usando " | " na denominação.

c)Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:

`nome`, que é uma string;
`idade`, que é um número;
`corFavorita`, que é uma string.

R-
*/
type pessoa = {
    nome:string, idade:number, corFavorita:string
}
const gato1:pessoa = {
    nome: "Savannah",
    idade: 7,
    corFavorita: "branco"
}

const gato2:pessoa = {
    nome: "Tropical Island",
    idade: 3,
    corFavorita: "verde"
}

const gato3:pessoa = {
    nome:"Tundra",
    idade: 1,
    corFavorita: "azul"
}

console.log(gato1, gato2, gato3)

// d) Modifique a propriedade corFavorita para que apenas seja possível escolher entre as cores do arco-íris. Utilize um enum para isso.

enum corArcoIris {
    VERMELHO = "vermelho", 
    LARANJA = "laranja", 
    AMARELA = "amarelo", 
    VERDE = "verde", 
    AZUL = "azul", 
    AZULESCURO = "azul-Escuro",
    VIOLETA = "violeta",
    BRANCO = "branco"
}

const gato1c:pessoa = {
    nome: "Savannah",
    idade: 7,
    corFavorita: corArcoIris.BRANCO
}

const gato2c:pessoa = {
    nome: "Tropical Island",
    idade: 3,
    corFavorita: corArcoIris.VERDE
}

const gato3c:pessoa = {
    nome:"Tundra",
    idade: 1,
    corFavorita: corArcoIris.AZUL
}

console.log(gato1c, gato2c, gato3c)