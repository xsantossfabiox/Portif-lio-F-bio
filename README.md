# Portfólio — Fábio Santos

Portfólio estático em HTML, CSS e JavaScript, com projetos demonstrativos, vídeos, serviços e contato por WhatsApp.

## Como visualizar localmente
1. Extraia o ZIP.
2. Abra a pasta extraída no VS Code (`Arquivo > Abrir Pasta`).
3. Abra `index.html` com a extensão **Live Server** para visualizar o site.

## Estrutura
- `index.html`: conteúdo, metadados SEO, dados estruturados e seções da página.
- `css/style.css`: identidade visual, breakpoints responsivos e animações.
- `js/script.js`: textos de trajetória, projetos, serviços, links de contato e controles dos vídeos.
- `media/`: imagens, capa social Open Graph e demonstrações em vídeo.
- `robots.txt` e `sitemap.xml`: arquivos de rastreamento para mecanismos de busca.
- `.htaccess`: redirecionamento HTTPS, compressão de texto e cache para hospedagens Apache compatíveis.

Ative HTTPS na hospedagem. O `.htaccess` funciona apenas em hospedagens Apache que permitam `mod_rewrite`; em outras plataformas, configure o redirecionamento no painel do provedor.

## Personalização
- WhatsApp: `WHATSAPP_NUMBER` no início de `js/script.js`, no formato código do país + DDD + número, somente dígitos. Atual: `5521977029756`.
- Instagram: `CONFIG.instagramUrl` em `js/script.js`.
- Projetos, textos e serviços: constantes `ABOUT`, `PROJECTS`, `SERVICES` e `STEPS` em `js/script.js`.
- Cores e layout: variáveis no início de `css/style.css`.
