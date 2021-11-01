export function compareYears(dragged) {
  const droppedYear = Number(dragged.getElementsByTagName("img")[0].id);
  let rigthYear = dragged.parentNode.nextSibling;
  let leftYear = dragged.parentNode.previousSibling;
  if (rigthYear) {
    rigthYear = Number(rigthYear.id);
  }
  if (leftYear) {
    leftYear = Number(leftYear.id);
  }
  if (
    (droppedYear < rigthYear || !rigthYear) &&
    (droppedYear > leftYear || !leftYear)
  ) {
    console.log("posicion correcta!",droppedYear,rigthYear,leftYear);
  } else {
    wrong(dragged);
  }
}

function wrong(dragged){
    setTimeout(function () {
        dragged.style.transform = "rotateZ(-30deg) rotateY(180deg)";
      }, 1000);
      setTimeout(function () {
        dragged.parentNode.removeChild(dragged);
      }, 1500);

}