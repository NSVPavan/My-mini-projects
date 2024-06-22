function randomNum() {
  return Math.floor(Math.random() * 4 + 1);
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

let gameStarted = false;
let sequence = [];
let currResponse = -1;

async function flash(button, flashColor, currColor) {
  if (!gameStarted) return;
  button.style.backgroundColor = flashColor;
  await delay(100);
  button.style.backgroundColor = currColor;
}

function handleButtonClick(button, number) {
  let currColor = window.getComputedStyle(button).backgroundColor;
  flash(button, 'green', currColor);
  currResponse = number;
}

function setupButtonListeners() {
  let btn1 = document.querySelector("#btn-1");
  let btn2 = document.querySelector("#btn-2");
  let btn3 = document.querySelector("#btn-3");
  let btn4 = document.querySelector("#btn-4");

  btn1.onclick = () => handleButtonClick(btn1, 1);
  btn2.onclick = () => handleButtonClick(btn2, 2);
  btn3.onclick = () => handleButtonClick(btn3, 3);
  btn4.onclick = () => handleButtonClick(btn4, 4);
}

document.addEventListener("keydown", (event) => {
  if (!gameStarted) {
    gameStarted = true;
    startGame();
  }
});

async function startGame() {
  let ct = 1;
  sequence = [];
  let p = document.querySelector("p");
  
  while (true) {
    p.textContent = `Level ${ct}`;
    let num = randomNum();
    let button = document.querySelector(`#btn-${num}`);
    let currColor = window.getComputedStyle(button).backgroundColor;
    sequence.push(num);
    await flash(button, 'white', currColor);

    for (let curr = 0; curr < ct; curr++) {
      currResponse = -1;
      while (currResponse == -1) {
        await delay(100);
      }
      if (sequence[curr] !== currResponse) {
        let body = document.querySelector('body');
        await flash(body, 'red', 'white');
        p.textContent = `Game Over :( . Your score is ${
          ct - 1
        }. Press any key to Start`;
        gameStarted = false;
        return;
      }
    }
    ct++;
    await delay(1000);
  }
}

setupButtonListeners();
