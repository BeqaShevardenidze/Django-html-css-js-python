// ------------HTML Structure UnHide----------------
const html_doc_struct_btn = document.querySelector('.html_doc_struct_btn')
function f_html_doc_struct_btn(){
    const html_doc_struct_ul = document.querySelector('.html_doc_struct_ul')
    if (html_doc_struct_ul.style.display === 'block'){
        html_doc_struct_ul.style.display = 'none'
    } else {
        html_doc_struct_ul.style.display = 'block'
    }
}
html_doc_struct_btn.addEventListener('click', () => f_html_doc_struct_btn());