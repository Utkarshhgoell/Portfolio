<div align="center">

# Utkarsh Goel — Data Engineer Portfolio

A fast, responsive personal portfolio built with **Vite** and vanilla **HTML, CSS and JavaScript**, with no framework runtime.

![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES%20Modules-F7DF1E?logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-Responsive-1572B6?logo=css3&logoColor=white)
![Deploy](https://img.shields.io/badge/Deploy-Vercel-000000?logo=vercel&logoColor=white)

![Portfolio hero section](portfolio/docs/hero.png)

</div>

---

## About

This is the source code for my personal portfolio. I'm a Business Analytics graduate (Galgotias University, 2026) working toward a career in **Data Engineering**, with hands-on experience in SQL data warehousing, ETL design and dashboards. The site presents my projects, experience and certificates in one page.

## Sections

| Section | What it shows |
| --- | --- |
| **Hero** | Name, role and quick links to my CV, GitHub and LinkedIn, with a glowing horizon-line light effect |
| **About** | Short bio, key numbers, and a looping slideshow of my SQL Medallion Data Warehouse project |
| **Tools** | The stack I work with, labeled by confidence level |
| **Services** | Data warehousing and ETL, analytics and dashboards, web development |
| **Career Journey** | Education, freelance work, job simulations and projects in order |
| **Showcase Projects** | SQL Data Warehouse, a live client website, and an app concept |
| **Certificates & Licenses** | Eight certificates with a click-to-enlarge viewer |
| **Contact** | A Gmail-style message window that sends straight to my inbox through Web3Forms, with an "Open in Gmail" backup link |

## Featured Project

**[SQL Data Warehouse & Analytics Project](https://github.com/Utkarshhgoell/sql-data-warehouse-project)** — an end-to-end SQL Server data warehouse using the Medallion Architecture (Bronze, Silver and Gold layers), from raw CSV ingestion to a star schema ready for reporting.

![Certificates section](portfolio/docs/certs.png)

## Tech Stack

- **Build tool:** [Vite](https://vite.dev) 5
- **Markup and styling:** semantic HTML5 and hand-written CSS (custom properties, grid, `prefers-color-scheme` and `prefers-reduced-motion` support)
- **Scripting:** vanilla JavaScript (ES modules), with no runtime dependencies
- **Images:** WebP for the photo, slideshow and certificates
- **Hosting:** Vercel

## Project Structure

```
.
├── README.md
└── portfolio/                     # The Vite project (Vercel Root Directory)
    ├── index.html                 # Page markup and inline SVG icon sprite
    ├── src/
    │   ├── main.js                # Slideshow, certificate viewer, contact form, hero light
    │   └── style.css              # All styles
    ├── public/
    │   └── assets/
    │       ├── avatar.webp        # Hero photo
    │       ├── logo.webp          # Navigation logo and favicon
    │       ├── Utkarsh_Goel_Resume.pdf
    │       ├── slides/            # Project slideshow images
    │       └── certificates/      # Certificate images
    ├── docs/                      # README screenshots
    ├── vite.config.js
    └── package.json
```

## Getting Started

You need [Node.js](https://nodejs.org) 18 or newer.

```bash
# 1. Clone the repository
git clone https://github.com/Utkarshhgoell/portfolio.git
cd portfolio/portfolio   # the Vite project is in the inner "portfolio" folder

# 2. Install dependencies
npm install

# 3. Start the dev server at http://localhost:5173
npm run dev
```

Other commands:

```bash
npm run build     # Production build into dist/
npm run preview   # Serve the production build locally
```

## Deploy to Vercel

1. Push this repository to GitHub.
2. In [Vercel](https://vercel.com/new), choose **Add New → Project** and import the repository.
3. Confirm the settings Vercel detects:

   | Setting | Value |
   | --- | --- |
   | Root Directory | `portfolio` |
   | Framework Preset | **Vite** |
   | Build Command | `npm run build` |
   | Output Directory | `dist` |
   | Install Command | `npm install` |

4. Click **Deploy**. Every push to the `main` branch redeploys automatically.

## Customizing

- **Text and links:** edit `index.html`.
- **Colors and layout:** edit the CSS custom properties at the top of `src/style.css`.
- **Certificates:** add a WebP image to `public/assets/certificates/`, then add a matching `<button class="cert">` card in the Certificates section of `index.html`.
- **Slideshow:** replace the images in `public/assets/slides/` and update the `<img class="sl">` list.
- **Contact form:** the Web3Forms access key and destination address are constants at the top of the contact code in `src/main.js`. See [Contact form setup](#contact-form-setup).
- **CV:** replace `public/assets/Utkarsh_Goel_Resume.pdf` with the same file name.

## Contact form setup

The contact form sends messages with [Web3Forms](https://web3forms.com), so visitors don't need an email app. Messages arrive in my inbox with the visitor's address as Reply-To.

1. Create a free access key at web3forms.com using the inbox that should receive messages.
2. Put the key in `WEB3FORMS_KEY` in `portfolio/src/main.js`. The key is public by design, since it only delivers to the inbox it was created for.
3. After deploying, add the live site URL in the Web3Forms dashboard if it asks for allowed domains.

The free plan has a monthly submission limit, so check the current limits on their pricing page. If sending fails, the form shows an error and the "Or open in Gmail" link still lets a visitor email me.

## Accessibility and Performance

- Keyboard-focusable controls with visible focus styles
- The auto-playing slideshow pauses on hover or focus and stays still for visitors who prefer reduced motion
- Light and dark theme support
- No runtime JavaScript dependencies, so the production bundle is a few kilobytes

## Contact

- **Email:** [info.utkarshhgoel@gmail.com](mailto:info.utkarshhgoel@gmail.com)
- **LinkedIn:** [linkedin.com/in/utkarshhgoel](https://www.linkedin.com/in/utkarshhgoel)
- **GitHub:** [@Utkarshhgoell](https://github.com/Utkarshhgoell)

## License

The source code is available under the [MIT License](LICENSE). My photo, certificates, resume and project slides are personal content and are **not** covered by this license. Please don't reuse them.
