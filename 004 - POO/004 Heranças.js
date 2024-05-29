class DispositivoEletronico {
    constructor (nome) {
        if (typeof nome !== 'string') {
            throw new TypeError('Nome inválido!');
        }
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if(this.ligado){
            console.log(`${this.nome} já está ligado!`)
            return;
        }
        console.log('Dispositivo ligado com sucesso!');
        this.ligado = true;
    }

    desligar() {
        if(!this.ligado){
            console.log(`${this.nome} já está desligado!`);
            return;
        }
        console.log('Dispositivo desligado com sucesso!');
        this.ligado = false;
    }
}

class Smartphone extends DispositivoEletronico {
    constructor (nome, modelo, cor){
        super(nome);

        if (typeof modelo !== 'string') {
            throw new TypeError('Modelo inválido!');
        }
        if (typeof cor !== 'string') {
            throw new TypeError('Cor inválida!');
        }

        this.modelo = modelo;
        this.cor = cor;
    } 
}

const s1 = new Smartphone('Iphone', '15 Pro Max', 'Ouro');
console.log(s1);

