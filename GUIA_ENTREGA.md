# Guia de Entrega e Hospedagem (O que ninguém te conta)

Este guia foi criado para te ajudar a entregar o projeto de forma profissional, seja para um cliente leigo ou para quem já tem infraestrutura.

---

## 1. Onde Hospedar? (O Segredo do Dev)

Para sites estáticos como este (React + Vite), você NÃO deve usar hospedagens compartilhadas antigas (tipo Hostgator/Locaweb PHP) se quiser performance. O segredo é usar **hospedagem de borda (Edge Computing)**.

### Opção A: Vercel ou Netlify (A Melhor Experiência)
São as plataformas onde o React "mora".
*   **Vantagem:** Grátis para projetos pequenos/médios, SSL (cadeado) automático, deploy via GitHub ou arrastando a pasta.
*   **Custo:** R$ 0,00 (Plano Hobby).
*   **Ideal para:** Sites de portfólio e profissionais liberais.

### Opção B: Hostinger (Para Clientes Tradicionais)
Se o cliente faz questão de um "painel de controle" e quer pagar anual.
*   **Vantagem:** Barato, suporte em português, inclui e-mail profissional (contato@psicologo.com.br).
*   **Custo:** Aprox. R$ 15,00/mês.

---

## 2. Domínios (.com.br vs .com)

Nunca compre o domínio para o cliente no seu CPF. Oriente ele a criar a conta.

*   **Registro.br:** O único lugar oficial para domínios `.com.br`. É mais barato (R$ 40/ano) e você evita intermediários que cobram taxas em cima.
*   **Namecheap ou Cloudflare:** Melhores para domínios `.com`.

---

## 3. Como Entregar para o Cliente (3 Níveis)

### Nível 1: O Cliente "Mãos Limpas" (Você faz tudo)
Você cobra uma **Taxa de Configuração/Setup** (ex: R$ 300,00). 
1.  Crie uma conta no nome do cliente na Vercel.
2.  Conecte o domínio dele no Registro.br usando o **DNS** da Vercel.
3.  Entregue o site pronto e o login dessas plataformas.

### Nível 2: A Entrega do Arquivo (ZIP)
Se o cliente tem um TI ou outro dev.
1.  Rode o comando `npm run build`.
2.  Isso vai criar uma pasta chamada `dist`.
3.  Compacte a pasta `dist` (não envie a pasta `node_modules`!). Explique que são os arquivos estáticos prontos para produção.

### Nível 3: O Entrega Profissional (GitHub)
O padrão ouro.
1.  Crie um repositório privado no GitHub.
2.  Suba o código completo.
3.  Convide o cliente como colaborador.
4.  Conecte o GitHub à Vercel. (Toda vez que você mudar um código, o site atualiza sozinho).

---

## 4. O "Pulo do Gato": O que cobrar depois?

Não entregue o site e suma. Ofereça **Manutenção Preventiva**:
*   **O que é:** Atualização de textos, verificação de formulários, backup de segurança e renovação de domínio.
*   **Quanto cobrar:** R$ 100,00 a R$ 350,00 por mês (Recorrência!).

---

## 5. Checklist de Entrega Final
- [ ] Imagens comprimidas (TinyPNG).
- [ ] Favicon configurado (o ícone da aba do navegador).
- [ ] SEO configurado no `index.html`.
- [ ] Botão do WhatsApp testado em celular real.
- [ ] Página 404 configurada (para quando o cliente errar o link).

---

**Dica Extra:** Se o cliente for MUITO leigo, grave um vídeo curto (5 min) usando o **Loom** ou celular mesmo, mostrando como ele acessa o e-mail dele e como o site aparece no Google. Isso gera um valor percebido enorme!
