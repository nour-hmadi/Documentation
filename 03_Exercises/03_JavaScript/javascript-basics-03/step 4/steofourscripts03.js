var pass = document.querySelector("#password");
var confiration = document.querySelector("#confirmation");
var button = document.querySelector("button");

var border = function () {

  if (pass.value != confirmation.value) {
    pass.style.border = "2px solid red";
    confirmation.style.border = "2px solid red";
  }
}
button.addEventListener("click", border); 