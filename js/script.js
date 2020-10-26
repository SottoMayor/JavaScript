/*

Objects are containers for storing variables and functions(methods).

var object = {
    name1 : blabla,
    name2 : bleble,
    name3 : blibli,
    name4 : blublu,
    nameOfFunction : function(){
        expression...
    }
}

*/

var person = {
    name : 'David',
    surname : 'Sotto Mayor',
    age : 20,
    addInformations: function() {
        return this.name + ' ' + this.surname + ' ' + this.age + ' years.'
    }
}

person.isAdult = true;
person.name = 'Fulano';