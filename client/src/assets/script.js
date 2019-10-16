import $ from "jquery";

var prevScrollpos = window.pageYOffset;

window.onscroll = function() {

var currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}

$(document).on("click", ".save", function() {
  alert("Book saved!")
})

$(document).on("click", ".delete", function() {
  alert("Book removed.")
})
