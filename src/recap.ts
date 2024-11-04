const myName = 'Miguel';
const myAge = 22;

const suma = (a:number, b: number) => { return a + b; }
suma(2, 3); // 5

class Persona {
    age;
    name;

    constructor(name: string, age: number){
        this.age = age;
        this.name = name;
    }

    getSummary(){
        return `My name is ${this.name} and I am ${this.age} years old`;
    }
}

const miguel = new Persona('Miguel', 22);
miguel.getSummary();