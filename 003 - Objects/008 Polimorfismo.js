// Superclass
function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function (valor){
    if(this.saldo <  valor){
        console.log('\nSaldo insuficiante!\n');
        this.verSaldo();
        return;
    }
    console.log('\nSaque feito com sucesso!\n');

    this.saldo -= valor;
};
Conta.prototype.depositar = function (valor){
    this.saldo += valor;
    console.log('\nDepósito feito com sucesso!\n');
    this.verSaldo();
};
Conta.prototype.verSaldo = function (){
    console.log(`Agência: ${this.agencia} | Conta: ${this.conta}`);
    console.log(`Saldo da Conta: R$ ${this.saldo.toFixed(2)}`);
};

function CC (agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

//A classe filha herda as características da superclasse ao declarar a seguinte linha:
//ClasseFilha.prototype = Object.create(SuperClasse.prototype);
CC.prototype = Object.create(Conta.prototype);
//Em seguida declaramos o construtor do prototype como a próoria função construtora
CC.prototype.constructor = CC;

//Aqui vamos alterar o método sacar apenas na classe CC

CC.prototype.sacar = function(valor){
    if(valor > (this.saldo + this.limite)){
        console.log(`\nSaldo insuficiante: ${this.saldo}\n`);
        return;
    }
    console.log('\nSaque feito com sucesso!\n');
    this.saldo -= valor;
    this.verSaldo();
};

function CP (agencia, conta, saldo){
    Conta.call(this, agencia, conta, saldo);
}
CP.prototype = Object.create(Conta.prototype);
CP.prototype.constructor = CP;

const cc = new CC(11, 22, 0, 100);
cc.depositar(10);
cc.sacar(110);

const cp = new CP(12, 33, 0);
cp.depositar(10);
cp.sacar(110);