window.ASN = window.ASN || {};
(function (ASN) {
  const SOIL_TYPES = ASN.SOIL_TYPES;
  const FARM_GOALS = ASN.FARM_GOALS;
  const AGENTS = ASN.AGENTS;
  const fakeAnalysis = ASN.fakeAnalysis;

  // Per-mount state for the dashboard
  let selectedGoals = new Set(["yield", "water"]);

  function DashboardPage() {
    return `
    <section class="bg-grain border-b border-ink-200">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        <div class="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p class="text-sm font-semibold uppercase tracking-wider text-brand-700">Farmer's AI Assistant</p>
            <h1 class="mt-2 font-display text-3xl sm:text-4xl font-extrabold text-ink-900">Turn predictive intelligence into proactive adaptation.</h1>
          </div>
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-ink-200 shadow-card text-sm">
            <i class="fa-solid fa-location-dot text-alert-500"></i>
            <select id="locSelect" class="bg-transparent text-ink-900 font-medium focus:outline-none">
              <option>Barind Tract, Rajshahi</option>
              <option>Thar Desert, Sindh</option>
              <option>Pampas, Buenos Aires</option>
              <option>Inland Niger Delta</option>
            </select>
            <i class="fa-solid fa-chevron-down text-xs text-ink-400"></i>
          </div>
        </div>
      </div>
    </section>

    <section class="py-10">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">

        <div id="inputPanel" class="rounded-2xl bg-white border border-ink-200 shadow-card p-5 sm:p-6">
          <div class="flex items-center justify-between gap-3 mb-4">
            <h2 class="font-display text-lg font-bold text-ink-900 flex items-center gap-2">
              <i class="fa-solid fa-sliders text-brand-600"></i>
              Field parameters
            </h2>
            <span class="text-xs font-medium px-2 py-1 rounded-full bg-brand-50 text-brand-700 border border-brand-200">Step 1 · Inputs</span>
          </div>

          <div class="grid gap-5 md:grid-cols-3">
            <div>
              <label class="text-xs font-semibold text-ink-900 uppercase tracking-wider">Location</label>
              <div class="mt-2 relative">
                <i class="fa-solid fa-map-pin absolute left-3 top-1/2 -translate-y-1/2 text-alert-500"></i>
                <input id="inLocation" type="text" value="Barind Tract, Rajshahi"
                       class="w-full pl-9 pr-3 py-2.5 rounded-lg border border-ink-200 bg-ink-50 focus:bg-white focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none text-sm" />
              </div>
              <p class="mt-1.5 text-xs text-ink-500">GPS, district, or farm name.</p>
            </div>

            <div>
              <label class="text-xs font-semibold text-ink-900 uppercase tracking-wider">Soil type</label>
              <div class="mt-2 relative">
                <i class="fa-solid fa-mound absolute left-3 top-1/2 -translate-y-1/2 text-soil-600"></i>
                <select id="inSoil" class="w-full pl-9 pr-3 py-2.5 rounded-lg border border-ink-200 bg-ink-50 focus:bg-white focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none text-sm appearance-none">
                  ${SOIL_TYPES.map(s => `<option value="${s.id}" ${s.id === 'loam' ? 'selected' : ''}>${s.label} — ${s.desc}</option>`).join('')}
                </select>
                <i class="fa-solid fa-chevron-down absolute right-3 top-1/2 -translate-y-1/2 text-xs text-ink-400 pointer-events-none"></i>
              </div>
              <p class="mt-1.5 text-xs text-ink-500">From local soil survey or in-field test.</p>
            </div>

            <div>
              <label class="text-xs font-semibold text-ink-900 uppercase tracking-wider">Farm size</label>
              <div class="mt-2 flex items-center gap-3">
                <input id="inSize" type="range" min="0.2" max="20" step="0.1" value="2.4"
                       class="brand-range w-full" style="--val: 12%" />
                <span id="sizeLabel" class="text-sm font-semibold text-ink-900 tabular-nums w-20 text-right">2.4 ha</span>
              </div>
              <p class="mt-1.5 text-xs text-ink-500">Hectares · controls how much of the plan is shown.</p>
            </div>
          </div>

          <div class="mt-5">
            <label class="text-xs font-semibold text-ink-900 uppercase tracking-wider">Priorities</label>
            <div class="mt-2 flex flex-wrap gap-2">
              ${FARM_GOALS.map(g => `
                <button data-goal="${g.id}"
                        class="goal-chip group inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium border transition
                        ${selectedGoals.has(g.id)
                          ? 'bg-brand-600 text-white border-brand-600 shadow-sm'
                          : 'bg-white text-ink-700 border-ink-200 hover:border-brand-300 hover:text-brand-700'}">
                  <i class="fa-solid ${g.icon} text-xs"></i>
                  ${g.label}
                </button>
              `).join('')}
            </div>
          </div>

          <div class="mt-6 flex flex-wrap items-center justify-between gap-3">
            <p class="text-xs text-ink-500 flex items-center gap-2">
              <i class="fa-solid fa-shield-halved text-brand-600"></i>
              Data stays on this prototype. No personal data is sent.
            </p>
            <button id="runBtn"
                    class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold shadow-card hover:shadow-cardHover transition focus-ring">
              <i class="fa-solid fa-play"></i>
              Run Analysis
            </button>
          </div>
        </div>

        <div id="resultsArea" class="space-y-6"></div>

      </div>
    </section>
    `;
  }

  function bindDashboardEvents() {
    const sizeInput = document.getElementById("inSize");
    const sizeLabel = document.getElementById("sizeLabel");
    if (sizeInput && sizeLabel) {
      const update = () => {
        const v = parseFloat(sizeInput.value);
        const pct = ((v - 0.2) / (20 - 0.2)) * 100;
        sizeInput.style.setProperty("--val", pct + "%");
        sizeLabel.textContent = `${v.toFixed(1)} ha`;
      };
      update();
      sizeInput.addEventListener("input", update);
    }

    document.querySelectorAll(".goal-chip").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-goal");
        if (selectedGoals.has(id)) selectedGoals.delete(id); else selectedGoals.add(id);
        const isOn = selectedGoals.has(id);
        btn.className = `goal-chip group inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium border transition
          ${isOn
            ? 'bg-brand-600 text-white border-brand-600 shadow-sm'
            : 'bg-white text-ink-700 border-ink-200 hover:border-brand-300 hover:text-brand-700'}`;
      });
    });

    const runBtn = document.getElementById("runBtn");
    if (runBtn) {
      runBtn.addEventListener("click", () => {
        const location = document.getElementById("inLocation").value.trim();
        const soil = document.getElementById("inSoil").value;
        const size = parseFloat(document.getElementById("inSize").value);
        const goals = Array.from(selectedGoals);
        const out = document.getElementById("resultsArea");
        out.innerHTML = renderProcessing();
        runAgentSequence(out, () => {
          const r = fakeAnalysis({ location, soil, size, goals });
          out.innerHTML = renderResults(r);
        });
      });
    }
  }

  function renderProcessing() {
    return `
    <div class="rounded-2xl bg-white border border-ink-200 shadow-card p-6 lg:p-8">
      <div class="flex items-center justify-between">
        <div>
          <p class="text-xs font-semibold uppercase tracking-wider text-brand-700">Step 2 · Multi-agent analysis</p>
          <h2 class="font-display text-xl font-bold text-ink-900 mt-1">Agents are collaborating…</h2>
        </div>
        <div class="hidden sm:flex items-center gap-2 text-xs text-ink-500">
          <span class="relative flex h-2 w-2">
            <span class="absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75 animate-ping"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
          </span>
          Live
        </div>
      </div>

      <div class="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3" id="agentGrid">
        ${AGENTS.map((a, i) => `
          <div class="agent-step rounded-xl border border-ink-200 bg-ink-50 p-4" data-i="${i}">
            <div class="flex items-center gap-3">
              <div class="relative">
                <div class="h-10 w-10 rounded-lg bg-gradient-to-br ${a.color} grid place-items-center text-white">
                  <i class="fa-solid ${a.icon}"></i>
                </div>
                <span class="absolute -inset-1 rounded-xl ring-1 ring-brand-300 opacity-0"></span>
              </div>
              <div>
                <p class="font-semibold text-ink-900 text-sm">${a.short}</p>
                <p class="text-xs text-ink-500">${a.isOrchestrator ? 'Synthesizing' : 'Querying datasets…'}</p>
              </div>
              <span class="ml-auto step-status text-xs font-medium text-ink-400" data-status>queued</span>
            </div>
            <div class="mt-3 h-1.5 rounded-full bg-ink-200 overflow-hidden">
              <div class="step-bar h-full bg-gradient-to-r ${a.color} bar-fill" style="width:0%"></div>
            </div>
          </div>
        `).join('')}
      </div>

      <div class="mt-6 rounded-xl bg-ink-50 border border-ink-200 p-4">
        <p class="text-xs font-semibold uppercase tracking-wider text-ink-500">Orchestrator log</p>
        <ol id="orchLog" class="mt-2 space-y-1.5 text-sm text-ink-700 font-mono"></ol>
      </div>
    </div>
    `;
  }

  function runAgentSequence(out, done) {
    const steps = out.querySelectorAll(".agent-step");
    const log = out.querySelector("#orchLog");
    const messages = [
      "→ received farmer context: location, soil, goals",
      "→ dispatching Earth Observation Agent…",
      "→ Earth Obs returned NDVI map and phenology stage",
      "→ dispatching Water & Soil Agent…",
      "→ Water & Soil reported root-zone deficit (32%)",
      "→ dispatching Climate Risk Agent…",
      "→ Climate Risk flagged dry spell probability 0.62",
      "→ dispatching Terrain & Farm Agent…",
      "→ Terrain confirmed slope < 3%, low erosion",
      "→ dispatching Crop Intelligence Agent…",
      "→ Crop Intel scored Rice → Chickpea → Sesame = 0.86",
      "→ dispatching Economics Agent…",
      "→ Economics projected +12% net return",
      "→ fusing reports with farmer weights…",
      "✓ rotation plan ready",
    ];
    let i = 0;
    const addLine = (text) => {
      const li = document.createElement("li");
      li.className = "animate-fadeUp";
      li.textContent = text;
      log.appendChild(li);
      log.parentElement.scrollTop = log.parentElement.scrollHeight;
    };

    addLine(messages[0]);
    i = 1;

    steps.forEach((s, idx) => {
      setTimeout(() => {
        const bar = s.querySelector(".step-bar");
        const status = s.querySelector(".step-status");
        bar.style.width = "100%";
        s.classList.add("ring-2", "ring-brand-300");
        status.textContent = "running";
        status.className = "ml-auto step-status text-xs font-medium text-brand-700";
        addLine(messages[i++] || "→ working…");
        setTimeout(() => {
          status.textContent = "done";
          status.className = "ml-auto step-status text-xs font-semibold text-brand-700";
          s.classList.remove("ring-2", "ring-brand-300");
        }, 700);
        if (idx === steps.length - 1) {
          setTimeout(() => {
            addLine(messages[i++] || "✓ done");
            done();
          }, 900);
        }
      }, 250 + idx * 350);
    });
  }

  function renderResults(r) {
    return `
    <div class="view-enter space-y-6">
      <div class="flex items-center justify-between">
        <p class="text-xs font-semibold uppercase tracking-wider text-brand-700">Step 3 · Results</p>
        <span class="text-xs text-ink-500"><i class="fa-regular fa-clock mr-1"></i>Generated just now · illustrative</span>
      </div>

      <div class="grid gap-6 lg:grid-cols-3">
        ${r.alerts.map(a => `
          <div class="rounded-2xl bg-alert-50 border border-alert-100 p-5 shadow-card">
            <div class="flex items-center gap-2">
              <span class="h-2.5 w-2.5 rounded-full bg-alert-500 animate-pulseDot"></span>
              <p class="text-xs font-bold uppercase tracking-wider text-alert-700">Critical alert</p>
            </div>
            <h3 class="mt-3 font-display text-xl font-extrabold text-ink-900">${a.title}</h3>
            <p class="mt-2 text-sm text-ink-700">${a.body}</p>
            <button class="mt-4 w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-alert-500 hover:bg-alert-600 text-white text-sm font-semibold shadow-sm">
              <i class="fa-solid fa-person-running"></i>
              ${a.action}
            </button>
          </div>
        `).join('')}

        <div class="lg:col-span-2 rounded-2xl bg-white border-2 border-brand-400 shadow-card p-5 relative overflow-hidden">
          <div class="absolute top-0 right-0 h-24 w-24 bg-brand-100 rounded-full blur-3xl opacity-70"></div>
          <div class="relative">
            <div class="flex items-center gap-2">
              <i class="fa-solid fa-robot text-brand-600"></i>
              <p class="text-xs font-bold uppercase tracking-wider text-brand-700">Adaptive Rotation Agent</p>
            </div>
            <h3 class="mt-3 font-display text-2xl font-extrabold text-ink-900">Optimal action required</h3>
            <p class="mt-3 text-ink-700">
              <span class="font-semibold">Recommendation:</span> Plant legume cover crops (e.g., mung bean) within the next
              <span class="px-2 py-0.5 rounded-md bg-warn-50 border border-warn-500/30 text-warn-600 font-semibold">12 days</span>
              to retain moisture ahead of projected dry spells and restore soil nitrogen.
            </p>
            <div class="mt-5 flex flex-wrap gap-3">
              <button class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold shadow-sm">
                <i class="fa-solid fa-check"></i> Accept Plan
              </button>
              <button class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white border border-ink-200 hover:border-brand-300 text-ink-700 text-sm font-semibold">
                <i class="fa-solid fa-arrows-rotate"></i> View Alternatives
              </button>
              <button class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white border border-ink-200 hover:border-brand-300 text-ink-700 text-sm font-semibold">
                <i class="fa-solid fa-share-nodes"></i> Share with advisor
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="grid gap-6 lg:grid-cols-3">
        <div class="rounded-2xl bg-white border border-ink-200 shadow-card p-5">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <i class="fa-solid fa-cloud-sun text-sky-500"></i>
              <h3 class="font-display font-bold text-ink-900">Local Climate</h3>
            </div>
            <span class="text-[10px] font-bold uppercase px-2 py-1 rounded bg-brand-50 text-brand-700 border border-brand-200">NASA MODIS</span>
          </div>
          <div class="mt-4 flex items-end gap-3">
            <i class="fa-solid fa-temperature-high text-3xl text-warn-500"></i>
            <div>
              <p class="text-4xl font-extrabold text-ink-900 leading-none">${r.weather.today.temp}°<span class="text-2xl text-ink-500">C</span></p>
              <p class="text-xs text-ink-500 mt-1">${r.weather.cond} · Heat Index: <span class="font-semibold text-alert-600">${r.weather.heatIndex}</span></p>
            </div>
          </div>
          <ul class="mt-5 divide-y divide-ink-200">
            ${r.weather.forecast.map(f => `
              <li class="flex items-center justify-between py-2.5">
                <span class="text-sm text-ink-700">${f.d}</span>
                <span class="flex items-center gap-3 text-sm">
                  <i class="fa-solid ${f.c} ${f.c.includes('sun') ? 'text-amber-500' : 'text-sky-500'}"></i>
                  <span class="font-semibold text-ink-900 tabular-nums">${f.t}°C</span>
                </span>
              </li>
            `).join('')}
          </ul>
        </div>

        <div class="lg:col-span-2 rounded-2xl bg-white border border-ink-200 shadow-card p-5">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <i class="fa-solid fa-layer-group text-soil-600"></i>
              <h3 class="font-display font-bold text-ink-900">Root-Zone Soil Moisture</h3>
            </div>
            <span class="text-[10px] font-bold uppercase px-2 py-1 rounded bg-violet-50 text-violet-700 border border-violet-200">NASA SMAP Data</span>
          </div>

          <div class="mt-5 grid gap-5 md:grid-cols-2">
            <div class="relative aspect-[4/3] rounded-xl overflow-hidden topo border border-soil-200 scanline">
              <div class="absolute inset-0 grid place-items-center">
                <span class="text-xs font-bold uppercase tracking-wider text-soil-800 bg-white/80 border border-soil-200 px-3 py-1.5 rounded-full">
                  <i class="fa-solid fa-satellite-dish mr-1.5"></i> Live Satellite Scan
                </span>
              </div>
              <div class="absolute inset-0 opacity-40 bg-dotgrid"></div>
            </div>
            <div class="space-y-5">
              ${renderMoistureRow("Topsoil Moisture", r.moisture.surface)}
              ${renderMoistureRow("Root-Zone Moisture (1m)", r.moisture.root)}
              <div>
                <div class="flex items-center justify-between text-sm">
                  <span class="text-ink-700 font-medium">Evapotranspiration Stress</span>
                  <span class="font-semibold text-alert-600">${r.moisture.stress.label}</span>
                </div>
                <div class="mt-2 h-2.5 rounded-full overflow-hidden bg-gradient-to-r from-brand-500 via-warn-500 to-alert-500 relative">
                  <div class="absolute top-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-white border-2 border-ink-900" style="left: calc(${r.moisture.stress.pct}% - 6px)"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="rounded-2xl bg-white border border-ink-200 shadow-card p-5 sm:p-6">
        <div class="flex items-center justify-between gap-3">
          <div>
            <p class="text-xs font-semibold uppercase tracking-wider text-brand-700">Recommended Crop Rotation</p>
            <h3 class="font-display text-xl font-extrabold text-ink-900 mt-1">${r.summary.location} · ${r.summary.size} ha · ${r.summary.soil} soil</h3>
          </div>
          <button class="text-sm font-semibold text-brand-700 hover:text-brand-800 inline-flex items-center gap-2">
            <i class="fa-solid fa-print"></i> Export
          </button>
        </div>

        <div class="mt-6 grid gap-4 md:grid-cols-3">
          ${r.rotation.map((s, i) => `
            <div class="relative rounded-xl bg-gradient-to-b from-brand-50 to-white border border-brand-200 p-5">
              <div class="absolute top-3 right-3 h-7 w-7 rounded-full bg-brand-600 text-white grid place-items-center text-xs font-bold">${i+1}</div>
              <p class="text-xs font-semibold uppercase tracking-wider text-brand-700">${s.season}</p>
              <div class="mt-2 flex items-center gap-2">
                <i class="fa-solid ${s.icon} text-brand-600"></i>
                <p class="font-display text-lg font-bold text-ink-900">${s.crop}</p>
              </div>
              <p class="mt-3 text-sm text-ink-700"><span class="font-semibold">Why:</span> ${s.reason}</p>
              <p class="mt-2 text-xs text-ink-500"><i class="fa-solid fa-sparkles text-brand-500 mr-1"></i>${s.benefit}</p>
            </div>
          `).join('')}
        </div>

        <div class="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-3">
          ${r.metrics.map(m => `
            <div class="rounded-xl bg-ink-50 border border-ink-200 p-4">
              <div class="flex items-center gap-2 text-xs font-semibold text-ink-500 uppercase">
                <i class="fa-solid ${m.icon} ${m.color}"></i>${m.label}
              </div>
              <p class="mt-2 text-2xl font-extrabold ${m.color}">${m.value}</p>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="rounded-2xl bg-white border border-ink-200 shadow-card p-5 sm:p-6">
        <div class="flex items-center gap-2">
          <i class="fa-solid fa-microscope text-brand-600"></i>
          <h3 class="font-display text-lg font-bold text-ink-900">Why this plan? Agent reasoning</h3>
        </div>
        <ol class="mt-4 grid gap-3 md:grid-cols-2">
          ${r.reasoning.map((row, i) => `
            <li class="flex items-start gap-3 rounded-xl bg-ink-50 border border-ink-200 p-4">
              <span class="h-7 w-7 rounded-lg bg-brand-600 text-white grid place-items-center text-xs font-bold shrink-0">${i+1}</span>
              <div>
                <p class="text-xs font-bold uppercase tracking-wider text-brand-700">${row.agent}</p>
                <p class="mt-0.5 text-sm text-ink-700">${row.note}</p>
              </div>
            </li>
          `).join('')}
        </ol>
      </div>
    </div>
    `;
  }

  function renderMoistureRow(label, m) {
    const color = m.color.includes('alert') ? 'text-alert-600' : m.color.includes('warn') ? 'text-warn-600' : 'text-brand-600';
    return `
      <div>
        <div class="flex items-center justify-between text-sm">
          <span class="text-ink-700 font-medium">${label}</span>
          <span class="font-semibold ${color}">${m.pct}% (${m.label})</span>
        </div>
        <div class="mt-2 h-2.5 rounded-full bg-ink-200 overflow-hidden">
          <div class="h-full ${m.color} bar-fill" style="width:${m.pct}%"></div>
        </div>
      </div>
    `;
  }

  ASN.DashboardPage = DashboardPage;
  ASN.bindDashboardEvents = bindDashboardEvents;
})(window.ASN);