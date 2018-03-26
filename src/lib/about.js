
    const diagrams = document.querySelector('#diagrams-list');

    //console.log(diagrams);

    if (diagrams) {
        window.onscroll = () => {
            let target = diagrams.getBoundingClientRect().top;
            let win = window.pageYOffset;


            if (target < win) {
                console.log('diagrams here');
            }
        };
    }
