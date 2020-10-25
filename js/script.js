/*

Function is a block of code which can be executed as many times as we want.
We use this for code reuse.

Arrow functions...

var NameofFunction = (parameters) => {
    expression
}

simplified form of write an arrow function, but but it only works if we are 
only one parameter and a one-line expression... in this form, the one-line expression
is returned by the function.

var NameOfFunction = (oneParameter) => one-lineExpression;


*/

// global variable 
num = 3;

function isOdd(num){
    return (num % 2 == 1) ? num + ' is odd': num + ' is even';
}

console.log(isOdd(num));

function isEven(num){
    //local variable
    num = 4;
    return (num % 2 == 0) ? num + ' is even': num + ' is odd';
}

console.log(isEven(num));

var func = () => {
    alert('hi, I am a arrow function!');
}
func();


var quadNumber = (number) => number ** 2;
console.log(quadNumber(2));