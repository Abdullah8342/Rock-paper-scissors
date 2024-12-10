// Accessing Human Choise

const button = document.querySelectorAll('button');
const divResult = document.querySelector('div');

// End Accessing Human Choise

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

function getHumanChoice(humanChoice) {
    // let humanChoice = prompt('Press "Rock" "Paper" "Scissors"');
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


button.forEach((btn) => {
    btn.addEventListener('click', () => {
        let HC = getHumanChoice(btn.textContent);
        let CC = getComputerChoice()
        playRound(HC,CC);
    });
})
// Play Round

function playRound(humanChoice ,computerChoice) {
    if (humanChoice === computerChoice) {
        const para = document.createElement('p');
        const span = document.createElement('span');
        para.innerText = 'Tie';
        divResult.appendChild(para);
        console.log(`Tie`);
    }
    else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        humanScore += 1;
        const para = document.createElement('p');
        const span = document.createElement('span');
        para.innerText = 'You win! Rock beats Scissors';
        span.innerText = `Your Score ${humanScore}`;
        divResult.appendChild(para);
        divResult.appendChild(span);
        console.log(`You win! Rock beats Scissors`);
    }
    else if (humanChoice === 'rock' && computerChoice === 'paper') {
        computerScore +=1;
        const para = document.createElement('p');
        const span = document.createElement('span');
        para.innerText = 'You lose! Paper beats Rock';
        span.innerText = `Computer Score ${computerScore}`;
        divResult.appendChild(para);
        divResult.appendChild(span);
        console.log(`You lose! Paper beats Rock.`);
    }
    else if (humanChoice === 'paper' && computerChoice === 'rock') {
        humanScore += 1;
        const para = document.createElement('p');
        const span = document.createElement('span');
        para.innerText = 'You win! Paper beats Rock';
        span.innerText = `Your Score ${humanScore}`;
        divResult.appendChild(para);
        divResult.appendChild(span);
        console.log(`You Win! Paper beats Rock`);
    }
    else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        computerScore +=1;
        const para = document.createElement('p');
        const span = document.createElement('span');
        para.innerText = 'You lose! Paper beats by Scissors';
        span.innerText = `Computer Score ${computerScore}`;
        divResult.appendChild(para);
        divResult.appendChild(span);
        console.log(`You lose! Paper is beaten by Scissors.`);
    }
    else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        computerScore +=1;
        const para = document.createElement('p');
        const span = document.createElement('span');
        para.innerText = 'You lose! Scissors beaten by Rock';
        span.innerText = `Computer Score ${computerScore}`;
        divResult.appendChild(para);
        divResult.appendChild(span);
        console.log(`You lose! Scissors are beaten by Rock`);
    }
    else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        humanScore += 1;
        const para = document.createElement('p');
        const span = document.createElement('span');
        para.innerText = 'You win! Scissors beats Paper';
        span.innerText = `Your Score ${humanScore}`;
        divResult.appendChild(para);
        divResult.appendChild(span);
        console.log(`You Win! Scissors beats Paper`);
    }
    if (humanScore == 5) {
        h1.innerText = 'You Won';
        divResult.innerHTML = '';
        divResult.appendChild(h1);
    }
    else if (computerScore == 5) {
        h1.innerText = 'Computer Won';
        divResult.innerHTML = '';
        divResult.appendChild(h1);
    };
}

// End playround

const h1 = document.createElement('h1');

// Winner 

// End Winner

