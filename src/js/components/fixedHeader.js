const header = document.querySelector(".header");
let prevScroll = window.scrollY;

window.addEventListener("scroll", () => {
  scroll = window.scrollY;
  if (scroll > 0) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
  prevScroll = scroll;
});
