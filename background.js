// ⚠️ Substitua pela sua chave obtida no Google AI Studio
const GEMINI_API_KEY = "AIzaSyDgV64jYJN2VJnxv3VP3sWhtOsYMeeuFsY";
const GEMINI_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.type === "checkText") {
    verificarTextoGemini(msg.text)
      .then(result => sendResponse(result))
      .catch(err => {
        console.error("Erro na API Gemini:", err);
        sendResponse({ fake: false, motivo: "Erro ao verificar" });
      });
    return true; // mantém o canal aberto para resposta assíncrona
  }
});

async function verificarTextoGemini(texto) {
  const prompt = `
Analise o seguinte texto e diga se ele contém possíveis sinais de desinformação.
Responda no formato JSON:
{
  "fake": true/false,
  "motivo": "explicação curta"
}

Texto: """${texto}"""
`;

  const response = await fetch(`${GEMINI_URL}?key=${GEMINI_API_KEY}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [
        {
          parts: [{ text: prompt }]
        }
      ]
    })
  });

  const data = await response.json();

  let output = { fake: false, motivo: "Sem sinais claros de desinformação." };
  try {
    const raw = data.candidates[0].content.parts[0].text;
    const parsed = JSON.parse(raw);
    output = parsed;
  } catch (e) {
    console.warn("Falha ao interpretar resposta do Gemini:", e);
  }

  return output;
}