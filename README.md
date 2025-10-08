# 🚀 Projetos de Desenvolvimento Web com Node.js

Este repositório contém uma coleção de projetos educacionais desenvolvidos em Node.js para demonstrar conceitos fundamentais de desenvolvimento web, cálculos matemáticos e interfaces interativas.

## 📁 Estrutura do Projeto

```
Atividades/
├── 📂 Atividade_I/                    # Primeira atividade
├── ⚡ lei_de_ohm_calculadora/         # Calculadora da Lei de Ohm
├── 💰 loja_calculo_preco/             # Sistema de cálculo de preços
├── 📊 media_calculadora_web/          # Calculadora de média simples
├── 🕒 servidor_data_hora/             # Servidor de data e hora
└── 📚 sistema_notas/                  # Sistema de cálculo de notas escolares
```

## 🛠️ Projetos Desenvolvidos

### 1. ⚡ Calculadora da Lei de Ohm

**Diretório:** `lei_de_ohm_calculadora/`  
**Porta:** 3000  
**Descrição:** Aplicação para cálculo de resistência elétrica usando a Lei de Ohm (R = V / I).

**Funcionalidades:**

- Cálculo de resistência com base em tensão e corrente
- Validação robusta de entrada de dados
- Interface moderna e responsiva
- Prevenção de divisão por zero
- Formatação adequada de resultados

**Tecnologias:** Node.js, Express, HTML5, CSS3, JavaScript

---

### 2. 🕒 Servidor de Data e Hora

**Diretório:** `servidor_data_hora/`  
**Porta:** 3002  
**Descrição:** Servidor Node.js que apresenta páginas HTML com data e hora atuais.

**Funcionalidades:**

- Exibição de data e hora em tempo real
- API REST para obter data/hora em JSON
- Interface web interativa
- Atualização automática
- Múltiplos formatos de data

**Tecnologias:** Node.js, Express, JavaScript, API RESTful

---

### 3. 📚 Sistema de Notas Escolares

**Diretório:** `sistema_notas/`  
**Porta:** 3001  
**Descrição:** Sistema completo para cálculo de médias e aprovação de alunos.

**Funcionalidades:**

- Cálculo de média de três notas
- Critério de aprovação (média ≥ 6.0)
- 4 níveis de classificação com imagens
- Validação em tempo real
- Interface responsiva e moderna
- Campos opcionais para nome e disciplina

**Níveis de Classificação:**

- 🏆 **Excelente:** 9,0 - 10,0
- ⭐ **Aprovado com Mérito:** 7,0 - 8,9
- ✅ **Aprovado:** 6,0 - 6,9
- ❌ **Reprovado:** 0,0 - 5,9

**Tecnologias:** Node.js, Express, HTML5, CSS3, JavaScript, SVG

---

### 4. 💰 Sistema de Cálculo de Preços

**Diretório:** `loja_calculo_preco/`  
**Descrição:** Sistema para cálculo de preços de produtos com diferentes critérios.

**Tecnologias:** Node.js, Express

---

### 5. 📊 Calculadora de Média Web

**Diretório:** `media_calculadora_web/`  
**Descrição:** Calculadora simples de média aritmética via interface web.

**Tecnologias:** Node.js, Express

## 🚀 Como Executar os Projetos

### Pré-requisitos Globais

- **Node.js** (versão 14 ou superior)
- **npm** (gerenciador de pacotes)

### Execução Individual

Cada projeto pode ser executado independentemente:

```bash
# 1. Navegue para o diretório do projeto desejado
cd nome_do_projeto/

# 2. Instale as dependências
npm install

# 3. Inicie o servidor
npm start
```

### Portas dos Servidores

| Projeto            | Porta | URL Local             |
| ------------------ | ----- | --------------------- |
| Lei de Ohm         | 3000  | http://localhost:3000 |
| Sistema de Notas   | 3001  | http://localhost:3001 |
| Servidor Data/Hora | 3002  | http://localhost:3002 |

## 🎯 Objetivos Educacionais

Este conjunto de projetos foi desenvolvido para demonstrar:

### Conceitos de Backend

- ✅ Criação de servidores HTTP com Node.js
- ✅ Framework Express.js
- ✅ Roteamento e middleware
- ✅ Tratamento de formulários HTML
- ✅ APIs REST
- ✅ Validação de dados

### Conceitos de Frontend

- ✅ HTML5 semântico
- ✅ CSS3 avançado com Flexbox/Grid
- ✅ JavaScript vanilla
- ✅ Interfaces responsivas
- ✅ Validação no cliente
- ✅ UX/UI modernas

### Conceitos de Aplicação

- ✅ Separação de responsabilidades
- ✅ Arquitetura MVC simplificada
- ✅ Tratamento de erros
- ✅ Documentação de código
- ✅ Testes básicos

## 🔧 Funcionalidades Comuns

Todos os projetos incluem:

- **Validação robusta** de entrada de dados
- **Interfaces responsivas** para diferentes dispositivos
- **Tratamento de erros** adequado
- **Documentação completa** com README individual
- **Código limpo** e bem comentado
- **Testes** básicos quando aplicável

## 📱 Responsividade

Todas as interfaces foram desenvolvidas com design responsivo, adaptando-se automaticamente a:

- 🖥️ **Desktop** (1200px+)
- 📱 **Tablet** (768px - 1199px)
- 📱 **Mobile** (320px - 767px)

## 🎨 Design e UX

### Características Visuais:

- **Gradientes** modernos e suaves
- **Sombras** e efeitos de profundidade
- **Animações** CSS sutis
- **Tipografia** legível e hierárquica
- **Cores** acessíveis e contrastantes

### Experiência do Usuário:

- **Feedback visual** imediato
- **Validação em tempo real**
- **Mensagens de erro** claras
- **Loading states** quando necessário
- **Navegação** intuitiva

## 🧪 Testes

Cada projeto inclui:

- **Validação de entrada**
- **Casos de teste** documentados
- **Tratamento de edge cases**
- **Verificação de funcionamento** básica

## 📚 Aprendizados

### Técnicos:

- Desenvolvimento full-stack com Node.js
- Criação de APIs RESTful
- Manipulação de DOM
- CSS Grid e Flexbox
- Responsividade móvel

### Conceituais:

- Arquitetura de aplicações web
- Separação frontend/backend
- Validação client-side vs server-side
- UX design principles
- Documentação de projetos

## 🔮 Possíveis Melhorias Futuras

- [ ] **Base de dados:** Integração com MongoDB/PostgreSQL
- [ ] **Autenticação:** Sistema de login/logout
- [ ] **Deploy:** Hospedagem em nuvem (Heroku, Vercel)
- [ ] **Testes:** Suítes de testes automatizados
- [ ] **PWA:** Progressive Web App features
- [ ] **Docker:** Containerização dos projetos

## 🤝 Contribuição

Para contribuir com algum projeto:

1. Faça um fork do repositório
2. Crie uma branch para sua feature
3. Implemente suas mudanças
4. Teste thoroughly
5. Submeta um pull request

## 📄 Licença

Este projeto é licenciado sob a licença ISC - veja o arquivo LICENSE para detalhes.

## 👨‍💻 Desenvolvedor

Desenvolvido como material educacional para aprendizado de desenvolvimento web com Node.js.

---

**🎓 Repositório educacional demonstrando conceitos fundamentais de desenvolvimento web full-stack com Node.js e tecnologias modernas.**
