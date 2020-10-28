/*

setTimeOut(function, milliseconds) - function will be run once

setInterval(function, milliseconds) - function will be run many times in intervals

clearTimeOut - stop the function that was gonna be initializate by setTimeOut

clearInterval - stop the interval of setInterval function.

*/

window.onload = function(){

    var btn = document.getElementById('btn');

    btn.onclick = function(){
        myFunction();
    }

    var btn1 = document.getElementById('btn1');

    btn1.onclick = function(){
        func();
    }
    

}

function myFunction() {
    setTimeout(function(){ alert("Hello"); }, 3000);
  }

function func() {
    setInterval(function(){ alert("Hello"); }, 3000);
}
