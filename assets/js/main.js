// LRAOR — Alpine components + shared utilities


// ── AOS init ─────────────────────────────────────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80,
      disable: () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
    });
  }
});

// ── Wandella parallax ────────────────────────────────────────────────────────
(function () {
  const el = document.querySelector('.parallax-img');
  if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight;
        if (rect.bottom > 0 && rect.top < vh) {
          const progress = (vh - rect.top) / (vh + rect.height);
          el.style.transform = `translateY(${(progress - 0.5) * -40}px)`;
        }
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
})();

// ── Count-up animation ───────────────────────────────────────────────────────
document.querySelectorAll('[data-counter]').forEach(el => {
  const target   = parseInt(el.dataset.target, 10);
  const suffix   = el.dataset.suffix || '';
  const duration = 1600;
  let started = false;
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting && !started) {
        started = true;
        const start = performance.now();
        const step = now => {
          const p     = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(target * eased).toLocaleString() + suffix;
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }
    });
  }, { threshold: 0.4 });
  io.observe(el);
});
