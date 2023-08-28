const links = document.querySelectorAll("nav a");
const currentPath = window.location.pathname.slice(1);

links.forEach((link) => {
  if (link.getAttribute("href") === currentPath) {
    link.parentElement.classList.add("active");
  }
});
