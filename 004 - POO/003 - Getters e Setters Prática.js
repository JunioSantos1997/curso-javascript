class Pessoa {
    constructor(nome, sobrenome) {
        if (typeof nome !== 'string') {
            throw new Error('Nome inválido!');
        }
        if (typeof sobrenome !== 'string') {
            throw new Error('Sobrenome inválido!');
        }
        this._nome = nome;
        this._sobrenome = sobrenome;
    }

    get nome() {
        return this._nome;
    }

    set nome(valor) {
        if (typeof valor !== 'string') return;
        this._nome = valor;
    }

    get sobrenome() {
        return this._sobrenome;
    }

    set sobrenome(valor) {
        if (typeof valor !== 'string') return;
        this._sobrenome = valor;
    }
}
// instância de objetos e testes

const p1 = new Pessoa(30, 40); // testando se os números são aceitos pela passagem de parâmetros da função construtora

console.log(p1);
const p2 = new Pessoa('Carlos', 'Sabino');
console.log(p2.nome);