/*

Arrays are series of values that are next to each other. The index indicates the position of 
the item in the array and it starts at zero.

array = [item1, item2, ..., itemN];

1 - join is used to join elements by sent argument
2 - concat is used for concatenate two arrays
3 - pop is used for removing the last element and show it
4 - push is used for add an element at the end of array
5 - shift is used for remove the first array element
6 - unshift is used for add an element at the begin of array
7 - sort is used for sort alphabetically or increasingly the array elements
8 - reverse is used for reserve the order of the array
9 - slice is used for slice the array in the form [n, m)
10 - splice is used from wich place we want removing or replacing elements 
*/

var supermarket = ['milk', 'coffee', 'bread', 'cheese', 'ham'];

prices = [2, 3, 10, 5, 8];

function myFunction(){
    var demo = document.getElementById('demo');
    demo.innerHTML = supermarket.join('<br>');
}

console.log(supermarket.concat(prices));

console.log(supermarket.pop(), supermarket);

supermarket.push('ham');
console.log(supermarket);

supermarket.shift();
console.log(supermarket);

supermarket.unshift('milk');
console.log(supermarket);

supermarket.sort();
prices.sort();
console.log(supermarket, prices);

supermarket.reverse();
prices.reverse();
console.log(supermarket, prices);

console.log(supermarket.slice(0, 3));


prices.splice(0, 2, 'replacing', 'replacing','replacing');

console.log(prices);




