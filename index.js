
function computerPlay() {
    let choice = ['rock', 'paper', 'scissor'];
    let random = Math.floor(Math.random() * 3 );
    return choice[random];
}

function playRound(userChoice, computerChoice) {
    if(userChoice === computerChoice) {
        console.log('It\'s a tie!');
        return;
    }
    
    if(userChoice === 'paper') {
        if(computerChoice === 'rock') {
            console.log('You win! Paper beats Rock');
            return 1;
        }

        if(computerChoice === 'scissor') {
            console.log('You lose! Scissor beats Paper');
            return 0
        }
    }
    
    if(userChoice === 'rock') {
        if(computerChoice === 'scissor') {
            console.log('You win! Rock beats Scissor');
            return 1
        }

        if(computerChoice === 'paper') {
            console.log('You lose! Paper beats Rock');
            return 0;
        }
    }
    
    if(userChoice === 'scissor') {
        if(computerChoice === 'paper') {
            console.log('You win! Scissor beats Paper');
            return 1;
        }

        if(computerChoice === 'rock') {
            console.log('You lose! Rock beats Scissor');
            return 0;
        }
    }
}

function game() {
    let userScore = 0;
    let computerScore = 0;
    for(let i = 0; i < 5; i++) {
        let userChoice = prompt('Choose your weapon: Rock Paper Scissor').toLowerCase();
        let computerChoice = computerPlay();
        let round = playRound(userChoice, computerChoice);

        if(round === 0) {
            computerScore += 1;
        }
        else if(round === 1){
            userScore += 1;
        }
    }

    if(userScore > computerScore) {
        console.log('You won! ' + userScore + ' round out of 5');
    }
    else if(userScore < computerScore) {
        console.log('You lost! computer won ' + computerScore + ' round out of 5');
    }
    else {
        console.log('It\'s a tie! equal rounds');
    }
    
}