/*

Loops are used when we would like to perform the same task several times.

While....

cont = 0

while(stop condition){
    expression...

    cont expression
}

While looping through arrays...

while(stop condition){
    expression
    .
    .
    array[cont]
    .
    .

    cont expression
}

do - while -> First works the expression and after checks the stop condition

do{
    expression
}while(expression);


*/

var supermarket = ['milk', 'coffee', 'bread', 'cheese', 'ham'];

cont = 0;

while(cont < supermarket.length){
    console.log(supermarket[cont]);

    cont++;
}


do{
    console.log(cont);
    
    cont++;
}while(cont < 5);


