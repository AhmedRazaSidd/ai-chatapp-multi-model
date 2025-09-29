
# 🤖 AI ChatApp (Multi-Model)

A modern **AI Chat Application** built with **Next.js** that allows users to chat with multiple AI models in one place.  
Supports both **anonymous chatting** and **authenticated sessions** with chat history.  

🌐 **Live Demo**: [ai-chatapp-multi-model.vercel.app](https://ai-chatapp-multi-model.vercel.app/)

<img width="1920" height="872" alt="image" src="https://github.com/user-attachments/assets/918d37ae-a07d-492c-8495-42475070f48d" />

---

## ✨ Features

- 🔄 **Multi-Model Support**  
   - **OpenAI GPT**  
   - **Google Gemini**  
   - **Groq (LLaMA / Mixtral)**  

- 💬 **Chat Functionality**  
   - Anonymous chat (no login required)  
   - Logged-in chat with saved history  

- 🔐 **Authentication**  
   - Firebase Authentication (Google login)  

- 🗂 **Chat History**  
   - Save and retrieve past conversations  
   - User-specific history when logged in  

- 🎨 **Frontend**  
   - Built with **Next.js (App Router)**  
   - Clean and responsive UI  

---

## 🚀 Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/) (React, App Router)  
- **AI Models**:  
  - [OpenAI](https://platform.openai.com/)  
  - [Google Gemini](https://ai.google.dev/)  
  - [Groq](https://groq.com/)  
- **Auth & Database**: [Firebase](https://firebase.google.com/)  
- **Deployment**: [Vercel](https://vercel.com/)  

---

## 🛠 Setup & Installation

1. Clone the repo:  
   ```bash
   git clone https://github.com/your-username/ai-chatapp-multi-model.git
   cd ai-chatapp-multi-model
   ```

2. Install dependencies:  
   ```bash
   npm install
   ```

3. Create a `.env.local` file and add your keys:  
   ```env
   OPENAI_API_KEY=your_openai_key
   GROQ_API_KEY=your_groq_key
   GOOGLE_API_KEY=your_gemini_key
   FIREBASE_API_KEY=your_firebase_key
   FIREBASE_AUTH_DOMAIN=your_firebase_domain
   FIREBASE_PROJECT_ID=your_firebase_project_id
   ```

4. Run the development server:  
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.  

---

## 📌 Roadmap

- [ ] Add more AI models (Anthropic, Mistral)  
- [ ] Add file upload for RAG  
- [ ] Support voice input/output  
- [ ] Advanced analytics for chat history  

---

## 📸 Screenshots  

*(Add your app screenshots here — landing page, chat screen, login flow, etc.)*  

---

## 🙌 Contributing  

Pull requests are welcome! For major changes, please open an issue first.  

---

## 📄 License  

MIT License © 2025  
