# Documentação do Projeto: Portfolio Psicólogo

## 1. Visão Geral
Este documento define a estrutura técnica e funcional para o desenvolvimento de um site portfolio. O objetivo é criar uma apresentaçao profissional, acessível e performática, servindo também como modelo reutilizável.

### Objetivos Principais
- Apresentar o profissional, formação e serviços.
- Fornecer prova social através de depoimentos.
- Facilitar o contato e agendamento.
- Garantir acessibilidade (A11y) e boas práticas de SEO.

## 2. Tecnologias
- **Core**: React (v18+)
- **Build Tool**: Vite
- **Estilização**: CSS Vanilla (organizado em `index.css`)
- **Imagens**: Otimização nativa + Lazy Loading
- **Deploy**: Estático (Vercel/Netlify/GitHub Pages)

## 3. Estrutura de Arquivos
A estrutura do projeto deve seguir o padrão abaixo para garantir organização e facilidade de manutenção:

```
/
├── public/              # Arquivos estáticos públicos (favicon, robots.txt)
├── src/
│   ├── assets/          # Imagens e vetores (foto do psicólogo, ícones)
│   ├── components/      # Componentes React reutilizáveis
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Testimonials.jsx
│   │   ├── ContactForm.jsx
│   │   └── Footer.jsx
│   ├── App.jsx          # Componente raiz / Layout principal
│   ├── main.jsx         # Ponto de entrada (ReactDOM)
│   └── index.css        # Estilos globais e dos componentes
├── index.html           # HTML base com meta tags SEO
└── package.json         # Dependências e scripts
```

## 4. Detalhamento dos Componentes

### 4.1 Header (`Header.jsx`)
- **Função**: Navegação principal.
- **Comportamento**: Fixo no topo (sticky).
- **Conteúdo**:
  - Logo/Nome do Profissional.
  - Menu de navegação (Home, Sobre, Serviços, Contato).
- **Responsividade**: Menu horizontal no desktop, menu "hambúrguer" ou simplificado no mobile.
- **Acessibilidade**: `aria-label="Menu principal"`, navegação por teclado.

### 4.2 Hero (`Hero.jsx`)
- **Função**: Primeira impressão e Call-to-Action (CTA).
- **Conteúdo**:
  - Foto profissional de alta qualidade.
  - Headline (Título) impactante.
  - Subtítulo/Breve descrição.
  - Botão "Agendar Consulta" (link para âncora do formulário ou WhatsApp).

### 4.3 About (`About.jsx`)
- **Função**: Gerar conexão e autoridade.
- **Conteúdo**:
  - Bio resumida.
  - Formação acadêmica e especializações.
  - Abordagem terapêutica.

### 4.4 Services (`Services.jsx`)
- **Função**: Listar o que é oferecido.
- **Conteúdo**: Lista de cards ou itens (Terapia Individual, Terapia de Casal, Online, etc.).

### 4.5 Testimonials (`Testimonials.jsx`)
- **Função**: Prova social.
- **Conteúdo**: Citações de pacientes (anonimizados se necessário) com design clean.

### 4.6 ContactForm (`ContactForm.jsx`)
- **Função**: Captação de leads/agendamento.
- **Campos**:
  - Nome (Input text, required).
  - Email (Input email, required).
  - Mensagem (Textarea, required).
- **Feedback**: Mensagens de erro visíveis e mensagem de sucesso após envio.
- **Obs**: Implementação inicial apenas visual/console.log, preparada para API (ex: EmailJS ou Formspree).

### 4.7 Footer (`Footer.jsx`)
- **Função**: Informações legais e contatos secundários.
- **Conteúdo**: Copyright, links para redes sociais, endereço (se houver).

## 5. Estilização e Design (index.css)
- **Cores**: Paleta calmante e profissional (ex: tons de Azul Serenity, Verde Sálvia, Neutros/Off-white).
- **Tipografia**: Legível e moderna (ex: 'Inter', 'Lato' ou 'Open Sans').
- **Layout**: Flexbox e CSS Grid.
- **Responsividade**: Media queries para ajustar layouts de colunas para pilhas (stacks) em mobile.

## 6. Acessibilidade (A11y) Checklist
- [ ] Contraste de cores (WCAG AA).
- [ ] Tags HTML semânticas (`<nav>`, `<main>`, `<section>`, `<footer>`, `<h1>`-`<h6>`).
- [ ] Atributos `alt` descritivos em todas as imagens.
- [ ] Formulários com `<label>` associados aos inputs.
- [ ] Foco visível em elementos interativos.

## 7. SEO Básico
- Título da página (`<title>`) descritivo.
- Meta description preenchida.
- Uso correto de hierarquia de cabeçalhos (um `<h1>` por página).
- Atributos `lang="pt-BR"` no HTML.

## 8. Guia de Instalação e Execução
1. **Instalar dependências**: `npm install`
2. **Rodar servidor de desenvolvimento**: `npm run dev`
3. **Build para produção**: `npm run build`
