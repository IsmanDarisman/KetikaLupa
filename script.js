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

// contoh ero funtion
// const Navbar = document.querySelector(".menu");

// // Ketika di klik
// document.querySelector("#hamburger-menu").onclick = (e) => {
//   e.preventDefault();
//   Navbar.classList.toggle("active");
// };

// document.querySelector("#close").onclick = (e) => {
//   e.preventDefault();
//   Navbar.classList.remove("active");
// };

// Navbar transisi ketika scroll ke bawah

// Warna Slider ketika halaman aktif

const slider = document.querySelector(".contents-slider ul li:nth-child(1) a");

slider.style.backgroundColor = "#229954";
slider.style.color = "#fff";
