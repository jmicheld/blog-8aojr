# ✨ 8AOJR Blog & Utilities Front-End

Uma SPA **React + Vite + Tailwind CSS** criada como trabalho de Front-End Engineering da turma **8AOJR / FIAP**.  
A aplicação combina um _mini-blog_ com vários _widgets_ utilitários (usuário aleatório, números da sorte e palavra do dia) consumindo APIs públicas e um BFF próprio.

> **Por que este repositório existe?**  
> Trabalho para a disciplina de FrontEnd Engineer, ele demonstra integração de **React Hooks**, **React Router** e **fetch API** com Tailwind CSS, além de boas práticas de estrutura de projeto e _tooling_ moderno.

---

## 🎯 Funcionalidades Principais

| Módulo | Descrição |
|--------|-----------|
| **Lista de Posts** | Consome [`https://jsonplaceholder.typicode.com/posts`](https://jsonplaceholder.typicode.com/posts) e exibe os 100 posts paginados de 10 em 10, com botão **Leia +** para a página de detalhes. :contentReference[oaicite:0]{index=0} |
| **Detalhe do Post** | Navegação dinâmica (`/post/:id`) trazendo o post selecionado. :contentReference[oaicite:1]{index=1} |
| **Usuário Aleatório** | Widget que carrega um perfil de [`randomuser.me`](https://randomuser.me) e permite gerar outro usuário com 1 clique. :contentReference[oaicite:2]{index=2} |
| **Números da Sorte** | Chama a API [`https://api-numeros-da-sorte.onrender.com/random`](https://api-numeros-da-sorte.onrender.com/random) e exibe seis números aleatórios (Mega-Sena style). :contentReference[oaicite:3]{index=3} |
| **Palavra do Dia** | No _mount_ da aplicação, faz _fetch_ em `https://fiap-bff-8aojr.onrender.com/ask` para mostrar uma palavra/frase motivacional e inclui botão “Nova palavra”. :contentReference[oaicite:4]{index=4} |
| **Dark UI customizado** | Tailwind é usado via `@import "tailwindcss"` em **src/css/style.css**, que também traz classes personalizadas e animações. :contentReference[oaicite:5]{index=5} |

---

## 🧩 Stack & Ferramentas

- **React 19** / **React Router 7** – SPA e rotas dinâmicas  
- **Vite 6** – _Bundler_ rápido com HMR  
- **Tailwind CSS 4** – Estilização utilitária + custom CSS  
- **ESLint 9** – Linting (rule set básico)  
- **Node ≥ 18** – Requisito mínimo de runtime

_Confira as dependências no `package.json`. :contentReference[oaicite:6]{index=6}_

---

## 🚀 Instalação & Uso

```bash
# 1 – clone o repo
git clone https://github.com/jmicheld/blog-8aojr.git
cd blog-8aojr

# 2 – instale as dependências
npm install              # ou pnpm/yarn

# 3 – ambiente de desenvolvimento
npm run dev              # abre em http://localhost:5173
