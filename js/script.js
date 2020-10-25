/*

*** Conditional Statements ***

if(condition){
    expression
}else if{
    other expression
}else if{
    another expression
}
 .
 .
 .
}else{
    the last expression
}

*/

var num1;
var num2;

num1 = 5;
num2 = 5;

if(num1 % 2 == 0){
    alert(num1 + ' is even!');
}else{
    alert(num2 + ' is odd!');
}

weather = 'sunny';

if(weather == 'cloudy'){
    console.log('The weather ir cloudy!');
}else if(weather == 'sunny'){
    console.log('The weather is sunny!');
}else{
    console.log('The weather is rainy!')
}


