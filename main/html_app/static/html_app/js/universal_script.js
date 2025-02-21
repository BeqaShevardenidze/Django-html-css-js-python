const visible_btn = document.querySelector('.visible_btn')

function f_visible_btn(){
    const visible_ul = document.querySelector('.visible_ul')
    if(visible_ul.style.display === 'block'){
        visible_ul.style.display = 'none'
    } else {
        visible_ul.style.display = 'block'
    }
}
visible_btn.addEventListener('click', () => f_visible_btn());
