/*

Objects are containers for storing variables and functions(methods).

Classes and Methods...

*/

class Person{

    // constructor
    name = 'unknow';
    surname = 'unknow';
    age = 'unknow';

    // methods

    printName = () => {
        console.log(this.name);
    }

    setName = (newName) => {
        this.name = newName;
    }

    printSurname = () => {
        console.log(this.surname);
    }

    setSurname = (newSurname) => {
        this.surname = newSurname;
    }

    printAge = () => {
        console.log(this.age);
    }

    setAge = (newAge) => {
        this.age = newAge;
    }

}

David = new Person();
David.printName();
David.printSurname();
David.printAge();

David.setName('David');
David.setSurname('Sotto Mayor');
David.setAge(20);
David.printName();
David.printSurname();
David.printAge();

