var sendPopup = document.getElementById("sendPopup");
var overlay = document.getElementById("overlay");
var btnClose = document.getElementById("btnClose");
var popup = document.getElementById("popup");

sendPopup.addEventListener("click", openModal);

btnClose.addEventListener("click", closePopup);

overlay.addEventListener("click", closePopup);

popup.addEventListener("click", noClose); //

function openModal() {
  overlay.style.display = "block";
}
function closePopup() {
  overlay.style.display = "none";
}
//Quand on click sur la popup on ne veux pas que la popup se ferme
function noClose(event) {
  event.stopPropagation();
}