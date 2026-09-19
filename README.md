# GeoPhotos

**Capture GeoFS.**

GeoPhotos is an editorial photography archive for GeoFS: submit photographs, pass quality control, receive permanent GP IDs, build a portfolio and compete in curated photography challenges.

## Local setup

1. `npm install`
2. Copy `.env.example` to `.env` and set a PostgreSQL `DATABASE_URL` plus `AUTH_SECRET`.
3. Add Discord and/or Google OAuth credentials if you want sign-in.
4. `npm run prisma:generate`
5. `npm run db:push`
6. `npm run db:seed`
7. `npm run dev`

Open http://localhost:3000. Check backend connectivity at `/api/health`.

## Backend

The backend provides NextAuth sign-in, Prisma/PostgreSQL persistence, role/permission primitives, authenticated submissions, a permission-protected QC queue, review decisions, and transactionally assigned permanent GP IDs. The GP counter advances only when QC accepts a submission.

Image binary storage is deliberately provider-neutral: submissions store an `imageKey`. Connect S3-compatible storage, Cloudflare R2 or Supabase Storage and place the returned object key there. This avoids pretending local disk uploads are production-safe on serverless hosting.

## API surface

- `GET /api/health`
- `GET /api/photos?q=...`
- `GET|POST /api/submissions` (authenticated)
- `GET /api/qc/queue` (requires `qc.review`)
- `POST /api/qc/:id` (requires `qc.review`)
- `GET|POST /api/auth/*`

## Product rule

GeoPhotos isn't where screenshots are posted. It's where GeoFS photography is published.
