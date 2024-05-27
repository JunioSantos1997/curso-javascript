// Produto
// Camiseta = cor, Caneca = material
function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function (quantia){
    this.preco += quantia;
}

Produto.prototype.desconto = function (quantia){
    this.preco -= quantia;
}

function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco);
}

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

function Caneca(nome, preco, tamanho){
    Produto.call(this, nome, preco);
    this.tamanho = tamanho;
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;


const produto = new Produto('Gen', 111);
const camiseta = new Camiseta('Regata', 7.5, 'Preta');
const canecaRosa = new Caneca('Caneca Rosa', 15 , 'G');

console.log(produto);
console.log(camiseta);
console.log(canecaRosa);
