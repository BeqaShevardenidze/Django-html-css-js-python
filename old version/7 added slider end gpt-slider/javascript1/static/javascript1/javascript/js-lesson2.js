let num = 42;
document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('cont1').innerText = 'num = ' + num;
})

let firstName = "beqa"
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById('cont1-2').innerText = 'firstName = ' + firstName
})

// იმენა ფუნქცია
function eventFunction(element, value){
    document.addEventListener('DOMContentLoaded', function(){
        document.getElementById(element).innerText = value
    })
}
const isProgrammer = true
eventFunction('cont1-3', 'isProgramer: ' + isProgrammer)


let canDo = " let $ = 'test' \n let $num = 42 \n let num& = 42 \n let _ = 49 \n let _num = 12 \n let num_ = 12 \n let first_name = 'Elena' //bad \n let muNum = 34 // good \n let num42 = 10 "
eventFunction('cont2', canDo)

let restricted = " let 42num = '11' \n let my-num = 1 \n let const "
eventFunction('cont3', restricted)