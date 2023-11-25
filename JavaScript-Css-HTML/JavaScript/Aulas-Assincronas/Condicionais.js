//Condicionais
console.log("Utilizando IF e ELSE\n")
const sum = 1 + 4;
if (sum === 2) {
    console.log("Sum is Two!")
} else {
    console.log("Sum is not Two!")
}

console.log("Utilizando operador ternário\n")
let number = sum === 2 ? "É igual" : "Não é igual";
console.log(number)

console.log("Utilizando Switch Case")
const opcao = 2
switch (opcao) {
    case 1:
        console.log("Construir")
        break;
    case 2:
        console.log("Desconstruir")
        break;
    case 3:
        console.log("Entrar")
        break;
    default:
        console.log("Opção Inválida")
}

//Truthy e Falsy

//Uma string vazia sempre sera False
const x = ''
console.log(!!x)
if (x) {
    console.log("Não imprime pos x está Vaizio")
}
//O valor 0 também é False assim como null e undefined também
let b = 0
console.log(!!b)
let c = undefined
console.log(!!c)
let d = null
console.log(!!d)
if (b || c || d){
    console.log("Imprimir se alguma variável for verdadeira")
}

