# Techdawill website

Vite + React + Tailwind. Public pages: Home, Services, Training, About, Contact.
Enquiry form posts to `/api/enquiry` (Vercel serverless function, emails via Resend).

## Deploy to Vercel
1. Push this folder to a GitHub repo, then Vercel -> Add New -> Project -> import it (framework: Vite, auto-detected).
2. Project Settings -> Environment Variables, add:
   - `RESEND_API_KEY`  (from resend.com)
   - `ENQUIRY_TO_EMAIL` (where enquiries are delivered; comma-separate for several)
   - `ENQUIRY_FROM_EMAIL` (optional; needs a Resend-verified domain, defaults to onboarding@resend.dev)
3. Redeploy. Add the custom domain later under Settings -> Domains.

Local: `npm install && npm run dev`  (the form needs `vercel dev` to test /api/enquiry)
