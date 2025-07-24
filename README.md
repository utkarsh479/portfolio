# Utkarsh Khatri – Developer Portfolio 🚀

This is my personal portfolio website built with **React**, **Tailwind CSS**, and **Supabase**. It showcases my skills, projects, certificates, and tech stack in a clean, responsive, and modern design. It is fully dynamic and easy to update through the Supabase backend.

## 🌐 Live Demo

👉 [Visit my Portfolio](https://utkarshtech.vercel.app)

## 📌 Features

- ⚡️ Fast and fully responsive layout
- 🧠 Dynamic project, certificate & tech stack sections (fetched from Supabase)
- 🎓 Modal view for certificates
- 🔧 Built with React + Vite + Tailwind CSS
- ☁️ Deployed on Vercel
- 📄 Easy to customize and maintain

## 🛠️ Tech Stack

- **Frontend**: React, Tailwind CSS, Framer Motion, MUI
- **Backend/Database**: Supabase
- **Deployment**: Vercel

## 📁 Folder Structure

```
/src
│
├── assets            # Static images and assets
├── components        # Reusable components (Navbar, Footer, Cards, etc.)
├── pages             # Sections of the website (Home, About, Contact, etc.)
├── data              # Optional static data (fallback)
├── App.jsx           # Main App
└── main.jsx          # Entry Point
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn

### Installation

```bash
git clone https://github.com/utkarsh479/portfolio.git
cd portfolio
npm install
npm run dev
```

### Configure Supabase

1. Create a project on [Supabase](https://supabase.com/)
2. Add tables:
   - `projects`
   - `certificates`
   - `tech_stack`
3. Update your `supabaseClient.js` with your Supabase URL and API key.

```js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://YOUR_PROJECT.supabase.co';
const supabaseKey = 'YOUR_PUBLIC_ANON_KEY';
export const supabase = createClient(supabaseUrl, supabaseKey);
```

## ✨ Customization

- Update your personal details in the **Hero** and **About** sections.
- Add new projects, certificates, and skills directly via Supabase dashboard.
- Edit theme/colors by tweaking the Tailwind config or classNames.

## 📷 Screenshots

![Portfolio Screenshot](./assets/portfolio-screenshot.png)

## 📬 Connect with Me

- 💼 [LinkedIn](https://www.linkedin.com/in/utkarsh-khatri-1b2959277)
- 💻 [GitHub](https://github.com/utkarsh479)
- 📸 [Instagram](https://www.instagram.com/_utkarsh.kh)
- 📧 khatriutkarsh545@gmail.com

---

### 📄 License

This project is licensed under the MIT License — feel free to use, fork, and customize.
