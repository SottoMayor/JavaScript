/* 

the window.onload is used when we would like initialize the JS code only our page or website is
totally load!

window.onload() = function{
    'synchronous' code...
}

'asynchronous' code....


*/

window.onload = function(){

    var result = document.getElementById('result');

    result.onmouseenter = changeColor;
    result.onmouseleave = originalColor;

}


function changeColor(){
    this.style.backgroundColor = '#444';
    this.style.color = 'white';
    this.style.transition= '0.7s';
}

function originalColor(){
    this.style.backgroundColor = '#aaa';
    this.style.color = 'black';
}