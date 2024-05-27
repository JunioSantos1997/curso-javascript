/*
Object.values
Object.entries
Object.assign(des,any)
Object.getOwnPropertyDescriptor(o,'prop')
... (spread)


Já vimos
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma única propriedade)
*/

const produto = {nome: 'Produto', preco: 1.80};
/* const outraCoisa = {
    ...produto,            //Usando o spread operator
    material: 'vidro'
};*/

/*const caneca = Object.assign({}, produto, {material: 'porcelana'});*/

Object.defineProperty(produto, 'nome', {
    writable: false,
    configurable: false,
    value: 'Bla Bla Bla'
})
//console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
produto.preco = 'Outra coisa';
delete produto.preco;
console.log(produto);