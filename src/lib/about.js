
    const diagrams = document.querySelector('#diagrams-list');
    var isBeingWached = false;

    //console.log(diagrams);

    if (diagrams) {
        window.onscroll = () => {
            let target = diagrams.getBoundingClientRect().top;
            let win = window.pageYOffset;


            if (target < win && !isBeingWached) {
                isBeingWached = true;
                //console.log('diagrams here');
                let allCircles = diagrams.querySelectorAll('.about__diagrams-circle');

                allCircles.forEach((circle) => {
                    const val = circle.dataset.fillClass;
                    //console.log(val);
                    circle.classList.add(val);
                });
            }
        };
    }
