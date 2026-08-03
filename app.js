(function () {
  "use strict";

  const picker = document.getElementById("game-picker");
  const detail = document.getElementById("game-detail");
  const emptyState = document.getElementById("empty-state");
  const searchInput = document.getElementById("search-input");
  const toast = document.getElementById("toast");
  const searchBar = document.querySelector(".search-bar");
  const hero = document.querySelector(".hero");

  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add("show");
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => toast.classList.remove("show"), 1400);
  }

  function copyToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    }
    // fallback para contextos sem HTTPS (ex: abrindo o arquivo direto no navegador)
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand("copy"); } catch (e) { /* silencioso */ }
    document.body.removeChild(ta);
    return Promise.resolve();
  }

  // Monta o HTML de uma imagem de capa, com plano B pro emoji se a imagem falhar
  function coverImgHtml(game, className) {
    if (!game.cover) return `<span class="${className} emoji-fallback">${game.emoji || "🎮"}</span>`;
    return `<img
      class="${className}"
      src="${game.cover}"
      alt="Capa de ${game.name}"
      loading="lazy"
      onerror="this.outerHTML = '<span class=&quot;${className} emoji-fallback&quot;>${game.emoji || "🎮"}</span>'"
    >`;
  }

  function renderGamePicker(filter) {
    const term = (filter || "").trim().toLowerCase();
    const games = GAMES.filter(g => g.name.toLowerCase().includes(term));

    picker.innerHTML = "";
    emptyState.hidden = games.length !== 0;

    games.forEach(game => {
      const active = game.codes.filter(c => c.status === "ativo").length;
      const card = document.createElement("a");
      card.className = "game-card";
      card.href = "#/jogo/" + game.slug;
      card.style.setProperty("--accent", game.color || "#3FA9FF");
      card.setAttribute("aria-label", "Ver códigos de " + game.name);
      card.innerHTML = `
        ${coverImgHtml(game, "card-cover")}
        <h3>${game.name}</h3>
        <p class="tagline">${game.tagline || ""}</p>
        <div class="meta">
          <span class="count-pill">${active} código${active === 1 ? "" : "s"} ativo${active === 1 ? "" : "s"}</span>
          <span>Atualizado em ${game.lastUpdated}</span>
        </div>
      `;
      picker.appendChild(card);
    });
  }

  function renderGameDetail(slug) {
    const game = GAMES.find(g => g.slug === slug);
    if (!game) {
      // jogo não encontrado nesse link — volta pra lista
      location.hash = "";
      return;
    }

    picker.hidden = true;
    searchBar.hidden = true;
    hero.hidden = true;
    emptyState.hidden = true;
    detail.hidden = false;
    detail.style.setProperty("--accent", game.color || "#3FA9FF");

    const activeCodes = game.codes.filter(c => c.status === "ativo");
    const expiredCodes = game.codes.filter(c => c.status === "expirado");

    detail.innerHTML = `
      <a class="back-link" href="#">&larr; Todos os jogos</a>

      <div class="detail-head">
        ${coverImgHtml(game, "detail-cover")}
        <div>
          <h2>${game.name}</h2>
          <p class="tagline">${game.tagline || ""}</p>
        </div>
      </div>

      <div class="detail-links">
        ${game.robloxUrl ? `<a href="${game.robloxUrl}" target="_blank" rel="noopener">Jogar no Roblox</a>` : ""}
        ${game.discordUrl ? `<a href="${game.discordUrl}" target="_blank" rel="noopener">Discord oficial</a>` : ""}
      </div>
      <p class="updated-note">Lista de códigos atualizada em ${game.lastUpdated}. Toque num código para copiar.</p>

      <h4 class="section-label">Códigos ativos</h4>
      <div class="code-grid" id="active-grid"></div>

      ${expiredCodes.length ? `
        <h4 class="section-label">Códigos expirados</h4>
        <div class="code-grid" id="expired-grid"></div>
      ` : ""}

      ${game.howTo && game.howTo.length ? `
        <h4 class="section-label">Como resgatar</h4>
        <div class="howto">
          <ol>${game.howTo.map(step => `<li>${step}</li>`).join("")}</ol>
        </div>
      ` : ""}
    `;

    renderCodeGrid(document.getElementById("active-grid"), activeCodes, true);
    if (expiredCodes.length) {
      renderCodeGrid(document.getElementById("expired-grid"), expiredCodes, false);
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function renderCodeGrid(container, codes, clickable) {
    codes.forEach(c => {
      const card = document.createElement("button");
      card.className = "code-card" + (clickable ? "" : " expired");
      card.disabled = !clickable;
      card.innerHTML = `
        ${c.novo ? '<span class="badge">NOVO</span>' : ""}
        ${!clickable ? '<span class="badge expired-badge">EXPIRADO</span>' : ""}
        <span class="studs"><span></span><span></span><span></span><span></span></span>
        <span class="code-row">
          <span class="code-text">${c.code}</span>
          <span class="copy-hint">${clickable ? "toque p/ copiar" : "não funciona mais"}</span>
        </span>
        <p class="reward">${c.reward}</p>
      `;
      if (clickable) {
        card.addEventListener("click", () => {
          copyToClipboard(c.code);
          card.classList.add("copied");
          const hint = card.querySelector(".copy-hint");
          hint.textContent = "copiado!";
          showToast(`Código "${c.code}" copiado`);
          setTimeout(() => {
            card.classList.remove("copied");
            hint.textContent = "toque p/ copiar";
          }, 1400);
        });
      }
      container.appendChild(card);
    });
  }

  function showList() {
    detail.hidden = true;
    detail.innerHTML = "";
    picker.hidden = false;
    searchBar.hidden = false;
    hero.hidden = false;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Roteador simples baseado no hash da URL:
  //   #                    -> lista de jogos
  //   #/jogo/<slug>        -> página do jogo
  function renderFromHash() {
    const hash = location.hash; // ex: "#/jogo/blox-fruits"
    const match = hash.match(/^#\/jogo\/([a-z0-9-]+)$/i);
    if (match) {
      renderGameDetail(match[1]);
    } else {
      showList();
    }
  }

  searchInput.addEventListener("input", (e) => renderGamePicker(e.target.value));
  window.addEventListener("hashchange", renderFromHash);

  renderGamePicker("");
  renderFromHash(); // respeita o link se a página já abrir direto em #/jogo/...
})();
