// Human and computer scores initialization
let humanScore = 0;
let computerScore = 0;

// Generate a random number between 0-3
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// Convert the randomly generated number to a choice in the game (Computer's choice) and store it for later usage.
function getComputerChoice(){
    let outPut = getRandomInt(3);

    if (outPut === 0) {
        return "rock"
    } else if (outPut === 1) {
        return "paper"
    } else {
        return "scissors"
    }
}

// Format human choice to be case insensitive.
function getHumanChoice(choice) {
    choice = choice.toLocaleLowerCase();
    return choice;
}


// Implement game logic (round logic)

function playRound(humanChoice, computerChoice) {
    let winner = null;
    switch (humanChoice) {
        case "rock":
            if (computerChoice === humanChoice) {
                winner = "tie"
            } else if (computerChoice === "paper") {
                computerScore = ++computerScore;
                winner = "computer";
            } else {
                humanScore = ++humanScore;
                winner = "human";
            }
            break;
        case "scissors":
            if (computerChoice === humanChoice) {
                winner = "tie"
            } else if (computerChoice === "rock") {
                computerScore = ++computerScore;
                winner = "computer";
            } else {
                humanScore = ++humanScore;
                winner = "human";
            }
            break;
        case "paper":
            if (computerChoice === humanChoice) {
                winner = "tie"
            } else if (computerChoice === "scissors") {
                computerScore = ++computerScore;
                winner = "computer";
            } else {
                humanScore = ++humanScore;
                winner = "human";
            }
            break;
    }
    return winner;
}

// Implement entire game logic
function playGame () {
    for (let i = 0; i < 5; i++) {
        // Get human and computer choices and store in a variable
        let humanChoice = prompt("Rock, paper, or scissors?")
        humanChoice = getHumanChoice(humanChoice);
        let computerChoice = getComputerChoice()

        let winner = playRound(humanChoice, computerChoice);

        if (winner === "human") {
            console.log(`You win! ${humanChoice} beats ${computerChoice}, your score: ${humanScore}, computer score: ${computerScore}`)
        } else if (winner === "computer") {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}, your score: ${humanScore}, computer score: ${computerScore}`)
        } else {
            console.log(`It's a tie!, your score: ${humanScore}, computer score: ${computerScore}`)
        }
    }
    if (humanScore > computerScore) {
        console.log(`Congratulations! You have won the game!`)
    } else if (humanScore < computerScore) {
        console.log(`Good luck next time! Computer wins!`)
    }
    else {
        console.log(`It's a tie!`)
    }
}


playGame()