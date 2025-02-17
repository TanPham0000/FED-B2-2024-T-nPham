// JavaScript Document
console.log("hi");

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
nav.classList.toggle('open');
menuToggle.classList.toggle('open');
});

// Background Change on Section Intersection
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('[data-background]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.body.style.backgroundColor = entry.target.getAttribute('data-background');
      }
    });
  }, {
    threshold: 0.2
  });

  sections.forEach(section => observer.observe(section));
});
// Source ChatGPT & Bahaa
document.addEventListener("DOMContentLoaded", () => {
  const logos = document.querySelectorAll(".footer-logo-slider img");
  let currentLogoIndex = 0;
  setInterval(() => {
      // Remove the active class from the current logo
      logos[currentLogoIndex].classList.remove("active");
      // Move to the next logo
      currentLogoIndex = (currentLogoIndex + 1) % logos.length;
      // Add the active class to the next logo
      logos[currentLogoIndex].classList.add("active");
  }, 3000); // Changes every 3 seconds
});
//Chatgpt heeft me geholpen
const carousel = document.querySelector('.carousel-container');
let isDragging = false;
let startX;
let scrollLeft;
// When the user starts dragging
carousel.addEventListener('mousedown', (e) => {
  isDragging = true;
  carousel.classList.add('dragging');
  startX = e.pageX - carousel.offsetLeft;
  scrollLeft = carousel.scrollLeft;
});
// When the user stops dragging
carousel.addEventListener('mouseup', () => {
  isDragging = false;
  carousel.classList.remove('dragging');
});
// When the user moves the mouse
carousel.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - carousel.offsetLeft;
  const walk = (x - startX) * 2; // Multiply by 2 for faster scrolling
  carousel.scrollLeft = scrollLeft - walk;
});
// Prevent unwanted drag behavior
carousel.addEventListener('mouseleave', () => {
  isDragging = false;
});