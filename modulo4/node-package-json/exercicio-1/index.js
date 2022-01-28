//1) b. Crie um programa que receba seu nome e sua idade. Após receber estes valores, imprima no console uma mensagem que siga a seguinte estrutura:
//"Olá, (Nome)! Você tem (sua idade) anos."

const blue = '\u001B[36m'
const nome = process.argv[2];
const idade = Number(process.argv[3]);

let frase = `${blue}Olá, ${nome}! Você tem ${idade} anos.`;

//console.log(typeof idade)
console.log(frase)

//c) Altere o programa acima para que mostre também a sua idade daqui a sete anos.
//"Olá, (Nome)! Você tem (sua idade) anos. Em sete anos você terá (nova idade)"

let novaIdade = idade + 7;
const yellow = `\u001B[93m`

const novaFrase = `${yellow}Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${novaIdade}.`;

console.log(novaFrase)