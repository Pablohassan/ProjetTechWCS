var sendPopup = document.getElementById("sendPopup");
var overlay = document.getElementById("overlay");
var btnClose = document.getElementById("btnClose");

sendPopup.addEventListener("click", openModal);

btnClose.addEventListener("click", closePopup);

function openModal() {
  overlay.style.display = "block";
}
function closePopup() {
  overlay.style.display = "none";
}