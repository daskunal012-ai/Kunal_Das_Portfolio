(() => {
  const emailJsPublicKey = 'LMvZNJqNR1snmfiM1';
  const emailJsServiceId = 'service_c49vb1g';
  const emailJsTemplateId = 'template_rnpg3bf';

  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  const navLinks = [...document.querySelectorAll('.nav a[href^="#"]')];

  menuButton?.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('open', !open);
  });

  navLinks.forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  }));

  const filters = document.querySelectorAll('.filter');
  const cards = document.querySelectorAll('.project-card');
  filters.forEach(button => button.addEventListener('click', () => {
    filters.forEach(item => item.classList.toggle('active', item === button));
    const filter = button.dataset.filter;
    cards.forEach(card => {
      const categories = (card.dataset.category || '').split(' ');
      card.hidden = filter !== 'all' && !categories.includes(filter);
    });
  }));

  const sections = [...document.querySelectorAll('main section[id]')];
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
        }
      });
    }, { rootMargin: '-35% 0px -55% 0px' });
    sections.forEach(section => observer.observe(section));
  }

  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const submitLabel = submitButton?.querySelector('.button-label');
    const status = contactForm.querySelector('.form-status');

    if (typeof emailjs !== 'undefined') {
      emailjs.init({ publicKey: emailJsPublicKey });
    }

    contactForm.addEventListener('submit', async event => {
      event.preventDefault();
      if (submitButton) submitButton.disabled = true;
      if (submitLabel) submitLabel.textContent = 'Sending…';
      if (status) {
        status.hidden = false;
        status.textContent = 'Sending your message…';
        status.dataset.state = 'pending';
      }

      try {
        if (typeof emailjs === 'undefined') {
          throw new Error('EmailJS did not load. Check the network connection and try again.');
        }
        await emailjs.sendForm(emailJsServiceId, emailJsTemplateId, contactForm);
        contactForm.reset();
        if (status) {
          status.textContent = 'Thanks! Your message has been sent.';
          status.dataset.state = 'success';
        }
      } catch (error) {
        console.error('EmailJS failed to send the contact form.', error);
        if (status) {
          status.textContent = 'Sorry, your message could not be sent. Please try again or email me directly.';
          status.dataset.state = 'error';
        }
      } finally {
        if (submitButton) submitButton.disabled = false;
        if (submitLabel) submitLabel.textContent = 'Send message';
      }
    });
  }

  const year = document.querySelector('#year');
  if (year) year.textContent = new Date().getFullYear();
})();
