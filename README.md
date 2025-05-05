# Voice-Enabled-Chat-Bot
🎤💬 A powerful Voice-Enabled Chatbot powered by Gemini API with a Messenger-style UI, built using Python EEL + HTML/CSS/JS. Includes speech recognition, text-to-speech replies, and a login system — it's like talking to the future! 🤖🗣️

---

# 🎤 Voice-Enabled Gemini Chatbot with Login – Python EEL + HTML/CSS/JS

This project is an intelligent, **messenger-style chatbot app** powered by **Google's Gemini API**. Built using **Python EEL** with a sleek **HTML/CSS/JS** frontend, it now supports **voice input and output**, creating a complete **voice-to-voice conversation experience**. Also includes a **secure login system** using Python for authentication.

---

## ✨ Features

- 🔐 Login system with hardcoded credentials in Python
- 🤖 Smart, AI-powered conversations via Gemini API
- 🖼️ Beautiful **Messenger-style UI**
- 🎤 **Mic button** for voice input (speech recognition)
- 🔊 **Text-to-speech** responses from the chatbot
- 💬 Works like a real voice-based assistant
- 📦 Lightweight, no heavy dependencies

---

## 🧠 How It Works

1. User logs in using a form (credentials are stored in Python).
2. The chatbot opens with a messenger-style UI.
3. Click the 🎤 mic button to **speak** your question.
4. Your voice is converted to text, sent to Gemini, and the **reply is spoken aloud**.

---

## 🚀 Getting Started

### 1. Clone the Repository
-bash
-git clone https://github.com/your-username/voice-gemini-chatbot.git
-cd voice-gemini-chatbot

---

## 2. Install Required Packages
-pip install eel
-pip install google-generativeai

---

## 3. Add Your Gemini API Key
-Visit the official Gemini website:
-👉 https://ai.google.dev
-Sign in with your Google account
-Create an API key
-Note the API version you're using (e.g., gemini-pro)
-Paste the key in your Python file: genai.configure(api_key="YOUR_API_KEY")

---

## 🧠 Future Improvements (Ideas)
- 🔑 Store login credentials using a database (e.g., SQLite)
- 📊 Save chat history per user
- 🌐 Add support for multiple languages
- 📱 Convert into a standalone desktop/mobile app
