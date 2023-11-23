//Programação Orientada a Objetos
//Classe - Molde
class Pessoa {
    //Atributos
    nome: string;
    idade: number;
    //construtor

    public constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
        this.mensagem()
    }
    //Métodos
    private mensagem(){
        console.log(`Olá ${this.nome}`)
    }
}
//Instanciar um Objeto
const pessoa = new Pessoa('Marcus', 29);
console.log(pessoa)