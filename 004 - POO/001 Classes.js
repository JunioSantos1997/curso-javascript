class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`${this.nome} está falando!`);
    }

}

const p1 = new Pessoa('Junio', 'Santos');
console.log(p1);
p1.falar();