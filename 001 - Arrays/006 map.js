// A função map retorna um novo array do mesmo tamanho
//ou menor que o array utilizado

//Exemplo:
// Dobre os números

//const nums = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
//const doubleNums = nums.map(v => v * 2);
//console.log(doubleNums);

// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova a chave "nome" do objeto
// adicione  uma chave id em cada objeto

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];
const nomes = pessoas.map(obj => obj.nome);
const idades = pessoas.map(obj =>({idade: obj.idade}));
const id = pessoas.map ((obj, indice )=> { 
    return {
        nome: obj.nome,
        idade: obj.idade,
        id: indice + 1
    }
});

console.log(nomes);
console.log(idades);
console.log(id);

console.log('Objeto original:', pessoas)