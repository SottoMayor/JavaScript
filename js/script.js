function addNumbers() {

    var sum = 0;

    for(var index in arguments){
        sum += arguments[index];
    }

    return sum;

}

console.log(addNumbers(4, 5, 6));

