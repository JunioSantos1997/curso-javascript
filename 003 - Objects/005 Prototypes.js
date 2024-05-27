//Manipulando Prototypes
//Quando eu crio um objeto, o JS chama o construtor 'new Object'
// new Object -> Object.prototype
const objA = {
    chaveA: 'A'
    //__proto__: Object.prototype
};

const objB = {
    chaveB: 'B'
    //__proto__: objA
};

const objC = {
    chaveC: 'C'
    //__proto__: objB
};

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);

//console.log(objC.chaveB);

function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual/ 100))
}

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual/ 100))
}

const p1 = new Produto('Camiseta', 50);
const p2 = {
    nome: 'Caneca',
    preco: 15
}

const p3 = Object.create(Produto.prototype);
p3.preco = 43;
p3.aumento(10);
console.log(p3);