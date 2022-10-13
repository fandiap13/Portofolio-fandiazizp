// navbar fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop; // jarak dari posisi header terhadap top
  const toTop = document.querySelector("#to-top");

  // jika scroll yg dilakukan lebih besar dari fix nav
  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.add("hidden");
    toTop.classList.remove("flex");
  }
};

// hamburger
const hamburger = document.querySelector("#hamburger");
// menampilkan nav menu
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  // toggle = menghapus atau menambahkan class
  // jika sudah ada classnya maka hilangkan jika belum ada maka tambahkan
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// klik diluar hamburger menu
// apapun diluar halaman di klik, kecuali nav menu hamburger
window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

// dark mode toggle
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

// pindahkan posisi toggle sesuai dengan mode dark/light
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}
