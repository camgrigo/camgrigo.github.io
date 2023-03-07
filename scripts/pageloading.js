// pageloading.js

let smallLogo = "CG";
let regularLogo = "Cameron Grigoriadis";

function screenSizeListener(mediaQuery) {
  if (mediaQuery.matches) {
    document.getElementById("navbarLogo").innerHTML = smallLogo;
  } else {
    document.getElementById("navbarLogo").innerHTML = regularLogo;
  }
}

var x = window.matchMedia("(max-width: 400px)");
screenSizeListener(x); // Call listener function at run time
x.addListener(screenSizeListener); // Attach listener function on state changes

document.querySelectorAll(".nav-icon-container").forEach((e) => {
  e.appendChild(
    document.getElementById("navSocialLinks").content.cloneNode(true)
  );
});
