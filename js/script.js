/*

How to add and remove DOM elements

createElement('nameOfTag')

appendChild

removeChild

nameOfVar.parentNode.removeChild(nameOfVar)

*/

var doc = document.querySelector('body');

var p = document.createElement('p');
p.style.color = 'green';
p.className = 'myP';
p.innerHTML = 'My Text Here';
p.style.fontSize = '30px'

doc.appendChild(p);

//to remove...

//this form
var removeList0 = document.querySelector('#test0').remove();

//or this form
var removeList = document.querySelector('#test');

removeList.parentNode.removeChild(removeList);