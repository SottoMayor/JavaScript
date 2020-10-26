/*

Arrays are series of values that are next to each other. The index indicates the position of 
the item in the array and it starts at zero.

array = [item1, item2, ..., itemN];

get an item by index....
array[n] = [itemN];

length of the array...
array.length

add items in the array...
array[array.length] = newItem
array.push('newItem')

replacing items in the array...
array[i] = itemI, so array[i] = itemZ

KeyValues array...

array = [];
array[key1] = value1;
array[key2] = value2;
.
.
.
array[keyN] = valueN;

*/

var supermarket = ['milk', 'coffee', 'bread', 'cheese', 'ham'];

console.log(supermarket[3]); // cheese!

supermarket[supermarket.length] = 'apple';
supermarket.push('banana');
console.log(supermarket);

supermarket[2] = 'grape';
console.log(supermarket);

person = [];
person['name'] = 'David';
person['surname'] = 'Sotto Mayor';
person['age'] = 20;
console.log(person);

