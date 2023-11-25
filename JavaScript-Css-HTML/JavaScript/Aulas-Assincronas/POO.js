//Class e Contructor
class Person {
    constructor(firstName, lastName, age) {

        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    getFullName() {
        console.log(`Olá ${this.firstName} ${this.lastName}`)
    }

    //Quando declaramos uma função como static não precisamos fazer a instaciação da classe para utilizar 
    // o método
    static speak() {
        console.log("Hello class")
    }
}

const person = new Person("Marcus", "Vogado", 29);
console.log(person);
person.getFullName()

//Não precisamos criar um objeto pessoa para utilziar o método speak pos foi declarado como static
Person.speak()

//HERANÇA EM JAVASCRIPT

class Animal {
    constructor(name, height, weight) {
        this.nome = name;
        this.altura = height;
        this.peso = weight;
    }
    vocalizar() {
        console.log(`${this.nome} made some noise!`)
    }
}

class Dog extends Animal {
    constructor(name, height, weight) {
        super(name, height, weight)
    }
    vocalizar() {
        console.log(`${this.nome} Say: Au Au Au`)
    }
}

let dog = new Dog("Bob", 0.65, 5.6)
dog.vocalizar()