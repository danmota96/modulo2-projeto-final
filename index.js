const express = require("express");
const app = express();
const port = 3000; // Const para armanezar a porta do servidor

// Substituição de function por arrow function
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Adicionando a const port e uma arow function de callback para mostrar no console que o servidor está rodando.
app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));