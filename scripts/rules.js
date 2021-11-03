import {buttonRules,buttonBack,ruleBox} from "./main.js";

buttonRules.addEventListener("click", function () {
  ruleBox.style.display = "flex";
});

buttonBack.addEventListener("click", function () {
  ruleBox.style.display = "none";
});
