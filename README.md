# 🚀 Beautiful Portfolio

![Vite](https://img.shields.io/badge/Vite-4.0+-purple?logo=vite) ![React](https://img.shields.io/badge/React-19.1.0-blue?logo=react) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.7-38bdf8?logo=tailwindcss) ![License](https://img.shields.io/badge/license-MIT-green)

Um portfólio moderno e responsivo desenvolvido com **React**, **Vite** e **TailwindCSS**. Demonstração de projetos, habilidades, contato e animações visuais para destacar seu perfil profissional.

---

## ✨ Funcionalidades

- 🌌 **Background Animado:** Estrelas e meteoros animados com CSS e React.
- 🌓 **Alternância de Tema:** Modo claro/escuro com persistência local.
- 🧑‍💻 **Seções:** Sobre, Habilidades, Projetos, Contato.
- 📱 **Responsivo:** Layout adaptável para dispositivos móveis e desktop.
- 🔔 **Toast Notification:** Feedback visual ao enviar mensagens.
- 🛠️ **Filtros de Habilidades:** Filtragem dinâmica por categoria.

---

## 🗂️ Estrutura do Projeto

```
src/
  components/        # Componentes reutilizáveis (Navbar, Footer, etc)
  hooks/             # Hooks customizados (use-toast)
  lib/               # Funções utilitárias
  pages/             # Páginas principais (Home, NotFound)
  assets/            # Imagens e SVGs
public/
  projects/          # Imagens dos projetos
```

---

## 🛠️ Instalação

1. **Clone o repositório**

   ```sh
   git clone https://github.com/seuusuario/beautiful-portfolio.git
   cd beautiful-portfolio
   ```

2. **Instale as dependências**

   ```sh
   npm install
   ```

3. **Inicie o servidor de desenvolvimento**

   ```sh
   npm run dev
   ```

4. **Acesse em:** [http://localhost:5173](http://localhost:5173)

---

## 🧩 Lógica e Organização

### 1. 🌠 Background Animado

- O componente [`StarBackground`](src/components/StarBackground.jsx) gera estrelas e meteoros aleatórios usando `useState` e `useEffect`.
- As posições, tamanhos e animações são calculadas dinamicamente para cada estrela/meteoro.

### 2. 🌓 Alternância de Tema

- O componente [`ThemeToggle`](src/components/ThemeToggle.jsx) controla o modo claro/escuro.
- O estado é salvo no `localStorage` e aplicado à `<html>`.

### 3. 🧑‍💼 Navbar e Navegação

- O [`Navbar`](src/components/Navbar.jsx) fixa o menu no topo e adapta para mobile.
- Usa `useState` para abrir/fechar o menu em telas pequenas.

### 4. 🏠 Seções Principais

- **HeroSection:** Saudação animada e chamada para ação.
- **AboutSection:** Breve descrição, experiência e botões de contato/download de CV.
- **SkillsSection:** Lista de habilidades filtráveis por categoria, com barras de progresso animadas.
- **ProjectsSection:** Cards de projetos com links para demo e GitHub.
- **ContactSection:** Formulário de contato com feedback via toast.

### 5. 🔔 Toast Notification

- O hook [`useToast`](src/hooks/use-toast.js) gerencia notificações globais.
- O componente [`Toaster`](src/components/ui/toaster.jsx) exibe os toasts na tela.

---

## 📦 Principais Dependências

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/) (ícones)
- [@radix-ui/react-toast](https://www.radix-ui.com/primitives/docs/components/toast) (notificações)

---

## 📄 Licença

Este projeto está sob licença MIT.

---

## 🙋‍♂️ Contato

- [LinkedIn](https://www.linkedin.com/in/daniel-fernandes1988/)
- Email: pr.danfc88@gmail.com

---

> Feito com 💜 por Daniel Fernandes
