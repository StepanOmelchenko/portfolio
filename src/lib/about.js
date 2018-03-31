
    const diagrams = document.querySelector('#diagrams-list');
    var isBeingWached = false;

    if (diagrams) {
        window.onscroll = () => {
            let target = diagrams.getBoundingClientRect().top;
            let win = window.pageYOffset;


            if (target < win && !isBeingWached) {
                isBeingWached = true;
                let allCircles = diagrams.querySelectorAll('.about__diagrams-circle');

                allCircles.forEach((circle) => {
                    const val = circle.dataset.fillClass;
                    circle.classList.add(val);
                });
            }
        };
    }
