function criaPessoa(nome, sobrenome, a, p){
    return {
        nome, 
        sobrenome,
        // Getter
        get nomeCompleto () {
            return `${this.nome} ${this. sobrenome}`
        },
        // Setter
        // Utilizado para alterar os atributos do objeto
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            return `${this.nome} ${this. sobrenome}`
        },

        peso: p,
        altura: a,
        // Getter
        // O getter trata o método imc como se fosse um atributo do objeto
        get imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Junio', 'Santos', 1.78, 114);


p1.nomeCompleto = 'Cicero Santos de Souza'
console.log(p1.nomeCompleto);
console.log(p1.nome);
console.log(p1.sobrenome);


