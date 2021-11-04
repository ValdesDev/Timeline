import { reset } from "./game.js";
import { buttonAgain, endGame, feedback } from "./main.js";

export function showGameOver(playerLives, score) {
  if (playerLives === 0 || score === 39) {
    feedback.innerText = getFeedback(score);
    setTimeout(function () {
      endGame.style.display = "flex";
    }, 1500);
  }
}
function getFeedback(score) {
  if (score > 5 && score <= 10) {
    return "Bien jugado, pero se puede mejorar";
  }
  if (score > 10 && score <= 20) {
    return "¡Excelente resultado!";
  }
  if (score > 20 && score < 44) {
    return "¡Enhorabuena!";
  }
  if (score === 44) {
    return "¡Ave Experto, el creador del juego te saluda!";
  } else {
    return "Quizá quieras intentarlo de nuevo";
  }
}

buttonAgain.addEventListener("click", function () {
  reset();
  endGame.style.display = "none";
});
