# Placeholders, Replace Before Launch

Every placeholder in the site is marked with a `<!-- TODO-CLIENT: ... -->` comment in the HTML. This file tracks all of them by category so nothing gets missed before go-live.

---

## How to find all placeholders

```bash
# List every placeholder, grouped by file
grep -r "TODO-CLIENT" --include="*.html" . | sort

# Count remaining placeholders
grep -r "TODO-CLIENT" --include="*.html" . | wc -l
```

---

## Images (Unsplash placeholders → client photos)

All images sourced from `images.unsplash.com` must be replaced with client-supplied photos before launch. See `IMAGE-BRIEF.md` for full specifications.

| Page | Image description | Replacement needed |
|------|------------------|--------------------|
| `index.html` | Hero background | Wide opal fields / outback landscape (2880 × 1620 px) |
| `index.html` | Wandella spotlight | Wandella farmhouse exterior or interior |
| `index.html` | Highlight card: education | Students at Wandella or Narran River (consent required) |
| `index.html` | Highlight card: environmental | Hudson Pear / outback landscape |
| `index.html` | Highlight card: infrastructure | Road through opal fields (Grawin Front Road) |
| `what-we-do/index.html` | 6 card images (one per program) | See IMAGE-BRIEF.md for each |
| `what-we-do/wandella/index.html` | 2–3 inline images | Wandella farmhouse, shearing shed |
| `what-we-do/education-youth-programs/index.html` | 2 inline images | Students, river activity |
| `what-we-do/research-partnerships/index.html` | 2 inline images | Narran River wide, researchers in field |
| `what-we-do/agriculture-share-farming/index.html` | 2 inline images | Cropping / farming, tractor |
| `what-we-do/land-infrastructure/index.html` | 2 inline images | Roads (before/after if available) |
| `what-we-do/environmental-management/index.html` | 2 inline images | Hudson Pear before treatment, landscape |
| `about/board/index.html` | 7 portraits | One 1:1 portrait per board member |
| `about/staff/index.html` | 2 portraits | One 1:1 portrait per staff member |
| `donate/index.html` | 2 project images | Wandella shearing shed, employment/community |

---

## Logo

- [ ] Replace placeholder icon in header and footer with the real SVG logo
- Target file: `/assets/images/logo.svg` (or `logo.png` with transparent background)
- Used in: **every page** (copy into each `<header>` and `<footer>` block)

---

## Text and content

| Item | File(s) | Notes |
|------|---------|-------|
| Board member roles | `about/board/index.html` | 7 members, all need confirmed titles (e.g. Chair, Deputy Chair, Secretary, Treasurer, Director) |
| Board member bios | `about/board/index.html` | ~100 words per member |
| Staff names | `about/staff/index.html` | 2 staff members |
| Staff roles | `about/staff/index.html` | Confirmed job titles |
| Staff bios | `about/staff/index.html` | 150–250 words per staff member |
| Key stats (4 figures) | `index.html` | Years operating / hectares managed / research projects supported / community partners |
| Email address | `contact/index.html`, footer (all pages) | Confirm: `admin@lror.org` or `info@lraor.org` |
| Postcode | All pages (footer) | Confirm 2834 for 4 Nobby Road, Lightning Ridge |
| ABN | All pages (footer) | Confirm 22 866 447 410 is current |
| DGR / tax-deductibility note | `donate/index.html` | Update once DGR status confirmed |
| Acknowledgement of Country | All pages (footer) | Confirm exact wording with Yuwaalaraay / Yuwaalayaay / Gamilaraay community representative |
| Privacy Policy link | All pages (footer) | Supply PDF or URL |
| Terms link | All pages (footer) | Supply PDF or URL |
| Board meeting frequency | `about/board/index.html` | Confirm (e.g. quarterly, bi-monthly) |
| Plan of Management adoption date | `resources/documents/index.html` | Confirm year/date |
| Independent review details | `resources/mining/index.html` | Supply reviewer name, year, outcome summary |
| Media coverage, URLs | `media/index.html` | 5 press articles need real links (not `#`) |
| Media coverage, dates | `media/index.html` | Confirm / correct publication dates |

