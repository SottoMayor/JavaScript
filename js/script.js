/*

*** Relational Operators ***

== -> equal
=== -> strictly the same
!= -> not equal

> -> bigger
>= -> bigger or equal
< -> smaller
<= -> smaller or equal

*/

var num1;
var num2;

num1 = 5;
num2 = '5';

console.log(num1 == num2);
console.log(num1 === num2);

num2 = 5;

console.log(num1 === num2);

num1 = 10;

console.log(num1 != num2);
console.log(num1 >  num2);
console.log(num1 >= num2);
console.log(num1 < num2);
console.log(num1 <= num2);
