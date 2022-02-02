//1) A seguinte função em JavaScript recebe como parâmetro os tamanhos dos três lados do triângulo: ladoA, ladoB, ladoC e retorna se ele é equilátero, isósceles ou escaleno. Refatore a função para o Typescript.
// Código em JavaScript: 
// function checaTriangulo(a, b, c) {
//     if (a !== b && b !== c) {
//       return "Escaleno";
//     } else if (a === b && b === c) {
//       return "Equilátero";
//     } else {
//       return "Isósceles";
//     }
//   }

function checaTriangulo(a: number, b: number, c: number):string {
    if (a !== b && b !== c) {
      return "Escaleno";
    } else if (a === b && b === c) {
      return "Equilátero";
    } else {
      return "Isósceles";
    }
}

console.log(checaTriangulo(1, 2, 2))

//2)

function imprimeTresCoresFavoritas():void {
  let cor1:string = process.argv[2]
  let cor2:string = process.argv[3]
  let cor3:string = process.argv[4]

  console.log([cor1, cor2, cor3]) 
}

imprimeTresCoresFavoritas()