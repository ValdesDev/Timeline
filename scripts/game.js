import { cards } from "./cards.js";
const cardArray = cards.map((card) => card);

/*****DOM HTML ELEMENTS*******/
const buttonStart = document.getElementById("start");
const gameLine = document.getElementById("game-line");



/******FUNTIONS*********/
function getRandomCard(cardArray) {
  return cardArray[Math.floor(Math.random() * cardArray.length)];
}

buttonStart.addEventListener(
  "click",
  function () {
    const initialCard =  document.createElement("div");
    let spaceAfter = document.createElement("div");
    let spaceBefore = document.createElement("div");
    gameLine.appendChild(spaceBefore).setAttribute("class", "dropzone");
    gameLine.appendChild(initialCard).setAttribute("class","card");
    gameLine.appendChild(spaceAfter).setAttribute("class", "dropzone");
    console.log(getRandomCard(cards));
  },
  false
);
