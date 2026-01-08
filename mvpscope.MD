# MVP Scope – Document Processing System

## Overview

A production-ready web application for **immigration document processing** that connects clients with case handlers through AI-assisted workflows.

**Timeline:** 21 days  
**Target:** Functional MVP with core monetization and AI features

---

## Core Value Proposition

1. **Clients** upload immigration documents, receive AI-powered analysis, and answer visa-specific questions
2. **Case Handlers** review submissions, access documents, and manage case workflows
3. **AI** extracts information, answers questions using document context (RAG), and guides users through required questions (tool-calling)

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

## MVP Features (In Scope)

### Authentication & Roles
- [x] Clerk-based sign up / sign in / sign out
- [x] Two roles: `customer` | `case_handler`
- [x] Server-side RBAC enforcement on all endpoints
- [x] Role-based route protection

### Client Dashboard (`/app`)
- [x] Create and manage cases
- [x] Select visa type per case
- [x] Upload documents (PDF, DOCX, TXT)
- [x] View AI analysis results (summary + extracted fields)
- [x] Answer visa-specific questions (interactive Q&A)
- [x] Track case status and progress
- [x] View handler feedback
- [x] Access scheduling (when entitled)
- [x] Manage subscription/billing

### Case Handler Dashboard (`/handler`)
- [x] View all submitted cases
- [x] Filter/search by client, status, visa type
- [x] View case details: analysis, documents, answers
- [x] Download documents via secure presigned URLs
- [x] Actions: "Request more info", "Mark reviewed"
- [x] View client scheduling activity

### Document Processing
- [x] Presigned URL upload to blob storage
- [x] File type validation (PDF, DOCX, TXT)
- [x] File size limits
- [x] Text extraction pipeline
- [x] AI analysis: summary + key fields extraction
- [x] Analysis results stored in database

### AI Features

#### RAG v1 (Retrieval Augmented Generation)
- [x] Document chunking (size + overlap)
- [x] Embeddings generation (batch)
- [x] pgvector storage on Neon
- [x] Similarity search retrieval
- [x] Retrieved context injected into AI prompts
- [x] Source citation in UI ("Sources used" panel)
- [ ] ~~Advanced retrieval strategies~~ (v2)
- [ ] ~~Hybrid search~~ (v2)

#### Tool-Calling v1
- [x] `save_answer` – Store answer linked to user + visa_type + question
- [x] `fetch_next_question` – Get next question from DB
- [x] `fetch_case_context` – Retrieve case information
- [x] `save_case_note` – Add notes to case
- [x] `retrieve_context` – RAG retrieval tool
- [x] `cite_sources` – Source transparency
- [x] Tool execution logging
- [x] Strict authorization (current user/case only)
- [ ] ~~Complex multi-step tool chains~~ (v2)

### Payments

#### Stripe v1
- [x] Subscription model (recurring)
- [x] Stripe Checkout integration
- [x] Webhook handling with signature verification
- [x] Subscription state in database
- [x] Entitlement gating (upload/submit/scheduling)
- [x] Customer portal for billing management
- [ ] ~~One-time payments~~ (v2)
- [ ] ~~Usage-based billing~~ (v2)
- [ ] ~~Multiple plan tiers~~ (v2)

### Workflow & Status
- [x] Case statuses: `draft` → `uploaded` → `analyzed` → `in_progress` → `submitted` → `needs_info` → `reviewed` → `closed`
- [x] Server-validated status transitions
- [x] Audit fields: `status_changed_at`, `status_changed_by_role`
- [x] Autosave answers (debounced)

### Scheduling Access
- [x] External integration (Calendly / Cal.com link/embed)
- [x] Entitlement-gated visibility
- [x] Click tracking
- [x] Handler visibility of scheduling activity
- [ ] ~~Native scheduling system~~ (v2)

---

## Explicit Non-Goals (Out of Scope for MVP)

| Feature | Reason | Target |
|---------|--------|--------|
| Email notifications | Complexity; using in-app banners | v2 |
| Native scheduling | External embed sufficient for MVP | v2 |
| Advanced RAG (hybrid search, reranking) | Simple RAG first | v2 |
| Multi-step tool chains | Basic tools first | v2 |
| Multiple subscription tiers | Single tier for launch | v2 |
| Mobile-native app | Responsive web sufficient | v2+ |
| Multi-language support | English only | v2+ |
| Advanced analytics dashboard | Basic logging only | v2 |
| Document OCR (scanned images) | Require digital PDFs | v2 |
| Batch document upload | Single file per upload | v2 |
| Real-time collaboration | Async workflow | v2+ |

---

## Data Model (Core Entities)

```
users (via Clerk)
├── id, email, role (customer | case_handler)

cases
├── id, user_id, visa_type, status, created_at, updated_at
├── status_changed_at, status_changed_by_role
└── analysis_json

documents
├── id, case_id, storage_key, file_type, file_size
├── uploaded_at, analysis_status
└── extracted_text

questions
├── id, visa_type, order, prompt, answer_type

answers
├── id, case_id, question_id, user_id, visa_type
├── content, created_at, updated_at

embeddings (pgvector)
├── id, document_id, chunk_id, content, embedding

subscriptions
├── id, user_id, stripe_customer_id, stripe_subscription_id
├── status, current_period_end

tool_calls (logging)
├── id, case_id, tool_name, success, timestamp
```

---

## Security Requirements

- [x] All API routes enforce authentication
- [x] RBAC enforced server-side (not just UI)
- [x] Secrets server-only (not in client bundle)
- [x] Presigned URLs short-lived
- [x] Blob storage not publicly listable
- [x] Stripe webhook signature verification
- [x] File type + size validation server-side
- [x] Rate limiting on AI endpoints (basic)
- [x] No PII in logs

---

## Success Criteria (Day 21)

1. **Customer flow works end-to-end:** Sign up → Upload → Analyze → Q&A → Submit
2. **Handler flow works end-to-end:** View cases → Review → Download docs → Update status
3. **Payments gate features correctly:** No active subscription = no upload/submit
4. **RAG answers are grounded:** AI cites retrieved sources, not hallucinations
5. **Tool-calling stores data correctly:** Answers linked to (user_id, case_id, visa_type)
6. **Security audit passes:** Unauthorized access blocked on all endpoints
7. **Production deployment stable:** Zero manual DB edits required for normal operation

---

## CI/CD Notes

- GitHub Actions: install → typecheck → test → biome check
- Vercel preview deployments for PRs
- Production deploys on main branch merge
- Environment isolation: dev / preview / prod

*CI implementation: Day 16*

