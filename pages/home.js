window.ASN = window.ASN || {};
(function (ASN) {
  const AGENTS = ASN.AGENTS;
  const NASA_DATASETS = ASN.NASA_DATASETS;

  function HomePage() {
    return `
    <section class="relative overflow-hidden bg-grain">
      <div class="absolute inset-0 grid-bg pointer-events-none"></div>
      <div class="absolute -top-32 -right-24 h-96 w-96 rounded-full bg-brand-200/40 blur-3xl"></div>
      <div class="absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-brand-100/70 blur-3xl"></div>

      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-24 lg:pt-24 lg:pb-32">
        <div class="grid lg:grid-cols-12 gap-10 items-center">
          <div class="lg:col-span-7">
            <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-brand-200 text-brand-700 text-xs font-semibold shadow-sm">
              <i class="fa-solid fa-medal"></i>
              NASA Space Apps Challenge 2026
            </div>
            <h1 class="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-ink-900 leading-[1.05]">
              Climate-smart
              <span class="text-gradient">crop rotation</span>
              <br/>guided by NASA Earthdata.
            </h1>
            <p class="mt-5 text-lg text-ink-500 max-w-2xl">
              AgroShift Nexus is a multi-agent decision-support platform that fuses satellite observations, soil
              information, crop science and farmer priorities to recommend crop sequences that protect soil,
              conserve water and improve return.
            </p>

            <div class="mt-8 flex flex-wrap items-center gap-3">
              <a href="#dashboard" data-route="dashboard"
                 class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold shadow-card hover:shadow-cardHover transition focus-ring">
                <i class="fa-solid fa-rocket"></i>
                Launch Dashboard
              </a>
              <a href="#agents" data-route="agents"
                 class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-ink-200 text-ink-900 text-sm font-semibold hover:border-brand-300 hover:text-brand-700 transition focus-ring">
                <i class="fa-solid fa-microchip"></i>
                Meet the Agents
              </a>
            </div>

            <dl class="mt-10 grid grid-cols-3 gap-4 max-w-xl">
              <div class="rounded-xl bg-white/80 backdrop-blur border border-ink-200 p-4">
                <dt class="text-2xl font-extrabold text-ink-900">6</dt>
                <dd class="text-xs text-ink-500 mt-1">Specialized AI agents</dd>
              </div>
              <div class="rounded-xl bg-white/80 backdrop-blur border border-ink-200 p-4">
                <dt class="text-2xl font-extrabold text-ink-900">7+</dt>
                <dd class="text-xs text-ink-500 mt-1">NASA Earth obs. sources</dd>
              </div>
              <div class="rounded-xl bg-white/80 backdrop-blur border border-ink-200 p-4">
                <dt class="text-2xl font-extrabold text-ink-900">3</dt>
                <dd class="text-xs text-ink-500 mt-1">Rotation seasons modeled</dd>
              </div>
            </dl>
          </div>

          <div class="lg:col-span-5">
            <div class="relative aspect-square max-w-md mx-auto">
              <div class="absolute inset-0 rounded-full bg-conic animate-orbit opacity-30 blur-2xl"></div>
              <div class="absolute inset-6 rounded-full border border-ink-200 bg-white shadow-card flex items-center justify-center">
                <div class="absolute inset-0 rounded-full grid-bg opacity-60"></div>
                <div class="relative w-3/4 h-3/4 rounded-full overflow-hidden border border-ink-200">
                  <div class="absolute inset-0 topo"></div>
                  <div class="absolute inset-0 flex">
                    <div class="flex-1 bg-brand-200/40"></div>
                    <div class="flex-1 bg-brand-300/30"></div>
                    <div class="flex-1 bg-soil-200/50"></div>
                    <div class="flex-1 bg-brand-400/30"></div>
                  </div>
                  <div class="absolute inset-x-0 bottom-3 text-center">
                    <span class="text-[10px] uppercase tracking-widest font-semibold text-ink-700 bg-white/80 px-2 py-1 rounded-full border border-ink-200">Field 24A · NDVI 0.61</span>
                  </div>
                </div>
              </div>
              <div class="absolute inset-0 animate-orbit">
                <div class="absolute top-2 left-1/2 -translate-x-1/2 h-10 w-10 rounded-xl bg-white border border-ink-200 grid place-items-center shadow-card text-brand-600">
                  <i class="fa-solid fa-satellite"></i>
                </div>
                <div class="absolute bottom-2 left-1/2 -translate-x-1/2 h-10 w-10 rounded-xl bg-white border border-ink-200 grid place-items-center shadow-card text-sky-600">
                  <i class="fa-solid fa-cloud-showers-heavy"></i>
                </div>
                <div class="absolute top-1/2 left-2 -translate-y-1/2 h-10 w-10 rounded-xl bg-white border border-ink-200 grid place-items-center shadow-card text-amber-600">
                  <i class="fa-solid fa-sun"></i>
                </div>
                <div class="absolute top-1/2 right-2 -translate-y-1/2 h-10 w-10 rounded-xl bg-white border border-ink-200 grid place-items-center shadow-card text-violet-600">
                  <i class="fa-solid fa-microchip"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-white border-y border-ink-200">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl">
          <p class="text-sm font-semibold uppercase tracking-wider text-brand-700">How it works</p>
          <h2 class="mt-2 font-display text-3xl sm:text-4xl font-extrabold text-ink-900">From satellite to seed, in four steps.</h2>
          <p class="mt-3 text-ink-500">The platform turns petabytes of NASA Earthdata into a single, actionable rotation plan tailored to your field.</p>
        </div>

        <div class="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          ${[
            { n: "01", i: "fa-map-location-dot", t: "Pin your farm", d: "Drop a location and tell us your soil type, farm size and seasonal priorities." },
            { n: "02", i: "fa-satellite-dish",   t: "Agents gather data", d: "Six specialist agents pull live NASA observations and look up soil and crop science." },
            { n: "03", i: "fa-network-wired",    t: "Orchestrator reasons", d: "Findings are fused into ranked rotation candidates with clear reasoning." },
            { n: "04", i: "fa-seedling",        t: "You decide",        d: "Accept, tweak or compare alternatives — your plan, grounded in data." },
          ].map((s, idx) => `
            <div class="relative rounded-2xl border border-ink-200 bg-ink-50 p-6 hover-lift">
              <div class="flex items-center gap-3">
                <span class="h-10 w-10 rounded-xl bg-brand-600 text-white grid place-items-center font-bold">${s.n}</span>
                <i class="fa-solid ${s.i} text-ink-500"></i>
              </div>
              <h3 class="mt-4 font-display text-lg font-bold text-ink-900">${s.t}</h3>
              <p class="mt-2 text-sm text-ink-500">${s.d}</p>
              ${idx < 3 ? `<span class="hidden lg:block absolute top-1/2 -right-3 text-ink-300"><i class="fa-solid fa-arrow-right"></i></span>` : ''}
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <section class="py-20 bg-ink-50">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex items-end justify-between flex-wrap gap-4">
          <div class="max-w-2xl">
            <p class="text-sm font-semibold uppercase tracking-wider text-brand-700">Multi-agent architecture</p>
            <h2 class="mt-2 font-display text-3xl sm:text-4xl font-extrabold text-ink-900">Seven specialists, one shared plan.</h2>
            <p class="mt-3 text-ink-500">Each agent is focused, evidence-based and explainable. They debate, weigh trade-offs and converge on a rotation you can act on.</p>
          </div>
          <a href="#agents" data-route="agents" class="text-sm font-semibold text-brand-700 hover:text-brand-800 inline-flex items-center gap-2">
            See full architecture <i class="fa-solid fa-arrow-right text-xs"></i>
          </a>
        </div>

        <div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          ${AGENTS.slice(0, 4).map(a => `
            <div class="rounded-2xl bg-white border border-ink-200 p-5 shadow-card hover-lift">
              <div class="h-11 w-11 rounded-xl bg-gradient-to-br ${a.color} grid place-items-center text-white">
                <i class="fa-solid ${a.icon}"></i>
              </div>
              <h3 class="mt-4 font-display font-bold text-ink-900">${a.name}</h3>
              <p class="mt-2 text-sm text-ink-500">${a.desc}</p>
              <div class="mt-3 flex flex-wrap gap-1.5">
                ${a.datasets.map(d => `<span class="text-[11px] font-medium px-2 py-0.5 rounded-full ${a.bg} ${a.text} border ${a.border}">${d}</span>`).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <section class="py-20 bg-white border-y border-ink-200">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="max-w-2xl">
          <p class="text-sm font-semibold uppercase tracking-wider text-brand-700">Powered by NASA Earthdata</p>
          <h2 class="mt-2 font-display text-3xl sm:text-4xl font-extrabold text-ink-900">Free, open, science-grade.</h2>
          <p class="mt-3 text-ink-500">Every recommendation is grounded in publicly available NASA observations — no black boxes, no proprietary feeds.</p>
        </div>

        <div class="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          ${NASA_DATASETS.slice(0, 4).map(d => `
            <div class="flex items-center gap-3 rounded-xl border border-ink-200 bg-ink-50 px-4 py-3">
              <span class="h-10 w-10 rounded-lg bg-gradient-to-br ${d.color} grid place-items-center text-white">
                <i class="fa-solid ${d.icon}"></i>
              </span>
              <div>
                <p class="font-semibold text-ink-900 text-sm">${d.name}</p>
                <p class="text-xs text-ink-500">${d.agency}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <section class="py-20 bg-gradient-to-br from-brand-600 to-brand-700 relative overflow-hidden">
      <div class="absolute inset-0 grid-bg opacity-10"></div>
      <div class="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="font-display text-3xl sm:text-4xl font-extrabold text-white">Ready to see your field through NASA's eyes?</h2>
        <p class="mt-4 text-brand-50/90 max-w-2xl mx-auto">Open the dashboard, enter your farm details, and watch the agent team recommend the next three seasons for your land.</p>
        <a href="#dashboard" data-route="dashboard"
           class="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-brand-700 hover:bg-brand-50 text-sm font-semibold shadow-md">
          <i class="fa-solid fa-rocket"></i>
          Launch Dashboard
        </a>
      </div>
    </section>
    `;
  }

  ASN.HomePage = HomePage;
})(window.ASN);