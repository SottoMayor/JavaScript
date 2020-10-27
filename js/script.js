/* 

Events are make websites dynamic, things that happens on your website!

How works...

element.event = function(){
    expression...
}

or 

function nameOfFunction(paramaters){
    expression...
}

element.event = function(){
    nameOfFunction(parameters)
} 

*/

var result = document.getElementById('result');

result.onmouseover = function(){
    alert('Mouse On!')
}

var hello  = document.getElementById('hello');

function execute(args){
    alert('Hello World from ' + args);
}

hello.onmouseleave = function(){
    execute('David');
};