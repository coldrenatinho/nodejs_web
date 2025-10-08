const express = require("express");
const path = require("path");

// Inicializar o Express
const app = express();
const PORT = process.env.PORT || 3001;

// Configurar middleware para servir arquivos estáticos
app.use(express.static("public"));

// Função para formatar data e hora em português brasileiro
function obterDataHoraAtual() {
  const agora = new Date();

  // Opções para formatação da data
  const opcoesData = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "America/Sao_Paulo",
  };

  // Opções para formatação da hora
  const opcoesHora = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone: "America/Sao_Paulo",
    hour12: false,
  };

  const dataFormatada = agora.toLocaleDateString("pt-BR", opcoesData);
  const horaFormatada = agora.toLocaleTimeString("pt-BR", opcoesHora);

  return {
    data: dataFormatada,
    hora: horaFormatada,
    timestamp: agora.getTime(),
    iso: agora.toISOString(),
    timezone: "America/Sao_Paulo (UTC-3)",
  };
}

// Rota principal - página HTML com data e hora
app.get("/", (req, res) => {
  const dataHora = obterDataHoraAtual();

  const html = `
    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Data e Hora Atuais</title>
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            
            body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                min-height: 100vh;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #333;
            }
            
            .container {
                background: rgba(255, 255, 255, 0.95);
                backdrop-filter: blur(10px);
                border-radius: 20px;
                padding: 3rem;
                box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
                text-align: center;
                max-width: 600px;
                width: 90%;
                animation: fadeIn 1s ease-out;
            }
            
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
            
            .title {
                color: #4a5568;
                font-size: 2rem;
                margin-bottom: 2rem;
                font-weight: 300;
                letter-spacing: 1px;
            }
            
            .date-time-display {
                background: linear-gradient(135deg, #ff6b6b, #4ecdc4);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                margin: 2rem 0;
            }
            
            .date {
                font-size: 1.8rem;
                font-weight: 500;
                margin-bottom: 1rem;
                text-transform: capitalize;
            }
            
            .time {
                font-size: 3rem;
                font-weight: bold;
                font-family: 'Courier New', monospace;
                letter-spacing: 2px;
                margin: 1rem 0;
            }
            
            .info-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 1rem;
                margin-top: 2rem;
            }
            
            .info-card {
                background: rgba(106, 90, 205, 0.1);
                border-radius: 10px;
                padding: 1rem;
                border: 1px solid rgba(106, 90, 205, 0.2);
            }
            
            .info-label {
                font-size: 0.9rem;
                color: #666;
                font-weight: 500;
                margin-bottom: 0.5rem;
            }
            
            .info-value {
                font-size: 1.1rem;
                font-weight: 600;
                color: #4a5568;
            }
            
            .refresh-btn {
                background: linear-gradient(135deg, #667eea, #764ba2);
                color: white;
                border: none;
                padding: 12px 30px;
                border-radius: 25px;
                font-size: 1rem;
                font-weight: 500;
                cursor: pointer;
                margin-top: 2rem;
                transition: transform 0.2s, box-shadow 0.2s;
            }
            
            .refresh-btn:hover {
                transform: translateY(-2px);
                box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
            }
            
            .auto-refresh {
                margin-top: 1rem;
                color: #666;
                font-size: 0.9rem;
            }
            
            .pulse {
                animation: pulse 2s infinite;
            }
            
            @keyframes pulse {
                0% { opacity: 1; }
                50% { opacity: 0.7; }
                100% { opacity: 1; }
            }
            
            @media (max-width: 600px) {
                .container { padding: 2rem 1rem; }
                .title { font-size: 1.5rem; }
                .date { font-size: 1.4rem; }
                .time { font-size: 2.2rem; }
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1 class="title">🕐 Data e Hora Atuais</h1>
            
            <div class="date-time-display">
                <div class="date" id="currentDate">${dataHora.data}</div>
                <div class="time pulse" id="currentTime">${dataHora.hora}</div>
            </div>
            
            <div class="info-grid">
                <div class="info-card">
                    <div class="info-label">Fuso Horário</div>
                    <div class="info-value">${dataHora.timezone}</div>
                </div>
                <div class="info-card">
                    <div class="info-label">Timestamp</div>
                    <div class="info-value">${dataHora.timestamp}</div>
                </div>
                <div class="info-card">
                    <div class="info-label">Formato ISO</div>
                    <div class="info-value">${dataHora.iso}</div>
                </div>
            </div>
            
            <button class="refresh-btn" onclick="window.location.reload()">
                🔄 Atualizar Agora
            </button>
            
            <div class="auto-refresh">
                <p>⏰ Página atualiza automaticamente a cada 30 segundos</p>
            </div>
        </div>
        
        <script>
            // Auto-refresh da página a cada 30 segundos
            setTimeout(() => {
                window.location.reload();
            }, 30000);
            
            // Atualização da hora em tempo real (apenas visual, sem servidor)
            function atualizarHoraLocal() {
                const agora = new Date();
                const hora = agora.toLocaleTimeString('pt-BR', {
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                    timeZone: 'America/Sao_Paulo',
                    hour12: false
                });
                document.getElementById('currentTime').textContent = hora;
            }
            
            // Atualiza a hora a cada segundo (apenas visual)
            setInterval(atualizarHoraLocal, 1000);
        </script>
    </body>
    </html>`;

  res.send(html);
});

// API endpoint para obter dados de data/hora em JSON
app.get("/api/datetime", (req, res) => {
  const dataHora = obterDataHoraAtual();
  res.json({
    success: true,
    data: dataHora,
    servidor: "Node.js + Express",
    versao: "1.0.0",
  });
});

// Rota para página de teste da API
app.get("/teste", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "teste-api.html"));
});

// Rota para página simples (sem estilos)
app.get("/simples", (req, res) => {
  const dataHora = obterDataHoraAtual();

  const html = `
    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Data e Hora - Versão Simples</title>
        <style>
            body { font-family: Arial, sans-serif; text-align: center; margin-top: 100px; }
            .datetime { font-size: 2rem; margin: 20px 0; }
            .info { margin: 10px 0; }
        </style>
    </head>
    <body>
        <h1>Data e Hora Atuais</h1>
        <div class="datetime">
            <div>${dataHora.data}</div>
            <div>${dataHora.hora}</div>
        </div>
        <div class="info">Fuso Horário: ${dataHora.timezone}</div>
        <div class="info">Timestamp: ${dataHora.timestamp}</div>
        <p><a href="/">← Voltar para versão completa</a></p>
    </body>
    </html>`;

  res.send(html);
});

// Middleware de tratamento de erros
app.use((err, req, res, next) => {
  console.error("Erro no servidor:", err);
  res.status(500).send(`
        <h1>Erro do Servidor</h1>
        <p>Ocorreu um erro interno. Tente novamente mais tarde.</p>
        <p><a href="/">← Voltar ao início</a></p>
    `);
});

// Middleware para rotas não encontradas
app.use((req, res) => {
  res.status(404).send(`
        <h1>Página Não Encontrada</h1>
        <p>A página solicitada não existe.</p>
        <p><a href="/">← Voltar ao início</a></p>
    `);
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor iniciado com sucesso!`);
  console.log(`📅 Data/Hora: http://localhost:${PORT}`);
  console.log(`🔗 API JSON: http://localhost:${PORT}/api/datetime`);
  console.log(`📄 Versão simples: http://localhost:${PORT}/simples`);
  console.log(`🧪 Teste da API: http://localhost:${PORT}/teste`);
  console.log(`⏰ Servidor rodando na porta ${PORT}`);
});

module.exports = app;
