// navbar fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop; // jarak dari posisi header terhadap top

  // jika scroll yg dilakukan lebih besar dari fix nav
  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
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
