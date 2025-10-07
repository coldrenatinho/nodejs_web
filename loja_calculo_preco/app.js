// 1. Importar os módulos necessários
const express = require("express");
const path = require("path");
const PriceCalculator = require("./src/services/PriceCalculator");

// 2. Inicializar a aplicação Express
const app = express();
const PORT = 3000;

// 3. Configurar o middleware para processar dados de formulários (urlencoded)
app.use(express.urlencoded({ extended: true }));

// 4. Rota principal (GET /) - Serve o formulário HTML
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

// 5. Rota para processar o cálculo (POST /calcular-preco)
app.post("/calcular-preco", (req, res) => {
  // Extrai os dados do corpo da requisição (req.body)
  const { precoUnitario, quantidade, desconto } = req.body;

  // Utiliza nossa classe de serviço para calcular o preço final
  const precoFinal = PriceCalculator.calcularPrecoFinal(
    precoUnitario,
    quantidade,
    desconto
  );

  // 6. Gera e envia a página de resultado
  let htmlResponse;
  if (precoFinal !== null) {
    htmlResponse = `
            <h1>Resultado do Cálculo</h1>
            <p>O preço final de venda do produto é: <strong>R$ ${precoFinal.toFixed(
              2
            )}</strong></p>
            <a href="/">Fazer outro cálculo</a>
        `;
  } else {
    htmlResponse = `
            <h1>Erro</h1>
            <p>Por favor, insira valores numéricos válidos e não negativos.</p>
            <a href="/">Tentar novamente</a>
        `;
  }

  // Adiciona um estilo básico à página de resposta
  const styledResponse = `
        <!DOCTYPE html><html lang="pt-br"><head><meta charset="UTF-8"><title>Resultado</title>
        <style>body { font-family: 'Segoe UI', sans-serif; text-align: center; padding-top: 50px; }</style>
        </head><body>${htmlResponse}</body></html>
    `;

  res.send(styledResponse);
});

// 7. Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
