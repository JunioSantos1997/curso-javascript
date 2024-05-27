function GuerreiroZ(nome, poderDeLuta, tecnica){
    let nomePrivado = nome;
    let poderDeLutaPrivado = poderDeLuta;
    let tecnicaPrivada = tecnica;

    this.usarTecnica = function (){
        if (tecnicaPrivada === 'Kienzan'){
            console.log(`\n${nomePrivado}: Receba a minha ${tecnicaPrivada}!!!`);
        } else {
            console.log(`\n${nomePrivado}: Receba o meu ${tecnicaPrivada}!!!`);
        }
    }
    this.rng = function(){
        return Math.floor(Math.random() * 3) + 1
    }
    this.getPoderDeLuta = function (){
        if(poderDeLutaPrivado < 1000){
            console.log(`${nomePrivado}: Droga, meu poder de luta é de apenas ${poderDeLutaPrivado}!`);
        } else {
        let pickSentence = this.rng();
            if(pickSentence == 1){
                console.log(`${nomePrivado}: Segundo a leitura do scouter meu poder de luta é de ${poderDeLutaPrivado}!`);
            } else if (pickSentence == 2){
                console.log(`${nomePrivado}: Qualquer scouter irá confirmar que possuo ${poderDeLutaPrivado} de poder de luta!`);
            } else {
                console.log(`${nomePrivado}: Trema diante do meu poder de luta de ${poderDeLutaPrivado}!!!`);
            }
        }
    }
      
    Object.defineProperties(this, {
        nome:{
            enumerable: true,
            configurable: true,
            get: function (){
                return nomePrivado
            },
            set: function (valor){
                if (typeof valor !== 'string'){
                    throw TypeError('Bad Value');
                }
                nomePrivado = valor
            }
        },
        poderDeLuta:{
            enumerable: true,
            configurable: true,
            get: function (){
                return poderDeLutaPrivado
            },
            set: function (valor){
                if (typeof valor !== 'number'){
                    throw TypeError('Bad Value');
                }
                poderDeLutaPrivado = valor
            }
        },
        tecnica:{
            enumerable: true,
            configurable: true,
            get: function (){
                return tecnicaPrivada
            },
            set: function (valor){
                if (typeof valor !== 'string'){
                    throw TypeError('Bad Value');
                }
                tecnicaPrivada = valor
            }
        }

    });

}

let goku = new GuerreiroZ('Son Goku', 9001, 'Kamehameha');
let vegeta = new GuerreiroZ('Vegeta', 18000, 'Garlick Gun');
let krilin = new GuerreiroZ ('Krillin', 500, 'Kienzan');


goku.getPoderDeLuta();
vegeta.getPoderDeLuta();
krilin.getPoderDeLuta();
 
goku.usarTecnica();
vegeta.usarTecnica();
krilin.usarTecnica();



