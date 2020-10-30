/*

Math.round() - round the number to the nerest integer
Math.ceil() - round always to up
Math.floor() - round always to down
toFixed() - How many numbers after the dot

Math.abs() - absolute value
Math.pow(x, y) - x to the power y

parseInt
parseFloat
type of

Math.random() - returns random value from 0 to 1
*/

var info = document.getElementById('info');

var x = 2.4911;

console.log(Math.round(x, 2));
console.log(Math.ceil(x));
console.log(Math.floor(x));
console.log(x.toFixed(3));

a = 5
b = -5

console.log(Math.abs(a), Math.abs(b));

console.log(Math.pow(a, b));

var crazyVar = '3.1415DavizaoHu3Br';

console.log(parseInt(crazyVar));
console.log(parseFloat(crazyVar));

console.log(Math.random());

info.innerHTML = x;