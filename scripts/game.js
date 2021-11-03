import { cards } from "./cards.js";
import {
  buttonStart,
  buttonReset,
  gameLine,
  intialSpaces,
  lives,
} from "./main.js";
import { saveScore, playerLives, resetLives } from "./compare.js";

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

export function initialHand() {
  for (let i = 0; i < intialSpaces.length; i++) {
    intialSpaces[i].appendChild(getNewFlipCardInner());
  }
}

function visibleHand() {
  for (let i = 0; i < intialSpaces.length; i++) {
    intialSpaces[i].style.opacity = 1;
  }
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

function getNewFlipCardFront(card) {
  const newFlipCardFront = document.createElement("div");
  newFlipCardFront.setAttribute("class", "flip-card-front");
  newFlipCardFront.appendChild(getHtmlFrontImg(card));
  return newFlipCardFront;
}

function getNewFlipCardBack(card) {
  const newFlipCardBack = document.createElement("div");
  newFlipCardBack.setAttribute("class", "flip-card-back");
  newFlipCardBack.appendChild(getHtmlBackImg(card));
  return newFlipCardBack;
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function removePlayerHand(intialSpaces) {
  for (let i = 0; i < intialSpaces.length; i++) {
    removeAllChildNodes(intialSpaces[i]);
    intialSpaces[i].style.opacity = 0;
  }
}
function showLives(playerLives) {
  for (let i = 0; i < playerLives; i++) {
    lives[i].style.opacity = "";
  }
}

/****START GAME****/
buttonStart.addEventListener(
  "click",
  function (event) {
    event.target.disabled = true;
    gameLine.appendChild(getHtmlBackImg(getRandomCard(cardArray)));
    visibleHand();
    setTimeout(function () {
      gameLine.insertBefore(getHtmlDropZone(), gameLine.childNodes[0]);
      gameLine.appendChild(getHtmlDropZone());
    }, 1000);
  },
  false
);
window.onload = function () {
  initialHand();
};

/********RESET GAME*********/

export function reset() {
  buttonStart.disabled = false;
  removeAllChildNodes(gameLine);
  removePlayerHand(intialSpaces);
  saveScore(0);
  resetLives();
  showLives(playerLives);
  cardArray = cards.map((card) => card);
  setTimeout(function () {
    initialHand();
  }, 1000);
}

buttonReset.addEventListener(
  "click",
  function () {
    reset();
  },
  false
);
