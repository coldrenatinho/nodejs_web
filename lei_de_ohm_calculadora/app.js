// 1. Importar os módulos
const express = require("express");
const path = require("path");
const ResistanceCalculator = require("./src/services/ResistanceCalculator");

// 2. Inicializar o Express
const app = express();
const PORT = 3000;

// 3. Configurar o middleware para ler dados de formulário
app.use(express.urlencoded({ extended: true }));

// 4. Definir a rota principal que serve o formulário
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "formulario.html"));
});

// 5. Definir a rota que processará o cálculo
app.post("/calcular-resistencia", (req, res) => {
  try {
    // Extrair tensão e corrente do corpo da requisição
    const { tensao, corrente } = req.body;

    // Validar se os campos foram enviados
    if (!tensao || !corrente) {
      return res
        .status(400)
        .send(
          gerarHtmlResposta(
            "Erro nos Dados",
            "Por favor, preencha todos os campos obrigatórios."
          )
        );
    }

    // Usar o serviço para realizar o cálculo
    const resultado = ResistanceCalculator.calcular(tensao, corrente);

    let htmlResponse;

    // Gerar a resposta HTML com base no resultado
    if (typeof resultado === "number") {
      const valorFormatado =
        Math.abs(resultado) < 0.01
          ? resultado.toExponential(3)
          : resultado.toFixed(3);

      htmlResponse = `
              <h1>Resultado da Lei de Ohm</h1>
              <div class="resultado-box">
                <p><strong>Tensão:</strong> ${parseFloat(tensao).toFixed(
                  2
                )} V</p>
                <p><strong>Corrente:</strong> ${parseFloat(corrente).toFixed(
                  3
                )} A</p>
                <p><strong>Resistência:</strong> ${valorFormatado} Ω (Ohms)</p>
              </div>
              <div class="formula">
                <p><em>Fórmula utilizada: R = V / I</em></p>
              </div>
          `;
    } else if (resultado === null) {
      htmlResponse = `
              <h1>Erro nos Dados</h1>
              <p>Por favor, insira valores numéricos válidos para tensão e corrente.</p>
          `;
    } else {
      // Caso de erro específico, como divisão por zero
      htmlResponse = `<h1>Erro no Cálculo</h1><p>${resultado}</p>`;
    }

    res.send(gerarHtmlResposta("Calculadora da Lei de Ohm", htmlResponse));
  } catch (error) {
    console.error("Erro no servidor:", error);
    res
      .status(500)
      .send(
        gerarHtmlResposta(
          "Erro do Servidor",
          "Ocorreu um erro interno. Tente novamente mais tarde."
        )
      );
  }
});

// Função auxiliar para gerar HTML de resposta
function gerarHtmlResposta(titulo, conteudo) {
  return `
    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${titulo}</title>
      <style>
        body { 
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; 
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          margin: 0;
          background-color: #e9ecef;
        }
        .container {
          background: #fff;
          border-radius: 0.5rem;
          box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
          padding: 2rem;
          text-align: center;
          max-width: 500px;
          width: 90%;
        }
        .resultado-box {
          background-color: #d4edda;
          border: 1px solid #c3e6cb;
          border-radius: 0.25rem;
          padding: 1rem;
          margin: 1rem 0;
        }
        .formula {
          font-style: italic;
          color: #6c757d;
          margin-top: 1rem;
        }
        .btn {
          display: inline-block;
          padding: 0.75rem 1.5rem;
          margin-top: 1rem;
          background-color: #28a745;
          color: white;
          text-decoration: none;
          border-radius: 0.25rem;
          transition: background-color 0.2s;
        }
        .btn:hover {
          background-color: #218838;
        }
      </style>
    </head>
    <body>
      <div class="container">
        ${conteudo}
        <a href="/" class="btn">Calcular novamente</a>
      </div>
    </body>
    </html>
  `;
}

// 6. Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor iniciado. Acesse em http://localhost:${PORT}`);
});
