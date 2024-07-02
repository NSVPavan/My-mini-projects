let gameStarted = false;
let responses = ["ROCK", "PAPER", "SCISSOR"];
let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissor = document.querySelector(".scissor");
let final = document.querySelector(".final");
let heading = document.querySelector(".console .heading");
let move = document.querySelector(".console .move");

//Generate computer's move
function randomResponse() {
  return responses[Math.floor(Math.random() * responses.length)];
}

function restartGame() {
  gameStarted = false;
  heading.innerText = "Press any key to start!";
  heading.style.color = "red";
}

async function getUserResponse() {
  return new Promise((resolve) => {
    rock.style.cursor = "pointer";
    paper.style.cursor = "pointer";
    scissor.style.cursor = "pointer";

    function handleChoiceClick(response) {
      resolve(response);
      cleanUp();
    }

    rock.addEventListener("click", () => handleChoiceClick("ROCK"));
    paper.addEventListener("click", () => handleChoiceClick("PAPER"));
    scissor.addEventListener("click", () => handleChoiceClick("SCISSOR"));

    function cleanUp() {
      rock.removeEventListener("click", () => handleChoiceClick("ROCK"));
      paper.removeEventListener("click", () => handleChoiceClick("PAPER"));
      scissor.removeEventListener("click", () => handleChoiceClick("SCISSOR"));
    }
  });
}

function determineWinner(userResponse, computerResponse) {
  if (userResponse === computerResponse) {
    return "draw";
  } else if (
    (userResponse === "ROCK" && computerResponse === "SCISSOR") ||
    (userResponse === "PAPER" && computerResponse === "ROCK") ||
    (userResponse === "SCISSOR" && computerResponse === "PAPER")
  ) {
    return "user";
  } else {
    return "computer";
  }
}

//Game logic
document.addEventListener("keydown", async () => {
  if (gameStarted) {
    return;
  }

  gameStarted = true;
  console.clear();
  console.log("Game has started!");

  let userPoints = 0,
    computerPoints = 0,
    draw = 0;

  heading.innerText = `Won: ${userPoints} | Lost: ${computerPoints} | Draw: ${draw}`;
  heading.style.color = "green";

  while (userPoints < 5 && computerPoints < 5) {
    let userResponse = await getUserResponse();
    let computerResponse = randomResponse();

    let result = determineWinner(userResponse, computerResponse);

    if (result === "user") {
      userPoints++;
    } else if (result === "computer") {
      computerPoints++;
    } else {
      draw++;
    }

    heading.innerText = `Won: ${userPoints} | Lost: ${computerPoints} | Draw: ${draw}`;
    move.innerText = `Your move: ${userResponse} VS Computer's move: ${computerResponse}`;
  }

  if (userPoints === 5) {
    final.innerText = "Congrats!! You won.";
    final.style.color = "green";
  } else {
    final.innerText = "You lost :(";
    final.style.color = "red";
  }

  restartGame();
});
