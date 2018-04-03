
    const preloader = document.querySelector('#preloader');

    if (preloader) {
        
    let precentTotal = 0;
    let preloader = document.querySelector('#preloader');
    let preloderTitle = document.querySelector('#preloader-title');
    let paths = [];
    let imgs = document.querySelectorAll('img').forEach((img) => {
        paths.push(img.src);
    }); 
    let backGrounds = document.querySelectorAll('*').forEach((elem) => {
        let bg = getComputedStyle(elem).getPropertyValue('background-image');
        if (bg && bg !== 'none') {
            paths.push(bg.replace('url("', '').replace('")', ''));
        }

    });
    if (paths.length) {
        paths.forEach((path) => {
            imgLoader(path).then(() => {
                precentTotal++;
                setPercent(paths.length, precentTotal);
            });
        });
    } else {
        preloader.classList.add('preloader--hide');
    }

    function imgLoader(path) {
        return new Promise(function(resolve) {
            let fakeImg = document.createElement('img');
            fakeImg.src = path;

            fakeImg.addEventListener('load', () => {
                resolve();
            });
            fakeImg.addEventListener('error', () => {
                resolve();
            });
            
        });
    }

    function setPercent(total, current) {
        let percents = Math.ceil(current / total * 100);

        preloderTitle.innerText = percents + '%';

        if (percents >= 100) {
            preloader.classList.add('preloader--hide');
        }
    }

    }
        

