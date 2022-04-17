const h2 = document.createElement("h2");
h2.textContent = "Welcome!";
document.querySelector("body").appendChild(h2);

var audio = $("#brother")[0];
$("nav a").mouseenter(function() {
  audio.play();
});