# Lightning Ridge Area Opal Reserve, Website

## Overview

Pure static HTML site for the Lightning Ridge Area Opal Reserve (LRAOR/LROR). No build step, no framework, no bundler. Every page is a plain `.html` file in a directory-based URL structure. Deploys directly to Cloudflare Pages.

---

## Stack

| Layer | Technology |
|-------|-----------|
| HTML | Pure static `.html` files, directory-based URLs (`/about/index.html` → `/about/`) |
| CSS | Tailwind CSS via Play CDN + `/assets/css/styles.css` for custom overrides |
| JS | Alpine.js v3 via CDN + `/assets/js/main.js` for site-wide behaviour |
| Fonts | Google Fonts, Fraunces (headings) + Inter (body) |
| Forms | Web3Forms (free tier, no backend required) |
| Hosting | Cloudflare Pages |

---

## Running locally

```bash
# Option 1: Python (simplest, recommended)
python3 -m http.server 8080
# then open http://localhost:8080
```

> Note: opening `index.html` directly in a browser (file://) will break root-relative paths like `/assets/css/styles.css`. Always use a local server.

---

## Deployment

```bash
# Deploy to Cloudflare Pages (no build step needed)
wrangler pages deploy . --project-name=lror
```

**Custom domain setup:**
1. In the Cloudflare Pages dashboard, add `lror.org` and `www.lror.org` as custom domains.
2. Set up a 301 redirect from `www.lror.org` → `lror.org` via a Cloudflare redirect rule (Rules → Redirect Rules).

---

## Editing the nav and footer

The nav and footer are copy-pasted into every HTML file (no server-side includes or JS templating, intentional, for simplicity and zero JS dependencies).

When you need to change the nav or footer:

1. Edit `HEADER-FOOTER.html` (the canonical source of truth).
2. Bump the version comment: `<!-- NAV-VERSION: N -->` and `<!-- FOOTER-VERSION: N -->`.
3. Find and replace the old nav/footer block across all `.html` files. Most editors (VS Code, etc.) support multi-file find-and-replace, search for the old block, replace with the new block.

To find pages still on an old nav version:

```bash
grep -r "NAV-VERSION: 1" --include="*.html" .
```

---

## Adding a new page

1. Create the directory: e.g. `mkdir -p /new-section/new-page/`
2. Create `index.html` inside it.
3. Copy the full header and footer from `HEADER-FOOTER.html`.
4. Set the correct active nav link (add `border-b-2 border-brand-ochre` to the relevant `<a>` tag in the nav).
5. Add the new URL to `sitemap.xml`.
6. If the new page replaces an old lror.org URL, add a redirect in `_redirects`.

---

## Forms setup

Forms use [Web3Forms](https://web3forms.com/), free, no account required, just an email address.

**To set up:**
1. Go to https://web3forms.com/
2. Enter `admin@lror.org` (confirm correct address, see TODO below)
3. Copy the generated access key
4. Replace `YOUR_WEB3FORMS_KEY_HERE` in these files:
   - `/contact/index.html`
   - `/resources/documents/index.html` (road maintenance request form)

---

## Stripe setup (for donations)

1. Create or log into a Stripe account at https://stripe.com
2. Go to **Payment Links** and create a link for each donation amount:
   - $25, $50, $100, $250, $500, and a custom-amount link
3. Create two additional project-specific Payment Links:
   - Wandella Shearing Shed restoration
   - Employment role / community program
4. For each Payment Link, set the **success URL** to: `https://lror.org/donate/success/`
5. Replace every `#donate-placeholder` href in `/donate/index.html` with the real Payment Link URLs.

---

## TODO, Outstanding client items

- [ ] **Email address**, Confirm `admin@lror.org` is correct (brief also listed `info@lraor.org`, clarify before setting up Web3Forms)
- [ ] **Postcode**, Confirm 2834 for 4 Nobby Road, Lightning Ridge
- [ ] **DGR / tax-deductible donation status**, Confirm and update the tax deductibility copy in `/donate/index.html`
- [ ] **Acknowledgement of Country wording**, Confirm exact wording with a Yuwaalaraay / Yuwaalayaay / Gamilaraay community representative before launch
- [ ] **Board members**, Confirm all 7 names are current; collect: professional portrait (1:1 square), confirmed role/title, ~100-word bio per member
- [ ] **Staff members**, Supply 2 staff names, roles, photos, and 150–250 word bios
- [ ] **Stripe account**, Set up account and generate all Payment Links (see Stripe setup above)
- [ ] **Photos**, Supply batches for: education programs, research, share farming, machinery, Indigenous youth engagement (written consent required), roads, environmental management
- [ ] **PDFs**, Supply all documents for `/assets/downloads/`: meeting minutes, current licences, policies, Plan of Management
- [ ] **Resources nav**, Confirm whether Tourism / Mining / Contractors / Documents should remain footer-only (current setup) OR be added as a top-level "Resources" nav item (one-line edit per HTML file)
- [ ] **Media coverage**, Supply press article titles, publication names, dates and URLs to seed the Media page
- [ ] **Web3Forms key**, Generate at https://web3forms.com (30 seconds, no account needed) and paste into contact and documents pages
- [ ] **Google Business Profile**, Strongly recommended for local SEO; create at https://business.google.com
- [ ] **Logo**, Supply SVG or hi-res PNG (transparent background) to replace the current placeholder icon
- [ ] **Key stats**, Confirm 4 figures for the home page stat band: years operating, hectares managed, research projects supported, community partners
- [ ] **Privacy Policy and Terms**, Supply documents or pages; link from footer
- [ ] **ABN**, Confirm 22 866 447 410 is current

---

## File structure

```
lightningv2/
├── _redirects                          # Cloudflare Pages redirects (old lror.org URLs)
├── robots.txt
├── sitemap.xml
├── 404.html
├── HEADER-FOOTER.html                  # Canonical nav + footer reference
├── README.md                           # This file
├── IMAGE-BRIEF.md                      # Photography specification sheet
├── PLACEHOLDERS.md                     # Placeholder tracking (replace before launch)
│
├── index.html                          # Home
│
├── what-we-do/
│   ├── index.html                      # What We Do overview
│   ├── wandella/
│   │   └── index.html
│   ├── education-youth-programs/
│   │   └── index.html
│   ├── research-partnerships/
│   │   └── index.html
│   ├── agriculture-share-farming/
│   │   └── index.html
│   ├── land-infrastructure/
│   │   └── index.html
│   └── environmental-management/
│       └── index.html
│
├── about/
│   ├── index.html
│   ├── board/
│   │   └── index.html
│   └── staff/
│       └── index.html
│
├── media/
│   └── index.html
│
├── donate/
│   ├── index.html
│   └── success/
│       └── index.html
│
├── contact/
│   ├── index.html
│   └── thank-you/
│       └── index.html
│
├── resources/
│   ├── tourism/
│   │   └── index.html
│   ├── mining/
│   │   └── index.html
│   ├── contractors/
│   │   └── index.html
│   └── documents/
│       └── index.html
│
└── assets/
    ├── css/
    │   └── styles.css                  # Tailwind overrides, custom tokens
    ├── js/
    │   └── main.js                     # Site-wide JS (Alpine.js helpers, etc.)
    ├── images/
    │   ├── logo.svg                    # TODO: replace with real logo
    │   ├── uploads/                    # Client-supplied photos go here
    │   │   └── portraits/              # Board + staff portraits
    │   └── og/                         # Open Graph preview images
    └── downloads/                      # PDFs and downloadable documents
        ├── minutes/
        ├── licences/
        ├── policies/
        └── plan-of-management.pdf
```
