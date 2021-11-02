import { cards } from "./cards.js";
let cardArray = cards.map((card) => card);

/*****DOM HTML ELEMENTS*******/
export const gameLine = document.getElementById("game-line");
const buttonStart = document.getElementById("start");
const playerHand = document.getElementById("player-hand");

/******FUNCTIONS*********/

export function getHtmlDropZone() {
  const newDropZone = document.createElement("div");
  newDropZone.setAttribute("class", "dropzone");
  return newDropZone;
}

function getRandomCard(deck) {
  const randomCard = deck[Math.floor(Math.random() * deck.length)];
  cardArray = deck.filter(card => randomCard !==card);
  return randomCard;
}

function getHtmlImgElement(card) {
  let image = document.createElement("img");
  image.setAttribute("class", "card");
  image.setAttribute("id",card.year);
  image.setAttribute("src", card.imageBack);
  return image;
}



/****START GAME********/
buttonStart.addEventListener(
  "click",

  function () {
    gameLine.appendChild(getHtmlImgElement(getRandomCard(cardArray)));
    setTimeout(function () {
      gameLine.insertBefore(getHtmlDropZone(), gameLine.childNodes[0]);
      gameLine.appendChild(getHtmlDropZone());
    }, 1000);
  },
  false
);
