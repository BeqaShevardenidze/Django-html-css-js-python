// ---------V1------------
// const img_zoom_1_btn = document.querySelector('.img_zoom_1_btn')

// function f_img_zoom(){
//     const img_zoom_1 = document.querySelector('.img_zoom_1')
//     if (img_zoom_1.style.width === '500px'){
//         img_zoom_1.style.width = '400px'
//     } else {
//         img_zoom_1.style.width = "500px"
//     }
// }

// img_zoom_1_btn.addEventListener('click', () => f_img_zoom())



// ---------V2------------
const img_zoom_1_btn = document.querySelector('.img_zoom_1_btn')

function f_img_zoom(){
    const img_zoom_1 = document.querySelector('.img_zoom_1')
    if (img_zoom_1.style.width != '400px'){
        img_zoom_1.style.transform = "scale(1.1)"
    } else if (img_zoom_1.style.transform === "scale(1.1)"){
        img_zoom_1.style.transform = "scale(1)"
    }
}

img_zoom_1_btn.addEventListener('click', () => f_img_zoom())