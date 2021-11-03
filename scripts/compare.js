import { getHtmlDropZone } from "./game.js";
import { showGameOver } from "./gameover.js";
import { gameLine, score, lives } from "./main.js";


let playerScore = 0;
export let playerLives = 3;

export function compareYears(dragged) {
  const droppedYear = Number(dragged.getElementsByTagName("img")[0].id);
  let rigthYear = dragged.parentNode.nextSibling;
  let leftYear = dragged.parentNode.previousSibling;
  if (rigthYear) {
    rigthYear = Number(rigthYear.id);
  }
  if (leftYear) {
    leftYear = Number(leftYear.id);
  }
  if (
    (droppedYear < rigthYear || !rigthYear) &&
    (droppedYear > leftYear || !leftYear)
  ) {
    success(dragged);
  } else {
    failure(dragged);
  }
}

export function saveScore(newScore) {
  playerScore = newScore;
  score.innerText = playerScore;
}

export function resetLives(){
  playerLives = 3;
}

function loseLive(newLife) {
  playerLives = newLife;
  lives[playerLives].style.height = "2.5em";
  lives[playerLives].style.opacity = 0;
  setTimeout(function () {
    lives[playerLives].style.height = "";
  }, 500);
}


/*****FUNCTIONS SUCCESS&FAILURE*******/

function success(dragged) {
  let newPosition = dragged.parentNode;
  saveScore(playerScore + 1);
  setTimeout(function () {
    gameLine.insertBefore(getHtmlDropZone(), newPosition);
    newPosition.after(getHtmlDropZone());
    gameLine.replaceChild(
      dragged.querySelector(".flip-card-back img"),
      newPosition
    );
  }, 1000);
}

function failure(dragged) {
  setTimeout(function () {
    dragged.style.transform = "rotateZ(-30deg) rotateY(180deg)";
    loseLive(playerLives - 1);
    showGameOver(playerLives,playerScore);
  }, 1000);
  setTimeout(function () {
    dragged.parentNode.classList.remove("dropzone-hover");
    dragged.parentNode.removeChild(dragged);
  }, 2500);
}
