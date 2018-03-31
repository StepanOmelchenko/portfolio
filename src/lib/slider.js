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
        title: 'site1',
        img: 'https://api.icons8.com/download/86bf59698882ab1aa548517cab3908a699136acb/Color/PNG/512/Very_Basic/cancel-512.png'
    },
    {
        title: 'site2',
        img: 'https://www.clubsports.com/sites/default/files/styles/large_retina/public/CIRCLE-1600x1200-kids-clubsport-swim-2.jpg?itok=2ZhZU2AH'
    },
    {
        title: 'site3',
        img: 'http://www.powerretail.com.au/wp-content/uploads/2013/04/sofia-logo.png'
    },
    {
        title: 'site4',
        img: 'img/slider/1.png'
    },
    {
        title: 'site4',
        img: 'img/slider/2.png'
    },
    {
        title: 'site4',
        img: 'img/slider/3.png'
    },
    {
        title: 'site4',
        img: 'https://www.netsurion.com/Corporate/media/Corporate/Images/Blog/Thumbnails/target-bullseye-thumb.jpg?ext=.jpg'
    }
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
  //var isAnimated = false;
  
leftBtn.appendChild(leftSlider.list);
rightBtn.appendChild(rightSlider.list);
listLeft = leftBtn.querySelectorAll('.slider__link-item');
listRight = rightBtn.querySelectorAll('.slider__link-item');
  
current.style.backgroundImage = `url(${data[currentIndex.get()].img})`;
animateSlider(listLeft[2], 0 , 100, duration);
animateSlider(listRight[0], 0 , 100, duration);
  
leftBtn.onclick = (e) => {
    e.preventDefault();
    sliderMoveUp(listLeft, listRight, 'left');
};
  
rightBtn.onclick = (e) => {
    e.preventDefault();
    sliderMoveUp(listRight, listLeft, 'right');
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
  
function setCurrentPicture(index) {
    current.style.backgroundImage = `url(${data[index].img})`;
}
  
function sliderMoveUp(upList, downList, direction) {
    //console.log(direction);
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