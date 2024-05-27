// Getters e Setters

function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
    let estoquePrivado = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        configurable: true, //configrável
        //Getter é um método para que a propriedade receba o valor
        get: function() {
            return estoquePrivado ;
        },
        set: function(valor) {
            if (typeof valor !== 'number'){
                throw new TypeError("Bad Value")
            }
            estoquePrivado = valor;
        }
    });
}

const p1 = new Produto('Camiseta', 20, 3);

//console.log(p1);

p1.estoque = 'O valor que eu quero'

console.log(p1.estoque);