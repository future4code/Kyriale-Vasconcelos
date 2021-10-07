//EXEMPLOS--------------------------------//
//Strings
// const primeiraEstudante = `'"Evelyn"'`
// const segundoEstudante = 'Cesar'
// const terceiroEstudante = `Ruana`

// console.log(primeiraEstudante)
// console.log(segundoEstudante)
// console.log(terceiroEstudante)

//Concatenação
// const nomeDoEstudante = "Renan"
// const idade = 20
// const frase = "Meu nome é " + nomeDoEstudante + " e tenho " + idade + " anos"

// console.log(frase)

//Template Strings
// const nomeDaEstudante = "Soraia"
// const idade = 24
// const frase = `meu nome é ${nomeDaEstudante} e tenho ${idade} anos`
// console.log(frase)


//Propriedade length
// const estudante = " L arissa "
// const tamanhoDoNome = estudante.length
// console.log(tamanhoDoNome)

//toLowerCase()
// const estudante = "MarcElO"
// const tudoMinusculo = estudante.toLowerCase()

// console.log(estudante)
// console.log(tudoMinusculo)


// //toUpperCase()
// const tudoMaiusculo = estudante.toUpperCase()
// console.log(tudoMaiusculo)

//trim()
// const novoEstudante = "  Let i ci a "
// const nomeSemEspacos = novoEstudante.trim()
// console.log("nome:", novoEstudante)
// console.log("nome:", nomeSemEspacos)

//includes()

// const frase = "Bom dia Carver!"
// console.log(frase.includes("Ca"))

//replaceAll(remoção de caracter, inclusão de caracter)
// const frase = "Hoje eu comi chocolate, adoro chocolate"
// const novaFrase = frase.replaceAll("chocolate", "banana")
// console.log(frase)
// console.log(novaFrase)

//toLocaleUpperCase => "Locale" vai considerar o local onde método está sendo executado
// const nome = "Bruno"
// console.log(nome.toLocaleUpperCase())


//ARRAYS
// const estudantesDaLabenu = ["Cassiano", "Anna", "José", 20, 30]
// const indice = 1
// console.log(estudantesDaLabenu[indice])

// //Arrays length
// const estudantes = ["José","Victor", "Liticia"]
// console.log("ANTES:", estudantes)
// console.log(estudantes.length)

// //push()
// estudantes.push("Luis")
// estudantes.push(10)
// console.log("DEPOIS:", estudantes)

// //pop()
// estudantes.pop()
// console.log("POP:", estudantes)

//includes()
// const estudantes = ["José", "Victor", "Leticia"]
// console.log(estudantes.includes("Victo"))

//splice(indice, numero de elemntos a ser removidos)
// const letras = ["A", "B", "C", "D"]
// console.log(letras)
// const novaListaDeLetras = letras.splice(1,1)
// console.log(letras)

//EXERCÍCIO 1-----------------------------//
// 1 - peça ao usuário para inserir o seu nome 
    // const nomeDoUsuario = prompt("Qual é o seu nome?")
// 2 - peça ao usuário para inserir sua cor favorita
    // const corFavorita = prompt("Uqal é a sua cor favorita?")
// 3 - imprima a mensagem: exemplo "A cor favorita de FULANO é COR"
// //a - template strings
//     const fraseTemplateString = `A cor favorita de ${nomeDoUsuario} é ${corFavorita}`
//     // console.log(fraseTemplateString )
// //b - concatenação
//     const fraseConcatenacao = "A cor favorita de " + nomeDoUsuario + " é " + corFavorita
//     console.log(fraseConcatenacao)

//EXERCÍCIO 2-----------------------------//

// 1 - Peça para o usuário escrever uma frase
//     const fraseDoUsuario = prompt("Escreva uma frase")
// // 2 - imprima no console a frase alterada
// // a - Todas as letras maiúsculas
//     const fraseMaiuscula = fraseDoUsuario.toUpperCase()
//     console.log(`frase maiúscula: ${fraseMaiuscula}`)
// // b - Na língua do i (substituindo todas as vogais por i)
//     const fraseSemA = fraseMaiuscula.replaceAll("A", "I")
//     console.log(`frase sem o A: ${fraseSemA}`)

//     const fraseSemE = fraseSemA.replaceAll("E", "I")
//     console.log(`frase sem o E: ${fraseSemE}`)

//     const fraseSemO = fraseSemE.replaceAll("O", "I")
//     console.log(`frase sem o O: ${fraseSemO}`)

//     const fraseSemU = fraseSemO.replaceAll("U", "I")
//     const linguaDoI = fraseSemU
//     console.log(`frase sem o U: ${fraseSemU}`)
//     console.log(`frase na língua do I: ${linguaDoI}`)


// // 3 - Retorne também o tamanho da frase
//     const tamanhoDaFrase = linguaDoI.length
//     console.log(`Tamanho da frase: ${tamanhoDaFrase}`)


//EXERCÍCIO 3-----------------------------//
// 1 - Crie um array com pelo menos 5 raças de cachorro
// const racasDeCachorro = ["Vira-lata", "Labrador", "Rottweiller","Poddle", "Golden"]
// console.log(racasDeCachorro)
// // 2 - Peça para o usuário inserir um número de 1 a 5
// const numeroSelecionado = prompt("digite um número de 1 a 5")
// console.log("numero selelcionado:", numeroSelecionado)
// // 3 - Imprima no console a raça correspondente à posição escolhida pelo usuário
// const racaSelecionada = racasDeCachorro[numeroSelecionado -1]
// console.log(` Raça selecionada: ${racaSelecionada}`)

//EXERCÍCIO 4-----------------------------//
// // 1 - crie um array com os valores: 1, 2, 3, 4, 5 e 6.
//     const listaDeNumeros = [1, 2, 3, 4, 5, 6]
//     console.log(listaDeNumeros)
// // 2 - Determine o tamanho do array
//     const tamanhoDoArray = listaDeNumeros.length
//     console.log(tamanhoDoArray)
// // 3 - Adicione o número 7 no array
//     listaDeNumeros.push(7)
//     console.log(listaDeNumeros)
// // 4 - Remova os números 4 e 5 do array
//     listaDeNumeros.splice(3,2)
//     console.log(listaDeNumeros)
// // 5 - Determine o novo tamanho do array
//     const novoTamanhoDoArray = listaDeNumeros.length
//     console.log(novoTamanhoDoArray)

//Cassiano
// 1 - crie um array com os valores: 1, 2, 3, 4, 5 e 6.
    let listaDeNumeros = [1, 2, 3, 4, 5, 6]
    console.log(listaDeNumeros)
// // 2 - Determine o tamanho do array
    // const tamanhoDoArray = listaDeNumeros.length
    // console.log(tamanhoDoArray)
// // 3 - Adicione o número 7 no array
    listaDeNumeros = 7
    console.log(listaDeNumeros)
//cuidado! não declare um array com let♥ 