import {compareYears} from "./compare.js";
var dragged;

/* DOM HTML ELEMENTS*/

const playerHand = document.getElementById("player-hand");
const gameLine = document.getElementById("game-line");


/*******VISUAL EFFECT OPACITY *******/
playerHand.addEventListener(
  "dragstart",
  function (event) {
    // store a ref. on the dragged elem
    dragged = event.target.parentNode.parentNode;
    // make it half transparent
    event.target.style.opacity = 0.5;
  },
  false
);

playerHand.addEventListener(
  "dragend",
  function (event) {
    // reset the transparency
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
      event.target.style.background = "#196A9C";
    }
  },
  false
);

gameLine.addEventListener(
  "dragleave",
  function (event) {
    // reset background of potential drop target when the draggable element leaves it
    if (event.target.className === "dropzone") {
      event.target.style.background = "";
    }
  },
  false
);

/******PREVENT DEFAULT EFFECT & DROP CARD AT DROPZONE */
document.addEventListener(
  "drop",
  function (event) {
    event.preventDefault();
    console.log(event.target);
    if (event.target.className === "dropzone") {
      event.target.style.background = "";
      dragged.parentNode.removeChild(dragged);
      event.target.appendChild(dragged);
      compareYears(dragged);
      setTimeout(function(){
           dragged.style.transform ="rotateY(180deg)";
           dragged = null;
        }, 1000);
    } else{
        dragged = null;
    }
  },
  false
);
