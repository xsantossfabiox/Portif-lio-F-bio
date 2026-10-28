/* =========================================================
   CONFIGURAÇÃO — edite apenas esta área para personalizar
   ========================================================= */

// WhatsApp: código do país + DDD + número, só dígitos. Ex.: 5521999998888
const WHATSAPP_NUMBER = "5521977029756";

// Mensagens que abrem preenchidas no WhatsApp (a chave é usada em data-wa="..." no HTML)
const MESSAGES = {
  geral: "Olá, Fábio! Conheci seu portfólio e gostaria de conversar sobre um projeto. Você poderia me passar algumas informações e um orçamento?",
  projeto: "Olá, Fábio! Vi seus projetos e tenho interesse em criar um site para o meu negócio. Gostaria de saber como funciona e solicitar um orçamento.",
  cardapio: "Olá, Fábio! Tenho interesse em criar um cardápio digital para meu negócio. Gostaria de saber como funciona e solicitar um orçamento."
};

const CONFIG = {
  instagramUrl: "https://instagram.com/fabio.webdev"
};

// Seção "Trajetória"
const ABOUT = {
  paragraphs: [
    "Meu nome é Fábio Santos e estou construindo minha trajetória na tecnologia. Atualmente curso Análise e Desenvolvimento de Sistemas, e a faculdade é só uma parte do caminho: estudo programação todos os dias e transformo o que aprendo em projetos próprios.",
    "Comecei a desenvolver sites para negócios perto de mim e percebi como a tecnologia pode ajudar pequenos empreendedores a apresentar melhor seus serviços. Um bom site organiza o que o negócio oferece e facilita o primeiro contato com o cliente.",
    "Quero continuar evoluindo tecnicamente, construir soluções úteis e trabalhar com pessoas que têm ideias e negócios para colocar de pé."
  ],
  values: [
    ["Curiosidade", "Gosto de entender como as coisas funcionam antes de construí-las."],
    ["Dedicação", "Cada projeto é uma chance de aprender e entregar algo melhor."],
    ["Soluções práticas", "Tecnologia a serviço do que o negócio realmente precisa."]
  ]
};

/* Projetos — campos de cada item:
   name, category, badge (selo opcional), description, details (texto extra opcional)
   gallery: lista de { src, alt } (várias imagens)  |  image: uma imagem só
   video: vídeo extra do card (opcional)
   url: endereço do site PUBLICADO (deixe "" se ainda não existe -> mostra "Link em breve")
   anchor: link interno (ex.: "#app-encomendas") usado quando não há url
   tech: só tecnologias que você realmente usou */
const PROJECTS = [
  {
    name: "Aurora Hair Studio",
    category: "Site demonstrativo · Salão de beleza",
    badge: "Projeto conceitual",
    description: "Site demonstrativo para um salão de beleza fictício, especializado em cabelos, criado para mostrar minhas habilidades em criação de sites. Slogan: “Seu cabelo, sua melhor versão.” O Aurora Hair Studio não é um cliente real.",
    gallery: [
      { src: "media/aurora-inicio.jpg", alt: "Tela inicial do Aurora Hair Studio no celular, com apresentação da marca e botão de agendamento pelo WhatsApp" },
      { src: "media/aurora-servicos.jpg", alt: "Seção de serviços do Aurora Hair Studio com cartões de corte feminino e escova modelada e preços ilustrativos" },
      { src: "media/aurora-depoimentos.jpg", alt: "Seção de depoimentos do Aurora Hair Studio, identificados como exemplos ilustrativos" }
    ],
    palette: ["#F4DCE0", "#E8D3C6", "#FFF8F4", "#7A5648", "#C98393"],
    features: [
      "Apresentação da marca e dos serviços",
      "Catálogo de procedimentos com preços ilustrativos",
      "Galeria visual de cabelos",
      "Depoimentos demonstrativos, identificados como fictícios",
      "Navegação entre as seções",
      "Botão de contato pelo WhatsApp",
      "Layout responsivo para celulares e computadores",
      "Identidade visual própria em tons rosados e neutros"
    ],
    url: "", // SUBSTITUIR quando o site estiver publicado
    anchor: "#aurora-demo",
    anchorLabel: "Ver demonstração em vídeo",
    tech: [],
    details: ""
  },
  {
    name: "Aplicativo de controle de encomendas",
    category: "Aplicativo para celular",
    description: "Aplicativo para organizar e acompanhar encomendas: cadastro, busca por cliente, código ou bairro, separação entre em aberto e entregues, agrupamento por região e destaque para prazos. Interface pensada para o celular.",
    image: "media/demo-capa.jpg",
    imageAlt: "Tela inicial do aplicativo de controle de encomendas, com contadores de atrasadas, hoje ou amanhã e em aberto",
    portrait: true,
    anchor: "#app-encomendas",
    anchorLabel: "Ver demonstração em vídeo",
    url: "",
    tech: [],
    details: ""
  },
  {
    name: "Maison D’Or — Cardápio digital",
    category: "Cardápio digital · Restaurante",
    badge: "Projeto demonstrativo",
    description: "Cardápio digital conceitual para um restaurante de gastronomia contemporânea. Apresenta pratos, descrições e preços em uma interface elegante, com categorias para facilitar a navegação e layout adaptado a celulares e computadores.",
    image: "media/maison-dor-capa.webp",
    imageAlt: "Página inicial do site Maison D’Or, restaurante de gastronomia contemporânea",
    anchor: "#cardapio-demo",
    anchorLabel: "Ver demonstração em vídeo",
    url: "",
    tech: [],
    details: ""
  }
];

