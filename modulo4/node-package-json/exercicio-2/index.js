let operacao = process.argv[2]
let num1 = Number(process.argv[3])
let num2 = Number(process.argv[4])

const blue = '\u001B[36m'
const yellow = `\u001B[93m`
const purple = '\u001B[35m'
const orange = '\u001B[37m'


switch (operacao) {
    case "add":
        console.log(`${blue} Resposta: ${num1 + num2}`)
        break;
    case "sub":
        console.log(`${yellow}Resposta: ${num1 - num2}`)
        break;
    case "mult":
        console.log(`${purple}Resposta: ${num1 * num2}`)
        break;
    case "div":
        console.log(`${orange}Resposta: ${num1 / num2}`)
        break;
}