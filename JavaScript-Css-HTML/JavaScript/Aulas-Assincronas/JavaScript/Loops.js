//LOOPS
// Para executar uma parte de um código várias vezes

//FOR
console.log("Utilizando o método tradicional com um índex\n")
const cars = ["Ferrari", "Tesla", "Mercedes", "BMW", "Volkswagen", "FIAT"]
for (let i = 0; i < cars.length; i++){
    console.log(cars[i])
}
console.log("\n")

//FOR UTILIZANDO LET VAR OF ARRAY
console.log("Utilizando o método for(let of array)\n")
for(let car of cars){
    console.log(car)
}
console.log("\n")
//Utilizando o FOREACH
//Diferente do for of o forEach() possui o Index mostrando qual o número atual da execução
console.log("Utilizando o forEach() \n")
cars.forEach((car,index)=>{
    console.log(index,car)
})
console.log("\n")

//WHILE
console.log("Utilizando o WHILE")

let index= 0;
while(index<10){
    console.log("Index aida é menor que 10: "+index)
    index++
}

