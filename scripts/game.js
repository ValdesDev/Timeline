import { cards } from "./cards.js";
import { buttonStart, gameLine } from "./main.js";

/*VARIABLES*/

let cardArray = cards.map((card) => card);

/******FUNCTIONS*********/

export function getHtmlDropZone() {
  const newDropZone = document.createElement("div");
  newDropZone.setAttribute("class", "dropzone");
  return newDropZone;
}

export function getNewFlipCardInner() {
  const newFlipCardInner = document.createElement("div");
  newFlipCardInner.setAttribute("class", "flip-card-inner");
  const randomCard = getRandomCard(cardArray);
  newFlipCardInner.appendChild(getNewFlipCardFront(randomCard));
  newFlipCardInner.appendChild(getNewFlipCardBack(randomCard));
  return newFlipCardInner;
}

function getRandomCard(deck) {
  const randomCard = deck[Math.floor(Math.random() * deck.length)];
  cardArray = deck.filter((card) => randomCard !== card);
  return randomCard;
}

function getHtmlBackImg(card) {
  let image = document.createElement("img");
  image.setAttribute("class", "card");
  image.setAttribute("id", card.year);
  image.setAttribute("src", card.imageBack);
  return image;
}

function getHtmlFrontImg(card) {
  let image = document.createElement("img");
  image.setAttribute("class", "card");
  image.setAttribute("id", card.year);
  image.setAttribute("src", card.image);
  return image;
}


function getNewFlipCardFront(card){
    const newFlipCardFront = document.createElement("div");
    newFlipCardFront.setAttribute("class", "flip-card-front");
    newFlipCardFront.appendChild(getHtmlFrontImg(card));
    return newFlipCardFront;
}

function getNewFlipCardBack(card){
    const newFlipCardBack = document.createElement("div");
    newFlipCardBack.setAttribute("class", "flip-card-back");
    newFlipCardBack.appendChild(getHtmlBackImg(card));
    return newFlipCardBack;
}

/****START GAME********/
buttonStart.addEventListener(
  "click",

  function () {
    gameLine.appendChild(getHtmlBackImg(getRandomCard(cardArray)));
    setTimeout(function () {
      gameLine.insertBefore(getHtmlDropZone(), gameLine.childNodes[0]);
      gameLine.appendChild(getHtmlDropZone());
    }, 1000);
  },
  false
);
