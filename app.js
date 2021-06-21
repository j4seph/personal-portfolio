const fadeTwo = document.querySelector('#fade-2');
const fadeThree = document.querySelector('.fade-3');
const fadeThreeArray = document.querySelectorAll('.fade-3');
const burger = document.querySelector('#burger');
const navLinks = document.querySelector('.nav-links');
const escKey = 27;

// Fade Animations

fadeTwo.addEventListener('animationend', () => {
    fadeTwo.classList.add('done');
});

fadeThree.addEventListener('animationend', () => {
   fadeThreeArray.forEach((x) => {
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


