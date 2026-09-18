# GeoPhotos

**Capture GeoFS.**

GeoPhotos is an editorial photography archive for GeoFS: submit photographs, pass quality control, receive permanent GP IDs, build a portfolio and compete in curated photography challenges.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Current MVP

The repository includes the complete public-facing MVP experience: home, archive/explore, live client search, photographer directory and portfolios, photo detail pages, competitions, about, and a submission workflow UI. The Prisma schema defines the production data model for accounts, permissions, submissions, QC and permanent photo records.

The sample archive is intentionally local fixture data while production services are connected. Authentication, durable image storage, database-backed QC actions and deployment secrets require external service credentials and are not faked in the repository.

## Product rule

GeoPhotos isn't where screenshots are posted. It's where GeoFS photography is published.
