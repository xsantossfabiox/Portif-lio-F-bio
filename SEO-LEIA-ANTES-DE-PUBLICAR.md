# SEO — Portfólio Fábio Santos

## Antes de publicar (obrigatório)
O domínio público do portfólio ainda não foi informado. Por isso, os arquivos usam o marcador `SEU-DOMINIO.com`. **Não publique sem substituir todas as ocorrências pelo domínio real**, sem `www` ou com `www` de forma consistente.

Substitua o marcador em:
- `index.html` (canonical, Open Graph, Twitter e JSON-LD)
- `robots.txt`
- `sitemap.xml`

Depois, confirme que o site abre em HTTPS e que o endereço canônico escolhido redireciona corretamente. O `.htaccess` aplica redirecionamento HTTPS somente em hospedagens Apache que permitem esse arquivo; em Netlify, Vercel, GitHub Pages ou outro provedor, habilite HTTPS e redirecionamento no painel/configuração do provedor.

## O que foi implementado
- `sitemap.xml` com a URL principal (site de página única).
- `robots.txt` permitindo rastreamento e apontando para o sitemap.
- Remoção de `noindex` caso existisse e inclusão de `index, follow`.
- Canonical, title, meta description, Open Graph e Twitter Card.
- Schema JSON-LD: Person, WebSite e ProfessionalService.
- Um único H1; seções usam H2 e cards/itens usam H3.
- Textos alternativos nas imagens existentes e `decoding=async` em imagens dos cards.
- Links internos para as seções e CTAs existentes.
- Capa Maison D’Or convertida de PNG (~1,7 MB) para WebP (~60 KB).
- Vídeo Maison D’Or recomprimido mantendo resolução 1668×890 e compatibilidade MP4; o arquivo ficou muito menor.
- Imagem Open Graph dedicada `media/og-fabio.jpg` (1200×630).
- CSS já possui breakpoints responsivos; adicionados headers de cache e compressão para Apache via `.htaccess`.

## Limitações que dependem do domínio/contas
- Search Console: exige acesso do proprietário à conta Google e verificação do domínio ou propriedade URL. Depois de publicar, adicione a propriedade, verifique-a, envie `/sitemap.xml` e use “Inspeção de URL” para solicitar indexação.
- HTTPS: o redirecionamento depende da hospedagem; `.htaccess` só funciona em Apache. Ative certificado SSL na hospedagem.
- Backlinks: não foram criados links artificiais. Estratégia recomendada: publicar estudos de caso reais dos projetos, pedir autorização para clientes/parceiros para linkar o trabalho, cadastrar o perfil profissional em diretórios confiáveis e contribuir com artigos úteis. Evite comprar links ou redes de backlinks.
- Indexação não é garantida apenas por metadados/sitemap; o Google decide quando e se indexar.

## Estratégia inicial de backlinks (ética)
1. Publique páginas/cases individuais quando houver conteúdo original suficiente para cada projeto.
2. Peça a negócios atendidos que incluam um link para o seu portfólio quando fizer sentido e com autorização.
3. Adicione o site aos seus perfis profissionais públicos (Instagram, LinkedIn, GitHub e plataformas de portfólio, se mantidos ativos).
4. Publique tutoriais curtos e estudos de caso com problemas, decisões e resultados reais.
5. Monitore no Search Console os links externos, consultas, impressões e páginas indexadas.

## Checklist de validação
- [ ] Trocar `SEU-DOMINIO.com` pelo domínio real.
- [ ] Publicar o site e testar a URL canônica em HTTPS.
- [ ] Confirmar que `https://DOMINIO/robots.txt` e `/sitemap.xml` abrem.
- [ ] Validar os dados estruturados no Rich Results Test e Schema Markup Validator.
- [ ] Verificar propriedade no Search Console e enviar sitemap.
- [ ] Testar Core Web Vitals/PageSpeed Insights em URLs públicas, desktop e celular.
- [ ] Verificar botões WhatsApp/Instagram, vídeos e todas as imagens após publicação.
