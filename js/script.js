/*
    REGEXP
    regular expressions - formulas

    stringToSearch.search(formula) - searches and return the index
    stringToSearch.match(formula) - searches and returns an array
    regExpVar.exec(stringToSearch) - same as above but it returns only one result after each execution
    stringToSearch.replace(formula, "forWhat"); - replacing things in formula by "forWhat"
    formula.test(stringToSearch); - testing if something from formula exists in stringToSearch

    g - global - searching through full string
    i - insensitive - case Insensitive 
 */

window.onload = function()
{

    var info = document.getElementById(info);

    
    var btn = document.getElementById('myForm').btn;

    btn.onclick = function(event){

        event.preventDefault;

        var pw = document.getElementById('myForm').pw.value;
        var formula = / (?=.*[a-z]) (?=.*[A-Z]) (?=.*[0-9]).{8, } /

        info.innerHTML = formula.test(pw);
    }

    
    

   
};






