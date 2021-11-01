
export function compareYears (dragged){
    const droppedYear =dragged.getElementsByTagName("img")[0].id;
    const rigthCard =dragged.parentNode.nextSibling;
    if(rigthCard !== null){
        rigthCard = rigthCard.id;
    }
    console.log("LA CARTA",rigthCard);
    console.log(dragged.parentNode.nextSibling);

}