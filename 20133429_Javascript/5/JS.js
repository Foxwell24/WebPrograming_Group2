
window.onload = function() {
  var btn = document.getElementById("btn");

  btn.onmouseover = move;

  function move() {
  btn.style.top = Math.floor((Math.random() * 95) ) + "%";
  btn.style.left = Math.floor((Math.random() * 95) ) + "%";
  }
}



