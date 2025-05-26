// Theme Toggle
const toggleBtn = document.getElementById('theme-toggle');

toggleBtn.addEventListener('click', () => {
  const root = document.documentElement;
  const isDark = root.style.getPropertyValue('--bg') === 'var(--bg-dark)';
  
  if (isDark) {
    root.style.setProperty('--bg', 'var(--bg-light)');
    root.style.setProperty('--text', 'var(--text-light)');
    root.style.setProperty('--card-bg', 'var(--card-bg-light)');
    root.style.setProperty('--accent', 'var(--accent-light)');
    root.style.setProperty('--primary', 'var(--primary-light)');
  } else {
    root.style.setProperty('--bg', 'var(--bg-dark)');
    root.style.setProperty('--text', 'var(--text-dark)');
    root.style.setProperty('--card-bg', 'var(--card-bg-dark)');
    root.style.setProperty('--accent', 'var(--accent-dark)');
    root.style.setProperty('--primary', 'var(--primary-dark)');
  }
});



// Scroll Animation (on load)
const sections = document.querySelectorAll('.section');

const reveal = () => {
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      section.style.opacity = 1;
      section.style.transform = "translateY(0)";
    }
  });
};

window.addEventListener('scroll', reveal);


// Typing Effect
const words = ["Web Developer", "Full-stack developer", "Frontend Enthusiast"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedText = document.getElementById("typed-text");
const cursor = document.getElementById("cursor");

function type() {
  const currentWord = words[wordIndex];
  const visibleText = currentWord.substring(0, charIndex);
  typedText.textContent = visibleText;

  if (!isDeleting && charIndex < currentWord.length) {
    charIndex++;
    setTimeout(type, 150);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(type, 80);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) wordIndex = (wordIndex + 1) % words.length;
    setTimeout(type, 1000);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  type();
});




  const techSection = document.querySelector('.tech-bars');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        techSection.classList.add('animate');
      } else {
        techSection.classList.remove('animate'); // Reset when out of view
      }
    });
  }, {
    threshold: 0.4 // triggers when 40% of section is visible
  });

  observer.observe(techSection);


 document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm("service_1ioysqw", "template_e4sa8ff", this)
    .then(function() {
      // Show SweetAlert2 success popup
      Swal.fire({
        icon: 'success',
        title: 'Message Sent!',
        text: 'Thanks for reaching out. We’ll get back to you soon!',
        showConfirmButton: false,
        timer: 2500
      });

      // Refresh the page after the toast disappears
      setTimeout(() => {
        window.location.reload();
      }, 2700);
    }, function(error) {
      // Show SweetAlert2 error popup
      Swal.fire({
        icon: 'error',
        title: 'Oops!',
        text: 'Something went wrong. Please try again later.',
      });
    });
});


const certtoggleBtn = document.getElementById('toggle-certificates');
  const certGallery = document.getElementById('certificate-gallery');

  certtoggleBtn.addEventListener('click', () => {
    certGallery.classList.toggle('hidden');
    certtoggleBtn.textContent = certGallery.classList.contains('hidden')
      ? '🎓 View Certificates'
      : '❌ Hide Certificates';
  });