import { cards } from "./cards.js";
const cardArray = cards.map((card) => card);

/* DOM HTML ELEMENTS*/
let buttonStart = document.getElementById("start");

function getRandomCard(cardArray) {
  return cardArray[Math.floor(Math.random() * (cardArray.length))];
}

buttonStart.addEventListener(
  "click",
  function () {
    console.log(getRandomCard(cards));
  },

  false
);
