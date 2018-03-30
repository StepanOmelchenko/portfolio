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
        let item = document.createElement('li');
        item.classList.add('overlay__item');
        let link = document.createElement('a');
        link.classList.add('overlay__link');
        link.innerText = obj.title;
        link.setAttribute('href', obj.href);
        item.appendChild(link);
        return item;
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

document.querySelector('body').appendChild(new CreateOverlay(overlayMenu));
