/* Pesquise sobre a sintaxe if/else. Depois, escreva uma função que recebe um objeto que represente uma pessoa com as propriedades: nome e gênero. 
Essa função deve retornar "Bem-vinda, nomeDaPessoa", caso o valor da propriedade gênero seja "feminino". 
Caso seja "masculino", deve retornar "Bem-vindo, nomeDaPessoa". 
Caso o valor da propriedade seja "outro" , devemos retornar "Desejamos boas-vindas!". */

function (nome, usuario){
    let nome = prompt("Qual seu nome?")
    let usuario = prompt("Qual seu gênero? Escolha entre Masculino, Feminino ou Outro.").toLowerCase
    if {(usuario === "masculino")
        console.log("Bem-vindo,", nome)}
    else {(usuario === "feminino")
        console.log("Bem-vinda,", nome)}
    else {(usuario === "outro")
        console.log("Olá,", nome, "desejamos as boas-vindas!")}
}
