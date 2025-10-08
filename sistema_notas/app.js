// app.js
const express = require("express");
const path = require("path");
const NotasCalculator = require("./src/services/NotasCalculator");

// Inicializar o Express
const app = express();
const PORT = 3001;

// Configurar middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/public", express.static(path.join(__dirname, "public")));

// Rota principal - formulário de notas
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "formulario.html"));
});

// Rota para calcular média
app.post("/calcular-media", (req, res) => {
  try {
    const { nota1, nota2, nota3, nomeAluno, disciplina } = req.body;

    // Validar se os campos foram preenchidos
    if (!nota1 || !nota2 || !nota3) {
      return res
        .status(400)
        .send(
          gerarHtmlResposta(
            "Erro nos Dados",
            "Por favor, preencha todas as três notas.",
            null,
            "erro"
          )
        );
    }

    // Calcular a média
    const resultado = NotasCalculator.calcularMedia(nota1, nota2, nota3);

    if (!resultado.valido) {
      return res
        .status(400)
        .send(
          gerarHtmlResposta("Erro nos Dados", resultado.erro, null, "erro")
        );
    }

    // Obter imagem correspondente
    const imagem = NotasCalculator.obterImagem(
      resultado.aprovado,
      resultado.media
    );

    // Gerar resposta HTML
    const conteudo = `
      <div class="resultado-header">
        <h1>Resultado da Avaliação</h1>
        ${nomeAluno ? `<h2>Aluno: ${nomeAluno}</h2>` : ""}
        ${disciplina ? `<h3>Disciplina: ${disciplina}</h3>` : ""}
      </div>

      <div class="notas-detalhes">
        <h3>Notas Inseridas:</h3>
        <div class="notas-grid">
          <div class="nota-item">
            <span class="nota-label">1ª Nota:</span>
            <span class="nota-valor">${resultado.nota1.toFixed(1)}</span>
          </div>
          <div class="nota-item">
            <span class="nota-label">2ª Nota:</span>
            <span class="nota-valor">${resultado.nota2.toFixed(1)}</span>
          </div>
          <div class="nota-item">
            <span class="nota-label">3ª Nota:</span>
            <span class="nota-valor">${resultado.nota3.toFixed(1)}</span>
          </div>
        </div>
      </div>

      <div class="resultado-principal ${resultado.classe}">
        <img src="/public/images/${imagem}" alt="${
      resultado.status
    }" class="resultado-imagem" />
        <div class="media-resultado">
          <h2>Média Final: ${resultado.media.toFixed(2)}</h2>
          <h3 class="status-${resultado.classe}">${resultado.status}</h3>
          <p class="mensagem">${resultado.mensagem}</p>
        </div>
      </div>

      <div class="detalhes-calculo">
        <h4>Cálculo Realizado:</h4>
        <p class="formula">Média = (${resultado.nota1.toFixed(
          1
        )} + ${resultado.nota2.toFixed(1)} + ${resultado.nota3.toFixed(
      1
    )}) ÷ 3 = ${resultado.media.toFixed(2)}</p>
        <p class="criterio">Critério de Aprovação: Média ≥ 6,0</p>
      </div>
    `;

    res.send(gerarHtmlResposta("Sistema de Notas", conteudo, resultado.classe));
  } catch (error) {
    console.error("Erro no servidor:", error);
    res
      .status(500)
      .send(
        gerarHtmlResposta(
          "Erro do Servidor",
          "Ocorreu um erro interno. Tente novamente mais tarde.",
          null,
          "erro"
        )
      );
  }
});

