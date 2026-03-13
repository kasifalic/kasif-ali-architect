# kasifali.tech

Personal portfolio site for **Kasif Ali** — AI & IT Systems Architect with 10+ years of experience shipping production systems.

**Live:** [kasifali.tech](https://kasifali.tech)

## What's Inside

15 production projects documented as interactive case studies — each with architecture breakdowns, before/after comparisons, key technical decisions, and live screenshots.

Highlights include:
- **$300M+** in enterprise revenue processed through financial analytics platforms
- **21K+** emails AI-classified using GPT-4 pipelines
- **2x GenAI Buildathon Winner** (1st Place, out of 3,497 participants)
- Enterprise systems spanning RAG, agentic AI, GPT-4 Vision, PySpark/Databricks, and identity automation

## Tech Stack

| Layer | Tech |
|-------|------|
| Framework | React 18 + TypeScript + Vite |
| Styling | Tailwind CSS + shadcn/ui + Radix UI |
| Animation | GSAP (ScrollTrigger) + Framer Motion |
| Routing | React Router DOM (SPA with code splitting) |
| Chat | Netlify Functions + OpenAI GPT-4o-mini |
| Contact | Netlify Forms |
| Hosting | Netlify |

## Architecture

```
src/
  components/       # Section components (Hero, Projects, About, Experience, Contact)
  components/chat/  # AI chatbot (useChat hook + UI components)
  data/             # projectsData.ts — all 15 projects with full case study content
  pages/            # Route pages (Index, ProjectArticle, NotFound)
  hooks/            # Custom hooks
  lib/              # Utility functions

netlify/
  functions/        # Serverless functions (chat-response)

scripts/
  generate-portfolio-context.mjs  # Build-time context generator for chatbot
```

### How the Chatbot Works

At build time, `generate-portfolio-context.mjs` parses all project data and personal info into a ~63KB context document. The Netlify Function sends this as a system prompt to GPT-4o-mini with each user question — no vector DB, no embeddings, just full-context prompting. Costs ~$0.002 per question.

## Local Development

```sh
git clone https://github.com/kasifalic/kasif-ali-architect.git
cd kasif-ali-architect
npm install
npm run dev
```

### Environment Variables

For the chatbot to work locally, create `.env.local`:

```
OPENAI_API_KEY=sk-your-key-here
```

## Build

```sh
npm run build
```

This runs the portfolio context generator, then Vite build. Output goes to `dist/`.

## Deployment

Connected to Netlify. Push to `main` triggers auto-deploy. Set `OPENAI_API_KEY` in Netlify environment variables for the chatbot.

## License

This is a personal portfolio. The code structure is open for reference, but project content, images, and copy are proprietary.
