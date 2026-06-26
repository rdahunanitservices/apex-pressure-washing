/* Apex Pressure Washing — sample site interactions
   RDahunan I.T. Services */

// --- Mobile nav toggle ---
const toggle = document.getElementById('nav-toggle');
const links = document.getElementById('nav-links');
toggle.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  toggle.classList.toggle('open', open);
  toggle.setAttribute('aria-expanded', String(open));
});
// Close menu after tapping a link
links.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => {
    links.classList.remove('open');
    toggle.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  })
);

// --- Nav shadow on scroll ---
const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 8);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// --- Reveal on scroll ---
const reveals = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  reveals.forEach((el) => io.observe(el));
} else {
  reveals.forEach((el) => el.classList.add('in'));
}

// --- Current year ---
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* --- Estimate form ---
   No backend on the sample: we compose a pre-filled email to Apex so the
   request actually reaches them. Before launch, swap this for a real
   form handler (FormSubmit.co, Formspree, or a Vercel serverless route)
   so submissions also get captured/logged. */
const APEX_EMAIL = 'ApexPressureSC@gmail.com';
const form = document.getElementById('quote-form');
const note = document.getElementById('form-note');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = form.name.value.trim();
  const phone = form.phone.value.trim();
  const email = form.email.value.trim();
  const service = form.service.value;
  const details = form.details.value.trim();

  if (!name || !phone) {
    showNote('Please add your name and phone so we can reach you.', 'err');
    return;
  }

  const subject = `Free Estimate Request — ${service}`;
  const body =
    `Name: ${name}\n` +
    `Phone: ${phone}\n` +
    `Email: ${email || '(not provided)'}\n` +
    `Service: ${service}\n` +
    `Details: ${details || '(none)'}\n`;

  window.location.href =
    `mailto:${APEX_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  showNote('Thanks! Your email app is opening with your request ready to send. Prefer to talk now? Call 843-442-0300.', 'ok');
  form.reset();
});

function showNote(msg, type) {
  note.textContent = msg;
  note.className = 'form-note ' + type;
  note.hidden = false;
}
