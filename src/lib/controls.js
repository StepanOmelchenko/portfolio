window.onload = function() {
    const hamburger = document.querySelector('.hamburger');
    const authorizationBtn = document.querySelector('#autr-btn');
    const flipper = document.querySelector('#flipper');

    if (hamburger) {
        hamburger.addEventListener('click', (e) => {
            e.preventDefault();
            hamburger.classList.toggle('hamburger--active');
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
    
};