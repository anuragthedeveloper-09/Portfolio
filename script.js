const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

// Toggle menu
menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Close menu when clicking a link (mobile UX upgrade)
document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
  menuToggle.classList.toggle("active");
});