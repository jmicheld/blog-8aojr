# ✨ 8AOJR Blog & Utilities Front-End

Este projeto é uma **Single Page Application (SPA)** desenvolvida em **React**, com empacotamento via **Vite** e estilização utilizando **Tailwind CSS**.  
Foi criado como parte do desafio final da disciplina de **Front-End Engineering** do curso de **Análise e Desenvolvimento de Sistemas** da turma **8AOJR - FIAP**.

A aplicação propõe uma experiência moderna de front-end combinando:

- Um **mini-blog**, com listagem de posts e visualização individual via rotas dinâmicas.
- Uma série de **utilitários interativos (widgets)** que consomem APIs públicas e fornecem:
  - Geração de **usuários aleatórios**;
  - Sorteio de **números da sorte**;
  - Exibição de uma **palavra do dia** com botão de atualização.

Além da parte visual, o projeto destaca-se por integrar tecnologias modernas do ecossistema React, boas práticas de componentização e consumo assíncrono de dados, servindo como uma base sólida para aplicações maiores ou projetos de portfólio.

> O código é limpo, modular e 100% client-side, podendo ser facilmente hospedado em plataformas como GitHub Pages, Vercel ou Netlify.
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

## 🗂️ Estrutura de Pastas

A estrutura de pastas do projeto foi organizada para manter clareza, modularidade e escalabilidade. Abaixo, você pode ver a hierarquia principal:
``` bash
blog-8aojr/
├── public/ # Arquivos estáticos acessíveis diretamente
├── src/ # Código-fonte principal
│ ├── components/ # Componentes reutilizáveis (ex: Header, Footer)
│ ├── pages/ # Páginas associadas às rotas (Home.jsx, Post.jsx)
│ ├── css/
│ │ └── style.css # Estilos globais e configurações do Tailwind
│ ├── App.jsx # Configuração de rotas e layout principal
│ └── main.jsx # Ponto de entrada da aplicação React
├── .gitignore # Arquivos e pastas ignorados pelo Git
├── eslint.config.js # Regras de linting (ESLint)
├── tailwind.config.js # Customizações do Tailwind CSS
├── vite.config.js # Configuração do bundler Vite
├── package.json # Gerenciamento de dependências e scripts
└── README.md # Documentação do projeto
```
> Esta estrutura segue boas práticas para aplicações React com Vite e Tailwind CSS, facilitando manutenção e colaboração em equipe.

---

## 📜 Licença

Este projeto é licenciado sob a **Licença MIT**.

Você tem permissão para usar, copiar, modificar, mesclar, publicar, distribuir, sublicenciar e/ou vender cópias do software, desde que mantenha o aviso de direitos autorais original e esta permissão em todas as cópias ou partes substanciais do software.

> O software é fornecido "como está", sem garantias de qualquer tipo, expressas ou implícitas, incluindo, mas não se limitando a garantias de comercialização, adequação a um propósito específico e não violação.

Consulte o arquivo [`LICENSE`](LICENSE) para o texto completo da licença.


---

## 👥 Integrantes do Projeto

Este projeto foi desenvolvido em equipe pelos seguintes alunos da turma **8AOJR** da **FIAP**:

| Nome                           | RM       |
|--------------------------------|----------|
| Alexandre Stivanatto Bechelli | 358238   |
| Jean Michel Deschamps         | 359921   |
| Oswaldo Gomes Moreira         | 359292   |
| Victor Garcia de Souza        | 359807   |

---

<p align="center">
  Trabalho acadêmico da disciplina de Front-End Engineering - FIAP
</p>

## 🚀 Instalação & Uso

```bash
# 1 – clone o repo
git clone https://github.com/jmicheld/blog-8aojr.git
cd blog-8aojr

# 2 – instale as dependências
npm install              # ou pnpm/yarn

# 3 – ambiente de desenvolvimento
npm run dev              # abre em http://localhost:5173
```
