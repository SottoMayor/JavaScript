/* 

addEventListener(...) 
removeEventListener(...)

*/

window.onload = function(){

    var result = document.getElementById('result');
    var stop = document.getElementById('stop');

    /*
    result.addEventListener('mouseenter', changeColor);
    result.addEventListener('mouseleave', originalColor);
    */

    createEvent(result, 'mouseenter', changeColor);
    createEvent(result, 'mouseleave', originalColor);
    createEvent(result, 'click', orange);

    
    stop.addEventListener('click', function(){
        result.removeEventListener('mouseenter', changeColor);
        result.removeEventListener('mouseleave', originalColor);
    })

}

function createEvent(obj, event, nameOfFunction){
    if(addEventListener){
        obj.addEventListener(event, nameOfFunction)
    }
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

function orange(){
    this.style.color = 'orange';
}
