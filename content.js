function analisarPagina() {
  const paragrafos = document.querySelectorAll("p");

  paragrafos.forEach(p => {
    chrome.runtime.sendMessage({ type: "checkText", text: p.innerText }, (resposta) => {
      if (resposta && resposta.fake) {
        p.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
        p.style.border = "1px solid red";
        p.title = "⚠️ Possível desinformação: " + resposta.motivo;
      }
    });
  });
}

window.addEventListener("load", analisarPagina);

// Adiciona resposta ao popup para enviar o texto da página
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.type === "getPageText") {
    // Junta todos os textos dos parágrafos
    const texto = Array.from(document.querySelectorAll("p"))
      .map(p => p.innerText)
      .join("\n\n");
    sendResponse({ text: texto });
  }
});