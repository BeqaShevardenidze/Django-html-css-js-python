// ვრცლად ღილაკით ჩამოშლა
function f_visible(visible_btn_style, visible_ul_style){
    const visible_btn = document.querySelector(visible_btn_style)
    function f_visible_btn(){
        const visible_ul = document.querySelector(visible_ul_style)
        if(visible_ul.style.display === 'block'){
            visible_ul.style.display = 'none'
        } else {
            visible_ul.style.display = 'block'
        }
    }
    visible_btn.addEventListener('click', () => f_visible_btn());
}
f_visible('.visible_btn', '.visible_ul')
f_visible('.visible_btn_2', '.visible_ul_2')
f_visible('.visible_btn_3', '.visible_ul_3')
f_visible('.visible_btn_4', '.visible_ul_4')
f_visible('.visible_btn_5', '.visible_ul_5')
f_visible('.visible_btn_6', '.visible_ul_6')
f_visible('.visible_btn_7', '.visible_ul_7')    



// html კოდის კოპირება
function copyCode() {
    let code = document.getElementById("codeBlock").innerText;
    navigator.clipboard.writeText(code).then(() => alert("კოდი დაკოპირდა!")).catch(err => console.error("შეცდომა კოპირებისას:", err));
}