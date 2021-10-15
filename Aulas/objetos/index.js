const pokemon = {
    nome: "Pikachu",
    cor: "Amarelo",
    tipos: ["elétrico", "shiny"],
    ataque: () => {
        return "Pikachu mandou um relâmpago na equipe Rocket"
    }
}

const pokemons = [
    {
        nome: "Pikachu",
        cor: "Amarelo",
        tipos: ["elétrico", "shiny"],
        ataque: () => {
            return "Pikachu mandou um relâmpago na equipe Rocket"
        } 
    },
    {
        nome: "Raichu",
        cor: "Amarelo",
        tipos: ["elétrico"],
        ataque: () => {
            return "Raichu mandou um relâmpago na equipe Rocket"
        } 
    },
    {
        nome: "Pichu",
        cor: "Amarelo",
        tipos: ["elétrico"],
        ataque: () => {
            return "Pichu mandou um relâmpago na equipe Rocket"
        } 
    }
]

const resultado = pokemons.filter(poke => {
    if (poke.nome === "Raichu") {
        return true
    } else {
        return false
    }
})

///Crie um objeto que represente um filme.
//Ele deve ter dados da direção, o nome, o ano de lançamento,
//uma lista com o elenco e uma propriedade que diga se você já viu ou não.

//Acesse e imprima no console cada uma das propriedades:
//metade usando notação do ponto e a outra metade com notação de colchetes.


const filme = {
    nome: "007: Cassino Royale",
    ano_de_lancamento: 2006,
    direcao: "Martin Campbell",
    elenco: [ "Daniel Craig", "Eva Green", "Judi Dench" ],
    personagens: [
        "James Bond",
        "Vesper Lynd",
        "M" 
    ],
    assistiu: true
}

filme.elenco[0] = "Xuxa"

// console.log(`${filme.personagens[0]} = ${filme.elenco[0]}`)
// console.log(`${filme.personagens[1]} = ${filme.elenco[1]}`)
// console.log(`${filme.personagens[2]} = ${filme.elenco[2]}`)

// console.log(`O nome do filme é ${filme.nome}.
// Seus personagens são:
// ${filme.personagens[0]},
// ${filme.personagens[1]} e
// ${filme.personagens[2]}`)

// console.log("nome = ", filme["nome"])
// console.log(filme.ano_de_lancamento)
// console.log(filme.direcao)
// console.log(filme.elenco)
// console.log(filme["assistiu"])


//Crie um objeto que represente uma pessoa.
//Essa pessoa precisa ter nome, idade, gênero musical preferido.
//Imprima no console as propriedades desse objeto, seguindo o modelo abaixo:

//"O nome da pessoa é ___, ela tem ___ anos e gosta muito  de ___."

const pessoa = {
    nome: "Astrodev",
    idade: 150,
    genero_musical: "classica"
}

const novaPessoa = pessoa

function editaPessoa(individuo) {
    const copia = {
        ...individuo,
        comidas_favoritas: [ "Arroz", "Feijão" ],
        melhor_amigo: {
            nome: "Yuzo",
            idade: 32
        }
    }

    return copia
}

console.log(editaPessoa(pessoa))

// console.log(`O nome da pessoa é ${pessoa.nome},
// ela tem ${pessoa.idade} anos
// e gosta muito de ${pessoa.genero_musical}.`)

const paiDePet = {
    nome: "Caio Teixeira",
    pet: {
        nome: "Lupin",
        raca: "Salsicha", 
        idade: 1
    }
}

const paiDePets = [
    {
        nome: "Caio Teixeira",
        pet: {
            nome: "Lupin",
            raca: "Salsicha", 
            idade: 1
        }
    },
    {
        nome: "Caio Teixeira",
        pet: {
            nome: "Lupin",
            raca: "Salsicha", 
            idade: 1
        }
    },
    {
        nome: "Caio Teixeira",
        pet: {
            nome: "Lupin",
            raca: "Salsicha", 
            idade: 1
        }
    }
]
  
// forma mais reutilizável
// const pet = paiDePets[0].pet
// console.log(pet.nome.toUpperCase())
// console.log(pet.raca) 
// console.log(pet.idade)


// forma mais verbosa
// console.log(paiDePets[0].pet.nome)
// console.log(paiDePets[0].pet.raca)
// console.log(paiDePets[0].pet.idade)

const curso = {
    nome: "Noturno Frontend",
    linguagens: ["JS", "CSS", "HTML"]
}

curso.numeroEstudantes = 50
curso.linguagens[3] = "Java"

// console.log(curso)

// const linguagens = curso.linguagens
// console.log(linguagens) 

// const primeiraLinguagem = linguagens[0]
// console.log(primeiraLinguagem)

const usuario = {
    nome: 'Astrodev',
    idade: 25,
    email: 'astrodev@labenu.com.br'
}

const novoUsuario = {
    ...usuario,
    nome: 'João',
    sobrenome: 'Alves',
    celular: "+55 11 9999 99 99"
}
 
// console.log(usuario)
// console.log("---------")
// console.log(novoUsuario)

const listaDeNomes = ["Pedro", "Chijo", "Amanda"]

const copiaListaDeNomes = [...listaDeNomes, "Índio"]

// console.log(copiaListaDeNomes)