---

## Forms

| Item | File | Action |
|------|------|--------|
| Web3Forms access key | `contact/index.html` | Go to https://web3forms.com, enter admin email, copy key, replace `YOUR_WEB3FORMS_KEY_HERE` |
| Web3Forms access key | `resources/documents/index.html` | Same key as above |

---

## Stripe / Donations

All `#donate-placeholder` href values in `/donate/index.html` must be replaced with real Stripe Payment Link URLs.

| Item | File | Action |
|------|------|--------|
| $25 donation link | `donate/index.html` | Create Stripe Payment Link → set success URL to `https://lror.org/donate/success/` |
| $50 donation link | `donate/index.html` | As above |
| $100 donation link | `donate/index.html` | As above |
| $250 donation link | `donate/index.html` | As above |
| $500 donation link | `donate/index.html` | As above |
| Custom amount link | `donate/index.html` | As above (enable "customer chooses price" in Stripe) |
| Wandella Shed project link | `donate/index.html` | Separate project-specific Payment Link |
| Employment Role project link | `donate/index.html` | Separate project-specific Payment Link |

---

## PDFs (upload to `/assets/downloads/`)

| Document | Referenced in | Target path |
|----------|--------------|-------------|
| Meeting minutes (all years) | `resources/documents/index.html` | `/assets/downloads/minutes/YYYY-MM-DD-minutes.pdf` |
| Current licences | `resources/documents/index.html` | `/assets/downloads/licences/` |
| Policies | `resources/documents/index.html` | `/assets/downloads/policies/` |
| Plan of Management | `resources/documents/index.html` | `/assets/downloads/plan-of-management.pdf` |
| Annual Report | `media/index.html` | `/assets/downloads/annual-report.pdf` |
| Fact Sheet | `media/index.html` | `/assets/downloads/fact-sheet.pdf` |
| Media Kit | `media/index.html` | `/assets/downloads/media-kit.pdf` |

---

## Partner logos (text placeholders → logo images)

The home page partners strip currently displays organisation names as text. Replace with actual logo images (SVG or PNG, transparent background) once supplied by the client or sourced from each organisation's press kit.

| Organisation | Notes |
|-------------|-------|
| Crown Lands NSW | |
| NSW Resources Regulator | |
| Walgett Shire Council | |
| UNSW | |
| University of Sydney | |
| Hands on Learning | |
| Lightning Ridge Central School | |
| Castlereagh Macquarie County Council | |
| NSW DPIRD | |
| Local Land Services | |

Logo files should go in `/assets/images/partners/` using the naming pattern `partner-organisation-name.svg`.

---

## Pre-launch checklist summary

- [ ] All Unsplash images replaced with client photos
- [ ] Logo added to header and footer across all pages
- [ ] All 7 board member details complete (role, bio, portrait)
- [ ] All 2 staff member details complete (role, bio, portrait)
- [ ] Key stats confirmed and updated on home page
- [ ] Email address confirmed and Web3Forms key generated
- [ ] Postcode and ABN confirmed in footer
- [ ] DGR/tax status confirmed and donate page updated
- [ ] Acknowledgement of Country wording signed off
- [ ] Privacy Policy and Terms linked from footer
- [ ] Stripe Payment Links created and all `#donate-placeholder` hrefs replaced
- [ ] All PDFs uploaded to `/assets/downloads/`
- [ ] Press article URLs and dates confirmed on Media page
- [ ] Partner logos replaced (or decision made to keep text)
- [ ] `sitemap.xml` `<lastmod>` dates updated
- [ ] Google Business Profile created
- [ ] Test contact form submission end-to-end
- [ ] Test road maintenance form submission end-to-end
- [ ] Test a Stripe Payment Link donation end-to-end (use Stripe test mode first)
- [ ] Cross-browser check: Chrome, Firefox, Safari, mobile
