// Fades sections in as they enter view. Respects prefers-reduced-motion via
// the .reveal/.reveal.in CSS rules (which no-op the transition for that case)
// rather than skipping the observer entirely, so behaviour stays consistent.
(() => {
  const targets = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || !targets.length) {
    targets.forEach((el) => el.classList.add("in"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  targets.forEach((el) => io.observe(el));
})();
