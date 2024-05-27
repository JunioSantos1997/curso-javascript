const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
// const a3 = a1.concat(a2, [7, 8, 9], 'Junio');
// o spread operator pode ser utilizado na concatenação.
// o ... também é o rest operator
const a3 = [...a1,...a2, ...[7, 8, 9]];

console.log(a3);
