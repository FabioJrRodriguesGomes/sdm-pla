function idade(idade){
    return 'Idade: ' + idade;
}
console.log(idade(25));

function soma(a, b, c){
    return a + b + c;
}
console.log(soma(5, 10, 15));
console.log(soma(1, 2, 3));
console.log(soma(-1, 0, 1));

const altura = function(altura){
    return 'Altura: ' + altura;
}
console.log(altura(1.75));

const curso = (curso) => 'Curso: ' + curso;
function curso2(curso){
    return 'Curso: ' + curso;
}
console.log(curso("JavaScript"));
console.log(curso("HTML"));
console.log(curso2("Python"));
console.log(curso2("Java"));

console.log("----- Informações -----");

function exibirInfo(){
    console.log(idade(25));
    console.log(altura(1.75));
    console.log(curso("JavaScript"));
    console.log(curso2("Python"));
}

exibirInfo();

function cumprimentar(nome = "Danilo"){
    return "Olá, " + nome + "!";
}

console.log(cumprimentar());

(function(){
    console.log("Função auto invocada");
})();

function processar(valor, callback){
    const resultado = callback(valor);
    console.log("Resultado do processamento: " + resultado);
}

async function processarAsync(valor, callback){
    const resultado = await callback(valor);
    console.log("Resultado do processamento: " + resultado);
}

