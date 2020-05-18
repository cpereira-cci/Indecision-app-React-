class Person {
    constructor(name = 'Anonymous', age){
        this.name = name;
        this.age = age;
    }

    getGreeting(){      
        return `Hi, i am ${this.name}`
    }
    getDescription(){
        return `${this.name} is ${this.age} years old`
    }
}

const me = new Person('Collin Pereira', 23);
console.log(me.getGreeting())
console.log(me.getDescription( ))

