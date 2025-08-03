# Social Media App

A Mini Linkedin web app built with Node.js (Express, MongoDB) for the backend and React + TypeScript + Vite for the frontend.

## Project Structure

```
.
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── config/
│   ├── .env
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   ├── .env
│   ├── index.html
│   └── vite.config.ts
├── README.md
└── .gitignore
```

## Backend

- **Tech Stack:** Node.js, Express, MongoDB, Mongoose, JWT
- **Features:**
  - User authentication (register, login)
  - Profile management
  - Post creation and retrieval
- **Run locally:**
  1. Install dependencies: `pnpm install`
  2. Set up `.env` with MongoDB URI and JWT secret
  3. Start server: `pnpm run dev` or `node server.js`

## Frontend

- **Tech Stack:** React, TypeScript, Vite, TailwindCSS, DaisyUI
- **Features:**
  - User registration and login
  - View and create posts
  - Profile page
- **Run locally:**
  1. Install dependencies: `pnpm install`
  2. Start dev server: `pnpm run dev`
  3. Access at [http://localhost:5173](http://localhost:5173)

## Environment Variables

Both backend and frontend use `.env` files for configuration. Do not commit secrets to version control.

## Scripts

- **Backend:**  
  - `pnpm run dev` — Start the server
- **Frontend:**  
  - `pnpm run dev` — Start development server  
  - `pnpm run build` — Build for production  
  - `pnpm run preview` — Preview production build
