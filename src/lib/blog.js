    const articles = document.querySelectorAll('.blog__content-item');
    const articlesList = document.querySelector('.blog__navigation');
    const articleTitles = document.querySelectorAll('.blog__navigation-item');
    let activeArticleId = null;

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
        /* console.log('elem', elemChords.top);
        console.log('win', window.pageYOffset); */
        if (window.pageYOffset >= elemChords.top - 30) {

            articlesList.style.position = 'fixed';
            articlesList.style.top = '30px';
        } else {
            articlesList.style.position = 'static';
        }
    }

    if (articlesList && articles.length) {
         articlesList.style.width = '300px' /* articlesList.offsetWidth; */ 
        
        window.onscroll = () => {
            setArticleChords();
            setArticleActive();
        };
        
        setArticleChords();
        setArticleActive();

    }