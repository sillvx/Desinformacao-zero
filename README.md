# 🛡️ Desinformação Zero

Extensão para **Google Chrome (Manifest V3)** que utiliza a **API Gemini (Google AI)** para detectar possíveis sinais de **desinformação em páginas da web**.

A extensão analisa o conteúdo textual das páginas (parágrafos `<p>`) e destaca trechos suspeitos, ajudando o usuário a navegar de forma mais consciente.

---

## ✨ Funcionalidades

* 🔍 **Análise automática de páginas**: todos os parágrafos são enviados para o Gemini e avaliados.
* ⚠️ **Destaque visual**: trechos considerados suspeitos ficam marcados com fundo vermelho.
* 📌 **Popup interativo**: permite reanalisar a página manualmente.
* 🤖 **IA integrada**: conexão direta com o modelo **Gemini 2.0 Flash** via API Google AI Studio.

---

## 📂 Estrutura do Projeto

```
desinformacao-zero/
│── manifest.json      # Manifesto da extensão (v3)
│── background.js      # Conexão com Gemini (service worker)
│── content.js         # Analisa parágrafos da página
│── popup.html         # Interface do popup
│── popup.js           # Lógica do popup
```

---

## ⚙️ Como usar localmente

1. Clone ou baixe este repositório.
2. Obtenha uma **API Key do Gemini** em [Google AI Studio](https://aistudio.google.com/).
3. No arquivo `background.js`, substitua:

   ```js
   const GEMINI_API_KEY = "SUA_CHAVE_AQUI";
   ```
4. Abra o Chrome e acesse:

   ```
   chrome://extensions/
   ```
5. Ative o **Modo do desenvolvedor**.
6. Clique em **Carregar sem compactação** e selecione a pasta do projeto.
7. Abra qualquer página com texto e veja a análise em ação ✅

---

## 🚀 Publicando na Chrome Web Store

### 1. Preparar o pacote

* Certifique-se que a extensão está funcionando no modo desenvolvedor.
* Verifique se todos os arquivos necessários estão na pasta do projeto.
* Crie um arquivo **.zip** contendo:

  ```
  manifest.json
  background.js
  content.js
  popup.html
  popup.js
  icons/
  ```

### 2. Criar conta de desenvolvedor

* Vá até o [Google Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole).
* Pague a **taxa única de registro** (atualmente US\$5).

### 3. Enviar a extensão

* Clique em **“Adicionar novo item”**.
* Faça upload do arquivo **.zip** da extensão.
* Preencha as informações obrigatórias:

  * Nome e descrição
  * Categoria
  * Idiomas suportados
  * Política de privacidade (se necessário, principalmente por uso de IA)
* Adicione **imagens de divulgação** (prints do popup e exemplos de análise na página).
* Escolha se quer deixar a extensão **pública ou restrita**.

### 4. Revisão do Google

* O Google vai analisar a extensão antes de aprovar.
* Isso pode levar **alguns dias**.
* Se aprovado, o link da extensão ficará público na **Chrome Web Store**.

---

## 🚨 Aviso

* Esta extensão não substitui o **pensamento crítico**.
* O modelo Gemini pode gerar **falsos positivos ou negativos**.
* Use como **apoio** para checar informações, não como verdade absoluta.

---

## 📜 Licença

Este projeto é distribuído sob a licença MIT.
