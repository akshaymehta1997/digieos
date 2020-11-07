document.querySelector(".hamburger").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("open");
  document.querySelectorAll(".nav-links li").forEach(link => {
      link.classList.toggle("fade");
  });
});
