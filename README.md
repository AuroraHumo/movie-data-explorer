# 🎬 MOVIE EXPLORER APP

## 📖 Description

**Movie Explorer** is a dynamic React web application that allows users to explore upcoming movies from TheMovieDB API, view detailed movie information, and access cast information through modals.
It features **infinite scroll**, user **authentication with Firebase**, and component-level **unit testing** using **Vitest**.

The app is built with **Vite + TypeScript**, **Tailwind CSS**, and makes use of **React Query** for data fetching and caching.

## 🌐 Live Preview (Soon)

> Will be deployed on [Vercel](https://vercel.com) 🚀

## 🛠 Tech Stack

- React + Vite
- TypeScript
- Tailwind CSS
- React Router DOM
- Firebase Authentication (via SDK)
- Supabase (optional backend support)
- TheMovieDB API (Bearer Token-based)
- React Query (for infinite scroll)
- Vitest + Testing Library

---

## ✨ Features

- 🔍 Browse upcoming movies from TMDB
- 🎬 Detailed movie cards: title, release date, genres, and rating
- 🎭 Expandable movie cards with modals for cast information
- 🔐 User registration and login (Firebase Auth)
- ♾️ Infinite scroll using React Query + IntersectionObserver
- ✅ Unit tests for components using Vitest

---

## 📋 Requirements

Before running the project locally, make sure you have installed:

- Node.js (v16 or newer recommended)
- npm (comes with Node)
- A modern browser (Chrome, Firefox...)

---

## ⚙️ Installation

```bash
git clone https://github.com/AuroraHumo/movie-explorer-app
cd movie-explorer-app
npm install
```

---

## 🚀 Running the App

```bash
npm run dev
```

This will start the app on [http://localhost:5173](http://localhost:5173)

---

## 🔑 Environment Variables

Create a `.env` file in the root of your project with the following values:

```env
# TheMovieDB API
VITE_TMDB_API_KEY=Bearer YOUR_TMDB_ACCESS_TOKEN

# Firebase Auth
VITE_FIREBASE_API_KEY=YOUR_FIREBASE_API_KEY
VITE_FIREBASE_AUTH_DOMAIN=YOUR_FIREBASE_AUTH_DOMAIN
VITE_FIREBASE_PROJECT_ID=YOUR_FIREBASE_PROJECT_ID
VITE_FIREBASE_STORAGE_BUCKET=YOUR_FIREBASE_STORAGE_BUCKET
VITE_FIREBASE_MESSAGING_SENDER_ID=YOUR_SENDER_ID
VITE_FIREBASE_APP_ID=YOUR_APP_ID

# Supabase (optional)
VITE_SUPABASE_URL=https://your-supabase-url.supabase.co
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

> 🔐 Never commit `.env` files to version control.

---

## 🧪 Running Tests

```bash
npx vitest run
```

Or launch the interactive test UI:

```bash
npx vitest --ui
```

Unit tests use **Vitest** and **React Testing Library** with mocks for real-world scenarios.

---

## 🧪 Test Example

```tsx
// Example: check if movie title and cast render correctly
expect(await screen.findByText("Leonardo DiCaprio")).toBeInTheDocument();
expect(await screen.findByText((_, el) => el?.textContent?.includes("Cobb"))).toBeInTheDocument();
```

---


## 🤝 Contributing

Pull requests are welcome!

```bash
git checkout -b feature/my-feature
git commit -m "Add: my feature"
git push origin feature/my-feature
```

Then open a pull request ✨

---

## 👤 Author

Built with ☕  and Tailwind by **Carles Casallachs**

- GitHub: [@AuroraHumo](https://github.com/AuroraHumo)
