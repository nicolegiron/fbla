window.onbeforeunload = function () {
  parent.scrollTo(0, 0);
}

window.onload = function(){
  setTimeout(function(){document.body.style.overflow = "auto";}, 1500);
}

function scroll(){
  var width = window.innerWidth;
  var planeText = document.getElementById("planeText");
  var elmnt = document.body;
  var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
  // document.getElementById("scroll").innerHTML = scrollTop + "                      " + width;
  if (scrollTop > 76 && scrollTop < 100) {
    planeText.style.opacity = 0.0;
  } else if (scrollTop > 72) {
    planeText.style.opacity = 0.0;
  } else if (scrollTop < 72) {
    planeText.style.opacity = 1.0;
  }

}