// Serviços: [título, descrição, desenho do ícone (path SVG)]
const SERVICES = [
  ["Sites institucionais", "Apresente sua empresa, seus serviços e seus canais de contato em um site claro e profissional.", "M3 5h18v14H3zM3 9h18"],
  ["Cardápios digitais", "Cardápio acessível pelo celular, organizado por categorias e fácil de atualizar.", "M6 3h12v18H6zM9 8h6M9 12h6M9 16h4"],
  ["Páginas para autônomos", "Uma página própria para mostrar seu trabalho e receber contatos de novos clientes.", "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4 21c0-4 4-6 8-6s8 2 8 6"],
  ["Landing pages", "Páginas focadas em divulgar um serviço ou produto e levar o visitante a entrar em contato.", "M4 20V10M10 20V4M16 20v-8M22 20H2"],
  ["Soluções de administração", "Aplicativos para organizar encomendas, pedidos e prazos, avaliando juntos o que faz sentido construir para o seu negócio.", "M14 7l3-3 3 3-3 3zM3 21l4-1 11-11-3-3L4 17z"],
  ["Recursos personalizados", "Avaliamos melhorias e funcionalidades extras que façam sentido para o seu negócio, com escopo combinado antes do desenvolvimento.", "M12 3v3M12 18v3M3 12h3M18 12h3M5.64 5.64l2.12 2.12M16.24 16.24l2.12 2.12M18.36 5.64l-2.12 2.12M7.76 16.24l-2.12 2.12M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"]
];

// Processo de trabalho: [título, descrição]
const STEPS = [
  ["Conversa inicial", "Entendo o seu negócio e o que você precisa."],
  ["Planejamento", "Definimos as funcionalidades, o conteúdo e o escopo."],
  ["Desenvolvimento", "Construo a solução alinhada ao que foi combinado."],
  ["Entrega", "Apresento o projeto e explico como utilizá-lo, conforme o escopo contratado."]
];

/* =========================================================
   LÓGICA — normalmente não precisa editar daqui para baixo
   ========================================================= */
const $ = (s) => document.querySelector(s);

// Cria elementos: el("div", {class:"x", text:"oi"}, [filhos])
const el = (tag, props = {}, kids = []) => {
  const n = document.createElement(tag);
  Object.entries(props).forEach(([k, v]) => (k === "text" ? (n.textContent = v) : n.setAttribute(k, v)));
  kids.forEach((k) => n.append(k));
  return n;
};

// ---- WhatsApp ----
function waLink(key) {
  const msg = MESSAGES[key] || MESSAGES.geral;
  return "https://wa.me/" + WHATSAPP_NUMBER.replace(/\D/g, "") + "?text=" + encodeURIComponent(msg);
}
document.querySelectorAll("[data-wa]").forEach((a) => {
  a.href = waLink(a.dataset.wa);
  a.target = "_blank";
  a.rel = "noopener noreferrer";
});
if (WHATSAPP_NUMBER === "5500000000000") console.warn("Configure WHATSAPP_NUMBER no início do script.");

