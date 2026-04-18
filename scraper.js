const puppeteer = require("puppeteer");

class NetshoesScraper {
    async scrape(url) {
        console.log("Abrindo navegador...");

        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();

        console.log("Acessando página...");
        await page.goto(url, { waitUntil: "networkidle2" });

        await new Promise(resolve => setTimeout(resolve, 5000));

        console.log("Esperando título...");
        await page.waitForSelector("h1", { timeout: 10000 });

        console.log("Extraindo dados...");

        await page.waitForSelector('[data-testid="price-current"], [class*="price"]', { timeout: 15000 });

        const data = await page.evaluate(() => {
            const text = (el) => el?.innerText?.trim() || null;
        
            // 🔹 Título
            const titulo = text(document.querySelector("h1"));
        
            // 🔹 Preço (pegar o PRIMEIRO preço válido)
            let preco = null;
            const todosTextos = document.body.innerText.split("\n");
        
            for (let linha of todosTextos) {
                if (linha.includes("R$")) {
                    preco = linha.trim();
                    break;
                }
            }
        
            // 🔹 Imagem (já está funcionando bem)
            let imagem = null;
            const imgs = document.querySelectorAll("img");
        
            imgs.forEach(img => {
                if (
                    img.src.includes("netshoes") &&
                    img.src.includes("produto") &&
                    img.width > 200
                ) {
                    imagem = img.src;
                }
            });
        
            // 🔹 Descrição (procurar bloco com mais conteúdo)
            let descricao = null;

            const divs = document.querySelectorAll("div");

            for (let div of divs) {
                const texto = div.innerText?.trim();

                if (
                    texto &&
                    texto.length > 80 &&
                    !texto.includes("MAIS BUSCAS") &&
                    !texto.includes("VER MAIS")
                ) {
                    descricao = texto;
                    break;
                }
            }

            // fallback final
            if (!descricao) {
                descricao = "Descrição não disponível";
            }
        
            return { titulo, preco, imagem, descricao };
        });

        await browser.close();

        console.log("Finalizado!");
        return data;
    }
}

const url = process.argv[2];

if (!url) {
    console.log("Use: node scraper.js <URL>");
    process.exit();
}

const scraper = new NetshoesScraper();

scraper.scrape(url).then(data => {
    console.log("Resultado:", data);

    const fs = require("fs");
    fs.writeFileSync("output.json", JSON.stringify(data, null, 2));
}).catch(err => {
    console.error("Erro geral:", err);
});