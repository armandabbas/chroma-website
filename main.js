// Vanilla JS interactions

document.addEventListener('DOMContentLoaded', () => {
  initTiltEffect();
  initButtonRipples();
});

// Subtle 3D Tilt effect for glass cards
function initTiltEffect() {
  const cards = document.querySelectorAll('.tilt');
  
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -10;
      const rotateY = ((x - centerX) / centerX) * 10;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
      card.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)';
    });
    
    card.addEventListener('mouseenter', () => {
      card.style.transition = 'none';
    });
  });
}

// Interactive button effects
function initButtonRipples() {
  const buttons = document.querySelectorAll('.interactive');
  
  buttons.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // We can use these coordinates to drive a CSS gradient if desired
      // For now, it adds a slight scale effect that is handled by CSS mostly,
      // but we can augment it with JS
    });
  });
}
