//Exercícios de interpretação de código
/* 1. Leia o código abaixo. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)

console.log("d. ", typeof resultado) */
//a. false ; b. false ; c. true ; d. boolean

/* 2. Seu colega se aproxima de você falando que o código dele não funciona como devia.  Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console? 
    
    ```jsx
    let primeiroNumero = prompt("Digite um numero!")
    let segundoNumero = prompt("Digite outro numero!")
    
    const soma = primeiroNumero + segundoNumero
    
    console.log(soma)
    ``` */
    //O problema é que ele está pedindo um número, mas esqueceu de colocar "Number" para transformar a resposta do usuário em número, o programa está lendo como uma string. No console terá a junção dos dois números, e não a soma.

/* 3. Para o exercício anterior, sugira ao seu colega uma solução para que o valor impresso no console seja, de fato, a soma dos dois números. */

/* let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma) */

//Exercícios de escrita de código
/* 1. Faça um programa que:
    
    a) Pergunte a idade do usuário
    
    b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga
    
    c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)
    
    d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo) */

    let idadeUsuario = Number(prompt("Qual a sua idade?"))
    let idadeAmigue = Number(prompt("Qual idade do seu amigue?"))
    let diferenca = idadeUsuario-idadeAmigue
    resultado = diferenca > 0
    
    console.log("1.a) Sua idade é maior do que a do seu amigue?", resultado)
    console.log("1.b) Qual a diferença entre a idade de vocês?", diferenca)
    
/* 2. Faça um programa que:
    a) Peça ao usuário que insira um número **par**
    b) Imprima na console **o resto da divisão** desse número por 2.
    c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
    d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código */

let par = Number(prompt("Escolha um número par"))
let divisao = par % 2
console.log("2.a) A divisão entre o número inserido e dois tem como sobra ", divisao)
//2.c) Números pares semrpe tem como resto 0.
//2.d) Números ímpares sempre têm como resto 1.

/* 3. Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 
    a) A idade do usuário em meses
    b) A idade do usuário em dias
    c) A idade do usuário em horas */

let idadeAno = Number(prompt("Quantos anos você tem?"))

let ano = 2021-idadeAno
let meses = idadeAno * 12
let dias = idadeAno * 365
let horas = (dias * 24)

console.log("3.a) O usuário tem", meses, "meses de vida")
console.log("3.b) O usuário tem", dias, "dias de vida")
console.log("3.c) O usuário tem", horas, "horas de vida")
// Me incomodou perguntar a idade e não a data de nascimento do usuário, com esse dado não seria possível ter um resultado exato da idade em meses, dias ou horas. Sugestão de resolução para algo mais específico:

/* let dia = Number(prompt("Em qual dia você nasceu? Coloque 2 dígitos, dd."))
let mes = Number(prompt("Em qual mês você nasceu? Coloque o número do mês, com 2 dígitos, mm."))
let ano = Number(prompt("em qual ano você nasceu? Coloque o ano com 4 dígitos, aaa."))
let hora = Number(prompt("em qual hora você nasceu aproximadamente? Coloque apenas números, com hora cheia, hh."))

let meses = ((2021 - ano) * 12 ) + mes
let dias = (meses * 365) + dia
let horas = (dias * 24) + hora

console.log("3.a) O usuário tem", meses, "meses de vida")
console.log("3.b) O usuário tem", dias, "dias de vida")
console.log("3.c) O usuário tem", horas, "horas de vida") */

/* 4. Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo `true` ou `false`:
        
    ```html
    O primeiro numero é maior que segundo? true
    O primeiro numero é igual ao segundo? false
    O primeiro numero é divisível pelo segundo? true
    O segundo numero é divisível pelo primeiro? true
    
    obs: O true ou false vai depender dos números inseridos e do resultado das operações.
    ``` */
    let n1 = Number(prompt("Escolha um número de 0 a 100"))
    let n2 = Number(prompt("Escolha outro número de 0 a 100"))
    
    resultado = n1 > n2
    console.log("resultado a: ", resultado)
    
    resultado = n1 === n2
    console.log("resultado b: ", resultado)
    
    resto = n1 % n2 === 0
    console.log("resultado c: ", resto)
    
    resto = n2 % n1 === 0
    console.log("resultado d: ", resto)

    // DESAFIOS
