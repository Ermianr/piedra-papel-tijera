let humanScore = 0
let computerScore = 0

const getComputerChoice = () => {
    const randNumber = Math.round(Math.random() * 2)
    const choices = ["piedra", "papel" ,"tijeras"]
    const computerChoice = choices[randNumber]
    return computerChoice
}

const getHumanChocie = () => {
    const humanChoice = prompt("Ingrese 'Piedra' 'Papel 'Tijeras'")
    return humanChoice
}

const playRound = (humanChoice, computerChoice) => {
    humanChoice = humanChoice.toLowerCase()
    if (humanChoice === computerChoice) {
        console.log(`CPU Escoge ${computerChoice}` )
        console.log("¡Empate!")
    } else if (humanChoice === "tijeras" && computerChoice === "papel") {
        console.log(`CPU Escoge ${computerChoice}` )
        console.log("¡Ganas! Tijeras le gana a Papel")
        humanScore++
    } else if (humanChoice === "tijeras" && computerChoice === "piedra") {
        console.log(`CPU Escoge ${computerChoice}` )
        console.log("¡Pierdes! Piedra le gana a Tijeras")
        computerScore++
    } else if (humanChoice === "papel" && computerChoice === "piedra") {
        console.log(`CPU Escoge ${computerChoice}` )
        console.log("¡Ganas! Papel le gana a Piedra")
        humanScore++
    } else if (humanChoice === "papel" && computerChoice === "tijeras") {
        console.log(`CPU Escoge ${computerChoice}` )
        console.log("¡Pierdes! Tijeras le gana a Papel")
        computerScore++
    } else if (humanChoice === "piedra" && computerChoice === "papel") {
        console.log(`CPU Escoge ${computerChoice}` )
        console.log("¡Pierdes! Papel le gana a Piedra")
        computerScore++
    } else if (humanChoice === "piedra" && computerChoice === "tijeras") {
        console.log(`CPU Escoge ${computerChoice}` )
        console.log("¡Ganas! Piedra le gana a Tijeras")
        humanScore++
    }     
}

const playGame = () => { 
    let counter = 1
    while (counter <= 5) {
        const finalComputerChoice = getComputerChoice()
        const finalHumanChoice = getHumanChocie()
        playRound(finalHumanChoice, finalComputerChoice)
        counter++
    }
    if (humanScore > computerScore) {
        console.log(`Humano gano con ${humanScore} puntos.`)
    } else {
        console.log(`Maquina gano con ${computerScore} puntos.`)
    }
}

playGame()


