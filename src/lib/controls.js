import {animateScroll} from './functions.js';

const hamburger = document.querySelector('.hamburger');
const authorizationBtn = document.querySelector('#autr-btn');
const flipper = document.querySelector('#flipper');
const loginReturn = document.querySelector('#login-return');
const moveDownBtn = document.querySelector('#btn-movedown');

if (hamburger) {
    hamburger.addEventListener('click', (e) => {
        e.preventDefault();
        let overlay = document.querySelector('.overlay');
        if(overlay) {
            hamburger.classList.toggle('hamburger--active');
            overlay.classList.toggle('overlay--active');
        }
        
    });
}

if (authorizationBtn&&flipper) {
    authorizationBtn.addEventListener('click', (e) => {
        flipper.classList.toggle('welcome__flipper--active');
    });

    document.querySelector('body').addEventListener('click', (e) => {
        if (!e.target.closest('#flipper') && !e.target.closest('#autr-btn')) {
            if (flipper.classList.contains('welcome__flipper--active')) {
                flipper.classList.remove('welcome__flipper--active');
            }
        }
    });
}

if (loginReturn) {
    loginReturn.addEventListener('click', (e) => {
        e.preventDefault();
        if (flipper.classList.contains('welcome__flipper--active')) {
            flipper.classList.remove('welcome__flipper--active');
        }
    });
}

if (moveDownBtn) {
    moveDownBtn.addEventListener('click', (e) => {
        e.preventDefault();
        let currentPosition = window.pageYOffset;
        let targetPosition = window.innerHeight;
        let duration = 1000;

        animateScroll(currentPosition, targetPosition, duration);
    });
}
    
