function rand(min = 0, max = 3){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo, cb) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string'){ reject('Cai no erro');
        }
        setTimeout(() => {
            resolve(msg.toUpperCase() + ' - Passei na promise');
        }, tempo) 
    });
}

// esperaAi('Fase 1', rand(0, 3))
//     .then(valor => {
//         console.log(valor);
//         return esperaAi('Fase 2', rand())
//     })
//     .then(valor => {
//         console.log(valor);
//         return esperaAi('Fase 3', rand())
//     })
//     .then(valor => {
//         console.log('Terminamos na ' +valor);
//     })
//     .catch( e => console.log(e))

// Sintaxe async
// A palavra-chave async antes de uma função faz com que a função retorne uma promessa:

// async function myFunction() {
//     return "Hello";
// }

//  Is the same as:
  
//   function myFunction() {
//     return Promise.resolve("Hello");
//   }

// Sintaxe de Await
// A palavra-chave await só pode ser usada dentro de uma função assíncrona.
// A palavra-chave await faz a função pausar a execução e esperar por uma promessa resolvida antes de continuar:

async function executa() {
    try {
        const fase1 = await esperaAi('Fase 1', rand());
        console.log(fase1);
    
        const fase2 = await esperaAi('Fase 2', rand());
        console.log(fase2);
    
        const fase3 = await esperaAi('Fase 3', rand());
        console.log(fase3);
    
        console.log('Terminamos na fase: ', fase3);
    } catch(e) {
        console.log(e)
    }

}

executa();
