# AgroShift Nexus

AgroShift Nexus is a multi-agent decision-support prototype built for the
NASA Space Apps Challenge 2026 by Team Nokkhotro. It is a static web app that
demonstrates how a team of cooperating AI agents, fed by NASA Earth
observations, can recommend climate-resilient crop rotations to farmers and
agricultural advisors.

## Features

- **Multi-page prototype** with smooth client-side route transitions
  (Home, Farmer Dashboard, Technology & Agents, About).
- **Farmer dashboard** with location / soil / size / priority inputs, a
  simulated multi-agent processing view, and a results panel that mirrors
  the reference layout (critical alert, adaptive rotation recommendation,
  local climate, root-zone soil moisture, 3-season rotation, metrics,
  reasoning).
- **Technology & Agents page** explaining the seven specialized agents and
  the NASA datasets they consume (SMAP, GPM/IMERG, MODIS, VIIRS, Landsat,
  SRTM, NASA POWER).
- Tailwind CSS (CDN) + Font Awesome icons + a few custom CSS animations.
- Fully responsive layout, no build step required.

## Project structure

```text
AgroShift-Nexus/
├── index.html              Entry HTML + Tailwind config + global theme
├── styles.css              Bespoke styles (grain, scanline, shimmer, topo, …)
├── app.js                  Hash router + page bootstrapping
├── components.js           Shared Navbar / Footer / Logo
├── data.js                 Agents, NASA datasets, soil types, dummy analysis
├── pages/
│   ├── home.js             Landing page (hero, how-it-works, agents strip)
│   ├── dashboard.js        Farmer Dashboard (inputs, processing, results)
│   ├── agents.js           Technology & Agents page
│   └── about.js            About page (project, team, disclaimer)
├── README.md
└── LICENSE
```

## Run locally

No build step or package installation is required.

1. Open `index.html` directly in a modern browser, **or**
2. Serve the folder with any static server, for example:

   ```powershell
   python -m http.server 8000
   ```

   Then visit `http://localhost:8000`.

The page needs an internet connection when opened because Tailwind CSS,
Font Awesome, and Google Fonts are loaded from external CDNs.

## Demo workflow

1. Open the **Farmer Dashboard** from the navbar (or visit
   `http://localhost:8000/#dashboard`).
2. Optionally edit Location, Soil Type, Farm Size, and Priorities.
3. Click **Run Analysis**.
4. Watch the seven agents light up, then see the recommended 3-season
   rotation, root-zone soil moisture (SMAP), local climate (MODIS),
   critical alerts, and an agent-by-agent reasoning trace.

The numbers and recommendations shown are illustrative. The prototype does
not connect to live NASA APIs, an AI model, a database, or any
agricultural recommendation service.

## NASA data concepts

The interface describes intended use of:

- **SMAP** — soil moisture.
- **GPM / IMERG** — precipitation estimates.
- **MODIS / VIIRS** — NDVI, EVI, land surface temperature.
- **Landsat 8/9** — field boundaries and crop mapping.
- **SRTM** — elevation, slope, aspect.
- **NASA POWER** — climate climatology.

These are represented in the demo UI and are not fetched at runtime.

## Team

AgroShift Nexus is presented by Team Nokkhotro:

- S. H. M. Irfan — Team Leader
- Arafat Mostofa Alif
- Nasor Hidar
- Suhita Srutee
- Md Monjurul Islam
- Saad Ahmed

## License

See `LICENSE` for license details.