// ------------Start New Project----------------
const start_new_project_btn = document.querySelector('.start_new_project_btn')
function f_start_new_project_btn(){
    const start_new_project_ul = document.querySelector('.start_new_project_ul')
    if (start_new_project_ul.style.display === 'block'){
        start_new_project_ul.style.display = 'none'
    } else {
        start_new_project_ul.style.display = 'block'
    }
}
start_new_project_btn.addEventListener('click', () => f_start_new_project_btn());


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


// ------------HTML Tags UnHide----------------
const html_doc_tags_btn = document.querySelector('.html_doc_tags')
function f_html_doc_tags_btn(){
    const html_doc_tags_ul = document.querySelector('.html_doc_tags_ul')
    if (html_doc_tags_ul.style.display === 'block'){
        html_doc_tags_ul.style.display = 'none'
    } else {
        html_doc_tags_ul.style.display = 'block'
    }
}
html_doc_tags_btn.addEventListener('click', () => f_html_doc_tags_btn());