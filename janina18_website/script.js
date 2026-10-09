// Smooth section navigation and a subtle nav background when scrolling.
const nav = document.querySelector(".nav");
const updateNav = () => {
  nav.classList.toggle("scrolled", window.scrollY > 30);
};
window.addEventListener("scroll", updateNav, { passive: true });
updateNav();

// The View Map links open Google Maps in a new tab.
document.querySelectorAll('a[href*="google.com/maps"]').forEach(link => {
  link.setAttribute("target", "_blank");
  link.setAttribute("rel", "noopener noreferrer");
});
