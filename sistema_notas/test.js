// test.js - Arquivo de teste simples para o NotasCalculator

const NotasCalculator = require("./src/services/NotasCalculator");

console.log("🧪 Testando o Sistema de Cálculo de Notas\n");

// Casos de teste
const casos = [
  { nome: "Excelente", notas: [9.5, 9.8, 10.0] },
  { nome: "Aprovado com Mérito", notas: [8.0, 7.5, 8.5] },
  { nome: "Aprovado Simples", notas: [6.5, 6.0, 6.8] },
  { nome: "Reprovado", notas: [5.0, 4.5, 3.8] },
  { nome: "Entrada Inválida", notas: ["abc", 7.0, 8.0] },
  { nome: "Nota Fora do Intervalo", notas: [12.0, 7.0, 8.0] },
];

casos.forEach((caso, index) => {
  console.log(`${index + 1}. Teste: ${caso.nome}`);
  console.log(`   Notas: ${caso.notas.join(", ")}`);

  const resultado = NotasCalculator.calcularMedia(...caso.notas);

  if (resultado.valido) {
    console.log(`   ✅ Média: ${resultado.media}`);
    console.log(`   📊 Status: ${resultado.status}`);
    console.log(`   🎯 Aprovado: ${resultado.aprovado ? "Sim" : "Não"}`);
    console.log(
      `   🖼️  Imagem: ${NotasCalculator.obterImagem(
        resultado.aprovado,
        resultado.media
      )}`
    );
  } else {
    console.log(`   ❌ Erro: ${resultado.erro}`);
  }

  console.log("");
});

console.log("🎯 Teste concluído!");
