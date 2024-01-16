// alert("hello")
var a=3+5;
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("cont1").innerText = "var a = 3 + 5 = " + a;
});
// alert(a)

var date = new Date();
// document.write(date)
// console.log(date);
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("cont2").innerText = date;
});

var time = date.getHours();
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("cont3").innerText = "Hours = " + time;
});

var minutes = date.getMinutes();
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("cont3-2").innerText = "Minutes = " + minutes;
});

// For Fun
