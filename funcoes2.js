function saudacao(nome){
    return `Olá, ${nome}!` 
}
console.log(saudacao("Danilo"));
console.log(saudacao("Maria"));
console.log(saudacao("João"));

const soma = function(a, b){
    return a + b;
}
console.log(soma(5, 10));
console.log(soma(20, 30));
console.log(soma(-1, 1));

const multiplicar = (a, b) => a * b;

function multiplicarDeclarativa(a, b){
    return a * b;
}

console.log(multiplicar(5, 10));
console.log(multiplicar(20, 30));
console.log(multiplicar(-1, 1));