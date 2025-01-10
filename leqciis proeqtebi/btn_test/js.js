
const btn_visible_1 = document.querySelector('.btn_visible_1')
const btn_visible_2 = document.querySelector('.btn_visible_2')
const btn_visible_3 = document.querySelector('.btn_visible_3')
const btn_visible_4 = document.querySelector('.btn_visible_4')
const btn_visible_5 = document.querySelector('.btn_visible_5')
const btn_visible_7 = document.querySelector('.btn_visible_7')
function f_test(html_class){
    const img_visible_1 = document.querySelector(html_class)
    
    function f_img_visible_1(){
        if (img_visible_1.style.display === 'block'){
            img_visible_1.style.display = 'none'
        } else{
            img_visible_1.style.display = 'block'
        }
    }
    f_img_visible_1()
}
btn_visible_1.addEventListener('click', () => f_test('.img_visible_1'));
btn_visible_2.addEventListener('click', () => f_test('.img_visible_2'));
btn_visible_3.addEventListener('click', () => f_test('.img_visible_3'));
btn_visible_4.addEventListener('click', () => f_test('.img_visible_4'));
btn_visible_5.addEventListener('click', () => f_test('.img_visible_5'));
btn_visible_5.addEventListener('click', () => f_test('.img_visible_6'));
btn_visible_7.addEventListener('click', () => f_test('.img_visible_7'));






