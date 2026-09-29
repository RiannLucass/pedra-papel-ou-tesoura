const result = document.querySelector('#result')
const myScore = document.querySelector('#my-score')
const scoreBot = document.querySelector('#score-bot')

let humanScoreNumber = 0
let botScoreNumber = 0

const playHuman = (humanChoice) => {
    playGame(humanChoice, playBot())
}

const playBot = () => {
    const choices = ['stone', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}

const playGame = (human, bot) => {
    console.log('Human: ' + human + ' Bot: ' + bot)

    if (human === bot) {
        result.innerHTML = 'Deu empate...'
    } else if (human === 'paper' && bot === 'stone' || human === 'stone' && bot === 'scissors' || human === 'scissors' && bot === 'paper') {
        humanScoreNumber++
        myScore.innerHTML = humanScoreNumber
        result.innerHTML = 'Você ganhou...'
    } else {
        botScoreNumber++
        scoreBot.innerHTML = botScoreNumber
        result.innerHTML = 'Você perdeu...'
    }
}