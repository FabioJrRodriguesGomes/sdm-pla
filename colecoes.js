let numeros = [5, 8, 2, 9, 3];
console.log("Array original: " + numeros);
console.log(numeros[0]); // Acessando o primeiro elemento
console.log(numeros[2]); // Acessando o terceiro elemento

let frutas = ["Maçã", "Banana", "Laranja"];
frutas.push("Uva"); // Adicionando um elemento ao final
frutas.unshift("Morango"); // Adicionando um elemento ao início
console.log("Array de frutas: " + frutas);
frutas.forEach((fruta, index) => {
    console.log(`Indice ${index}: ${fruta}`);
})

let misto = [42, "Texto", true, null, {chave: "valor"}, [1, 2, 3]];
console.log("Array misto: " + misto);
console.log("Array misto: " + misto.length); // Tamanho do array
console.log("Array misto: " + misto[misto.length - 1]); // Acessando o último elemento

for(let i=0; i < frutas.length; i++){
    console.log(`Fruta no índice ${i}: ${frutas[i]}`); // $ acessa o valor da variável dentro da string
}

for(let fruta of frutas){
    console.log("Fruta: " + fruta);
}

for(let indice in frutas){
    console.log("Índice: " + indice + ", Fruta: " + frutas[indice]);
}

frutas.pop(); // Remove o último elemento
frutas.shift(); // Remove o primeiro elemento
frutas.splice(1, 1); // Remove 1 elemento a partir do índice 1
console.log("Array de frutas após remoções: " + frutas);

let mapa = new Map();
mapa.set("nome", "Danilo");
mapa.set("altura", 1.78);

console.log(mapa.get("nome")); // Acessando valor pela chave
console.log(mapa.has("idade")); // Verificando se a chave existe
console.log("Tamanho do mapa: " + mapa.size); // Tamanho do mapa
mapa.delete("altura"); // Removendo um par chave-valor
mapa.clear(); // Limpando o mapa
console.log("Tamanho do mapa após clear: " + mapa.size); // Tamanho do mapa após limpar

let conjunto = new Set([1, 2, 3, 4, 5, 6]);
console.log("Tamanho do conjunto: " + conjunto.size); // Tamanho do conjunto
conjunto.add(7); // Adicionando um elemento
conjunto.delete(3); // Removendo um elemento
console.log("Conjunto após adição e remoção: " + Array.from(conjunto)); // Convertendo Set para Array para exibir

conjunto.forEach(valor => console.log("Valor do conjunto: " + valor));

let pessoa = {
    nome: "Danilo",
    idade: 39,
    profissao: "Professor",
    endereco: {
        rua: "Rua A",
        numero: 123
    }
}

console.log("Nome: " + pessoa.nome); // Acessando propriedade do objeto
console.log("Idade: " + pessoa.idade);
console.log("Profissão: " + pessoa.profissao);
console.log("Endereço: " + pessoa.endereco.rua + ", " + pessoa.endereco.numero); // Acessando propriedade aninhada

delete pessoa.profissao; // Removendo uma propriedade