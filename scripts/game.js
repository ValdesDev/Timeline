import { cards } from "./cards.js";
let cardArray = cards.map((card) => card);

/*****DOM HTML ELEMENTS*******/
const buttonStart = document.getElementById("start");
const gameLine = document.getElementById("game-line");

/******FUNTIONS*********/

function getRandomCard(deck) {
  const randomCard = deck[Math.floor(Math.random() * deck.length)];
  cardArray = deck.filter(card => randomCard !==card);
  console.log(cardArray);
  return randomCard;
}

function getHtmlImgElement(card) {
  let image = document.createElement("img");
  image.setAttribute("class", "card");
  image.setAttribute("id",card.year);
  image.setAttribute("src", card.imageBack);
  return image;
}

function getHtmlDropZone() {
  const newDropZone = document.createElement("div");
  newDropZone.setAttribute("class", "dropzone");
  return newDropZone;
}

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
