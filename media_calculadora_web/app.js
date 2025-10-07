// 1. Importar os módulos necessários
const express = require("express");
const path = require("path");

// 2. Inicializar a aplicação Express
const app = express();
const PORTA = 3000;

// 3. Configurar o middleware para processar dados de formulário
// Isso permite que o servidor leia os dados enviados via POST
app.use(express.urlencoded({ extended: true }));

// 4. Rota para servir o formulário HTML (página principal)
app.get("/", (req, res) => {
  // path.join garante que o caminho para o arquivo seja correto em qualquer sistema operacional
  res.sendFile(path.join(__dirname, "views", "formulario.html"));
});

// 5. Rota para receber os dados do formulário e calcular a média
app.post("/calcular", (req, res) => {
  // Os dados do formulário chegam no objeto 'req.body'
  const { num1, num2, num3, num4 } = req.body;

  // Converter os valores recebidos (que são strings) para números
  const n1 = parseFloat(num1);
  const n2 = parseFloat(num2);
  const n3 = parseFloat(num3);
  const n4 = parseFloat(num4);

  // Validar se todos os campos são números válidos
  if (isNaN(n1) || isNaN(n2) || isNaN(n3) || isNaN(n4)) {
    res.send(`
            <h1>Erro no Cálculo</h1>
            <p>Por favor, insira quatro números válidos.</p>
            <a href="/">Voltar ao formulário</a>
        `);
    return; // Encerra a execução
  }

  // Calcular a média
  const media = (n1 + n2 + n3 + n4) / 4;

  // 6. Enviar a nova página HTML com o resultado
  res.send(`
        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <title>Resultado da Média</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 40px; text-align: center; }
                a { text-decoration: none; color: #007bff; }
            </style>
        </head>
        <body>
            <h1>Resultado</h1>
            <p>A média dos números é: <strong>${media.toFixed(2)}</strong></p>
            <a href="/">Calcular novamente</a>
        </body>
        </html>
    `);
});

// 7. Iniciar o servidor para ouvir por requisições
app.listen(PORTA, () => {
  console.log(
    `Servidor iniciado com sucesso. Acesse http://localhost:${PORTA}`
  );
});
