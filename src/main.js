import './style.css'

// Initialize Lucide Icons
lucide.createIcons();

// Scroll Reveal Observer
const revealCallback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
};

const revealObserver = new IntersectionObserver(revealCallback, {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
});

document.querySelectorAll('.reveal').forEach(el => {
  revealObserver.observe(el);
});

// Interactive Background Glow
const glow = document.querySelector('.bg-glow');
document.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;
  
  glow.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(0, 242, 255, 0.07) 0%, transparent 60%)`;
});

// Re-run icon creation for dynamic content
lucide.createIcons();

console.log('Godwin Portfolio Initialized Successfully.');
