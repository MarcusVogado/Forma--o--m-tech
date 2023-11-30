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


const items = document.querySelector('.items')
items.remove();

items.lastElementChild.remove() // Remove o primeiro elemento selecionado
items.firstChild.remove()//Remove o último elemento da lista
