// Some todos os números (reduce)
// Retorne um array com os pares (Filter)
// Retorne um array com o dobro dos valores (Map)

const nums = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = nums.reduce(function(acumulador, valor, indice, array){
    if(valor % 2 !== 0){
        acumulador += valor;
    }

    return acumulador;        
},0);




// retorne a pessoa mais velha com reduce

const pessoas = [
    {nome: 'Luiz', idade: 15},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 105},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 63},
    {nome: 'Wallace', idade: 1000},
];

const maisVelha = pessoas.reduce((acumulador, valor) => {
    if (acumulador.idade > valor.idade) return acumulador;
    return valor;
});
console.log(maisVelha);


