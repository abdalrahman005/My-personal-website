// Fade in page on load
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// Scroll fade animation for sections
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => {
  observer.observe(section);
});

// Dark mode toggle with persistence - REPLACE FROM THIS LINE:
const toggleButton = document.getElementById("toggle-dark");

// Check saved preference on load
if (localStorage.getItem('lightMode') === 'enabled') {
  document.body.classList.add("light-mode");
}

function updateButtonLabel() {
  toggleButton.textContent = document.body.classList.contains("light-mode")
    ? "🌙 Dark Mode"
    : "🌞 Light Mode";
}

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  
  // Save preference
  if (document.body.classList.contains("light-mode")) {
    localStorage.setItem('lightMode', 'enabled');
  } else {
    localStorage.setItem('lightMode', 'disabled');
  }
  
  updateButtonLabel();
});

// Initialize button label - TO THIS LINE
updateButtonLabel();