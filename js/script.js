/*

Loops are used when we would like to perform the same task several times.

break and continue...

break is used for stop the iteration
continue is used for filter the iteration

*/



var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(i = 0; i < numbers.length; i++){
    if ( numbers[i] % 2 == 0 ){
        continue
    }else{
        console.log(numbers[i] + ' is odd!')   
    }

    //here an array of odd numbers! because we used the 'continue' for filter the even numbers!
}


for(i = 0; i < numbers.length; i++){
    if ( numbers[i] == 5 ){
        break
    }else{
        console.log(numbers[i])   
    }

    //When the position number is five, the iteration is stoped!

}