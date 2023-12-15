//Selecionando elemento pelo ID tão somente pelo ID
// const addUserText = document.getElementById('add-user');
// console.log(addUserText)

//Com o querySelector pode selecionar o elemento pelo Id pela classe ou por sua Tag
// Selecionando elemento dentro do Container
// const myForm = document.querySelector('.container #my-form')
// console.log(myForm)

// //Para selecionar todos os elementos que utilizam um class ou um tag podemos utilizar desta forma:
// const allItems = document.querySelectorAll('.item')
// console.log(allItems)

// const items = document.querySelector('.items')
// items.remove();

// items.lastElementChild.remove() // Remove o primeiro elemento selecionado
// items.firstChild.remove()//Remove o último elemento da lista
// items.children[1].remove()//Remove uma possição específica dentro de um array de elementos 
class Usuario {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;        
    }
}

document.querySelector('#my-form').addEventListener('submit', (event) => {
    //To descobrindo qual foi o elemento que me chamou   
     let userCreate = new Usuario()     
     userCreate.name = document.getElementById('name').value
     userCreate.email = document.getElementById('email').value
     userCreate.password = document.getElementById('password').value 
     const listUsers = JSON.parse(localStorage.getItem('listUsers')) || []
     listUsers.push(userCreate)
     localStorage.setItem('listUsers',JSON.stringify(listUsers))
})

let listUsers = JSON.parse(localStorage.getItem('listUsers'))
listUsers.map(user => console.log(user))





