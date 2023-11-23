//Programação Orientada a Objetos
//Classe - Molde
var Pessoa = /** @class */ (function () {
    //construtor
    function Pessoa(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.mensagem();
    }
    //Métodos
    Pessoa.prototype.mensagem = function () {
        console.log("Ol\u00E1 ".concat(this.nome));
    };
    return Pessoa;
}());
//Instanciar um Objeto
var pessoa = new Pessoa('Marcus', 29);
console.log(pessoa);
