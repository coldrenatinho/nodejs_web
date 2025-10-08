#!/usr/bin/env node

/**
 * Exemplo de cliente Node.js para consumir a API de data/hora
 *
 * Execute: node exemplo-cliente.js
 */

const http = require("http");

// Configurações
const HOST = "localhost";
const PORT = 3001;
const ENDPOINT = "/api/datetime";

console.log("🚀 Cliente de Teste da API Data/Hora\n");

// Função para fazer requisição HTTP
function fazerRequisicao() {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: HOST,
      port: PORT,
      path: ENDPOINT,
      method: "GET",
      headers: {
        Accept: "application/json",
        "User-Agent": "NodeJS-Client/1.0",
      },
    };

    const req = http.request(options, (res) => {
      let data = "";

      res.on("data", (chunk) => {
        data += chunk;
      });

      res.on("end", () => {
        try {
          const jsonData = JSON.parse(data);
          resolve({
            status: res.statusCode,
            headers: res.headers,
            data: jsonData,
          });
        } catch (error) {
          reject(new Error(`Erro ao parsear JSON: ${error.message}`));
        }
      });
    });

    req.on("error", (error) => {
      reject(new Error(`Erro na requisição: ${error.message}`));
    });

    req.setTimeout(5000, () => {
      req.destroy();
      reject(new Error("Timeout na requisição (5s)"));
    });

    req.end();
  });
}

// Função para exibir os dados formatados
function exibirDados(response) {
  console.log("✅ Resposta recebida com sucesso!");
  console.log(`📊 Status HTTP: ${response.status}`);
  console.log(`🕐 Servidor: ${response.headers.date}`);
  console.log("");

  const dados = response.data.data;
  console.log("📅 INFORMAÇÕES DE DATA/HORA:");
  console.log("─".repeat(50));
  console.log(`📅 Data: ${dados.data}`);
  console.log(`🕐 Hora: ${dados.hora}`);
  console.log(`🌍 Fuso: ${dados.timezone}`);
  console.log(`⏱️  Timestamp: ${dados.timestamp}`);
  console.log(`🔖 ISO: ${dados.iso}`);
  console.log("─".repeat(50));
  console.log(`🖥️  Servidor: ${response.data.servidor}`);
  console.log(`📦 Versão: ${response.data.versao}`);
}

// Função para teste único
async function testeUnico() {
  try {
    console.log(
      `📡 Fazendo requisição para: http://${HOST}:${PORT}${ENDPOINT}`
    );
    const response = await fazerRequisicao();
    exibirDados(response);
  } catch (error) {
    console.error(`❌ Erro: ${error.message}`);
    console.log("\n💡 Dicas:");
    console.log(`   • Verifique se o servidor está rodando na porta ${PORT}`);
    console.log(`   • Execute: npm start (no diretório do servidor)`);
    console.log(`   • Teste no navegador: http://${HOST}:${PORT}`);
  }
}

// Função para teste contínuo
async function testeContinuo(intervalo = 5000) {
  console.log(`⏰ Iniciando teste contínuo (intervalo: ${intervalo / 1000}s)`);
  console.log("   Pressione Ctrl+C para parar\n");

  const executarTeste = async () => {
    try {
      const agora = new Date().toLocaleTimeString("pt-BR");
      console.log(`\n[${agora}] 📡 Consultando API...`);

      const response = await fazerRequisicao();
      const dados = response.data.data;

      console.log(`✅ ${dados.data} - ${dados.hora}`);
    } catch (error) {
      console.error(
        `❌ [${new Date().toLocaleTimeString("pt-BR")}] ${error.message}`
      );
    }
  };

  // Primeira execução
  await executarTeste();

  // Execuções periódicas
  const intervalId = setInterval(executarTeste, intervalo);

  // Graceful shutdown
  process.on("SIGINT", () => {
    console.log("\n\n🛑 Parando teste contínuo...");
    clearInterval(intervalId);
    process.exit(0);
  });
}

// Função principal
async function main() {
  const args = process.argv.slice(2);
  const modo = args[0] || "unico";

  console.log(`🎯 Modo: ${modo}\n`);

  switch (modo) {
    case "continuo":
      const intervalo = parseInt(args[1]) || 5000;
      await testeContinuo(intervalo);
      break;

    case "unico":
    default:
      await testeUnico();
      break;
  }
}

// Verificar se é execução direta (não importação)
if (require.main === module) {
  main();
}

module.exports = { fazerRequisicao, exibirDados };
