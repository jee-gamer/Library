// Rock Paper Scissors

const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice(){
    let chose = Math.floor(Math.random() * 3); // Exclusive
    return choices[chose];
}

function getHumanChoice(){
    let input = prompt("What's your move?");
    input = input.toLowerCase();
    return input;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    let win = function winStatus(humanChoiceIndex, computerChoiceIndex) {
        if (humanChoiceIndex === computerChoiceIndex + 1 || (humanChoiceIndex === 0 && computerChoiceIndex === 2)) {
            return 1;
        }
        if (humanChoiceIndex === computerChoiceIndex) {
            return 2;
        }
        return 0;
    }

    let play = function playRound(humanChoice, computerChoice){
        let humanChoiceIndex = choices.indexOf(humanChoice);
        let computerChoiceIndex = choices.indexOf(computerChoice);

        let winStat = win(humanChoiceIndex, computerChoiceIndex);

        if (winStat === 1){
            humanScore++;
            return `You win! ${humanChoice} beats ${computerChoice}`
        }
        else if (winStat === 2){
            return `Stalemate!`
        }
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}`
    }

    for (let i=0; i<5; i++){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        console.log(play(humanChoice, computerChoice));
    }

    console.log(`Your score is ${humanScore}`);
    console.log(`Computer score is ${computerScore}`);
}

playGame();