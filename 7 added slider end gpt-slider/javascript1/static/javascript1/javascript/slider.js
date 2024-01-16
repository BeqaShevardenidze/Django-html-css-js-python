document.addEventListener('DOMContentLoaded', function() {
    right();
});

function right(){
    const main_box = document.getElementById('main-box');
    const rightBtn = document.getElementById('right');

    main_box.style.marginLeft = '240%'
    rightBtn.onclick = function () {
        if (main_box.style.marginLeft == '240%'){
            main_box.style.marginLeft = '80%'
        } else if(main_box.style.marginLeft == '80%'){
            main_box.style.marginLeft = '-80%'
        } else if(main_box.style.marginLeft == '-80%'){
            main_box.style.marginLeft = '-240%'
        } else if(main_box.style.marginLeft == '-240%'){
            main_box.style.marginLeft = '240%'
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    left();
});

function left(){
    const main_box = document.getElementById('main-box');
    const rightBtn = document.getElementById('left');

    main_box.style.marginLeft = '240%'
    rightBtn.onclick = function () {
        if (main_box.style.marginLeft == '240%'){
            main_box.style.marginLeft = '-240%'
        } else if (main_box.style.marginLeft == '80%'){
            main_box.style.marginLeft = '240%'
        } else if (main_box.style.marginLeft == '-80%'){
            main_box.style.marginLeft = '80%'
        } else if (main_box.style.marginLeft == '-240%'){
            main_box.style.marginLeft = '-80%'
        }
    }
}