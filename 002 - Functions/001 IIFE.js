// IIFE -> Immediately invoked function expression

function qualquerCoisa(){
    console.log('qualquer coisa!');
}
qualquerCoisa();

// a função acima toca o escopo global

(function(){
    const nome = 'Junio';
    console.log(nome);
})();

// A função acima é uma IIFE
// ou seja, uma função anônima que não afeta o escopo global