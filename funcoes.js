// Função declarativa
function saudacao(nome){
    return `Olá, ${nome}!` 
}
console.log(saudacao("Danilo"));

//Função anônima
const soma = function(a, b){
    return a + b;
}

function simples(){
    let a = 5;
    let b = 12;
    let c = a + b;
    console.log("O valor de c é: " + c);
}
function somar(a, b){
    return a + b;
}
console.log(soma(5,10));

console.log(saudacao("Danilo"));
console.log(saudacao("Maria"));
console.log(saudacao("João"));