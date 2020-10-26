/*

Loops are used when we would like to perform the same task several times.

While....

cont = 0

while(stop condition){
    expression...

    cont expression
}

While looping through arrays...

for(cont = number; stop condition; cont incrementation){
    .
    .
    expression
    .
    .
}

*/



var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(i = 0; i < numbers.length; i++){
    if ( numbers[i] % 2 == 0 ){
        console.log(numbers[i] + ' is even!')
    }else{
        console.log(numbers[i] + ' is odd!')   
    }
}


