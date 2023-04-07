function upArrowPressed() {
   let elment =document.getElementById("nobita");
    elment.style.top = parseInt(elment.style.top) - 5 + "px";
}
function downArrowPressed() {
    let elment =document.getElementById("nobita");
    elment.style.top = parseInt(elment.style.top) + 5 + "px";
}
function leftArrowPressed() {
    let elment =document.getElementById("nobita");
    elment.style.left = parseInt(elment.style.left) - 5 + "px";
}
function rightArrowPressed() {
    let elment =document.getElementById("nobita");
    elment.style.left = parseInt(elment.style.left) + 5 + "px";
}
function moveSelection(evt) {
    console.log(evt)
    switch (evt.keyCode) {
        case 37:
            leftArrowPressed();
            break;
        case 38:
            upArrowPressed();
            break;
        case 39:
            rightArrowPressed();
            break;
        case 40:
            downArrowPressed();
            break;
    }
}
function docReady () {
    window.addEventListener("keydown", moveSelection);
}