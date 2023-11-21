//MAP
const numbers = [1, 2, 3, 4, 5, 6]
const numbersMultipliedByTwo = numbers.map(function (number) {
    return number * 2
})
console.log("Map\n")
console.log(numbersMultipliedByTwo + "\n")
// Cada elemento dentro de numbers vai ser multiplicado por 2 e salvo dentro do array de numbersMultipliedByTwo

//FILTER

const ages = [22, 30, 21, 35, 40, 52, 63, 79]
const evenAges = ages.filter(function (age) {
    return age % 2 === 0
})
console.log("Filter\n")
console.log(evenAges + "\n")
//Com o método filter o item só é adicionado quando atender a condição imposta para sua adicição

//REDUCE

const sumOfNumbers = [10, 30, 40, 50]
const resultSumOfNumbers = sumOfNumbers.reduce(function (number, acumulator) {
    return acumulator + number
}, 0)
console.log(resultSumOfNumbers)

/*
Para entender o método reduce, precisamos entender a função do acumulator que funciona como um acumulador da soma de todos os números que
estão dentro do array, a declaração },0) é de onde esse acumulator vai partir, ou seja ele irá começar em 0 e assim irá somando todos os numbers
que existirem dentro do array até entregar um resultado final, ou seja ele reduziu todo o array à um único resultado.
*/


