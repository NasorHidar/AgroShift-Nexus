# AgroShift Nexus

AgroShift Nexus is a static concept site and interactive demo for a NASA Space Apps Challenge 2026 project. It presents a multi-agent decision-support workflow for climate-resilient crop rotation, combining satellite observations with soil, climate, crop, and economic considerations.

## Features

- Responsive landing page built with semantic HTML.
- Sections covering the challenge, agent architecture, NASA Earthdata, demo workflow, and team.
- Interactive farmer dashboard simulation with progressive agent output.
- User-editable farm location used in the simulated Earth observation output.
- Tailwind CSS utilities loaded from the Tailwind CDN.
- Font Awesome icons loaded from cdnjs.

## Run locally

No build step or package installation is required.

1. Clone or download the repository.
2. Open `index.html` in a modern browser.

For a local HTTP server, use any static server, for example:

```powershell
python -m http.server 8000
```

Then visit `http://localhost:8000` from the project directory.

The page needs an internet connection when opened because Tailwind CSS, Font Awesome, and the demonstration images are loaded from external CDNs.

## Project structure

```text
AgroShift-Nexus/
├── index.html   # Complete single-page site and demo logic
├── README.md    # Project documentation
└── LICENSE      # Project license
```

## Demo workflow

Enter a farm location and select **Run Analysis**. The page simulates these collaborating agents:

1. NASA Earth Observation Agent
2. Soil & Farm Agent
3. Climate Risk Agent
4. Crop Intelligence Agent
5. Economic Preference Agent
6. Orchestrator Agent

The output is illustrative only. The current repository does not connect to live NASA APIs, an AI model, a database, or an agricultural recommendation service.

## NASA data concepts

The interface describes intended use of:

- SMAP for soil-moisture observations.
- GPM/IMERG for precipitation estimates.
- MODIS/VIIRS NDVI for vegetation and crop-health monitoring.

These are represented in the demo UI and are not fetched at runtime.

## Team

AgroShift Nexus is presented by Team Nokkhotro:

- S. H. M. Irfan, Team Leader
- Arafat Mostofa Alif
- Nasor Hidar
- Suhita Srutee
- Md Monjurul Islam
- Saad Ahmed

## License

See [LICENSE](LICENSE) for license details.