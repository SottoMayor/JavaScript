/*

querySelector() - selecting the first occurrence of query and returning it as single variable

querySelectorAll() - selecting all possible occurrences of query and returning the array 

*/

var li = document.querySelectorAll('li');

li[5].style.color = 'orange';

liTest = document.querySelectorAll('#test li');

for (var index in liTest){
    li[index].style.color = 'red';
}

