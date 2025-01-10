
// ------------for image zoom----------------
function f_zoomed(html_class){
    document.getElementById(html_class).addEventListener('click',
        function(){
            this.classList.toggle('zoomed');
        }
    )
}
f_zoomed('image')
f_zoomed('image2')
f_zoomed('image3')
f_zoomed('image4')
f_zoomed('image5')
f_zoomed('image6')
f_zoomed('image7')
