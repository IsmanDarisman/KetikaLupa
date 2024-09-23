const navBar = document.querySelector(".menu");
const hamburger = document.querySelector("#hamburger-menu");
const search = document.querySelector(".search");
const menu = document.querySelector(".links");

// ketika hamburger di klik dan untuk close
document.addEventListener("click", function (i) {
  if (hamburger.contains(i.target)) {
    i.preventDefault();
    navBar.classList.add("active");
  } else if (!search.contains(i.target) && !menu.contains(i.target)) {
    navBar.classList.remove("active");
  }
});
