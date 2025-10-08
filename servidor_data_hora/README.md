# Servidor Data e Hora

Um servidor Node.js que apresenta uma página HTML com data e hora atuais em tempo real.

## 📋 Descrição

Esta aplicação web exibe a data e hora atuais formatadas em português brasileiro, com atualização automática e interface moderna e responsiva.

## 🚀 Funcionalidades

- ✅ **Data e hora em tempo real** - Formatação em português brasileiro
- ✅ **Auto-atualização** - Página atualiza automaticamente a cada 30 segundos
- ✅ **Atualização visual** - Relógio atualiza a cada segundo (apenas visual)
- ✅ **Interface moderna** - Design responsivo com gradientes e animações
- ✅ **API REST** - Endpoint JSON para obter dados programaticamente
- ✅ **Múltiplas visualizações** - Versão completa e versão simples
- ✅ **Fuso horário brasileiro** - Configurado para América/São Paulo (UTC-3)
- ✅ **Informações detalhadas** - Timestamp, formato ISO, fuso horário

## 🛠️ Tecnologias Utilizadas

- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web minimalista
- **HTML5/CSS3** - Interface do usuário
- **JavaScript** - Funcionalidades dinâmicas
- **APIs nativas** - Date, Intl para formatação

## 📦 Instalação e Execução

### Pré-requisitos
- Node.js (versão 14 ou superior)
- npm (gerenciador de pacotes)

### Passos para executar:

1. **Navegue até o diretório**
   ```bash
   cd servidor_data_hora
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
   - Página principal: `http://localhost:3001`
   - API JSON: `http://localhost:3001/api/datetime`
   - Versão simples: `http://localhost:3001/simples`

### Scripts Disponíveis

- `npm start` - Inicia o servidor em modo produção
- `npm run dev` - Inicia o servidor com nodemon (reinicialização automática)

## 📁 Estrutura do Projeto

```
servidor_data_hora/
├── server.js          # Servidor principal Express
├── package.json       # Configurações e dependências
└── README.md          # Este arquivo
```

## 🌐 Rotas Disponíveis

### GET `/`
- **Descrição:** Página principal com interface completa
- **Retorna:** HTML com data/hora formatada e design moderno
- **Recursos:** Auto-refresh, animações, informações detalhadas

### GET `/api/datetime`
- **Descrição:** API REST para obter dados em JSON
- **Retorna:** JSON com informações de data/hora
- **Exemplo de resposta:**
```json
{
  "success": true,
  "data": {
    "data": "segunda-feira, 7 de outubro de 2025",
    "hora": "14:30:45",
    "timestamp": 1728311445000,
    "iso": "2025-10-07T17:30:45.000Z",
    "timezone": "America/Sao_Paulo (UTC-3)"
  },
  "servidor": "Node.js + Express",
  "versao": "1.0.0"
}
```

### GET `/simples`
- **Descrição:** Versão simplificada da página
- **Retorna:** HTML básico apenas com data/hora
- **Uso:** Para integração ou visualização minimalista

## ⚙️ Configurações

### Fuso Horário
- **Padrão:** America/Sao_Paulo (UTC-3)
- **Formato:** 24 horas (HH:MM:SS)
- **Idioma:** Português brasileiro

### Auto-Refresh
- **Intervalo:** 30 segundos (página completa)
- **Relógio visual:** 1 segundo (apenas display)

### Porta do Servidor
- **Padrão:** 3001
- **Configurável:** Via variável de ambiente `PORT`

## 🎨 Interface

### Versão Completa (`/`)
- **Design:** Moderno com gradientes e animações
- **Responsivo:** Adaptável para desktop e mobile
- **Recursos:** 
  - Relógio com pulse animation
  - Cards informativos
  - Botão de atualização manual
  - Background gradient animado

### Versão Simples (`/simples`)
- **Design:** Minimalista e funcional
- **Uso:** Integração ou visualização básica
- **Recursos:** Data, hora e informações essenciais

## 📱 Responsividade

- ✅ **Desktop** - Layout otimizado para telas grandes
- ✅ **Tablet** - Grid adaptável para telas médias  
- ✅ **Mobile** - Interface compacta para smartphones
- ✅ **Breakpoints** - CSS responsivo com media queries

## 🔧 Personalização

### Alterar Porta
```bash
PORT=4000 npm start
```

### Alterar Fuso Horário
Edite a variável `timeZone` no arquivo `server.js`:
```javascript
timeZone: 'America/Recife'  // Exemplo para Recife
```

### Alterar Intervalo de Auto-Refresh
Modifique o valor em milissegundos no JavaScript:
```javascript
setTimeout(() => {
    window.location.reload();
}, 10000); // 10 segundos
```

## 📊 Exemplo de Uso da API

```javascript
// Fetch da API
fetch('/api/datetime')
  .then(response => response.json())
  .then(data => {
    console.log('Data atual:', data.data.data);
    console.log('Hora atual:', data.data.hora);
  });
```

## 🐛 Tratamento de Erros

- **Erro 404:** Página não encontrada
- **Erro 500:** Erro interno do servidor
- **Fallback:** Páginas de erro com navegação de retorno

## 📝 Licença

Este projeto é licenciado sob a licença ISC.

## 🚀 Deploy

### Desenvolvimento Local
```bash
npm run dev  # Com nodemon para auto-reload
```

### Produção
```bash
npm start    # Servidor estável
```

---

**Desenvolvido com ❤️ usando Node.js e Express**
