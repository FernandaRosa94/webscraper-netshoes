🕸️ Web Scraper Netshoes
📌 Descrição

Este projeto consiste em um web scraper desenvolvido em Node.js com o objetivo de extrair informações de produtos do site Netshoes.

Os dados coletados incluem:

Título do produto
Preço
Imagem
Descrição (quando disponível)
🚀 Tecnologias utilizadas
Node.js
Puppeteer
⚙️ Como executar o projeto
🔹 1. Clone o repositório
git clone SEU_REPOSITORIO
cd webscraper-netshoes
🔹 2. Instale as dependências
npm install

👉 Isso instalará automaticamente o Puppeteer e demais bibliotecas necessárias.

🔹 3. Execute o scraper
node scraper.js "URL_DO_PRODUTO"
🧪 Exemplo de uso
node scraper.js "https://www.netshoes.com.br/tenis-nike-revolution-6-masculino-preto+branco-2IC-5001-006"
📊 Saída

Os dados extraídos serão exibidos no terminal e também salvos no arquivo:

output.json

Exemplo de saída:

{
  "titulo": "Tênis Nike Revolution 6 Next Nature Feminino - Preto",
  "preco": "R$ 303,99 no Pix",
  "imagem": "https://...",
  "descricao": "Descrição não disponível"
}
⚠️ Observações
O site utiliza carregamento dinâmico (JavaScript), o que pode impactar a extração de alguns dados.
A descrição do produto pode não estar sempre disponível ou pode variar dependendo da estrutura da página.
📁 Estrutura do projeto
webscraper-netshoes/
├── scraper.js
├── package.json
├── package-lock.json
├── output.json
├── README.md
├── Print.png
└── .gitignore

👨‍💻 Autor

Desenvolvido por Fernanda
