
function computerPlay() {
    let choice = ['rock', 'paper', 'scissors'];
    let random = Math.floor(Math.random() * 3 );
    return choice[random];
}

function playRound(userChoice, computerChoice) {
    let annouceResult = document.querySelector('.round_result');

    if(userChoice === computerChoice) {
        annouceResult.textContent = 'It\'s a tie!';
        return;
    }
    
    if(userChoice === 'paper') {
        if(computerChoice === 'rock') {
            annouceResult.textContent = 'You win! Paper beats Rock';
            return 1;
        }

        if(computerChoice === 'scissors') {
            annouceResult.textContent = 'You lose! Scissors beats Paper';
            return 0
        }
    }
    
    if(userChoice === 'rock') {
        if(computerChoice === 'scissors') {
            annouceResult.textContent = 'You win! Rock beats Scissors';
            return 1
        }

        if(computerChoice === 'paper') {
            annouceResult.textContent = 'You lose! Paper beats Rock';
            return 0;
        }
    }
    
    if(userChoice === 'scissors') {
        if(computerChoice === 'paper') {
            annouceResult.textContent = 'You win! Scissors beats Paper';
            return 1;
        }

        if(computerChoice === 'rock') {
            annouceResult.textContent = 'You lose! Rock beats Scissors';
            return 0;
        }
    }
}

let rounds = 0;
let userScore = 0;
let computerScore = 0;
let tie = 0;

function game(weapon) {
    

    let userChoice = weapon.id;
    let computerChoice = computerPlay();
    let round = playRound(userChoice, computerChoice);
    let annouceResult = document.querySelector('.final_result');
    console.log(computerChoice)

    if(round === 0) {
        computerScore += 1;
    }
    else if(round === 1){
        userScore += 1;
    }
    else {
        tie += 1;
    }
    
    if(rounds === 4) {
        if(userScore > computerScore) {
            annouceResult.textContent = 'You won! ' + userScore + ' rounds out of ' + (5 - tie);
        }
        else if(userScore < computerScore) {
            annouceResult.textContent = 'You lost! computer won ' + computerScore + ' rounds out of ' + (5 - tie);
        }
        else {
            annouceResult.textContent = 'It\'s a tie! equal rounds';
        } 
    }
    rounds += 1;
}

const weapons = document.querySelectorAll('.weapon')
weapons.forEach(weapon => {
    weapon.addEventListener('click', event => {
        if(rounds < 5) {
        game(weapon);
        } else {
            document.querySelector('.round_result').textContent = 'Refresh to play again';
        }
    })
})
