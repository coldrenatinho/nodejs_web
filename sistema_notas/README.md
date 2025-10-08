# 📚 Sistema de Cálculo de Notas

Uma aplicação web Node.js para calcular média de três notas e determinar aprovação de alunos com interface visual e imagens indicativas.

## 📋 Descrição

Este sistema permite inserir três notas de um aluno, calcula automaticamente a média aritmética e determina se o aluno foi aprovado ou reprovado baseado no critério de média ≥ 6,0. O resultado é apresentado com uma imagem visual correspondente ao desempenho.

## 🎯 Critérios de Avaliação

- **Aprovação:** Média final ≥ 6,0
- **Classificações por Desempenho:**
  - 🏆 **Excelente:** 9,0 - 10,0
  - ⭐ **Aprovado com Mérito:** 7,0 - 8,9
  - ✅ **Aprovado:** 6,0 - 6,9
  - ❌ **Reprovado:** 0,0 - 5,9

## 🚀 Funcionalidades

- ✅ Cálculo automático da média aritmética de 3 notas
- ✅ Validação de entrada (notas de 0 a 10)
- ✅ Determinação automática de aprovação/reprovação
- ✅ Classificação por níveis de desempenho
- ✅ **Imagens visuais** para cada resultado
- ✅ Interface responsiva e moderna
- ✅ Campos opcionais para nome do aluno e disciplina
- ✅ Preview da média em tempo real
- ✅ Validação no cliente e servidor
- ✅ Tratamento robusto de erros

## 🛠️ Tecnologias Utilizadas

- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web
- **HTML5** - Estrutura das páginas
- **CSS3** - Estilização avançada com gradientes
- **JavaScript** - Validação e interatividade
- **SVG** - Imagens vetoriais personalizadas

## 📦 Instalação e Execução

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm (gerenciador de pacotes)

### Passos para executar:

1. **Navegue para o diretório do projeto**

   ```bash
   cd sistema_notas
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
   - Vá para: `http://localhost:3001`

### Scripts Disponíveis

- `npm start` - Inicia o servidor em modo produção
- `npm run dev` - Inicia o servidor com nodemon (reinicialização automática)

## 📁 Estrutura do Projeto

```
sistema_notas/
├── app.js                              # Servidor principal Express
├── package.json                        # Configurações e dependências
├── README.md                          # Este arquivo
├── src/
│   └── services/
│       └── NotasCalculator.js         # Lógica de cálculo de notas
├── views/
│   └── formulario.html               # Interface do usuário
└── public/
    └── images/
        ├── aprovado.svg              # Imagem para aprovado
        ├── reprovado.svg             # Imagem para reprovado
        ├── merito.svg                # Imagem para aprovado com mérito
        └── excelente.svg             # Imagem para excelente
```

## 🎨 Imagens e Status Visuais

O sistema inclui 4 imagens SVG personalizadas:

| Status            | Critério   | Imagem           | Cor      |
| ----------------- | ---------- | ---------------- | -------- |
| 🏆 **Excelente**  | 9,0 - 10,0 | Troféu com coroa | Dourado  |
| ⭐ **Com Mérito** | 7,0 - 8,9  | Estrela          | Azul     |
| ✅ **Aprovado**   | 6,0 - 6,9  | Check mark       | Verde    |
| ❌ **Reprovado**  | 0,0 - 5,9  | X mark           | Vermelho |

## 🔧 Como Usar

### Passo a Passo:

1. **Acesse a aplicação** no navegador
2. **Preencha os dados (opcionais):**
   - Nome do Aluno
   - Disciplina
3. **Insira as três notas** (valores de 0 a 10)
4. **Clique em "Calcular Média"**
5. **Visualize o resultado** com:
   - Média calculada
   - Status de aprovação
   - Imagem correspondente
   - Detalhes do cálculo

### Exemplo de Uso:

**Entrada:**

- Nome: João Silva
- Disciplina: Matemática
- 1ª Nota: 8.5
- 2ª Nota: 7.0
- 3ª Nota: 9.0

**Resultado:**

- Média: 8.17
- Status: Aprovado com Mérito ⭐
- Imagem: Estrela azul
- Cálculo: (8.5 + 7.0 + 9.0) ÷ 3 = 8.17

## 📊 Validações Implementadas

### No Cliente (JavaScript):

- ✅ Notas devem estar entre 0 e 10
- ✅ Feedback visual em tempo real
- ✅ Preview da média durante digitação
- ✅ Validação antes do envio

### No Servidor (Node.js):

- ✅ Validação de campos obrigatórios
- ✅ Conversão e validação de tipos
- ✅ Verificação de intervalos válidos
- ✅ Tratamento de erros e exceções

## 🎨 Interface e Design

- **Design Moderno:** Gradientes, sombras e bordas arredondadas
- **Responsivo:** Adaptável para desktop, tablet e mobile
- **Interativo:** Animações e feedback visual
- **Acessível:** Contrastes adequados e labels descritivos
- **Educativo:** Informações sobre critérios integradas

## 📱 Responsividade

A interface se adapta automaticamente para:

- **Desktop:** Layout em grade com 3 colunas para notas
- **Tablet:** Layout em 2 colunas
- **Mobile:** Layout em coluna única

## 🐛 Tratamento de Erros

O sistema trata adequadamente:

- **Notas inválidas:** Fora do intervalo 0-10
- **Campos vazios:** Notas obrigatórias não preenchidas
- **Valores não numéricos:** Entrada de texto em campos numéricos
- **Erros do servidor:** Exceções inesperadas

## 🔍 Funcionalidades Avançadas

1. **Preview em Tempo Real:** Mostra a média enquanto digita
2. **Validação Visual:** Cores diferentes para valores válidos/inválidos
3. **Campos Opcionais:** Nome e disciplina para personalização
4. **Cálculo Detalhado:** Mostra a fórmula utilizada
5. **Classificação Inteligente:** 4 níveis de desempenho

## 🚀 Possíveis Melhorias Futuras

- [ ] Histórico de notas por aluno
- [ ] Exportação de resultados em PDF
- [ ] Sistema de múltiplas disciplinas
- [ ] Gráficos de desempenho
- [ ] Base de dados para persistência
- [ ] Sistema de login para professores

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

**Desenvolvido como sistema educacional para demonstrar cálculo de médias escolares com interface web moderna.**
