import { getHtmlDropZone, gameLine } from "./game.js";

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

/*****FUNCTIONS SUCCESS&FAILURE*******/

function success(dragged) {
  let newPosition = dragged.parentNode;
  
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
  }, 1000);
  setTimeout(function () {
    dragged.parentNode.removeChild(dragged);
  }, 1500);
}

