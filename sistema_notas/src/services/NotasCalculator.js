// src/services/NotasCalculator.js

class NotasCalculator {
  /**
   * Calcula a média aritmética de três notas
   * @param {string|number} nota1 - Primeira nota
   * @param {string|number} nota2 - Segunda nota
   * @param {string|number} nota3 - Terceira nota
   * @returns {object} Objeto com média, status de aprovação e mensagem
   */
  static calcularMedia(nota1, nota2, nota3) {
    // Converter para números e validar
    const n1 = parseFloat(String(nota1).trim());
    const n2 = parseFloat(String(nota2).trim());
    const n3 = parseFloat(String(nota3).trim());

    // Validar se são números válidos
    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
      return {
        erro: "Por favor, insira valores numéricos válidos para todas as notas.",
        valido: false,
      };
    }

    // Validar se as notas estão no intervalo válido (0-10)
    if (n1 < 0 || n1 > 10 || n2 < 0 || n2 > 10 || n3 < 0 || n3 > 10) {
      return {
        erro: "As notas devem estar entre 0 e 10.",
        valido: false,
      };
    }

    // Calcular a média
    const media = (n1 + n2 + n3) / 3;

    // Determinar aprovação (média >= 6.0)
    const aprovado = media >= 6.0;

    // Determinar status detalhado
    let status, mensagem, classe;
    if (media >= 9.0) {
      status = "Excelente";
      mensagem = "Parabéns! Desempenho excelente!";
      classe = "excelente";
    } else if (media >= 7.0) {
      status = "Aprovado com mérito";
      mensagem = "Muito bem! Aprovado com bom desempenho!";
      classe = "merito";
    } else if (media >= 6.0) {
      status = "Aprovado";
      mensagem = "Aprovado! Continue se esforçando!";
      classe = "aprovado";
    } else if (media >= 4.0) {
      status = "Reprovado";
      mensagem = "Reprovado. É necessário mais estudo.";
      classe = "reprovado";
    } else {
      status = "Reprovado";
      mensagem = "Reprovado. Precisa de muito mais dedicação.";
      classe = "reprovado-grave";
    }

    return {
      nota1: n1,
      nota2: n2,
      nota3: n3,
      media: Math.round(media * 100) / 100, // Arredondar para 2 casas decimais
      aprovado,
      status,
      mensagem,
      classe,
      valido: true,
    };
  }

  /**
   * Determina a imagem a ser exibida baseada no resultado
   * @param {boolean} aprovado - Se o aluno foi aprovado
   * @param {number} media - Média calculada
   * @returns {string} Nome do arquivo de imagem
   */
  static obterImagem(aprovado, media) {
    if (media >= 9.0) {
      return "excelente.svg";
    } else if (media >= 7.0) {
      return "merito.svg";
    } else if (aprovado) {
      return "aprovado.svg";
    } else {
      return "reprovado.svg";
    }
  }
}

module.exports = NotasCalculator;
