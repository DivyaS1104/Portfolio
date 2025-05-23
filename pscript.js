const lines = [
  "Building the web, one pixel at a time. 🧱🌐",
  "Turning ideas into interactive experiences. 💡➡️🖥️",
  "Frontend Enthusiast 🚀"
];

let part = 0;
let partIndex = 0;
let isDeleting = false;
let hasStarted = false;
const element = document.getElementById("typewriter");

function type() {
  const currentText = lines[part];

  if (isDeleting) {
    element.textContent = currentText.substring(0, partIndex--);
  } else {
    element.textContent = currentText.substring(0, partIndex++);
  }

  let delay = isDeleting ? 50 : 100;

  if (!isDeleting && partIndex === currentText.length + 1) {
    delay = 1500;
    isDeleting = true;
  } else if (isDeleting && partIndex === 0) {
    isDeleting = false;
    part = (part + 1) % lines.length;
    delay = 500;
  }

  setTimeout(type, delay);
}

// Intersection Observer to trigger typing on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !hasStarted) {
      hasStarted = true;
      type(); // Start typing once it's visible
      part = 0;
      partIndex = 0;
      isDeleting = false;
    }
  });
}, {
  threshold: 0.6, // 60% visible
});

observer.observe(element);
