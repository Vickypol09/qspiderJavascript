//call() An instance method call means calling (or invoking) a method using an object (instance) of a class.
// we can pass parameter also in call() which can refelct to the object
//apply()-->An instance method call which accept number as well as array also

let person={
    Name : "Vicky",
    state : "maharashtra",
    
    printmsg(job){
        console.log(`hii im ${this.Name} and i am from ${this.state} And im working as ${job}`);
    }
}

let person2={
    Name : "anuj",
    state : "Nepal"
}

let person3={
    Name : "shub",
    state : "Bihari"
}

person.printmsg();

person.printmsg("Bckend Devloper");

person.printmsg.call(person2,'sql dev')
person.printmsg.call(person3,'sql dev')

