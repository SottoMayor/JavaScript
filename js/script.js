/*

Function is a block of code which can be executed as many times as we want.
We use this for code reuse.

Functions in the functions
function name1(parameters){
    ....
}

function name2(parameters){
    ... name1(parameters) ....
}


*/

var isOdd = num => (num % 2 == 1) ? true : false;

var sentence = (num) => {
    // we want check if the number is odd, so we will use the isOdd(num) function!

    if(isOdd(num)){
        alert(num + ' is odd!');
    }else{
        alert(num + ' is even!')
    }

}

sentence(5);
sentence(6);