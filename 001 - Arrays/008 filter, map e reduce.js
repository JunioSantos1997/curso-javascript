// Retorne a soma do dobro de todos os pares
// -> Filtrar pares
// -> Dobrar os valores
// -> Reduzir (somar tudo)


const nums = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosPares = nums
.filter(v => v % 2 === 0)
.map(v =>v * 2)
.reduce((a,v) => a + v,0);
// [ 50, 80, 2, 8, 22 ] <- Output dos pares
// [ 100, 160, 4, 16, 44 ] <- Output dos pares multiplicados por 2
// 324 <- Output da soma do array acima
console.log(numerosPares)
