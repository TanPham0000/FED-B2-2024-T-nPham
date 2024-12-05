// JavaScript Document
console.log("hi");

const menuToggle = document.querySelector('.menu-toggle','.nav-boxes');
const nav = document.querySelector('.nav-menu');
const shadow =document.querySelector('nav')


menuToggle.addEventListener('click', () => {
nav.classList.toggle('open');
menuToggle.classList.toggle('open');
shadow.classList.toggle('open');
  
});

document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('[data-background]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.body.style.backgroundColor = entry.target.getAttribute('data-background');
      }
    });
  }, {
    threshold: 0.5
  });

  sections.forEach(section => observer.observe(section));
});
// Source ChatGPT & Bahaa


//https://www.youtube.com/watch?v=Jt3A2lNN2aE 21 sep 2022 @hyperplexed
