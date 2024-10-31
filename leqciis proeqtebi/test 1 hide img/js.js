function toggleImage(button) {
    const img = button.previousElementSibling;
    if (img.style.display === 'none') {
        img.style.display = 'block';
    } else {
        img.style.display = 'none';
    }
}

// ------------------------------------------------

const main_img_hide = document.querySelector('.main_img_hide')
const img_btn_hide = document.querySelector('.img_btn_hide')

function f_main_img_hide(){
    if (main_img_hide.style.display === 'none'){
        main_img_hide.style.display = 'block'
    } else {
        main_img_hide.style.display = 'none'
    }
}
// img_btn_hide.addEventListener('click', f_main_img_hide, hide_img)



// ------------------------------------------------

const img_hide = document.querySelector('.hide')
const btn_hide = document.querySelector('.btn_hide')



function hide_img(){
    if (img_hide.style.display === 'none'){
        img_hide.style.display = 'block'
    }
    else{
        img_hide.style.display = 'none'
    }
}
img_hide.addEventListener('click', hide_img)
btn_hide.addEventListener('click', hide_img)


// ------------------------------------------------

// button ცვლადს მივანიჭოთ კლასი btn
const button = document.querySelector('.btn')

// ფუნქცია რომელიც ბეჭდავს კონსოლში სიტყვას 'click'
function handleClick(){
    console.log('click')
}

// ივენთ ლისთენერში ფუნქცია handleClick -ის ჩამატება
button.addEventListener('click',  handleClick)


function test(){
    f_main_img_hide() 
    hide_img()
}

img_btn_hide.addEventListener('click', test)
