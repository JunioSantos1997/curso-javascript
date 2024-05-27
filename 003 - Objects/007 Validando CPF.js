
// 705.484.450-52 070.987.720-03 
/* 
7x Ox 5x 4x 8x 4x 4x 5x 0x
10 9  8  7  6  5  4  3  2
70 0  40 28 48 20 16 15 0 = 237

11 - (237 % 11) = 5 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.

7x Ox 5x 4x 8x 4x 4x 5x 0x 5x
11 10 9  8  7  6  5  4  3  2
77  0 45 32 56 24 20 20 0 10 = 284

11 (284 % 11) = 2 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0. */

function validaDigito1(arr){
    let arrayCopiado = arr.slice()
    let c = 10
    for(let i = 0; i <=9; i++){
        arrayCopiado[i] = arrayCopiado[i] * c;
        c--
        if(c==1) break;
    }
    arrayCopiado.splice(9,2);
    let novoDigito = 11 - (arrayCopiado.reduce((acc, val) => acc + val, 0) % 11);
    if (novoDigito > 9) novoDigito = 0; 
    let novoArray1 = arr.slice();
    novoArray1.splice(9,2);
    novoArray1.push(String(novoDigito));
    return novoArray1;
}

function validaDigito2(arr){
    let arrayCopiado2 = arr.slice()
    let c = 11
    for(let i = 0; i <=10; i++){
        arrayCopiado2[i] = arrayCopiado2[i] * c;
        c--
        if(c==1) break;
    }
    arrayCopiado2.splice(10,1);
    let novoDigito = 11 - (arrayCopiado2.reduce((acc, val) => acc + val, 0) % 11);
    if (novoDigito > 9) novoDigito = 0; 
    let novoArray2 = arr.slice();
    novoArray2.splice(10,1);
    novoArray2.push(String(novoDigito));
    return novoArray2;
}

let cpf = '705.484.450-52';
let stringDoCpfLimpo = cpf.replace(/\D+/g, '');
let cpfArray = Array.from(stringDoCpfLimpo);
let cpfGerado = validaDigito2(validaDigito1(cpfArray));
let stringDoCpfGerado = cpfGerado.join('');

if(stringDoCpfGerado == stringDoCpfLimpo){
    console.log(`O cpf ${cpf} foi validado com sucesso!`);
} else {
    console.log('CPF INVÁLIDO!');
}




