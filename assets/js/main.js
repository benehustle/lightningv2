// LRAOR, Alpine component helpers
// Alpine is loaded via CDN; this file holds any reusable data/component definitions.

document.addEventListener('alpine:init', () => {
  // Mobile nav body scroll lock
  Alpine.data('mobileNav', () => ({
    open: false,
    toggle() {
      this.open = !this.open;
      document.body.classList.toggle('overflow-hidden', this.open);
    },
    close() {
      this.open = false;
      document.body.classList.remove('overflow-hidden');
    }
  }));
});
