// Score Variable
let humanScore = 0;
let computerScore = 0;

// Computer choice
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return 'rock';
    }
    else if (choice === 1) {
        return 'paper';
    }
    else if (choice === 2) {
        return 'scissors';
    }
}

// console.log(getComputerChoice());

// End Computer choice

// Human choice

function getHumanChoice() {
    let humanChoice = prompt('Press "Rock" "Paper" "Scissors"');
    humanChoice = humanChoice.toUpperCase();
    if (humanChoice === "ROCK") {
        return 'rock';
    }
    else if (humanChoice === "PAPER") {
        return 'paper';
    }
    else if (humanChoice === "SCISSORS") {
        return 'scissors';
    }
}

// console.log(getHumanChoice());

// End Human choice


// Play Round

function playRound(humanChoice ,computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`Tie`);
    }
    else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        humanScore += 1;
        console.log(`You win! Rock beats Scissors`);
    }
    else if (humanChoice === 'rock' && computerChoice === 'paper') {
        computerScore +=1;
        console.log(`You lose! Paper beats Rock.`);
    }
    else if (humanChoice === 'paper' && computerChoice === 'rock') {
        humanScore += 1;
        console.log(`You Win! Paper beats Rock`);
    }
    else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        computerScore +=1;
        console.log(`You lose! Paper is beaten by Scissors.`);
    }
    else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        computerScore +=1;
        console.log(`You lose! Scissors are beaten by Rock`);
    }
    else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        humanScore += 1;
        console.log(`You Win! Scissors beats Paper`);
    }
}

// End playround

// Play Round

function PlayGame() {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection ,computerSelection);
}
for (let i = 0;i < 5;i++) {
    console.log(PlayGame());
}

if (humanScore > computerScore) {
    console.log(`You Won`);
}
else if (humanScore < computerScore) {
    console.log('You Lose');
}
else if (humanScore === computerScore) {
    console.log('Draw match');
}
console.log(`Your Score ${humanScore} Computer Score ${computerScore}`);
// End playRound

