export function getNextExpanded(current) {
  return !current;
}

export function getMenuState(isOpen) {
  return {
    expanded: String(isOpen),
    hidden: !isOpen,
  };
}

function initializeMenu() {
  const button = document.querySelector("[data-menu-button]");
  const menu = document.querySelector("[data-menu]");

  if (!button || !menu) return;

  const mobileQuery = window.matchMedia("(max-width: 860px)");

  const applyState = (isOpen) => {
    const state = getMenuState(isOpen);
    button.setAttribute("aria-expanded", state.expanded);
    menu.hidden = mobileQuery.matches ? state.hidden : false;
  };

  const closeMenu = ({ returnFocus = false } = {}) => {
    applyState(false);
    if (returnFocus && mobileQuery.matches) button.focus();
  };

  applyState(false);

  button.addEventListener("click", () => {
    const isOpen = button.getAttribute("aria-expanded") === "true";
    applyState(getNextExpanded(isOpen));
  });

  menu.addEventListener("click", (event) => {
    if (event.target.closest("a") && mobileQuery.matches) closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && button.getAttribute("aria-expanded") === "true") {
      closeMenu({ returnFocus: true });
    }
  });

  mobileQuery.addEventListener("change", () => closeMenu());
}

function initializeFaq() {
  const questions = document.querySelectorAll(".faq__question");

  questions.forEach((question) => {
    const answerId = question.getAttribute("aria-controls");
    const answer = answerId ? document.getElementById(answerId) : null;
    if (!answer) return;

    answer.hidden = true;

    question.addEventListener("click", () => {
      const isExpanded = question.getAttribute("aria-expanded") === "true";
      const nextExpanded = getNextExpanded(isExpanded);
      question.setAttribute("aria-expanded", String(nextExpanded));
      answer.hidden = !nextExpanded;
    });
  });
}

function initializeYear() {
  document.querySelectorAll("[data-year]").forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });
}

function initializeReveals() {
  const items = document.querySelectorAll("[data-reveal]");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduceMotion || !("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -32px" },
  );

  items.forEach((item) => observer.observe(item));
}

if (typeof document !== "undefined") {
  document.documentElement.classList.add("js");
  initializeMenu();
  initializeFaq();
  initializeYear();
  initializeReveals();
}
