const body = document.querySelector('body');
const fade = document.querySelector('.fade');
const fadeArray = document.querySelectorAll('.fade');
const burger = document.querySelector('#burger');
const navLinks = document.querySelector('.nav-links');
const escKey = 27;


// Fade Animations

fade.addEventListener('animationend', () => {
    fadeArray.forEach((x) => {
        x.classList.add('done');
    })
});

// Burger Menu

function toggleBurger() {
    navLinks.classList.toggle('nav-active');
    burger.classList.toggle('burger-x');
}

// Open and close when burger clicked
burger.addEventListener('click', () => {
   toggleBurger();
})

// Close the menu when a link is clicked
navLinks.addEventListener('click', () => {
   toggleBurger();
})

// Close the menu if the user clicks escape
document.addEventListener('keyup', (e) => {
    if ((e.keyCode === escKey) && (navLinks.classList.contains('nav-active'))) {
        toggleBurger();
    }
});