/*1. Para este exercício, será necessário o conhecimento das fórmulas para mudar a unidade de temperatura entre Graus Celsius(°C),  Graus Fahrenheit(°F) e Kelvin(K). Abaixo estão duas delas:
    - Graus Fahrenheit(°F) para Kelvin(K)  
        ```
        (KELVIN) = (GRAUS_FAHRENHEIT - 32)*(5/9) + 273.15
        ```   
    - Graus Celsius(°C) para Graus Fahrenheit (°C)
        ```
        (GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*(9/5) + 32
       ```
    a) Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.
    b) Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também
    c) Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também
    d) Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter */

 let ok = prompt("Desafio 01!")
    console.log("Vamos?" , ok)
    
    let F = 77
    let K = (F - 32) * (5/9 + 273.15)
    console.log("resultado desafio 1.a ", K , "°K")
    
    let C = 80
    F = (C * (9/5)) + 32
    console.log("resultado desafio 1.b ", F , "°F")
    
    C = 30
    F = (C * (9/5)) + 32
    K = (F - 32) * (5/9 + 273.15)
    console.log("resultado desafio 1.c: 30 °C é o mesmo que ", F , "°F ou" , K, "K")
    
    let cPerson = Number(prompt("Qual temperatura em °C você deseja converter em °F e K?"))
    
    let fPerson = (cPerson * (9/5)) + 32
    let kPerson = (fPerson - 32) * (5/9 + 273.15)
    
    console.log("resultado desafio 1.d: ", cPerson, "°C é o mesmo que ", fPerson , "°F ou" , kPerson, "K")

/*2. Quilowatt-hora é uma unidade de energia; e é muito utilizada para se determinar o consumo de energia elétrica em residências. Sabe-se que o quilowatt-hora de energia custa R$0.05. Faça um programa que receba a quantidade de quilowatts consumida por uma residência.
    
    a) Calcule e mostre o valor a ser pago por uma residência que consuma 280 quilowatt-hora
    
    b) Altere o programa para receber mais um valor: a porcentagem de desconto. Calcule e mostre o valor a ser pago pela mesma residência acima considerando 15% de desconto */

let ok2 = prompt("Desafio 02!")
    console.log("Vamos?" , ok2)
    
    // kwh = quilowatt-hora
    
    let kwh = 280
    let preco = kwh * 0.05
    console.log("O valor da conta neste mês, com 280 kW/h foi de R$" , preco)
    
    let desconto = preco * 0.85
    console.log("O valor da conta neste mês, com 280 kW/h e 15% de desconto foi de R$" , desconto)

/* 3. Um grande problema que o mundo tem atualmente é a quantidade de unidades que existem para representar a mesma coisa. Por exemplo, para representar a Massa de um corpo, podemos usar quilograma (kg), onça (oz) e até libra (lb). Para representar Distâncias, existem metro (m), pés (ft), milha (mi). Até para volumes, há várias opções: litro (l), galão (gal),  xícaras (xic). Dada essa introdução, faça o que se pede:
 
    b) Procure uma forma de converter onça (oz) para quilograma (kg) e escreva um programa que converta 10.5oz para kg. Imprima  a resposta no console da seguinte forma: 
    `10.5oz equivalem a X kg`
    c) Procure uma forma de converter milha (mi) para metro (m) e escreva um programa que converta 100mi para m. Imprima  a resposta no console da seguinte forma: 
    `100mi equivalem a X m`
    d) Procure uma forma de converter pés (ft) para metro (m) e escreva um programa que converta 50ft para m. Imprima  a resposta no console da seguinte forma: 
    `50ft equivalem a X m`
    e) Procure uma forma de converter galão (gal) para litro (l) e escreva um programa que converta 103.56gal para litro. Imprima  a resposta no console da seguinte forma: 
    `103.56gal equivalem a X l`
    f) Procure uma forma de converter xícara (xic) para litro (l) e escreva um programa que converta 450xic para litro. Imprima  a resposta no console da seguinte forma: 
    `450 xic equivalem a X l`
    g) Escolha ao menos **um** dos itens anteriores e modifique o programa para que ele peça ao usuário o valor da unidade original antes de converter */

    //a) Procure uma forma de converter libra (lb) para quilograma (kg) e escreva um programa que converta 20lb para kg. Imprima  a resposta no console da seguinte forma:  `20lb equivalem a X kg`

    let lb = 20
    let kg = lb/2.205
        
        console.log("20 lb equivalem a", kg, "kg.")
// Para os demais a lógica é a mesma, apenas mudando o fator de conversão.