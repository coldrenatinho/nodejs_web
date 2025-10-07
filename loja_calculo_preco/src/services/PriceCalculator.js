// src/services/PriceCalculator.js

class PriceCalculator {
  /**
   * Calcula o preço final de venda de um produto.
   * @param {string|number} precoUnitario - O preço de uma unidade do produto.
   * @param {string|number} quantidade - A quantidade de unidades vendidas.
   * @param {string|number} desconto - O valor do desconto a ser aplicado.
   * @returns {number|null} O preço final ou null se a entrada for inválida.
   */
  static calcularPrecoFinal(precoUnitario, quantidade, desconto) {
    const precoNum = parseFloat(precoUnitario);
    const qtdNum = parseFloat(quantidade);
    const descontoNum = parseFloat(desconto);

    // Validação para garantir que todas as entradas são números válidos e não negativos
    if (
      isNaN(precoNum) ||
      isNaN(qtdNum) ||
      isNaN(descontoNum) ||
      precoNum < 0 ||
      qtdNum < 0 ||
      descontoNum < 0
    ) {
      return null;
    }

    const subtotal = precoNum * qtdNum;
    const precoFinal = subtotal - descontoNum;

    return precoFinal;
  }
}

module.exports = PriceCalculator;
