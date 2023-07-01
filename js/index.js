"use strict";

const menuButton = document.querySelector('.menu-button');
const content3 = document.querySelector('.content3');
const closeButton = document.querySelector('.close-button');

menuButton.addEventListener('click', function() {
    content3.style.display = 'block';
    closeButton.style.display = 'block';
    content3.style.animationName = 'menu1';
    content3.style.animationDuration = '1s';
    content3.style.animationFillMode = 'both';
});

closeButton.addEventListener('click', function() {
    setTimeout(() => {
        content3.style.display = 'none';
    }, 1000);
    
    closeButton.style.display = 'none';
    content3.style.animationName = 'menu2';
    content3.style.animationDuration = '1s';
    content3.style.animationFillMode = 'both';
});