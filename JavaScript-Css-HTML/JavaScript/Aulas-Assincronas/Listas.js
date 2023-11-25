//Trabalhando com listas no JavaScript
//Declaração de uma lista
let names = ["Marcus", "Junior", "Maria", "Felipe"]

// Manipulando uma lista
//As listas em JavaScript assim como em outras linguagens de programação começa o seu índice em 0, ou seja o seu primeiro elemento é acessado
// a partir de [0] e assim por diante 

// Método push()- insere um nome no final da lista
console.log("Inserindo um nome ao final da lista\n")
names.push("José")
console.log(names)
//Método unshif() - insere um nome no início da lista
console.log("Inserindo um nome no início da lista\n")
names.unshift("Sabrina")
console.log(names)
//Método pop()- remover um nome ao final da lista
console.log("Removendo um nome do final da lista\n")
names.pop()
console.log(names)
//Método shift()- remover um nome no começo da lista
console.log("Removendo um nome do início da lista\n")
names.shift()
console.log(names)

//Para descobrir a posição de um elemento dentro de uma lista
//Método indexOf('Elemento a ser buscado')
console.log("Buscando um nome dentro da lista\n")
let nomeDesejado = "Marcus"
let resultNomeBuscado = names.indexOf(nomeDesejado)
if (resultNomeBuscado != -1) {

    console.log(`Nome encontrado = ${names[resultNomeBuscado]}`)
}
//Ordenando uma lista em ordem alfabetica
console.log("Ordenando a lista em ordem alfabetica\n")
names.sort()
console.log(names)

//Verificar se uma variável é uma lista - Array

let ehArray =  Array.isArray(names)
console.log(ehArray)