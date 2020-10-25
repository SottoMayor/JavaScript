/*

*** Shortened Conditional Statements ***

if(condition){
    expression
}else{
    other expression
}

becomes....

(condition) ? returnIfIsTrue : returnIfIsFalse

*/

var num1;
var num2;

num1 = 5;
num2 = 5;

if(num1 % 2 == 1){
    alert(num1 + ' is odd!');
}else{
    alert(num1 + ' is even!');
}

// becomes...

console.log((num1 % 2 == 1) ? num1 + ' is odd!' : num1 + ' is even!');


