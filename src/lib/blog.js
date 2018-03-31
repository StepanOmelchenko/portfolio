import {animateScroll} from './functions.js';
    
const articles = document.querySelectorAll('.blog__content-item');
const articlesList = document.querySelector('.blog__navigation');
const articleTitles = document.querySelectorAll('.blog__navigation-item');
let activeArticleId = null;
let isBeingAnimated = false;


function getCoords(elem) {
    const box = elem.getBoundingClientRect();

    return {
        top: box.top + window.pageYOffset,
        left: box.left + window.pageXOffset
    };
}

function setArticleActive() {
    function setActive(artcl) {
        if (artcl.dataset.idtitle !== activeArticleId) {
            let allTitles = document.querySelectorAll('.blog__navigation-item');
            allTitles.forEach((title) => {
                title.classList.remove('blog__navigation-item--active');
            });
            document.getElementById(artcl.dataset.idtitle).classList.add('blog__navigation-item--active');
            activeArticleId = artcl.dataset.idtitle;
        }
    }

    if (window.pageYOffset < getCoords(articles[0]).top) {
        setActive(articles[0]);
    }
    else if (window.pageYOffset + window.innerHeight === document.body.offsetHeight) {
        setActive(articles[articles.length - 1]);
    }
    else {
        articles.forEach((article) => {
            const elemTop = getCoords(article).top;
            if (window.pageYOffset > elemTop - 150) {
                setActive(article);
            }
        });
    }
}

function setArticleChords() {
    const elemChords = getCoords(articles[0]);
    if (window.pageYOffset >= elemChords.top - 30) {

        articlesList.style.position = 'fixed';
        articlesList.style.top = '30px';
    } else {
        articlesList.style.position = 'static';
    }
}

if (articlesList && articles.length) {
        articlesList.style.width = articlesList.offsetWidth + 'px';
    
    window.onscroll = () => {
        setArticleChords();
        setArticleActive();
    };

    window.onresize = () => {
        articlesList.style.width = articlesList.parentNode.offsetWidth + 'px';
    };
    
    setArticleChords();
    setArticleActive();

}

articleTitles.forEach((title, index) => {
    const link = title.querySelector('.blog__navigation-link');

    link.onclick = (e) => {
        e.preventDefault();
        if (!isBeingAnimated && articles) {
            isBeingAnimated = true;
            const currentPosition = window.pageYOffset;
            const targetPosition = articles[index].getBoundingClientRect().top + currentPosition;
            const scrollAnimationDuration = 1000;
            animateScroll(currentPosition, targetPosition, scrollAnimationDuration).then((resolve) => {
                isBeingAnimated = false;
            });
        }
        
    };
});