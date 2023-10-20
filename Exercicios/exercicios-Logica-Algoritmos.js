//Imposto de Renda

let salarioBruto =4520
let valorImposto;
if(salarioBruto>= 0 &&salarioBruto<=2000){
    console.log("Isento")
}
else if(salarioBruto>2000.01 && salarioBruto<=3000){

    valorImposto = (salarioBruto -2000.0)*0.08;
    console.log(valorImposto)
}

else if(salarioBruto >3000.01 && salarioBruto<=4500){
    valorImposto = (salarioBruto-3000.0)*0.18 +(1000*0.08);
    console.log(valorImposto)
}
else{
    valorImposto = (salarioBruto-4500)*0.28 +(1500*0.18)+(1000*0.08)
    console.log(valorImposto)
}




//DDD
/*let dd = 15;
var cidades = new Map();
cidades.set(11, "Sao Paulo ");
cidades.set(61, "Brasilia");

let verificarCidade=cidades.get(dd)

if (verificarCidade){
    console.log(verificarCidade)
}else{
    console.log("nao existe")
}
*/





//Formula de Bhaskara

/*const a = 0
const b = 20
const c = 5.0

const delta = b * b - 4 * a * c;

if (delta < 0 || a <= 0) {
    console.log('Impossivel calcular');
} else {
    const x1 = (-b + Math.sqrt(delta)) / (2 * a);
    const x2 = (-b - Math.sqrt(delta)) / (2 * a);
    x1.value = x1;
    x2.value = x2;
    console.log(x1.toFixed(5))
    console.log(x2.toFixed(5))
}
*/


//Gasto de Combustível

/*let tempo = 2
let velocidade =92

let distancia = tempo * velocidade
let consumo = distancia / 12;

console.log(consumo.toFixed(3))
*/



//Distância

/*let distancia = 110;

let minutos = distancia *2

console.log(minutos)
*/




//Distância Entre Dois Pontos

/*let arrayPontoUm = "1.0 7.0".split(" ")
let arrayPontoDois ="5.0 9.0".split(" ")

let X1 = parseFloat(arrayPontoUm[0])
let Y1 = parseFloat(arrayPontoUm[1])

let X2 = parseFloat(arrayPontoDois[0])
let Y2 = parseFloat(arrayPontoDois[1])

let Distância =Math.sqrt(Math.pow(X2-X1,2) + Math.pow(Y2-Y1,2))

console.log(Distância.toFixed(4))

*/


//Consumo
/*
let X = 500
let Y = 35.0

let result = X/Y
console.log(result.toFixed(3))

*/



//Maior
/*
let arrayValues = "7 14 106".split(" ")
let values=arrayValues.map(Number)
let max = Math.max(...values)
console.log(max)
*/

//Área

/*let arrayValues = "3.0 4.0 5.2".split(" ")
let A = parseFloat(arrayValues[0])
let B =parseFloat(arrayValues[1])
let C = parseFloat(arrayValues[2])
const pi = 3.14159;
// Triangulo

let trianguloResult = (A*C)/2
console.log(trianguloResult.toFixed(3))

let circuloResult = pi*C*C;
console.log(circuloResult.toFixed(3))

let trapezioResult = ((A+B)*C)/2
console.log(trapezioResult.toFixed(3))

let quadradoResult = B*B
console.log(quadradoResult.toFixed(3))

let retanguloResult = A*B;
console.log(retanguloResult.toFixed(3))
*/



// Esfera

/*let R=3
const pi = 3.14159
let VOLUME = (4.0 / 3) * pi * Math.pow(R,3)
console.log(VOLUME.toFixed(3))
*/

//Cálculo Simples

/*let pecaUm = "12 1 5.30"
let pecaDois= "16 2 5.10"

let pecaUmArray = pecaUm.split(" ");
let pecaDoisArray = pecaDois.split(" ");

let resulPecaUm = parseFloat(pecaUmArray[1]*pecaUmArray[2]);
let resultPecaDois = parseFloat(pecaDoisArray[1]*pecaDoisArray[2]);

let valorTotal = resulPecaUm+resultPecaDois;
console.log(valorTotal.toFixed(2));*/






