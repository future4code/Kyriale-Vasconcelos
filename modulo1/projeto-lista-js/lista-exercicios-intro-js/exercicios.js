// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  let alturaRetangulo = Number(prompt('Digite a altura do retângulo'))
  let larguraRetangulo = Number(prompt('Digite a largura do retângulo'))
  /* area = alturaRetangulo * larguraRetangulo
  return area */
  console.log(alturaRetangulo * larguraRetangulo)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
let anoAtual = Number(prompt('Em que ano estamos?'))
let anoNascimento = Number(prompt('Em que ano você nasceu?'))
console.log(anoAtual - anoNascimento)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return (peso / (altura * altura))
  }
  
calculaIMC (85, 1.8)

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
let nome = prompt('Qual seu nome?')
let idade = Number(prompt('Qual sua idade?'))
let email = prompt('Qual seu email?')
console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}


// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  let cor1 = prompt('Qual sua cor favorita número 1?')
  let cor2 = prompt('Qual sua cor favorita número 2?')
  let cor3 = prompt('Qual sua cor favorita número 3?')
  cores = [cor1, cor2, cor3]
  console.log(cores)  
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
novaString = string.toUpperCase()
return novaString
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
quantidadeIngressos = custo / valorIngresso
return quantidadeIngressos
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
let bool = string1.length === string2.length
return bool
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length-1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  let array0 = array[0]
  array[0] = array[array.length-1]
  array[array.length -1] = array0
return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
linha1 = string1.toLowerCase()
linha2 = string2.toLowerCase()
return linha1 === linha2
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}