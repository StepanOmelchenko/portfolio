const preloader = document.querySelector('#preloader');
//const preloaderPercent = document.querySelector('#preloader-percent');

//preloaderPercent.innerText = 'Pawel';

document.body.onload = () => {
    preloader.classList.add('preloader--hide');
};