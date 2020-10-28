/*

Strings!

charAt(index) - what caracter is at index
toUpperCase - write the caracters in UPPERCASE form
substring or slice(from, to) - slice the string 
substr(from, howMany) - get a substring of the string
split - splitting string into the array
join - connect an array into a string
replace(whatToReplace, forWhat) - replacing content of string 
trim - remove spaces into string
lastIndexOf('value') - the last place where the 'value' is in string
indexOf - the first place where the 'value' is in string

*/

window.onload = function(){

    var info = document.getElementById('info');
    var tmp = 'david';
    

    // david -> David
    info.innerHTML = tmp.charAt(0).toUpperCase() + tmp.substr(1,);


    var link = 'https://google.com';

    console.log(link.lastIndexOf('/'));;
    console.log(link.indexOf('/'));

    myName = 'David Sotto Mayor Maciel Fernandes';

    arrayName = myName.split(' ')
    console.log(arrayName);

    comanName = arrayName.join(', ');
    console.log(comanName);


    var spaceeeName = '    David! '
    console.log(spaceeeName.trim());
}

