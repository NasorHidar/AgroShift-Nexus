// AgroShift Nexus — shared data (no ES modules, attaches to window.ASN)
window.ASN = window.ASN || {};

(function (ASN) {
  const BRAND = {
    name: "AgroShift Nexus",
    tagline: "Climate-smart crop rotation, guided by NASA Earthdata.",
  };

  const NAV_LINKS = [
    { id: "home", label: "Home", icon: "fa-house" },
    { id: "dashboard", label: "Farmer Dashboard", icon: "fa-gauge-high" },
    { id: "agents", label: "Technology & Agents", icon: "fa-microchip" },
    { id: "about", label: "About", icon: "fa-circle-info" },
  ];

  const SOIL_TYPES = [
    { id: "loam", label: "Loam", desc: "Balanced sand/silt/clay — high fertility" },
    { id: "sandy", label: "Sandy", desc: "Fast-draining, low water retention" },
    { id: "clay", label: "Clay", desc: "Heavy, moisture-rich, slow drainage" },
    { id: "silt", label: "Silty", desc: "Smooth, fertile, moderate retention" },
    { id: "peat", label: "Peaty", desc: "Organic-rich, acidic" },
    { id: "chalky", label: "Chalky", desc: "Alkaline, free-draining" },
  ];

  const FARM_GOALS = [
    { id: "yield", label: "Maximize Yield", icon: "fa-arrow-trend-up" },
    { id: "water", label: "Conserve Water", icon: "fa-droplet" },
    { id: "soil",  label: "Restore Soil", icon: "fa-seedling" },
    { id: "risk",  label: "Reduce Climate Risk", icon: "fa-shield-halved" },
    { id: "profit",label: "Higher Income", icon: "fa-coins" },
  ];

  const NASA_DATASETS = [
    { id: "landsat", name: "Landsat 8/9",  full: "Landsat — Operational Land Imager", agency: "NASA / USGS", icon: "fa-satellite", color: "from-emerald-500 to-teal-600", use: "Field boundaries, crop type mapping, change detection." },
    { id: "modis",   name: "MODIS (Terra/Aqua)", full: "Moderate Resolution Imaging Spectroradiometer", agency: "NASA Earth Observing System", icon: "fa-globe", color: "from-lime-500 to-green-600", use: "NDVI/EVI vegetation health, land surface temperature." },
    { id: "viirs",   name: "VIIRS (Suomi NPP / JPSS)", full: "Visible Infrared Imaging Radiometer Suite", agency: "NOAA / NASA", icon: "fa-eye", color: "from-cyan-500 to-emerald-600", use: "Daily NDVI, nighttime lights, active fire detection." },
    { id: "smap",    name: "SMAP", full: "Soil Moisture Active Passive", agency: "NASA Earth Science", icon: "fa-water", color: "from-sky-500 to-blue-600", use: "Root-zone and surface soil moisture every 2–3 days." },
    { id: "gpm",     name: "GPM / IMERG", full: "Global Precipitation Measurement", agency: "NASA / JAXA", icon: "fa-cloud-showers-heavy", color: "from-indigo-500 to-violet-600", use: "Half-hourly global precipitation estimates." },
    { id: "power",   name: "NASA POWER", full: "Prediction of Worldwide Energy Resources", agency: "NASA Langley", icon: "fa-sun", color: "from-amber-500 to-orange-600", use: "Solar, temperature, humidity and rainfall climatology." },
    { id: "srtm",    name: "SRTM", full: "Shuttle Radar Topography Mission", agency: "NASA / NGA", icon: "fa-mountain", color: "from-stone-500 to-zinc-700", use: "30 m global elevation, slope and aspect derivatives." },
  ];

  const AGENTS = [
    { id: "earth", name: "Earth Observation Agent", short: "Earth Obs", icon: "fa-satellite", color: "from-emerald-500 to-teal-600", bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200",
      desc: "Reads satellite imagery to assess current vegetation vigor and field-level change over time.",
      datasets: ["Landsat 8/9", "MODIS", "VIIRS"], inputs: ["NDVI", "EVI", "Land Surface Temperature"], outputs: ["Crop vigor map", "Field change deltas", "Phenology stage"] },
    { id: "water", name: "Water & Soil Agent", short: "Water & Soil", icon: "fa-droplet", color: "from-sky-500 to-blue-600", bg: "bg-sky-50", text: "text-sky-700", border: "border-sky-200",
      desc: "Quantifies soil moisture and rainfall to estimate irrigation needs and water-stress risk.",
      datasets: ["SMAP", "GPM / IMERG"], inputs: ["Root-zone moisture", "Recent precipitation", "Evapotranspiration"], outputs: ["Moisture deficit", "Irrigation window", "Drought stress index"] },
    { id: "climate", name: "Climate Risk Agent", short: "Climate Risk", icon: "fa-cloud-bolt", color: "from-amber-500 to-orange-600", bg: "bg-amber-50", text: "text-amber-700", border: "border-amber-200",
      desc: "Forecasts seasonal hazards (heat, dry spells, heavy rain) and trends that may affect rotation choice.",
      datasets: ["NASA POWER", "GPM / IMERG"], inputs: ["Temperature trends", "Precipitation anomaly", "Extreme-event probability"], outputs: ["Risk score", "Hazard calendar", "Seasonal confidence band"] },
    { id: "terrain", name: "Terrain & Farm Agent", short: "Terrain", icon: "fa-mountain", color: "from-stone-500 to-zinc-700", bg: "bg-stone-50", text: "text-stone-700", border: "border-stone-200",
      desc: "Combines elevation, slope and farmer-provided field information to model land capability.",
      datasets: ["SRTM", "Landsat"], inputs: ["Elevation", "Slope/aspect", "Farm boundary & size"], outputs: ["Capability class", "Erosion risk", "Drainage zones"] },
    { id: "crop", name: "Crop Intelligence Agent", short: "Crop Intel", icon: "fa-seedling", color: "from-lime-500 to-green-600", bg: "bg-lime-50", text: "text-lime-700", border: "border-lime-200",
      desc: "Evaluates which crops fit the field now, and which rotations are agronomically compatible next.",
      datasets: ["Crop knowledge base", "Soil property lookup"], inputs: ["Soil type", "Climate window", "Previous crop"], outputs: ["Crop suitability score", "Rotation compatibility matrix"] },
    { id: "econ", name: "Economic & Preference Agent", short: "Economics", icon: "fa-coins", color: "from-violet-500 to-purple-600", bg: "bg-violet-50", text: "text-violet-700", border: "border-violet-200",
      desc: "Balances farmer priorities — income, water budget, labor and risk — into an economic score.",
      datasets: ["Market price feed", "Farmer profile"],
      inputs: ["Farmer goals", "Market price band", "Resource availability"], outputs: ["Net-return estimate", "Risk-adjusted return", "Preference match"] },
    { id: "orchestrator", name: "Orchestrator Agent", short: "Orchestrator", icon: "fa-network-wired", color: "from-brand-500 to-brand-700", bg: "bg-brand-50", text: "text-brand-700", border: "border-brand-200",
      desc: "Coordinates the other agents, fuses their findings and produces the final crop rotation strategy.",
      datasets: ["All of the above"], inputs: ["Sub-agent reports", "Farmer context"], outputs: ["Ranked rotation plans", "Reasoning summary", "Next-best actions"],
      isOrchestrator: true },
  ];

  function fakeAnalysis({ location, soil, size, goals }) {
    const seed = (location + soil + size + (goals && goals.join("") || "")).length || 7;
    const r = (n) => ((seed * 9301 + n * 49297) % 233280) / 233280;

    const rotation = [
      { season: "Season 1 — Kharif (monsoon)", crop: "Rice (IR-64)", icon: "fa-plant-wilt",
        reason: "Established root systems tolerate current moisture profile from SMAP and GPM.",
        benefit: "Stabilizes yield, utilizes seasonal rainfall." },
      { season: "Season 2 — Rabi (cool)", crop: "Chickpea (legume)", icon: "fa-seedling",
        reason: "Legume restores nitrogen and breaks rice pest cycles; fits NASA POWER temperature band.",
        benefit: "Restores soil nitrogen; reduces fertilizer cost." },
      { season: "Season 3 — Summer", crop: "Sesame (drought-tolerant)", icon: "fa-sun",
        reason: "Climate Risk agent flags dry spell probability; sesame thrives in residual moisture.",
        benefit: "Higher price band, low water need." },
    ];

    return {
      summary: {
        location: location || "Barind Tract, Rajshahi",
        soil: soil || "Loam",
        size: size || "2.4",
        goals: goals && goals.length ? goals : ["yield", "water"],
      },
      weather: {
        today: { temp: 32, cond: "Partly cloudy", icon: "fa-cloud-sun" },
        forecast: [
          { d: "Tomorrow", t: 33, c: "fa-cloud-sun-rain" },
          { d: "Wed",      t: 31, c: "fa-cloud-showers-heavy" },
          { d: "Thu",      t: 29, c: "fa-cloud-showers-heavy" },
          { d: "Fri",      t: 34, c: "fa-sun" },
          { d: "Sat",      t: 36, c: "fa-sun" },
        ],
        heatIndex: "High",
        source: "NASA MODIS LST",
      },
      alerts: [
        { level: "Critical", title: "Flash Flood Watch",
          body: "GPM / IMERG forecasts 90 mm of unseasonal rainfall within 48 hours.",
          icon: "fa-triangle-exclamation",
          action: "Prepare drainage; postpone fertilizer application." },
      ],
      moisture: {
        surface: { pct: 18, label: "Critical", color: "bg-alert-500" },
        root:    { pct: 32, label: "Low",      color: "bg-warn-500" },
        stress:  { pct: 72, label: "High",     color: "bg-alert-500" },
        source: "NASA SMAP",
      },
      rotation,
      metrics: [
        { label: "Soil Health Gain",  value: "+24%", color: "text-brand-600", icon: "fa-seedling" },
        { label: "Water Saved (est.)", value: "31%",  color: "text-sky-600",   icon: "fa-droplet" },
        { label: "Yield Stability",   value: "+18%", color: "text-amber-600", icon: "fa-arrow-trend-up" },
        { label: "Net Return (est.)",  value: "+12%", color: "text-violet-600",icon: "fa-coins" },
      ],
      reasoning: [
        { agent: "Earth Observation", note: "NDVI rebound detected on northern half after recent rainfall." },
        { agent: "Water & Soil",      note: "Root-zone moisture 32% — borderline; favors low-water next crop." },
        { agent: "Climate Risk",      note: "7-day forecast shows dry spell; sesame aligned with window." },
        { agent: "Terrain",           note: "Gentle slope (<3%) — no erosion risk for legume cover." },
        { agent: "Crop Intelligence", note: "Rice → Chickpea → Sesame scores 0.86 compatibility." },
        { agent: "Economics",         note: "Sesame market band +14% YoY; matches profit goal." },
      ],
    };
  }

  ASN.BRAND = BRAND;
  ASN.NAV_LINKS = NAV_LINKS;
  ASN.SOIL_TYPES = SOIL_TYPES;
  ASN.FARM_GOALS = FARM_GOALS;
  ASN.NASA_DATASETS = NASA_DATASETS;
  ASN.AGENTS = AGENTS;
  ASN.fakeAnalysis = fakeAnalysis;
})(window.ASN);