function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo, cb) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject(false);

        setTimeout(() => {
            resolve(msg.toUpperCase() + ' - Passei na promise');
        }, tempo) 
    });
}

// Promise. all Promise.race Promise.resolve Promise.reject

//Promise.all
//O método Promise.all() retorna uma única Promise de uma lista/array de promessas, quando todas as promessas são cumpridas.

//Promise.race
//O método Promise.race() retorna uma Promise de uma lista/array de promessas, quando a promessa mais rápida for liquidada.

const promises =[
    'Primeiro valor',
    esperaAi('Promise 1', rand(1, 3)), 
    esperaAi('Promise 2', rand(1, 3)), 
    esperaAi('Promise 3', rand(1, 3)), 
    'Outro valor'
];

Promise.race(promises)
    .then( valor => {
        console.log(valor)
    })
    .catch(erro => {
        console.log(erro)
    });
