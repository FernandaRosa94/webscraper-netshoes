Web Scraper Netshoes

📌 Descrição

Este projeto tem como objetivo realizar a extração de dados de produtos do site Netshoes utilizando web scraping.

🚀 Tecnologias utilizadas
Node.js
Puppeteer

▶️ Como executar o projeto
Instale as dependências:
npm install
Execute o scraper:
node scraper.js "URL_DO_PRODUTO"

📊 Dados extraídos
Título do produto
Preço
Imagem
Descrição (quando disponível)

📁 Saída

Os dados são salvos no arquivo output.json.

⚠️ Observações

O site utiliza carregamento dinâmico com JavaScript, portanto algumas informações (como descrição) podem não estar sempre disponíveis diretamente no HTML.