//OBJETOS
const person = {
    firstName: "Marcus",
    lastName: "Vogado",
    age: "21",
    hobbies: ["Jogar CS2", "Assistir Vídeos YouTube", "Estudar Programação"],
    dog: {
        name: "Willian",
        age: 3
    }
}
console.log("Pessoa sem o destructor")
console.log(person + "\n")

console.log("Utilizando o Destructor")

const {
    firstName: primeiroNome,
    lastName,
    age,
    hobbies,
    dog: {
        name: dogName,
        age: dogAge
    }
} = person;

console.log(primeiroNome)
console.log(lastName)
console.log(dogName)
console.log(dogAge)

//TAREFAS
console.log("Tarefas")
const todos = [
    {
        id: 1,
        description: "Estudar Programação",
        isCompleted: false,
        dateTime: "21/11/2023 19:00:00"
    }, 
    {
        id:2,
        description:"Estudar Inglês",
        isCompleted:false,
        dateTime:"21/11/2023 22:00:00"
    }
]

console.log(todos[1])