const btnHamburger = document.getElementById("btnHamburger");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElems = document.querySelectorAll(".has-fade");
const menuItems = document.querySelectorAll(".header--menu a");
const body = document.querySelector("body");
console.log(menuItems);

menuItems.forEach((item) =>
  item.addEventListener("click", function () {
    body.classList.remove("noscroll");
    header.classList.remove("open");
    fadeElems.forEach((el) => {
      el.classList.remove("fade-in");
      el.classList.add("fade-out");
    });
  })
);
console.log(40);
btnHamburger.addEventListener("click", function () {
  if (header.classList.contains("open")) {
    body.classList.remove("noscroll");
    // body.classList.add("scroll");
    header.classList.remove("open");
    fadeElems.forEach((el) => {
      el.classList.remove("fade-in");
      el.classList.add("fade-out");
    });
  } else {
    body.classList.add("noscroll");
    header.classList.add("open");
    fadeElems.forEach((el) => {
      el.classList.remove("fade-out");
      el.classList.add("fade-in");
    });
  }
});

// const callFadeElems = () => {
//   return fadeElems.forEach((el) => {
//     el.classList.remove("fade-out");
//     el.classList.add("fade-in");
//   });
// };
