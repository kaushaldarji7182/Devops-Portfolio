# 🚀 DevOps Portfolio

A high-performance benchmark styling portfolio for a Senior DevOps Engineer, built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**. This project showcases modern web development practices applied to a DevOps context, featuring a terminal-inspired aesthetic, CI/CD pipeline animations, and a fully responsive design.


## ✨ Features

-   **⚡ High Performance**: Built on Next.js 14 (App Router) for server-side rendering and static optimization.
-   **🎨 Terminal Aesthetic**: Custom dark theme with neon accents, monospace typography, and glassmorphism effects.
-   **🔄 CI/CD Animation**: A custom, responsive pipeline animation visualizing the DevOps lifecycle (Code -> Deploy).
-   **📱 Fully Responsive**: Flawless experience across Mobile, Tablet, and Desktop devices.
-   **📧 Working Contact Form**: Integrated with **Resend** for reliable email delivery with real-time feedback.
-   **📊 Dynamic Metrics**: animated counters for project impact statistics.

## 🛠️ Tech Stack

-   **Framework**: [Next.js 14](https://nextjs.org/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Animations**: [Framer Motion](https://www.framer.com/motion/)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **Email Service**: [Resend](https://resend.com/)
-   **Deployment**: [Vercel](https://vercel.com/)

## 🚀 Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

```
├── app/                  # Next.js App Router
│   ├── api/              # API Routes (Contact form)
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Main landing page
├── components/           # React Components
│   ├── sections/         # Page sections (Hero, Projects, Contact)
│   ├── ui/               # Reusable UI elements (Buttons, Animations)
│   └── layout/           # Global layout (Navbar)
└── public/               # Static assets
```

## 🔐 Environment Variables

To use the contact form, create a `.env.local` file and add your Resend API Key:

```bash
RESEND_API_KEY=re_123456789
```

## 🤝 Contact

**Kaushal Darji** - DevOps Engineer
-   [LinkedIn](https://www.linkedin.com/in/kaushaldarji7182)
-   [GitHub](https://github.com/kaushaldarji7182)
-   Email: kaushaldarji7182@gmail.com
