import { cards } from "./cards.js";
const cardArray = cards.map((card) => card);

/*****DOM HTML ELEMENTS*******/
const buttonStart = document.getElementById("start");
const gameLine = document.getElementById("game-line");

/******FUNTIONS*********/

function getRandomCard(cardArray) {
  return cardArray[Math.floor(Math.random() * cardArray.length)];
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
    console.log(getRandomCard(cards).imageBack);
  },
  false
);
