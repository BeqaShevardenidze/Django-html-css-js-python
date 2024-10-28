function step1(){
    const resultElement = document.getElementById('result')
    // console.log(resultElement.textContent)
    // resultElement.textContent = 42
        
    const input1 = document.getElementById('input1')
    const input2 = document.getElementById('input2')
        
    // console.log(Number(input1.value))
    // console.log(Number(input2.value))
    // console.log(typeof(Number(input1.value)))
        
    const sum = Number(input1.value) + Number(input2.value)
    resultElement.textContent = sum
    console.log(sum)
}
// step1()

//submit button onclick
function step2(){
    const resultElement = document.getElementById('result')
    const input1 = document.getElementById('input1')
    const input2 = document.getElementById('input2')
    const submitBtn = document.getElementById('submit')

    submitBtn.onclick = function () {
        // console.log('hello click')    
        const sum = Number(input1.value) + Number(input2.value)
        resultElement.textContent = sum
    }
}
// step2()

// plus minus button ჩემით
function step3(){
    const resultElement = document.getElementById('result')
    const input1 = document.getElementById('input1')
    const input2 = document.getElementById('input2')
    const submitBtn = document.getElementById('submit')
    const plus = document.getElementById('plus')
    const minus = document.getElementById('minus')

    plus.onclick = function () {
        const sum = Number(input1.value) + Number(input2.value)

        submitBtn.onclick = function () {
            resultElement.textContent = sum
        }
    }

    minus.onclick = function () {
        const deduction = Number(input1.value) - Number(input2.value)

        submitBtn.onclick = function () {
            resultElement.textContent = deduction
        }
    }
}
// step3()

// video
function step4(){
    const resultElement = document.getElementById('result')
    const input1 = document.getElementById('input1')
    const input2 = document.getElementById('input2')
    const submitBtn = document.getElementById('submit')
    const plusBtn = document.getElementById('plus')
    const minusBtn = document.getElementById('minus')

    plusBtn.onclick = function (){

    }

    minusBtn.onclick = function (){

    }

    submitBtn.onclick = function () {
        const sum = Number(input1.value) + Number(input2.value)
        resultElement.textContent = sum
    }
}
step4()



// -------------test-------------
function test1(){
    const testcube = document.getElementById('testcube');
    const testbtn = document.getElementById('testBtn');

    testbtn.onclick = function (){
        if (testcube.style.backgroundColor == 'black'){
            testcube.style.backgroundColor = 'red'
        } else{
            testcube.style.backgroundColor = 'black'
        }
    }

    const testcube2 = document.getElementById('testcube2');
    const testbtn2 = document.getElementById('testBtn2');
    const testbtn3 = document.getElementById('testBtn3');
        // -----cube-2-----
    left = 0
    testbtn2.onclick = function (){
        if (left == 0){
            left += 100
            testcube2.style.marginLeft = left + 'px'
            testcube2.style.borderRadius = '10%'
            testcube2.style.transition = "all .5s linear"
        } else if (left == 100){
            left += 100
            testcube2.style.marginLeft = left + 'px'
            testcube2.style.borderRadius = '20%'
        } else if (left == 200){
            left += 100
            testcube2.style.marginLeft = left + 'px'
            testcube2.style.borderRadius = '30%'
        } else if (left == 300){
            left += 100
            testcube2.style.marginLeft = left + 'px'
            testcube2.style.borderRadius = '40%'
        } else if (left == 400){
            left += 100
            testcube2.style.marginLeft = left + 'px'
            testcube2.style.borderRadius = '50%'
        } else if (left == 500){
            left = 0
            testcube2.style.marginLeft = left + 'px'
            testcube2.style.borderRadius = '0%'
        }
    }
    testbtn3.onclick = function () {
        left = 0
        testcube2.style.marginLeft = left + 'px'
        testcube2.style.borderRadius = '0%'
    }
}
test1()

// ------------Nav Bar---------
function navbar(){
    const navbar = document.getElementById('navbar')
    const ul = document.getElementById('ul')
    const btnHide = document.getElementById('btnHide')

    btnHide.onclick = function (){
        if (navbar.style.height == '50px'){
            navbar.style.height = '200px'
            ul.style.visibility = 'visible'
            navbar.style.transition = 'all .5s linear'
        } else{
            navbar.style.height = '50px'
            ul.style.visibility = 'hidden'
            navbar.style.transition = 'all .5s linear'
        }
    }
}
navbar()

// task
// 1) შევქმნათ მენიუ, რომლის კონტენტიც დამალულია, 
// ღილეკის დაჭერის შემდეგ გამოჩნდეს კონკრეტული გრაფა