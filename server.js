// Importando o módulo express para lidar com rotas e middlewares
const express = require("express");

// Inicializando a aplicação Express
const app = express();

app.use(express.json()); // Isso garante que o corpo da requisição seja interpretado como JSON

// Importando as rotas da aplicação relacionadas às tarefas
const tarefasRoutes = require("./routes/tarefaRoutes");

// Configurando as rotas da aplicação para utilizar as rotas
//relacionadas às tarefas
app.use("/api", tarefasRoutes);

// Definindo a porta em que o servidor irá escutar
const PORT = process.env.PORT || 3000;

// Configurando uma rota inicial para exibir uma mensagem de boas-vindas
app.get("/", (req, res) => {
  res.send("Bem-vindo à API de tarefas!");
});

// Inicializando o servidor e fazendo com que ele escute na porta definida
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
