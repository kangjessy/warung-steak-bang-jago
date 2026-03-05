document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();
});


// Mobile Navigation Logic
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.querySelector('.mobile-toggle');
  if (!toggleBtn) {
    const header = document.querySelector('.header .nav-container') || document.querySelector('header .container');
    if (header) {
      const btn = document.createElement('button');
      btn.className = 'mobile-toggle';
      btn.innerHTML = '<i data-lucide="menu"></i>';
      const actions = header.querySelector('.nav-actions') || header.querySelector('.sys-status');
      if (actions) actions.appendChild(btn);
      else header.appendChild(btn);
      if(window.lucide) lucide.createIcons();
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
