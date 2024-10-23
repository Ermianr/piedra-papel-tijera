const buttons = document.querySelectorAll("button");
const resultados = document.querySelector("#resultado");
const movimientoCpu = document.querySelector("#movimiento-cpu");
const estadoVs = document.querySelector("#estado-vs");
let finalHumanChoice = "";
let humanScore = 0;
let computerScore = 0;
let games = 0;

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        if (e.target.id === "piedra") {
            finalHumanChoice = "piedra";
            games++;
            playGame();
        } else if (e.target.id === "papel") {
            finalHumanChoice = "papel";
            games++;
            playGame();
        } else if (e.target.id === "tijeras") {
            finalHumanChoice = "tijeras";
            games++;
            playGame();
        } else {
            reset();
        }
    })
})


const getComputerChoice = () => {
    const randNumber = Math.round(Math.random() * 2)
    const choices = ["piedra", "papel" ,"tijeras"]
    const computerChoice = choices[randNumber]
    return computerChoice
}

const playRound = (humanChoice, computerChoice) => {
    if (humanChoice === computerChoice) {
        movimientoCpu.innerText = `CPU Escoge ${computerChoice}`;
        estadoVs.innerText = "¡Empate!";
    } else if (humanChoice === "tijeras" && computerChoice === "papel") {
        movimientoCpu.innerText = `CPU Escoge ${computerChoice}`;
        estadoVs.innerText = "¡Ganas! Tijeras le gana a Papel";
        humanScore++;
    } else if (humanChoice === "tijeras" && computerChoice === "piedra") {
        movimientoCpu.innerText = `CPU Escoge ${computerChoice}`;
        estadoVs.innerText = "¡Pierdes! Piedra le gana a Tijeras";
        computerScore++;
    } else if (humanChoice === "papel" && computerChoice === "piedra") {
        movimientoCpu.innerText = `CPU Escoge ${computerChoice}`;
        estadoVs.innerText = "¡Ganas! Papel le gana a Piedra";
        humanScore++;
    } else if (humanChoice === "papel" && computerChoice === "tijeras") {
        movimientoCpu.innerText = `CPU Escoge ${computerChoice}`;
        estadoVs.innerText = "¡Pierdes! Tijeras le gana a Papel";
        computerScore++;
    } else if (humanChoice === "piedra" && computerChoice === "papel") {
        movimientoCpu.innerText = `CPU Escoge ${computerChoice}`;
        estadoVs.innerText ="¡Pierdes! Papel le gana a Piedra";
        computerScore++;
    } else if (humanChoice === "piedra" && computerChoice === "tijeras") {
        movimientoCpu.innerText = `CPU Escoge ${computerChoice}`;
        estadoVs.innerText = "¡Ganas! Piedra le gana a Tijeras";
        humanScore++;
    }     
}

const playGame = () => {
    const finalComputerChoice = getComputerChoice();
    playRound(finalHumanChoice, finalComputerChoice);
    if (games === 5) {
        if (humanScore > computerScore) {
            resultados.innerText = ` ---FIN DEL JUEGO--- Humano gano con ${humanScore} puntos.`;
        } else {
            resultados.innerText = (` ---FIN DEL JUEGO--- Maquina gano con ${computerScore} puntos.`);
        }
    }
}

const reset = () => {
    computerScore = 0;
    humanScore = 0;
    resultados.innerText = "";
    movimientoCpu.innerText = "";
    estadoVs.innerText = "";
    games = 0;
}
