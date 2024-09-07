const Navbar = document.querySelector(".menu");

// Ketika di klik
document.querySelector("#hamburger-menu").onclick = (e) => {
  e.preventDefault();
  Navbar.classList.toggle("active");
};

document.querySelector("#close").onclick = (e) => {
  e.preventDefault();
  Navbar.classList.remove("active");
};

// ketika di klik di luar menu
// const menu = document.querySelector("#hamburger-menu");

// document.addEventListener("click", function (x) {
//   if (!menu.contains(x.target)) {
//     Navbar.classList.remove("active");
//   }
// });
// document.addEventListener("click", function (e) {
//   if (!menu.contains(e.target) && !Navbar.contains(e.target)) {
//     Navbar.classList.remove("active");
//   }
// });
