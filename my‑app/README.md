# Document Processing System — MVP

A production-ready web application for **immigration document processing** that connects clients with case handlers through AI-assisted workflows.

**Timeline:** 21 days  
**Target:** Functional MVP with core monetization and AI features

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | Vite + React + TypeScript |
| Routing | TanStack Router |
| Data Fetching | TanStack Query |
| Auth | Clerk |
| Database | Neon (Postgres) |
| AI | Vercel AI SDK |
| File Storage | Azure Blob Storage / S3 |
| Payments | Stripe |
| Linting | Biome |
| Deployment | Vercel |

---

## MVP Scope

### In Scope (v1)

- **Authentication & Roles** — Clerk-based auth with `customer` | `case_handler` roles
- **Client Dashboard** (`/app`) — Create cases, upload documents, view AI analysis, answer questions
- **Handler Dashboard** (`/handler`) — Review cases, download documents, update status
- **Document Processing** — Upload, extract text, AI analysis
- **RAG v1** — Document chunking, embeddings, similarity search, source citations
- **Tool-Calling v1** — `save_answer`, `fetch_next_question`, `fetch_case_context`, `retrieve_context`
- **Stripe v1** — Subscription model, checkout, webhooks, entitlement gating

### Explicit Non-Goals (v2+)

| Feature | Reason |
|---------|--------|
| Email notifications | Using in-app banners for MVP |
| Native scheduling | External embed (Calendly/Cal.com) sufficient |
| Advanced RAG (hybrid search, reranking) | Simple RAG first |
| Multi-step tool chains | Basic tools first |
| Multiple subscription tiers | Single tier for launch |
| Mobile-native app | Responsive web sufficient |
| Multi-language support | English only |
| Document OCR (scanned images) | Require digital PDFs |

---

## Getting Started

```bash
# Install dependencies
bun install

# Run development server
bun run dev

# Format code
bun run format

# Lint & check
bun run check
```

---

## CI/CD Notes

> **CI implementation scheduled for Day 16**

Planned pipeline:
- GitHub Actions: `install → typecheck → test → biome check`
- Vercel preview deployments for PRs
- Production deploys on main branch merge
- Environment isolation: dev / preview / prod

---

## Project Structure

```
src/
├── components/     # Reusable UI components
├── db/             # Database schema & queries
├── lib/            # Utilities (queryClient, api helpers)
├── routes/         # TanStack Router file-based routes
└── server/         # Server-only code (API handlers)
```

---

## Environment Variables

See `.env.example` for required variables.

---

## License

Private — All rights reserved.
