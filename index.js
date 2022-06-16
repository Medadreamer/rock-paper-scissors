
function computerPlay() {
    let choice = ['rock', 'paper', 'scissor'];
    let random = Math.floor(Math.random() * 3 );
    return choice[random];
}

function playRound(userChoice, computerChoice) {
    if(userChoice === computerChoice) {
        return 'It\'s a tie!';
    }
    
    if(userChoice === 'paper') {
        if(computerChoice === 'rock') {
            return 'You win! Paper beats Rock';
        }

        if(computerChoice === 'scissor') {
            return 'You lose! Scissor beats Paper';
        }
    }
    
    if(userChoice === 'rock') {
        if(computerChoice === 'scissor') {
            return 'You win! Rock beats Scissor';
        }

        if(computerChoice === 'paper') {
            return 'You lose! Paper beats Rock';
        }
    }
    
    if(userChoice === 'scissor') {
        if(computerChoice === 'paper') {
            return 'You win! Scissor beats Paper';
        }

        if(computerChoice === 'rock') {
            return 'You lose! Rock beats Scissor';
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
            userScore += 1;
        }
        else {
            userChoice += 1;
        }
    }

    if(userScore > computerScore) {
        console.log('You won!' + userScore + 'round out of 5')
    }
    else {
        console.log('You lost! computer won' + computerScore + 'round out of 5')
    }
}