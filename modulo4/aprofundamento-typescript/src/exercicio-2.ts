/* 2) Observe a função a seguir, escrita em JavaScript:
function obterEstatisticas(numeros) {

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

a) Quais são as entradas e saídas dessa função? Copie a função para um arquivo.ts e faça a tipagem desses parâmetros
R-
As entradas são dois números ("a" e "b"), as saídas são as estatísticas dizendo o maior, menos e a média entre eles.*/

function obterEstatisticas(numeros:number[]) {

    const numerosOrdenados:any = numeros.sort(
        (a:number, b:number) => a - b
    )

    let soma:number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

//b) b) Quais outras variáveis compõem essa função? Explicite a tipagem de todas elas 
//R - soma e números -> ambas são números

/*c) Crie um type chamado amostra de dados, isto é, um objeto com as propriedades numeros e obterEstatisticas. Abaixo, temos um exemplo de objeto desse tipo, declarado em JavaScript:

const amostraDeIdades = {

		numeros: [21, 18, 65, 44, 15, 18],

		obterEstatisticas: (numeros) => {...}
}
*/

type amostraDeDados = {numeros:number[], obterEstatisticas:(numeros:number[]) => {
    maior: number,
    menor: number,
    media: number
}
}

const amostraDeIdades: amostraDeDados = {
    numeros: [12, 30, 22, 24, 15],
    estatisticas: obterEstatisticas
}

console.log(amostraDeIdades.obterEstatísticas(amostraDeIdades.numeros))