# Calculadora da Lei de Ohm

Uma aplicação web para calcular resistência elétrica usando a Lei de Ohm (R = V / I).

## 📋 Descrição

Esta calculadora permite calcular a resistência elétrica com base na tensão e corrente fornecidas, utilizando a famosa Lei de Ohm da física elétrica.

**Fórmula:** R = V / I

Onde:

- **R** = Resistência (Ohms - Ω)
- **V** = Tensão (Volts - V)
- **I** = Corrente (Amperes - A)

## 🚀 Funcionalidades

- ✅ Cálculo preciso da resistência elétrica
- ✅ Validação de entrada de dados
- ✅ Prevenção de divisão por zero
- ✅ Interface responsiva e intuitiva
- ✅ Tratamento de erros robusto
- ✅ Formatação adequada de resultados (notação científica para valores muito pequenos)

## 🛠️ Tecnologias Utilizadas

- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web
- **HTML5** - Estrutura da página
- **CSS3** - Estilização
- **JavaScript** - Validação no cliente

## 📦 Instalação e Execução

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm (gerenciador de pacotes)

### Passos para executar:

1. **Clone ou baixe o projeto**

   ```bash
   cd lei_de_ohm_calculadora
   ```

2. **Instale as dependências**

   ```bash
   npm install
   ```

3. **Inicie o servidor**

   ```bash
   npm start
   ```

4. **Acesse a aplicação**
   - Abra seu navegador
   - Vá para: `http://localhost:3000`

### Scripts Disponíveis

- `npm start` - Inicia o servidor em modo produção
- `npm run dev` - Inicia o servidor com nodemon (reinicialização automática)

## 📁 Estrutura do Projeto

```
lei_de_ohm_calculadora/
├── app.js                          # Servidor principal Express
├── package.json                    # Configurações e dependências
├── README.md                       # Este arquivo
├── src/
│   └── services/
│       └── ResistanceCalculator.js # Lógica de cálculo
└── views/
    └── formulario.html            # Interface do usuário
```

## 🔧 Como Usar

1. **Acesse a aplicação** no navegador
2. **Preencha os campos:**
   - Tensão em Volts (V)
   - Corrente em Amperes (A)
3. **Clique em "Calcular Resistência"**
4. **Visualize o resultado** com a resistência calculada em Ohms (Ω)

### Validações Implementadas

- ❌ Corrente não pode ser zero (divisão por zero)
- ❌ Valores devem ser números válidos
- ❌ Valores devem ser finitos
- ✅ Aceita números positivos e negativos
- ✅ Aceita valores decimais

## 📊 Exemplos de Uso

### Exemplo 1: Cálculo básico

- **Tensão:** 12V
- **Corrente:** 2A
- **Resultado:** 6Ω

### Exemplo 2: Valores decimais

- **Tensão:** 5.5V
- **Corrente:** 0.25A
- **Resultado:** 22Ω

### Exemplo 3: Valores muito pequenos

- **Tensão:** 0.001V
- **Corrente:** 1A
- **Resultado:** 1.000e-3Ω (notação científica)

## 🐛 Tratamento de Erros

A aplicação trata adequadamente os seguintes casos de erro:

- **Divisão por zero:** Quando a corrente é 0
- **Entrada inválida:** Quando valores não são números
- **Campos vazios:** Quando campos obrigatórios não são preenchidos
- **Valores infinitos:** Quando o resultado não é finito
- **Erros do servidor:** Tratamento de exceções inesperadas

## 🎨 Interface

- Design limpo e moderno
- Responsivo para diferentes dispositivos
- Feedback visual claro para resultados e erros
- Formulário com validação em tempo real
- Informações educativas sobre a Lei de Ohm

## 📝 Licença

Este projeto é licenciado sob a licença ISC.

## 👨‍💻 Desenvolvimento

Para contribuir com o projeto:

1. Faça um fork do repositório
2. Crie uma branch para sua feature
3. Implemente suas mudanças
4. Teste thoroughly
5. Submeta um pull request

---

**Nota:** Este é um projeto educacional para demonstrar conceitos de desenvolvimento web e física elétrica.
