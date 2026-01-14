// Year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Optional: Mailto fallback for CodePen preview (helps when click is blocked)
document.querySelectorAll(".email-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    // If CodePen blocks it in preview, this forces navigation
    const href = link.getAttribute("href");
    if (href && href.startsWith("mailto:")) {
      window.location.href = href;
    }
  });
});