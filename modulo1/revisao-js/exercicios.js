// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
//Escreva uma função que recebe um array como parâmetro e retorna a quantidade de elementos que há nele.
function retornaTamanhoArray(array) {
   tamanho = array.length
   return tamanho
}

// EXERCÍCIO 02
//Escreva uma função que recebe um array como parâmetro e retorne este array invertido. 
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
//Escreva uma função que recebe um array de números e retorne o array com os números em ordem crescente.
function retornaArrayOrdenado(array) {
  return array.sort((a, b) => a - b)
}

// EXERCÍCIO 04
//Escreva uma função que receba um array de números e retorne um novo array com apenas os números pares desse array de entrada.
function retornaNumerosPares(array) {
    let arrayPar = array.filter(pares => (pares%2) === 0)
    return arrayPar
     }

     /* function retornaNumerosPares(array) {
        let arrayPares = [];
        for (numero of array) {
            if (numero % 2 === 0) arrayPares.push(numero);
        }
        return arrayPares;
    } */

// EXERCÍCIO 05
//Escreva uma função que recebe um array de números e retorna um array com os números pares elevados a 2.
function retornaNumerosParesElevadosADois(array) {
    let arrayPar = retornaNumerosPares(array);
    let arrayParQuadrado = []
    for (x of arrayPar) {
        x = x ** 2
        arrayParQuadrado.push(x)
    }
    return arrayParQuadrado
}

     /* function retornaNumerosPares(array) {
        let arrayPares = [];
        for (numero of array) {
            if (numero % 2 === 0) arrayPares.push(numero ** 2);
        }
        return arrayPares;
    } */

// EXERCÍCIO 06
//Escreva uma função que receba um array de números e retorne o maior número dele.
function retornaMaiorNumero(array) {
  let maxArr = Math.max(...array)
    return maxArr
}

// EXERCÍCIO 07
/* Escreva uma função que, dados dois números, retorne um objeto com as seguintes propriedades:

- `maiorNumero` → contém o maior número
- `maiorDivisivelPorMenor` → booleano indicando se o maior é divisível pelo menor
- `diferenca` → contém a diferença entre eles (deve ser um **número positivo** sempre)

Obs: para os testes funcionarem, as propriedades do objeto devem possuir os exatos nomes acima */
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maiorNumero
    let menor
    let maiorDivisivelPorMenor
    let diferenca

    if (num1 >= num2) {
        maiorNumero = num1;
        menor = num2
    } else {
        maiorNumero = num2
        menor = num1
    }

    let objeto = {
        maiorNumero: maiorNumero,
        maiorDivisivelPorMenor: maiorNumero % menor === 0,
        diferenca: maiorNumero - menor
    }

    return objeto

}

// EXERCÍCIO 08
//Escreva uma função que, recebendo um número N como parâmetro, retorne os N primeiros números pares
function retornaNPrimeirosPares(n) {
   let array = []
   for (i = 0;
        i < 2 * n;
        i += 2)
    array.push(i)
    return array
}

// EXERCÍCIO 09
//Faça uma função que receba como parâmetro os tamanhos dos três lados do triângulo: ladoA, ladoB, ladoC e retorne se ele é equilátero, isósceles ou escaleno (não é necessário validar se os lados fecham um triângulo).
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA == ladoB
        && ladoB == ladoC)
        return "Equilátero";
     else if (ladoA == ladoB
        || ladoA == ladoC
        || ladoB == ladoC)
        return "Isósceles";
        else
        return "Escaleno"
}

/* if (ladoA == ladoB
    && ladoB == ladoC)
    return "Equilátero";
 else if (ladoA !== ladoB
    && ladoA !== ladoC
    && ladoB!== ladoC)
    return "Escaleno";
    else
    return "Isósceles" */

// EXERCÍCIO 10
//Escreva uma função que receba um array de números e retorne um novo array com apenas 2 valores (NESTA ORDEM): o segundo maior e o segundo menor número do array original. 
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}