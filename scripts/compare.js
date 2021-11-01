
export function compareYears (dragged){
    const droppedYear =dragged.getElementsByTagName("img")[0].id;
    let rigthYear =dragged.parentNode.nextSibling;
    let leftYear =dragged.parentNode.previousSibling;
    if(rigthYear){
        rigthYear = rigthYear.id;
    }
    if(leftYear){
        leftYear = leftYear.id;
    }
    if((droppedYear<rigthYear || !rigthYear)&&(droppedYear>leftYear || !leftYear)){
        console.log("posicion correcta!");
    }else{
        console.log("incorrecto");
    }

}