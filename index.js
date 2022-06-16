
function computerPlay() {
    let choice = ['rock', 'paper', 'scissor']
    let random = Math.floor(Math.random() * 3 )
    return choice[random]
}

function round(user_choice, computer_choice) {
    if(user_choice === computer_choice) {
        return 'It\'s a tie!'
    }
    
    if(user_choice === 'paper') {
        if(computer_choice === 'rock') {
            return 'You win! Paper beats Rock'
        }

        if(computer_choice === 'scissor') {
            return 'You lose! Scissor beats Paper'
        }
    }
    
    if(user_choice === 'rock') {
        if(computer_choice === 'scissor') {
            return 'You win! Rock beats Scissor'
        }

        if(computer_choice === 'paper') {
            return 'You lose! Paper beats Rock'
        }
    }
    
    if(user_choice === 'scissor') {
        if(computer_choice === 'paper') {
            return 'You win! Scissor beats Paper'
        }

        if(computer_choice === 'rock') {
            return 'You lose! Rock beats Scissor'
        }
    }
}