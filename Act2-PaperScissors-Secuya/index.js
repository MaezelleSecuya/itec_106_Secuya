const gameSection = ["Rock", "Paper", "Scissors"];
const player = document.querySelector(".player");
const computer = document.querySelector(".computer");
const statusElement = document.querySelector(".status");

function playBtn(playerChoice) {
    const computerChoice = gameSection[Math.floor(Math.random() * 3)];
    let resultMessage = "";

    if (playerChoice === computerChoice) {
        resultMessage = "It's a tie!";
        statusElement.style.color = "orange";
    } else {
        switch (playerChoice) {
            case "Rock":
                resultMessage = (computerChoice === "Scissors") ? "You Win!" : "You Lose!";
                statusElement.style.color = (resultMessage === "You Win!") ? "green" : "red";
                break;
            case "Paper":
                resultMessage = (computerChoice === "Rock") ? "You Win!" : "You Lose!";
                statusElement.style.color = (resultMessage === "You Win!") ? "green" : "red";
                break;
            case "Scissors":
                resultMessage = (computerChoice === "Paper") ? "You Win!" : "You Lose!";
                statusElement.style.color = (resultMessage === "You Win!") ? "green" : "red";
                break;
        }
    }

    player.textContent = `Player: ${playerChoice}`;
    computer.textContent = `Computer: ${computerChoice}`;
    statusElement.textContent = resultMessage;
}