// Função auxiliar para gerar HTML
function gerarHtmlResposta(titulo, conteudo, classe = "", tipo = "resultado") {
  const classeContainer = classe ? `resultado-${classe}` : "";

  return `
    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${titulo}</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }

        .container {
          background: #fff;
          border-radius: 15px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          padding: 2rem;
          max-width: 800px;
          width: 100%;
          text-align: center;
        }

        .resultado-header h1 {
          color: #2c3e50;
          margin-bottom: 0.5rem;
          font-size: 2.2rem;
        }

        .resultado-header h2 {
          color: #34495e;
          margin-bottom: 0.5rem;
          font-weight: 500;
        }

        .resultado-header h3 {
          color: #7f8c8d;
          margin-bottom: 1.5rem;
          font-weight: 400;
        }

        .notas-detalhes {
          background: #f8f9fa;
          border-radius: 10px;
          padding: 1.5rem;
          margin: 1.5rem 0;
        }

        .notas-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 1rem;
          margin-top: 1rem;
        }

        .nota-item {
          background: #fff;
          padding: 1rem;
          border-radius: 8px;
          border-left: 4px solid #3498db;
        }

        .nota-label {
          display: block;
          font-size: 0.9rem;
          color: #7f8c8d;
          margin-bottom: 0.5rem;
        }

        .nota-valor {
          font-size: 1.5rem;
          font-weight: bold;
          color: #2c3e50;
        }

        .resultado-principal {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          padding: 2rem;
          margin: 2rem 0;
          border-radius: 15px;
          flex-wrap: wrap;
        }

        .resultado-principal.excelente {
          background: linear-gradient(135deg, #56ab2f, #a8e6cf);
        }

        .resultado-principal.merito {
          background: linear-gradient(135deg, #2196F3, #81C784);
        }

        .resultado-principal.aprovado {
          background: linear-gradient(135deg, #4CAF50, #A5D6A7);
        }

        .resultado-principal.reprovado,
        .resultado-principal.reprovado-grave {
          background: linear-gradient(135deg, #f44336, #ffcdd2);
        }

        .resultado-imagem {
          width: 120px;
          height: 120px;
          filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
        }

        .media-resultado h2 {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
          color: #fff;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }

        .media-resultado h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: #fff;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
        }

        .mensagem {
          font-size: 1.1rem;
          color: #fff;
          font-weight: 500;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
        }

        .detalhes-calculo {
          background: #ecf0f1;
          border-radius: 10px;
          padding: 1.5rem;
          margin: 1.5rem 0;
          text-align: left;
        }

        .detalhes-calculo h4 {
          color: #2c3e50;
          margin-bottom: 1rem;
          text-align: center;
        }

        .formula {
          font-family: 'Courier New', monospace;
          background: #fff;
          padding: 1rem;
          border-radius: 5px;
          margin: 0.5rem 0;
          border-left: 4px solid #3498db;
        }

        .criterio {
          font-weight: 500;
          color: #34495e;
          text-align: center;
          margin-top: 1rem;
        }

        .btn {
          display: inline-block;
          padding: 1rem 2rem;
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          text-decoration: none;
          border-radius: 50px;
          margin-top: 2rem;
          font-weight: 500;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
        }

        .erro-container {
          background: linear-gradient(135deg, #ff6b6b, #ffa8a8);
          color: white;
          padding: 2rem;
          border-radius: 15px;
          margin: 1rem 0;
        }

        @media (max-width: 768px) {
          .container {
            margin: 10px;
            padding: 1.5rem;
          }
          
          .resultado-principal {
            flex-direction: column;
            gap: 1rem;
          }
          
          .notas-grid {
            grid-template-columns: 1fr;
          }
          
          .media-resultado h2 {
            font-size: 2rem;
          }
        }
      </style>
    </head>
    <body>
      <div class="container ${classeContainer}">
        ${
          tipo === "erro"
            ? `<div class="erro-container">${conteudo}</div>`
            : conteudo
        }
        <a href="/" class="btn">Nova Avaliação</a>
      </div>
    </body>
    </html>
  `;
}

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🎓 Sistema de Notas iniciado!`);
  console.log(`📊 Acesse: http://localhost:${PORT}`);
  console.log(`✅ Pronto para calcular médias e aprovações!`);
});
