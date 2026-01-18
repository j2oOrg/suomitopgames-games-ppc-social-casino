document.addEventListener("DOMContentLoaded", () => {
  // Scroll-to-top button: show after a short scroll and smooth scroll to top.
  const scrollBtn = document.getElementById("hubScrollTop");
  if (scrollBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) scrollBtn.classList.add("show");
      else scrollBtn.classList.remove("show");
    });
    scrollBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  // Footer year: keep the copyright year current.
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
});
