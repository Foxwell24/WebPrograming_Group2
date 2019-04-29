window.onload = function(){
var button = document.getElementById("click");
var ageOfDog = document.getElementById("dogAge")

button.onclick = ourButtonClick;

function ourButtonClick() {
  alert(ageOfDog.value * 7 + " " + "dog years!");
}
}