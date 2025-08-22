document.getElementById("scan").addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  document.getElementById("status").innerText = "🔄 Página sendo analisada...";

  // Solicita ao content script o texto da página
  chrome.tabs.sendMessage(tab.id, { type: "getPageText" }, (response) => {
    if (!response || !response.text) {
      document.getElementById("status").innerText = "❌ Não foi possível obter o texto da página.";
      return;
    }

    // Envia o texto para o background para análise
    chrome.runtime.sendMessage({ type: "checkText", text: response.text }, (result) => {
      if (result && typeof result.fake !== "undefined") {
        document.getElementById("status").innerText =
          result.fake
            ? `⚠️ Possível desinformação detectada: ${result.motivo}`
            : `✅ Sem sinais claros de desinformação.`;
      } else {
        document.getElementById("status").innerText = "❌ Erro ao analisar.";
      }
    });
  });
});