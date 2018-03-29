class Circle {
    constructor(data) {
        this.svgns = 'http://www.w3.org/2000/svg';
        this.svg = document.createElementNS(this.svgns, 'svg');
        this.height = data.size;
        this.width = data.size;
        this.radius = data.size / 3;
        this.percent = data.percent;
        this.strokeDasharray = 2 * Math.PI * this.radius;
        this.svg.setAttribute('width', this.width);
        this.svg.setAttribute('height', this.height);
        this.svg.setAttribute('viewBox', `0 0 ${this.width} ${this.height}`);
        this.svg.classList.add('about__diagrams-svg');
        this.baseCircle = this.createCircle('#dfdcd5', true);
        this.bgCircle = this.createCircle('#6c9c5a');
        this.bgCircle.setAttribute('data-fill-class', this.percent);
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
            circle.setAttribute('stroke-dashoffset', this.strokeDasharray);
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
const circlesData = {
                    header: 'test',
                    circles: [
                        {
                            title: 'circle1',
                            data: {
                                size: 110,
                                percent: 'class-90'
                            }
                        },
                        {
                            title: 'circle2',
                            data: {
                                size: 110,
                                percent: 'class-70'
                            }
                        }
                    ]
                    };

if (diagramsContainer) {
    /* console.log('hello from diagrams'); */
    diagramsContainer.appendChild(new ScillList(circlesData));
}