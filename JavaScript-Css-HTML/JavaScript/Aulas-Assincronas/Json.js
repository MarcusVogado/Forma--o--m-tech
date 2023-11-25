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
//Convertendo um JSON para string
console.log('Convertendo uma lista de objtetos para json')
const todosJSON= JSON.stringify(todos)
console.log(todosJSON+"\n")

//Convertendo um objeto em string para JSON
console.log('Convertendo de string para JSON')
const todosList= JSON.parse(todosJSON)
console.log(todosList)