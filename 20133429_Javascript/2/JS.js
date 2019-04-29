var button = document.getElementById("test");

button.onclick = ourButtonClick;

function ourButtonClick() {
  alert("test");
  button.innerHTML = ("Again");
}