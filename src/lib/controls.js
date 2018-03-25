window.onload = function() {
    const hamburger = document.querySelector('.hamburger');
    const authorizationBtn = document.querySelector('.authorization-btn');
    const flipper = document.querySelector('.welcome__flipper');

    if (hamburger) {
        hamburger.addEventListener('click', (e) => {
            e.preventDefault();
            hamburger.classList.toggle('hamburger--active');
        });
    }
    
    if (authorizationBtn&&flipper) {
        authorizationBtn.addEventListener('click', (e) => {
            e.preventDefault();
            flipper.classList.toggle('welcome__flipper--active');
        });
    }
    
};