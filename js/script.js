/* 

Events are make websites dynamic, things that happens on your website!

How works... another form...

function nameOfFunction(){
    expression...
}

element.event = nameOfFunction;

this - this world indicates a generical element that the event will trigger

*/

var result = document.getElementById('result');

function changeColor(){
    this.style.backgroundColor = '#444';
    this.style.color = 'white';
    this.style.transition= '0.7s';
}

function originalColor(){
    this.style.backgroundColor = '#aaa';
    this.style.color = 'black';
}

result.onmouseenter = changeColor;
result.onmouseleave = originalColor;