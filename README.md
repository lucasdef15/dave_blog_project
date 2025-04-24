# Adjusting the content again to avoid encoding issues

content_adjusted = """

# Dave's Blog Project

Este é um projeto de blog construído com **React 19**, **Vite**, **React Router DOM**, **Axios** e **JSON Server** para simulação de backend. Ele permite criar, editar, deletar e visualizar postagens, funcionando como uma aplicação CRUD completa.

## Tecnologias Utilizadas

- React 19
- React Router DOM v7
- Axios
- JSON Server
- date-fns
- Vite

## Instalação

1. **Clone o repositório:**

```bash
git clone https://github.com/seu-usuario/seu-repo.git
cd dave_blog_project
Instale as dependências:

bash
Sempre exibir os detalhes

Copiar
npm install
Rodando a aplicação
1. Inicie o JSON Server
Certifique-se de que você tem um arquivo db.json na raiz do projeto, com a seguinte estrutura:

json
Sempre exibir os detalhes

Copiar
{
  "posts": []
}
Depois, rode o servidor com:

bash
Sempre exibir os detalhes

Copiar

# start json server
npx json-server -w db.json -p 3500

Isso criará uma API REST fake rodando em http://localhost:3500.

2. Inicie o servidor de desenvolvimento do Vite
Em outro terminal:

bash
Sempre exibir os detalhes

Copiar
npm run dev
A aplicação estará disponível em:
http://localhost:5173

Estrutura do Projeto
nginx
Sempre exibir os detalhes

Copiar
src
├── api             # Configuração do Axios
├── components      # Componentes reutilizáveis
├── context         # Context API (DataContext)
├── hooks           # Hooks customizados (ex: useWindowSize)
├── pages           # Páginas da aplicação
├── App.jsx            # Roteamento principal
└── main.jsx           # Ponto de entrada

Funcionalidades
 Criar post

 Editar post

 Deletar post

 Listar posts

 Buscar por título ou conteúdo

 Responsividade com useWindowSize

Melhorias Futuras
Validações de formulário

Toasts de confirmação

Paginação ou carregamento dinâmico

Login e autenticação com JWT

Feito com amor por [Seu Nome] """

Reattempting PDF creation without encoding issues
pdf = FPDF() pdf.add_page() pdf.set_font("Arial", size=14, style='B') pdf.cell(200, 10, txt="Dave's Blog Project - README", ln=True, align='C')

Add a line break
pdf.ln(10)

Set content font
pdf.set_font("Arial", size=12)

Add the content to the pdf
pdf.multi_cell(0, 10, content_adjusted)

Save the pdf to a file
file_path = "/mnt/data/dave_blog_project_readme_adjusted.pdf" pdf.output(file_path)

file_path
```
