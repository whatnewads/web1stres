# 1st Response Occupational Health — Project Context

## Stack
- Next.js 14 App Router, TypeScript, Tailwind CSS
- Frontend: Vercel
- Backend: PHP/LAMP on GoDaddy (proxy all requests through Next.js Route Handlers)
- DNS: Cloudflare (DNS only, proxy disabled)

## Rules
- Never expose PHP backend URL to client side
- All forms need: honeypot field, CSRF token, server-side validation
- Log: timestamp UTC, hashed IP, user agent on all form submissions
- SVG icons only, no icon fonts
- next/image for all images, next/font for typography
- generateMetadata() required on every page
- Schema.org JSON-LD required on every page (see spec doc)
