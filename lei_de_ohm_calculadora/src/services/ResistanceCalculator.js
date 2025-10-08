// src/services/ResistanceCalculator.js

class ResistanceCalculator {
  /**
   * Calcula a resistência com base na tensão e corrente (Lei de Ohm).
   * @param {string|number} tensao - O valor da tensão em Volts.
   * @param {string|number} corrente - O valor da corrente em Amperes.
   * @returns {number|null|string} O valor da resistência em Ohms, null para entrada inválida, ou uma mensagem de erro.
   */
  static calcular(tensao, corrente) {
    // Converte para número e remove espaços em branco
    const v = parseFloat(String(tensao).trim());
    const a = parseFloat(String(corrente).trim());

    // Valida se as entradas são números válidos
    if (isNaN(v) || isNaN(a)) {
      return null;
    }

    // Valida se os valores são finitos
    if (!isFinite(v) || !isFinite(a)) {
      return "Os valores devem ser números finitos.";
    }

    // Valida se a corrente é zero para evitar divisão por zero
    if (a === 0) {
      return "Divisão por zero não é permitida. A corrente não pode ser zero.";
    }

    // Calcula a resistência usando a Lei de Ohm: R = V / I
    const resistencia = v / a;

    // Valida se o resultado é um número válido
    if (!isFinite(resistencia)) {
      return "Erro no cálculo: resultado inválido.";
    }

    return resistencia;
  }
}

module.exports = ResistanceCalculator;
