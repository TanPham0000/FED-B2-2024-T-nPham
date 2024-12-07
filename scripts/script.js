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
