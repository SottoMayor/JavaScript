/*

*** Logical Operators ***

0 -> false
1 -> true


! -> not


!(0) -> results 1
!(1) -> results 0


&& -> Conjuction AND
|| -> Disjuction OR

*/

var num1;
var num2;

num1 = 5;
num2 = 5;

if(num1 > num2 || num1 == num2){
    alert('OOOOOOYEAH!')
}

if(num1 == num2 && !(num2 == 10)){
    console.log('We won!')
}
