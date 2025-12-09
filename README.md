# LMC Labs Website

Official website for LMC Labs — premium tech accessories and eBay reseller based in Sydney, Australia.

🌐 **Live:** [lachlancrawford.com.au](https://lachlancrawford.com.au)  
🛒 **eBay:** [ebay.com.au/str/lachlansstore](https://www.ebay.com.au/str/lachlansstore)  
📸 **Instagram:** [@lmc_labs](https://instagram.com/lmc_labs)

## Tech Stack

- **Frontend:** React + TypeScript + Vite + Tailwind CSS
- **Backend:** Node.js + Express + Nodemailer
- **Hosting:** GitHub Pages (frontend), your choice for backend

## Getting Started

### Frontend

```bash
npm install
npm run dev
```

Runs at `http://localhost:5173`

### Backend (Email Notifications)

```bash
cd backend
cp .env.example .env
# Edit .env with your iCloud credentials
npm install
npm start
```

Runs at `http://localhost:3001`

## Environment Variables

### Backend (`backend/.env`)

```
ICLOUD_EMAIL=your-email@lachlancrawford.com.au
ICLOUD_APP_PASSWORD=your-app-specific-password
PORT=3001
FRONTEND_URL=http://localhost:5173
```

### Frontend (Production)

Set `VITE_API_URL` to your deployed backend URL when building.

## Project Structure

```
├── components/          # React components
├── backend/             # Express email server
├── public/              # Static assets (logo, product images)
├── constants.ts         # Business info, products data
├── types.ts             # TypeScript interfaces
└── App.tsx              # Main app component
```

## Features

- Upcoming products showcase with category filtering
- Email notification signup for product launches
- Responsive design
- eBay store integration
- Instagram link

## Deployment

**Frontend:** Push to GitHub, enable GitHub Pages from `dist/` or use GitHub Actions.

**Backend:** Deploy to Railway, Render, Fly.io, or any Node.js host. Update `FRONTEND_URL` for CORS and set `VITE_API_URL` in frontend build.

---

**LMC Labs** · ABN 36 181 184 048 · Sydney, Australia
