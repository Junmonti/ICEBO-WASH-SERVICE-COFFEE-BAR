// Mobile menu
const navBtn = document.getElementById("navBtn");
const nav = document.getElementById("nav");

if (navBtn && nav) {
  navBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  // Close menu when link clicked
  document.querySelectorAll(".nav a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
    });
  });
}

// Footer year
const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}

// Fake form submit message (optional)
document.querySelectorAll("form").forEach(form => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Message sent! (Front-end demo)");
    form.reset();
  });
});
