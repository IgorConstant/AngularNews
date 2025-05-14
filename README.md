# 📰 News Angular (Angular + Node.js)

Este projeto é um agregador de notícias focado em **games**, desenvolvido com **Angular 19** no front-end e **Node.js + Cheerio** no back-end. Ele realiza scraping em portais como IGN Brasil e exibe os artigos no front-end com nova sintaxe de controle Angular (`@if`, `@for`).

## ✨ Funcionalidades

- Busca e exibe notícias de múltiplas fontes via scraping
- Layout limpo com Bootstrap
- Utiliza a nova sintaxe de control flow do Angular 17+
- Componente Angular standalone
- API REST com Express

---

## 📦 Tecnologias Utilizadas

### Front-end (Angular)

- Angular 17+
- Bootstrap 5
- HttpClientModule
- Standalone Components
- Nova sintaxe `@if`, `@for` (control flow)

### Back-end (Node.js)

- Node.js
- Express
- Axios
- Cheerio (scraping HTML)

---

## 🚀 Como rodar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/IgorConstant/NewsAngular.git
```

### 2. Instale as dependências do back-end

```bash
cd backend
npm install
```
### 3. Inicie o servidor back-end

```bash
npm start ou pelo depurador do VSCode
```

### 4. Instale as dependências do front-end

```bash
cd frontend
npm install
```

### 5. Inicie o servidor front-end

```bash
ng serve
```
### 6. Acesse o aplicativo
Abra o navegador e acesse `http://localhost:4200` para ver o aplicativo em execução.

### 7. Angular
Para rodar o projeto Angular, você precisará ter o Angular CLI instalado. Caso não tenha, instale-o globalmente:

```bash
npm install -g @angular/cli
```

### 8. Environment
Deve ser criado um arquivo .env na pasta backend com as seguintes variáveis:

```bash
PORT=INSIRA A PORTA QUE DESEJA RODAR O BACKEND
```

---

Esse projeto é somente para fins de aprendizado e demonstração. O scraping de sites deve ser feito com cuidado e respeitando os termos de uso dos mesmos. Sempre verifique as políticas de scraping dos sites que você pretende usar.
