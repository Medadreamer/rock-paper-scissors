
function computerPlay() {
    let choice = ['rock', 'paper', 'scissor']
    let random = Math.floor(Math.random() * 3 )
    return choice[random]
}