$("#ig").href = CONFIG.instagramUrl;
$("#year").textContent = new Date().getFullYear();

// ---- Menu móvel ----
const menu = $("#menu"), nav = $("#nav");
const setMenu = (open) => {
  nav.classList.toggle("open", open);
  menu.setAttribute("aria-expanded", String(open));
  menu.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
};
menu.addEventListener("click", () => setMenu(!nav.classList.contains("open")));
nav.addEventListener("click", (e) => e.target.closest("a") && setMenu(false));
document.addEventListener("keydown", (e) => e.key === "Escape" && setMenu(false));

// ---- Trajetória ----
ABOUT.paragraphs.forEach((t) => $("#about-text").append(el("p", { text: t })));
ABOUT.values.forEach(([h, p]) => $("#vals").append(el("div", {}, [el("h3", { text: h }), el("p", { text: p })])));

// ---- Projetos ----
PROJECTS.forEach((p, i) => {
  // Área visual: galeria, imagem única ou aviso
  let shot;
  if (p.gallery && p.gallery.length) {
    shot = el("div", { class: "shot gallery", style: "aspect-ratio:auto" });
    p.gallery.forEach((g) => shot.append(el("figure", {}, [el("img", { src: g.src, alt: g.alt, loading: "lazy", decoding: "async" })])));
  } else if (p.image) {
    shot = el("div", { class: "shot", style: p.portrait ? "aspect-ratio:auto;background:#0e1d24;padding:1rem" : "" });
    const img = el("img", { src: p.image, alt: p.imageAlt || "Captura de tela do projeto " + p.name, loading: "lazy", decoding: "async" });
    if (p.portrait) img.setAttribute("style", "width:auto;height:auto;max-height:420px;border-radius:18px;margin-inline:auto");
    shot.append(img);
  } else {
    shot = el("div", { class: "shot" });
    shot.append(el("div", { class: "ph" }, [
      el("strong", { text: "Imagem em breve" }),
      el("span", { text: "Defina PROJECTS[" + i + "].image em js/script.js" })
    ]));
  }

  const info = el("div", { class: "info" });
  if (p.badge) info.append(el("span", { class: "badge", text: p.badge }));
  info.append(el("span", { class: "cat", text: p.category }), el("h3", { text: p.name }), el("p", { text: p.description }));

  if (p.palette) {
    const pal = el("div", { class: "palette" }, [el("span", { text: "Paleta:" })]);
    p.palette.forEach((c) => pal.append(el("i", { style: "background:" + c, title: c })));
    info.append(pal);
  }
  if (p.features) {
    const ul = el("ul", { class: "fine", style: "padding-left:1.1rem;display:grid;gap:.15rem" });
    p.features.forEach((f) => ul.append(el("li", { text: f })));
    info.append(ul);
  }
  if (p.tech.length) info.append(el("div", { class: "tags" }, p.tech.map((t) => el("span", { text: t }))));

  const acts = el("div", { class: "acts" });

  // Botão principal: site publicado, link interno ou "Link em breve"
  if (p.url) {
    acts.append(el("a", { class: "btn btn-gold", href: p.url, target: "_blank", rel: "noopener noreferrer", text: "Ver projeto" }));
  } else if (p.anchor) {
    acts.append(el("a", { class: "btn btn-gold", href: p.anchor, text: p.anchorLabel || "Ver mais" }));
  } else {
    acts.append(el("a", { class: "btn btn-gold", "aria-disabled": "true", text: "Link em breve" }));
  }

  // Texto extra opcional
  if (p.details) {
    const d = el("p", { class: "detail", id: "det" + i, text: p.details });
    const b = el("button", { class: "btn btn-ghost", type: "button", "aria-expanded": "false", "aria-controls": "det" + i, text: "Ver detalhes" });
    b.addEventListener("click", () => {
      const o = d.classList.toggle("open");
      b.setAttribute("aria-expanded", String(o));
      b.textContent = o ? "Ocultar detalhes" : "Ver detalhes";
    });
    acts.append(b);
    info.append(d);
  }

  // Vídeo extra do card (Aurora): só carrega ao clicar
  if (p.video) {
    const box = el("div", { class: "mini-video", id: "mv" + i });
    const v = el("video", { controls: "", playsinline: "", preload: "none", "aria-label": "Demonstração em vídeo do " + p.name });
    v.append(el("source", { src: p.video, type: "video/mp4" }));
    box.append(v);
    const b = el("button", { class: "btn btn-ghost", type: "button", "aria-expanded": "false", "aria-controls": "mv" + i, text: "Ver demonstração em vídeo" });
    b.addEventListener("click", () => {
      const o = box.classList.toggle("open");
      b.setAttribute("aria-expanded", String(o));
      b.textContent = o ? "Fechar vídeo" : "Ver demonstração em vídeo";
      if (o) { v.preload = "metadata"; v.load(); } else v.pause();
    });
    acts.append(b);
    info.append(box);
  }

  info.append(acts);
  $("#projects").append(el("article", { class: "card" }, [shot, info]));
});

