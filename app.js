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

// Theme toggle: light/dark/system. "system" means no stored preference —
// the CSS prefers-color-scheme media query decides. The head inline script
// (in every page's <head>, before this file loads) applies a stored
// light/dark choice before first paint to avoid a flash of the wrong theme.
(() => {
  const STORAGE_KEY = "theme";
  const root = document.documentElement;
  const buttons = document.querySelectorAll("[data-theme-choice]");
  if (!buttons.length) return;

  const apply = (choice) => {
    if (choice === "light" || choice === "dark") {
      root.setAttribute("data-theme", choice);
    } else {
      root.removeAttribute("data-theme");
    }
    buttons.forEach((btn) => {
      btn.setAttribute("aria-pressed", String(btn.dataset.themeChoice === choice));
    });
  };

  let stored = null;
  try {
    stored = localStorage.getItem(STORAGE_KEY);
  } catch (e) {}
  apply(stored === "light" || stored === "dark" ? stored : "system");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const choice = btn.dataset.themeChoice;
      try {
        if (choice === "system") localStorage.removeItem(STORAGE_KEY);
        else localStorage.setItem(STORAGE_KEY, choice);
      } catch (e) {}
      apply(choice);
    });
  });
})();
