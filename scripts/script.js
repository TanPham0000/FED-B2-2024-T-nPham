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
