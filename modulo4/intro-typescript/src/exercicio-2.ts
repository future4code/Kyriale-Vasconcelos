// 2) A seguinte função em JavaScript pergunta ao usuário suas três cores favoritas e imprime no console um array que contenha essas três cores. Refatore a função para o Typescript.

// function imprimeTresCoresFavoritas() {
//     const cor1 = prompt("Insira sua primeira cor favorita")
//     const cor2 = prompt("Insira sua segunda cor favorita")
//     const cor3 = prompt("Insira sua terceira cor favorita")
//     console.log([cor1, cor2, cor3])
//  }

function imprimeTresCoresFavoritas2():void {
    let cor1:string = process.argv[2]
    let cor2:string = process.argv[3]
    let cor3:string = process.argv[4]

    console.log([cor1, cor2, cor3]) 
}

imprimeTresCoresFavoritas2()