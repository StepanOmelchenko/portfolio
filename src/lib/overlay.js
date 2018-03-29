class CreateOverlay {
    constructor(menuList) {
        this.menu = document.createElement('ul');
        this.menu.classList.add('overlay__list');
        this.overlay = document.createElement('div');
        this.overlay.classList.add('overlay');

        menuList.forEach((item) => {
            this.menu.appendChild(this.createItem(item));
        });

        this.overlay.appendChild(this.menu);
        return this.overlay;
    }
    
    createItem(obj) {
        this.item = document.createElement('li');
        this.item.classList.add('overlay__item');
        this.link = document.createElement('a');
        this.link.classList.add('overlay__link');
        this.link.innerText = obj.title;
        this.link.setAttribute('href', obj.href);
        /* this.link.addEventListener('click', function(e) {
                e.preventDefault();
                this.overlay.classList.remove('overlay--active');
            }); */
        this.item.appendChild(this.link);
        return this.item;
    }
}

const overlayMenu = [
    {
        title: 'мои работы',
        href: 'works.html'
    },
    {
        title: 'блог',
        href: 'blog.html'
    },
    {
        title: 'обо мне',
        href: 'about.html'
    },
    {
        title: 'авторизация',
        href: 'index.html'
    }
];

if (hamburger) {
    document.querySelector('body').appendChild(new CreateOverlay(overlayMenu));
}