// Navbar Scroll

var navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 100) {
    // adjust the value according to your navbar height
    navbar.classList.add("fixed");
  } else {
    navbar.classList.remove("fixed");
  }
});

// Go to Top

const goTopBtn = document.getElementById("go-top-btn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    goTopBtn.style.display = "block";
  } else {
    goTopBtn.style.display = "none";
  }
});

goTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
