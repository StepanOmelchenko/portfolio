window.onload = function() {
    let hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('hello from hamburger');
        hamburger.classList.toggle('hamburger--active');
    });
};