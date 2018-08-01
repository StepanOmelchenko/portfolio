class CreateList {
    constructor(data){
    this.list = document.createElement('ul');
    this.list.classList.add('slider__link-list');

    data.forEach((elem) => {
        this.list.appendChild(this.makeItem(elem));
    });

    }

    makeItem(obj) {
        let item = document.createElement('li');
        item.classList.add('slider__link-item');
        item.style.backgroundImage = `url(${obj.img})`;
        return item;
    }
    
}
  
const data = [
    {
        title: 'Airplanet',
        img: 'img/slider/airplanet1.jpg',
        tech: 'HTML, CSS, Gulp',
        link: 'https://stepanomelchenko.github.io/airplanet/build'
    },
    {
        title: 'Coworking',
        img: 'img/slider/coworking1.jpg',
        tech: 'HTML, CSS, Gulp',
        link: 'https://stepanomelchenko.github.io/coworking/build'
    },
    {
        title: 'Burger',
        img: 'img/slider/burger1.jpg',
        tech: 'HTML, SCSS, Javascript, Gulp',
        link: 'https://stepanomelchenko.github.io/burger/build'
    },
    {
        title: 'Portfolio',
        img: 'img/slider/portfolio.jpg',
        tech: 'Pug, SCSS, Javascript, Vue, Node.js, Gulp, Webpack',
        link: 'https://stepanomelchenko.github.io/portfolio/build'
    }/* ,
    {
        title: 'site5',
        img: 'img/slider/3.png',
        tech: 'HTML , CSS, JAVASCRIPT',
        link: 'https://stepanomelchenko.github.io/'
    } */
];

const slider = document.querySelector('#slider');

if (slider) {

const current = document.querySelector('#slider-current');
const leftBtn = document.querySelector('#slider-left');
const rightBtn = document.querySelector('#slider-right');
const duration = 1000;
const leftSlider = new CreateList(data);
const rightSlider = new CreateList(data);
let listLeft, listRight;
var isBeingAnimated = false;
var sliderTitle = document.querySelector('#slider-title');
var sliderTech = document.querySelector('#slider-tech');
var sliderLink = document.querySelector('#slider-link');

var currentIndex = {
    index: 1,
    
    get() {
        return this.index;
    },
    
    inc(array) {
        this.index++;
        if (this.index > array.length - 1) {
            this.index = 0;
        }
        return this.index;
    },
    
    dec(array) {
        this.index--;
        if (this.index < 0) {
            this.index = array.length - 1;
        }
    
        return this.index;
    },
    
    ifExist(val, array) {
        let result;
        if (val < 0) {
            result = array.length - 1;
        } else if (val > array.length - 1) {
            result = 0;
        } else {
            result = val;
        }
        
        return result;
    }
};
  
leftBtn.appendChild(leftSlider.list);
rightBtn.appendChild(rightSlider.list);
listLeft = leftBtn.querySelectorAll('.slider__link-item');
listRight = rightBtn.querySelectorAll('.slider__link-item');
  
setCurrentPicture(currentIndex.get());
animateSlider(listLeft[2], 0 , 100, duration);
animateSlider(listRight[0], 0 , 100, duration);
  
leftBtn.onclick = (e) => {
    e.preventDefault();
    if (!isBeingAnimated) {
        sliderMoveUp(listLeft, listRight, 'left');
    }    
};
  
rightBtn.onclick = (e) => {
    e.preventDefault();
    if (!isBeingAnimated) {
        sliderMoveUp(listRight, listLeft, 'right');
    }    
};
  
function animateSlider(elem, currentPosition, targetPosition, duration) {
    return new Promise((resolve) => {
    function animate() {
        const currentTime = Date.now();
        const timesLeft = startTime + duration - currentTime;
        
        if (timesLeft <= 0) {
            elem.style.transform = `translateY(${targetPosition}%)`;
            resolve();
        } else {
            const progress = 1/duration * (duration - timesLeft);
            const step = currentPosition + (targetPosition - currentPosition) * progress;
            elem.style.transform = `translateY(${step}%)`;
            requestAnimationFrame(animate);
        }
    }
                    
    const startTime = Date.now();
    requestAnimationFrame(animate);                 
    });
}

function animateOpacity(elem, duration) {
    return new Promise((resolve) => {
    function animate() {
        const currentTime = Date.now();
        const timesLeft = startTime + duration - currentTime;
        
        if (timesLeft <= 0) {
            elem.style.opacity = 1;
            resolve();
        } else {
            const progress = 1/duration * (duration - timesLeft);
            const step = progress;
            elem.style.opacity = step;
            requestAnimationFrame(animate);
        }
    }
                    
    const startTime = Date.now();
    requestAnimationFrame(animate);                 
    });
}
  
function setCurrentPicture(index) {
    const duration = 1000;
    current.style.backgroundImage = `url(${data[index].img})`;
    animateOpacity(current, duration).then(() => {
        isBeingAnimated = false;
    });
    sliderTitle.innerText = data[index].title;
    sliderTech.innerText = data[index].tech;
    sliderLink.setAttribute('href', data[index].link);
    animateOpacity(sliderTitle, duration);
    animateOpacity(sliderTech, duration);
}
  
function sliderMoveUp(upList, downList, direction) {
    isBeingAnimated = true;
    let beforeElemCounter = currentIndex.get();
    let currentElemCounter;
    let nextElemCounter;
    let nextElemCounter2;
    if (direction === 'left') {
        currentElemCounter = currentIndex.inc(upList);
        nextElemCounter = currentIndex.ifExist(currentElemCounter + 1, upList);
        nextElemCounter2 = currentIndex.ifExist(beforeElemCounter - 1, downList);
    } else {
        currentElemCounter = currentIndex.dec(upList);
        nextElemCounter = currentIndex.ifExist(currentElemCounter - 1, upList);
        nextElemCounter2 = currentIndex.ifExist(beforeElemCounter + 1, downList);
    }
    
    animateSlider(upList[currentElemCounter], 100 , 0, duration);
    animateSlider(upList[nextElemCounter], 200 , 100, duration);
    animateSlider(downList[nextElemCounter2], 100 , 200, duration);
    animateSlider(downList[beforeElemCounter], 0 , 100, duration);
    setCurrentPicture(currentElemCounter);  
}

}