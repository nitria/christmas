var santa = document.getElementById("santa");
var container = document.getElementById("container");
var merryChristmas = document.getElementById("merryChristmas");
var text = document.getElementById("text");

santa.style.left = "0";

document.addEventListener(
  "scroll",
  function () {
    var scrolled =
      (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 2;
    santa.style.left = scrolled * 100 + "%";
    merryChristmas.style.transform = "scale(" + scrolled * 2 + ")";
    merryChristmas.style.opacity = scrolled + 0.5;
    if (window.scrollY > 700) {
      merryChristmas.style.transform = "scale(0)";
    }

    var winscroll = window.scrollY + window.innerHeight;

    if (winscroll > 1700) {
      text.style.transform = "scale(" + scrolled / 4 + ")";
      text.style.opacity = scrolled / 2;
    } else {
      text.style.transform = "scale(0)";
    }
  },
  false
);

//STARS//
var bordertop = document.getElementById("bordertop");
var borderright = document.getElementById("borderright");
var borderbottom = document.getElementById("borderbottom");
var borderleft = document.getElementById("borderleft");
var borders = [
  [bordertop, borderbottom],
  [borderright, borderleft],
];

//CREATE STARS FOR TOP & BOTTOM//
function borderwidth() {
  var borderWidth = document.body.scrollWidth / 65;
  borders[0].forEach((border) => {
    for (i = 1; i < borderWidth; i++) {
      var stars = document.createElement("span");
      stars.setAttribute("id", "stars");
      stars.style.margin = "0 30px";
      border.appendChild(stars);
    }
  });
}

//CREATE STARS FOR LEFT & RIGHT//
function borderheight() {
  var borderHeight = document.body.scrollHeight / 50;
  borders[1].forEach((border) => {
    for (i = 1; i < borderHeight; i++) {
      var stars = document.createElement("span");
      stars.setAttribute("id", "stars");
      stars.style.margin = "20px 5px";
      border.appendChild(stars);
    }
  });
}
borderwidth();
borderheight();
