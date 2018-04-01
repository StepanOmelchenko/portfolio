const preloader = document.querySelector('#preloader');
//const preloaderPercent = document.querySelector('#preloader-percent');

if (preloader) {
    document.body.onload = () => {
        preloader.classList.add('preloader--hide');
    };
}
