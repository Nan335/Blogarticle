// 🌙 Dark Mode Toggle
const toggleBtn = document.getElementById('darkToggle');
toggleBtn?.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggleBtn.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
});

// 🔗 Smooth Scroll for Nav Links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').slice(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// 📩 Contact Form Validation
const contactForm = document.getElementById('contactForm');
contactForm?.addEventListener('submit', e => {
  const name = contactForm.querySelector('[name="name"]').value.trim();
  const email = contactForm.querySelector('[name="email"]').value.trim();
  const message = contactForm.querySelector('[name="message"]').value.trim();

  if (!name || !email || !message) {
    e.preventDefault();
    alert('Please fill out all fields before submitting.');
  }
});

// ✨ Scroll Reveal Animation
const revealElements = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.2
});

revealElements.forEach(el => observer.observe(el));