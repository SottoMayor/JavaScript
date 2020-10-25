/*

Function is a block of code which can be executed as many times as we want.
We use this for code reuse.

function nameOfFunction(parameters){
    expression...
}

nameofFunction(parameters);

We can add return in the function using the word 'return'

*/

function myFunction(){
    alert('This is a function executing...');
}

myFunction();

function isOdd(num){
    return (num % 2 == 1) ? num + ' is odd': num + ' is even';
}

console.log(isOdd(2));

function sum(a, b){
    return a + b;
}

sum6And7 = sum(6, 7);
console.log(sum6And7);

function printFunction(){
    console.log('PRIIIINT');
}
printFunction();