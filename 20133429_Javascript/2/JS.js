window.onload = function(){
var button = document.getElementById("click");

button.onclick = ourButtonClick;

function ourButtonClick() {
  alert("test");
  document.getElementById("click").innerHTML = "New text!";
}
}