/**
 * Warung Steak Bang Jago 
 * Opsi 2: Minimal Modern - Main JS
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Icons
  lucide.createIcons();

  // Header Scroll Effect
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Mobile Menu Toggle (Basic implementation)
  const toggleBtn = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  if(toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      // In a full implementation, this would slide down a mobile menu
      alert("Mobile menu clicked!"); 
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if(targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Simple category filter
  const filterBtns = document.querySelectorAll('.filter-btn');
  const menuCards = document.querySelectorAll('.menu-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      filterBtns.forEach(b => b.classList.remove('active'));
      // Add active class to clicked button
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      menuCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

});


// Mobile Navigation Logic
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.querySelector('.mobile-toggle');
  if (!toggleBtn) {
    // Create toggle if it doesn't exist
    const header = document.querySelector('.header .nav-container') || document.querySelector('header .nav-container');
    if (header) {
      const btn = document.createElement('button');
      btn.className = 'mobile-toggle';
      btn.innerHTML = '<i data-lucide="menu"></i>';
      // Append to end of nav container
      const act = header.querySelector('.nav-actions') || header.querySelector('div:last-child');
      if (act && act !== header.querySelector('.logo')) act.appendChild(btn);
      else header.appendChild(btn);
    }
  }

  const newToggle = document.querySelector('.mobile-toggle');
  const overlay = document.getElementById('mobileNavOverlay');
  const closeBtn = document.getElementById('mobileNavClose');
  const navLinks = document.querySelectorAll('.mobile-nav-overlay .nav-link, .mobile-nav-overlay a');

  function openMenu() { if(overlay) overlay.classList.add('active'); document.body.style.overflow = 'hidden'; }
  function closeMenu() { if(overlay) overlay.classList.remove('active'); document.body.style.overflow = ''; }

  if(newToggle) newToggle.addEventListener('click', openMenu);
  if(closeBtn) closeBtn.addEventListener('click', closeMenu);
  
  navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
});
