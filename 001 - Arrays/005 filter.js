// Filter -> Sempre retornar um array, com a mesma quantidade de elementos ou menor(que o array original).
// Retorne os números maiores que 10.

//            0   1   2   3  ...
//const nums = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
//const filtered = nums.filter(valor => valor > 40);
//console.log(filtered); 

// Exercício Método Filter:
// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a letra a

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];


const letras5 = pessoas.filter(obj => obj.nome.length >= 5);
const idade50 = pessoas.filter(obj => Number(obj.idade) > 50);
const letraA = pessoas.filter(obj => obj.nome[obj.nome.length - 1] == 'a');

console.log(`Pessoas cujo nome possui 5 ou mais letras:\n`, letras5);
console.log(`Pessoas cuja idade é maior que 50:\n`, idade50);
console.log(`Pessoas cuja ultima letra do nome é "a"\n:`, letraA);

