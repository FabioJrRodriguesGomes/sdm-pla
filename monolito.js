const express = require('express'); // Importa o Express
const app = express(); // Cria uma aplicação Express

app.use(express.json()); // Middleware para parsear JSON

let usuarios = []; // Array para armazenar usuários
let pedidos = []; // Array para armazenar pedidos

// Rota para criar um novo usuário
app.post("/usuarios", (req, res) => { // Define a rota POST /usuarios
    const usuario = req.body; // Obtém os dados do corpo da requisição
    usuarios.push(usuario); // Adiciona o usuário ao array
    res.send({ mensagem: "Usuário criado com sucesso!", usuario }); // Responde com uma mensagem de sucesso
});

// Rota para criar um novo pedido
app.post("/pedidos", (req, res) => { // Define a rota POST /pedidos
    const pedido = req.body; // Obtém os dados do corpo da requisição
    pedidos.push(pedido); // Adiciona o pedido ao array
    res.send({ mensagem: "Pedido criado com sucesso!", pedido }); // Responde com uma mensagem de sucesso
});

//Rota para listar todos os pedidos e usuarios
app.get("/dados", (req, res) => { // Define a rota GET /dados
    res.send({ usuarios, pedidos }); // Responde com a lista de usuários e pedidos
});

app.listen(3000, () => { // Inicia o servidor na porta 3000
    console.log("Servidor rodando na porta 3000"); // Loga uma mensagem no console
});