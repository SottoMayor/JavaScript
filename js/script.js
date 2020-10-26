/*

Loops are used when we would like to perform the same task several times.

for-in

for (var nameOfVariable in array){
    expression...
}

In this loop, the iterations has the same lenght that the array or object.

*/



var person = {
    name : 'David',
    surname : 'Sotto Mayor',
    age : '20'
}

for (var atributes in person){
    console.log(atributes);
    console.log(person[atributes]);
}