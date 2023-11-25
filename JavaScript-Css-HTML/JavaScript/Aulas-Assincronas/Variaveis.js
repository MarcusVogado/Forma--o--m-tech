// Hoje o uso do var ficou obsoleto por ser uma váriavel de escopo global
if (1 + 1 == 2) {
    var testeEscopo = 'Hello World'
}

console.log(testeEscopo)

//Mesmo estando fora do escopo global e estando dentro do escopo do if, conseguimos utilziar essa variável

//TIPOS DE VARIÁVEIS
let souString = 'Olá sou uma string'
let souNumero = 50
let souBoolean = true
let souNull = null
let souUndefined = undefined
let souNaN = NaN
console.log(typeof souString +
    " " + typeof souNumero +
    " " + typeof souBoolean +
    " " + typeof souNull +
    " " + typeof souUndefined +
    " " + typeof souNaN);

let nome = "Marcus Vogado"
console.log(`Sou uma string e possuo ${nome.length} caracteres`)
