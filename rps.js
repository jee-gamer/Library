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

    let rockButton = document.createElement('button');
    rockButton.textContent = 'rock';

    let paperButton = document.createElement('button');
    paperButton.textContent = 'paper';

    let scissorsButton = document.createElement('button');
    scissorsButton.textContent = 'scissors';

    let buttonList = [rockButton, paperButton, scissorsButton];

    let buttonDiv = document.querySelector('#buttons');
    let resultDiv = document.querySelector('#results');
    let scoreDiv = document.querySelector('#scores');

    for (button of buttonList){
        buttonDiv.appendChild(button);
        button.addEventListener('click', (e) => display(e));
    }

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

    let display = function (e){
        resultDiv.textContent = play(e.target.textContent, getComputerChoice());
        if (humanScore < 5 && computerScore < 5){
            scoreDiv.textContent = `Your score: ${humanScore} \nComputer score: ${computerScore}`;
            return
        }
        if (humanScore >= 5){
            scoreDiv.textContent = `You win the game! \nYour score: ${humanScore} \nComputer score: ${computerScore}`;
        }
        else if (computerScore >= 5){
            scoreDiv.textContent = `You lose the game! \nYour score: ${humanScore} \nComputer score: ${computerScore}`;
        }
        humanScore = 0;
        computerScore = 0;
    }
}

playGame();