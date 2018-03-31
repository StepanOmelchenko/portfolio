class Circle {
    constructor(data) {
        this.svgns = 'http://www.w3.org/2000/svg';
        this.svg = document.createElementNS(this.svgns, 'svg');
        this.height = data.size;
        this.width = data.size;
        this.radius = data.radius;
        this.percent = data.percent;
        this.strokeDasharray = `.001 ${2 * Math.PI * this.radius}`;
        this.svg.setAttribute('width', this.width);
        this.svg.setAttribute('height', this.height);
        this.svg.setAttribute('viewBox', `0 0 ${this.width} ${this.height}`);
        this.svg.classList.add('about__diagrams-svg');
        this.baseCircle = this.createCircle('#6c9c5a', true);
        this.baseCircle.setAttribute('data-fill-class', this.percent);
        this.bgCircle = this.createCircle('#dfdcd5');
        this.svg.appendChild(this.bgCircle);
        this.svg.appendChild(this.baseCircle);
      
      return this.svg;
    }
    
    createCircle(color, isBase = false) {
        const circle = document.createElementNS(this.svgns, 'circle');
        const cx = this.width / 2;
        const cy = this.height / 2;
        circle.setAttribute('cx', cx);
        circle.setAttribute('cy', cy);
        circle.setAttribute('r', this.radius);
        circle.setAttribute('fill', 'none');
        circle.setAttribute('stroke', color);
        circle.setAttribute('stroke-width', '15');
        if (isBase) {
            circle.setAttribute('transform', `rotate(-90 ${cx} ${cy})`);
            circle.setAttribute('stroke-dasharray', this.strokeDasharray);
            //circle.setAttribute('stroke-dashoffset', this.strokeDasharray);
            circle.classList.add('about__diagrams-circle');
        }
        return circle;
    }
    
  }

class Skill {
    constructor(obj) {
        this.circle = new Circle(obj.data);
        this.title = document.createElement('span');
        this.title.innerText = obj.title;
        this.title.classList.add('about__diagrams-title');
        this.item = document.createElement('li');
        this.item.appendChild(this.circle);
        this.item.appendChild(this.title);
        this.item.classList.add('about__diagrams-item');

        return this.item;
    }
}

class ScillList {
    constructor(data) {
        /* console.log('hello from scillList'); */
        this.row = document.createElement('li');
        this.row.classList.add('about__diagrams-row');
        this.header = document.createElement('h3');
        this.header.classList.add('about__diagrams-header');
        this.header.innerText = data.header;
        this.list = document.createElement('ul');
        this.list.classList.add('about__diagrams-list');

        data.circles.forEach((obj) => {
            this.list.appendChild(new Skill(obj));
        });

        this.row.appendChild(this.header);
        this.row.appendChild(this.list);
        /* console.log('row', this.row); */
        return this.row;
    }


}

const diagramsContainer = document.querySelector('#diagrams-list');
const circlesData = [
    {
        header: 'Frontend',
        circles: [
            {
                title: 'HTML',
                data: {
                    size: 110,
                    radius: 45,
                    percent: 'circle--70'
                }
            },
            {
                title: 'CSS',
                data: {
                    size: 110,
                    radius: 45,
                    percent: 'circle--70'
                }
            },
            {
                title: 'Javascript',
                data: {
                    size: 110,
                    radius: 45,
                    percent: 'circle--70'
                }
            }
        ]
    },
    {
        header: 'Backend',
        circles: [
            {
                title: 'PHP',
                data: {
                    size: 110,
                    radius: 45,
                    percent: 'circle--10'
                }
            },
            {
                title: 'mySQL',
                data: {
                    size: 110,
                    radius: 45,
                    percent: 'circle--10'
                }
            },
            {
                title: 'Node.js',
                data: {
                    size: 110,
                    radius: 45,
                    percent: 'circle--10'
                }
            }
        ]
    },
    {
        header: 'WorkFlow',
        circles: [
            {
                title: 'Git',
                data: {
                    size: 110,
                    radius: 45,
                    percent: 'circle--50'
                }
            },
            {
                title: 'Gulp',
                data: {
                    size: 110,
                    radius: 45,
                    percent: 'circle--30'
                }
            },
            {
                title: 'Bower',
                data: {
                    size: 110,
                    radius: 45,
                    percent: 'circle--10'
                }
            }
        ]
    }
];

if (diagramsContainer) {
    /* console.log('hello from diagrams'); */
    diagramsContainer.innerHTML = null;
    circlesData.forEach((row) => {
        diagramsContainer.appendChild(new ScillList(row));
    });
    
}