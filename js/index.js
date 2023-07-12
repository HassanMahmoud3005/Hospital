let nav = document.getElementById("navbar");

window.onscroll = function () {
  if (window.scrollY > 200) {
    nav.style.backgroundColor = "rgba(0, 0, 0, 0.500)";
    nav.style.transition = "0.5s";
  }else{
    nav.style.backgroundColor = "transparent";

  }
};
