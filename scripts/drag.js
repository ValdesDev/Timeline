import { compareYears } from "./compare.js";
import { getNewFlipCardInner } from "./game.js";
import { playerHand, gameLine } from "./main.js";

/*VARIABLES*/

var dragged;

/*******VISUAL EFFECT OPACITY *******/
playerHand.addEventListener(
  "dragstart",
  function (event) {
    dragged = event.target.parentNode.parentNode;
    event.target.style.opacity = 0.5;
  },
  false
);

document.addEventListener(
  "dragend",
  function (event) {
    event.target.style.opacity = "";
  },
  false
);

/* events fired on the drop targets */
document.addEventListener(
  "dragover",
  function (event) {
    // prevent default to allow drop
    event.preventDefault();
  },
  false
);

/********VISUAL EFFECT DROPZONE*******/
gameLine.addEventListener(
  "dragenter",
  function (event) {
    // highlight potential drop target when the draggable element enters it
    if (dragged && event.target.className === "dropzone") {
      event.target.classList.add("dropzone-hover");
    }
  },
  false
);

gameLine.addEventListener(
  "dragleave",
  function (event) {
    // reset background of potential drop target when the draggable element leaves it
    if (event.target.className === "dropzone dropzone-hover") {
      event.target.classList.remove("dropzone-hover");
    }
  },
  false
);

/******PREVENT DEFAULT EFFECT & DROP CARD AT DROPZONE */
document.addEventListener(
  "drop",
  function (event) {
    event.preventDefault();
    if (event.target.className === "dropzone dropzone-hover") {
      dragged.parentNode.appendChild(getNewFlipCardInner());
      dragged.parentNode.removeChild(dragged);
      
      event.target.appendChild(dragged);
      setTimeout(function () {
        dragged.style.transform = "rotateY(180deg)";
        compareYears(dragged);
        dragged = null;
      }, 1000);
    } else {
      dragged = null;
    }
  },
  false
);
