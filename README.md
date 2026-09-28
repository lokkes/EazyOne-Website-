# Eazyone Website

Production-ready B2B wholesale apparel website built with Next.js App Router, React, TypeScript, Tailwind CSS, Zod, and the Resend email API.

## Project Structure

```text
src/
|-- app/                         # Routes, metadata, sitemap, robots and API entry points
|   |-- api/order/route.ts       # Wholesale inquiry POST endpoint
|   |-- shop/[slug]/page.tsx     # Product detail route
|   `-- ...                      # Public website pages
|-- backend/                     # Server-only business logic
|   |-- catalog/                 # Product data and image resolution
|   `-- orders/                  # Validation schema and inquiry email delivery
|-- frontend/                    # React page and UI components
|   |-- components/
|   |-- pages/
|   `-- styles/
`-- shared/                      # Constants and types shared across layers
```

- `src/app` registers URLs and connects the frontend to server logic.
- `src/frontend` contains the visible React interface.
- `src/backend` contains catalog and order-processing code that runs on the server.
- `src/shared` contains safe, reusable values used by both frontend and backend code.
- `public/images` contains replaceable website and product photography.

## Local Setup

Use Node.js 20.19 or newer. Then install dependencies and create a local environment file:

```bash
npm install
cp .env.example .env.local
```

For local UI development, the order endpoint works without email credentials and logs only a request ID. To test real email delivery, fill in all three variables in `.env.local`:

```dotenv
RESEND_API_KEY=
ORDER_NOTIFICATION_EMAIL=sales@example.com
ORDER_FROM_EMAIL=Eazyone <quotes@your-verified-domain.com>
NEXT_PUBLIC_SITE_URL=https://eazyoneapparel.com
```

`ORDER_FROM_EMAIL` must use a sender/domain verified in Resend. Never commit `.env.local` or expose the API key to browser code.

`NEXT_PUBLIC_SITE_URL` is optional because the application defaults to `https://eazyoneapparel.com`. Set it in Vercel if you want the deployment configuration to state the canonical domain explicitly.

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quote Flow

The quote form posts JSON to `POST /api/order`. The route validates and normalizes the request, rejects malformed or oversized input, silently handles the spam honeypot, and prevents accidental duplicate submissions in the browser. With email configured, it sends:

1. An internal inquiry email to `ORDER_NOTIFICATION_EMAIL`, with replies directed to the customer.
2. A customer receipt confirming that the inquiry was received and is not yet an order confirmation.

No database, authentication, payment, or order-management service is connected.

## Product Images

Image paths are documented in [`public/images/README.md`](public/images/README.md). Each product supports a default gallery and color-specific galleries. Missing files render the built-in neutral placeholder without making a broken image request.

Product details, colors, sizes, specifications, and image path generation are centralized in `src/backend/catalog/products.ts`.

## Verification

Run all release checks before deployment:

```bash
npm run lint
npm run typecheck
npm run build
```

## Deployment

1. Push the repository to the deployment provider.
2. Set `RESEND_API_KEY`, `ORDER_NOTIFICATION_EMAIL`, and `ORDER_FROM_EMAIL` in the production environment.
3. Confirm the `ORDER_FROM_EMAIL` domain is verified by Resend.
4. Build with `npm run build` and start with `npm run start`, or use the provider's standard Next.js preset.
5. Point `eazyoneapparel.com` at the deployment and verify `/robots.txt`, `/sitemap.xml`, one product page, and one test inquiry.

The canonical production URL defaults to `https://eazyoneapparel.com` and can be configured through `NEXT_PUBLIC_SITE_URL`.
