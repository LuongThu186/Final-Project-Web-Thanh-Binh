// load componet in page
const header = document.querySelector("header");
const footer = document.querySelector("footer");
fetch("../components/header.html")
  .then((res) => res.text())
  .then((data) => {
    header.innerHTML = data;
  });

fetch("../components/footer.html")
  .then((res) => res.text())
  .then((data) => {
    footer.innerHTML = data;
  });


// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("header").style.top = "-35px";
  } else {
    document.getElementById("header").style.top = "0px";
  }
}
