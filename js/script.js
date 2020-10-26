/*

querySelector() - selecting the first occurrence of query and returning it as single variable

querySelectorAll() - selecting all possible occurrences of query and returning the array 

*/

var test = document.querySelectorAll('#test li:nth-of-type(2)');

// this index checks the position of the item in the array!
alert(test[0].innerHTML);


var newTest = document.querySelector('#test li');
alert(newTest.innerHTML);