// ---- Serviços e processo ----
const NS = "http://www.w3.org/2000/svg";
SERVICES.forEach(([h, p, d]) => {
  const svg = document.createElementNS(NS, "svg");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("aria-hidden", "true");
  const path = document.createElementNS(NS, "path");
  path.setAttribute("d", d);
  svg.append(path);
  $("#services").append(el("div", { class: "svc" }, [svg, el("h3", { text: h }), el("p", { text: p })]));
});
STEPS.forEach(([h, p]) => $("#steps").append(el("li", {}, [el("h3", { text: h }), el("p", { text: p })])));

// ---- Vídeo do app de encomendas ----
// Toca sem som quando visível, pausa fora da tela, tem botão pausar/reproduzir e fallback.
(function () {
  const v = $("#vid"), box = $("#vbox"), fall = $("#vfall"), fail = $("#vfail"), pb = $("#vpause");
  v.muted = true; // necessário para o autoplay funcionar nos navegadores

  let userPaused = false, visible = false;
  const play = () => {
    if (userPaused || !visible) return;
    const r = v.play();
    if (r && r.catch) r.catch(() => fall.classList.add("show")); // autoplay bloqueado
  };

  v.addEventListener("playing", () => fall.classList.remove("show"));

  // Falha ao carregar: o erro de <source> não chega no <video>, então ouvimos o último <source>
  const showFail = () => { fail.classList.add("show"); $("#vctl").hidden = true; fall.classList.remove("show"); };
  v.addEventListener("error", showFail);
  const src = v.querySelector("source");
  if (src) src.addEventListener("error", showFail);

  if ("IntersectionObserver" in window) {
    new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      if (visible) { v.preload = "auto"; play(); } else v.pause();
    }, { threshold: 0.4 }).observe(box);
  } else { visible = true; play(); }

  $("#vplay").addEventListener("click", () => { userPaused = false; visible = true; v.play(); });

  pb.addEventListener("click", () => {
    userPaused = !userPaused;
    if (userPaused) v.pause(); else play();
    pb.textContent = userPaused ? "Reproduzir" : "Pausar";
    pb.setAttribute("aria-pressed", String(userPaused));
  });
})();


// ---- Tela cheia: players independentes (Aurora e app de encomendas) ----
document.querySelectorAll("[data-fullscreen]").forEach((button) => {
  button.addEventListener("click", async () => {
    const target = document.getElementById(button.dataset.fullscreen);
    const video = target && target.querySelector("video");
    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
      } else if (target && target.requestFullscreen) {
        await target.requestFullscreen();
      } else if (video && typeof video.webkitEnterFullscreen === "function") {
        // Safari/iOS pode oferecer tela cheia diretamente no vídeo.
        video.webkitEnterFullscreen();
      } else if (video && video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
      } else {
        // Fallback: controles nativos continuam disponíveis e o vídeo pode ser ampliado pelo navegador.
        video?.focus();
        if (video) video.controls = true;
        button.textContent = "Use os controles do vídeo";
      }
    } catch (error) {
      if (video) video.controls = true;
      button.title = "Se a tela cheia não estiver disponível, use os controles do vídeo.";
    }
  });
});

const auroraVideo = document.getElementById("aurora-vid");
if (auroraVideo) {
  const auroraError = document.querySelector(".aurora-player .video-error");
  auroraVideo.addEventListener("error", () => { if (auroraError) auroraError.hidden = false; });
  const source = auroraVideo.querySelector("source");
  source?.addEventListener("error", () => { if (auroraError) auroraError.hidden = false; });
}
