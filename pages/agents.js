window.ASN = window.ASN || {};
(function (ASN) {
  const AGENTS = ASN.AGENTS;
  const NASA_DATASETS = ASN.NASA_DATASETS;

  function AgentsPage() {
    return `
    <section class="bg-grain border-b border-ink-200">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <p class="text-sm font-semibold uppercase tracking-wider text-brand-700">Technology & Agents</p>
        <h1 class="mt-2 font-display text-3xl sm:text-5xl font-extrabold text-ink-900">A team of specialists, working as one.</h1>
        <p class="mt-3 text-ink-500 max-w-3xl">AgroShift Nexus is built from seven cooperating AI agents. Six are specialists — each focused on a slice of the problem. The seventh, the Orchestrator, integrates their findings and produces the final recommendation.</p>
      </div>
    </section>

    <section class="py-14 bg-white">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="rounded-3xl border border-ink-200 bg-ink-50 p-6 lg:p-10">
          <div class="grid lg:grid-cols-3 gap-8 items-center">
            <div class="lg:col-span-2">
              <p class="text-xs font-semibold uppercase tracking-wider text-ink-500">Specialist agents</p>
              <h2 class="font-display text-2xl font-bold text-ink-900">Each one reads from a specific NASA source.</h2>
              <div class="mt-6 grid sm:grid-cols-3 gap-3">
                ${AGENTS.filter(a => !a.isOrchestrator).map(a => `
                  <div class="rounded-xl bg-white border border-ink-200 p-4">
                    <div class="flex items-center gap-2">
                      <span class="h-9 w-9 rounded-lg bg-gradient-to-br ${a.color} grid place-items-center text-white">
                        <i class="fa-solid ${a.icon}"></i>
                      </span>
                      <p class="font-semibold text-ink-900 text-sm">${a.short}</p>
                    </div>
                    <p class="mt-2 text-xs text-ink-500">${a.datasets.join(' · ')}</p>
                  </div>
                `).join('')}
              </div>
            </div>
            <div>
              <p class="text-xs font-semibold uppercase tracking-wider text-brand-700">Orchestrator</p>
              <div class="mt-3 rounded-2xl border-2 border-brand-300 bg-brand-50 p-6 shadow-card">
                <div class="h-12 w-12 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 grid place-items-center text-white shadow-glow">
                  <i class="fa-solid fa-network-wired"></i>
                </div>
                <h3 class="mt-4 font-display text-xl font-bold text-ink-900">Orchestrator Agent</h3>
                <p class="mt-2 text-sm text-ink-500">Fuses every specialist report into a ranked set of crop-rotation strategies with clear, plain-language reasoning.</p>
                <div class="mt-4 flex flex-wrap gap-1.5">
                  <span class="text-[11px] font-medium px-2 py-0.5 rounded-full bg-brand-100 text-brand-700 border border-brand-200">Consensus</span>
                  <span class="text-[11px] font-medium px-2 py-0.5 rounded-full bg-brand-100 text-brand-700 border border-brand-200">Ranking</span>
                  <span class="text-[11px] font-medium px-2 py-0.5 rounded-full bg-brand-100 text-brand-700 border border-brand-200">Reasoning</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-14 bg-ink-50">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex items-end justify-between flex-wrap gap-4">
          <div>
            <h2 class="font-display text-2xl sm:text-3xl font-extrabold text-ink-900">Meet the agents</h2>
            <p class="mt-2 text-ink-500">Click any card to see what it reads and what it writes.</p>
          </div>
          <div class="text-sm text-ink-500"><span class="font-semibold text-ink-900">${AGENTS.length}</span> agents · <span class="font-semibold text-ink-900">${NASA_DATASETS.length}</span> NASA datasets</div>
        </div>

        <div class="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          ${AGENTS.map((a, i) => `
            <article class="group rounded-2xl bg-white border border-ink-200 shadow-card hover-lift overflow-hidden">
              <div class="h-1.5 w-full bg-gradient-to-r ${a.color}"></div>
              <div class="p-6">
                <div class="flex items-start justify-between">
                  <div class="flex items-center gap-3">
                    <div class="h-12 w-12 rounded-xl bg-gradient-to-br ${a.color} grid place-items-center text-white shadow-sm">
                      <i class="fa-solid ${a.icon}"></i>
                    </div>
                    <div>
                      <p class="text-[11px] font-semibold uppercase tracking-wider ${a.text}">Agent ${String(i+1).padStart(2,'0')}</p>
                      <h3 class="font-display text-lg font-bold text-ink-900 leading-tight">${a.name}</h3>
                    </div>
                  </div>
                  ${a.isOrchestrator ? `<span class="text-[10px] font-bold uppercase px-2 py-1 rounded-full bg-brand-600 text-white">Lead</span>` : ''}
                </div>
                <p class="mt-3 text-sm text-ink-500">${a.desc}</p>

                <div class="mt-5">
                  <p class="text-[11px] font-semibold uppercase tracking-wider text-ink-500">NASA datasets</p>
                  <div class="mt-2 flex flex-wrap gap-1.5">
                    ${a.datasets.map(d => `<span class="text-xs font-medium px-2 py-0.5 rounded-full ${a.bg} ${a.text} border ${a.border}">${d}</span>`).join('')}
                  </div>
                </div>

                <div class="mt-4 grid grid-cols-2 gap-3 text-xs">
                  <div class="rounded-lg bg-ink-50 p-3 border border-ink-200">
                    <p class="font-semibold text-ink-900 mb-1">Inputs</p>
                    <ul class="space-y-1 text-ink-500">
                      ${a.inputs.map(x => `<li class="flex items-start gap-1.5"><i class="fa-solid fa-circle-arrow-right text-brand-500 mt-0.5 text-[10px]"></i>${x}</li>`).join('')}
                    </ul>
                  </div>
                  <div class="rounded-lg bg-ink-50 p-3 border border-ink-200">
                    <p class="font-semibold text-ink-900 mb-1">Outputs</p>
                    <ul class="space-y-1 text-ink-500">
                      ${a.outputs.map(x => `<li class="flex items-start gap-1.5"><i class="fa-solid fa-check text-brand-600 mt-0.5 text-[10px]"></i>${x}</li>`).join('')}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    </section>

    <section class="py-14 bg-white border-t border-ink-200">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="max-w-2xl">
          <p class="text-sm font-semibold uppercase tracking-wider text-brand-700">Data sources</p>
          <h2 class="mt-2 font-display text-2xl sm:text-3xl font-extrabold text-ink-900">The NASA datasets we lean on.</h2>
          <p class="mt-2 text-ink-500">Open, public, peer-reviewed observations. We combine them with soil and crop science to ground every recommendation.</p>
        </div>

        <div class="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          ${NASA_DATASETS.map(d => `
            <div class="rounded-2xl border border-ink-200 bg-ink-50 p-5 hover-lift">
              <div class="flex items-center gap-3">
                <div class="h-12 w-12 rounded-xl bg-gradient-to-br ${d.color} grid place-items-center text-white shadow-sm">
                  <i class="fa-solid ${d.icon}"></i>
                </div>
                <div>
                  <p class="font-display font-bold text-ink-900">${d.name}</p>
                  <p class="text-xs text-ink-500">${d.agency}</p>
                </div>
              </div>
              <p class="mt-3 text-sm text-ink-700 font-medium">${d.full}</p>
              <p class="mt-1 text-sm text-ink-500">${d.use}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <section class="py-14 bg-ink-50 border-t border-ink-200">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="max-w-2xl">
          <p class="text-sm font-semibold uppercase tracking-wider text-brand-700">Conversation flow</p>
          <h2 class="mt-2 font-display text-2xl sm:text-3xl font-extrabold text-ink-900">How the team talks to each other.</h2>
        </div>

        <ol class="mt-10 relative border-s-2 border-dashed border-ink-200 ps-6 space-y-7">
          ${[
            { i: "fa-flag",        t: "Farmer provides context",       d: "Location, soil, size, goals." },
            { i: "fa-satellite",   t: "Specialists pull live NASA data", d: "Each specialist queries its own dataset and produces a short report." },
            { i: "fa-comments",    t: "Specialists debate",            d: "If two specialists disagree, the Orchestrator asks for clarification." },
            { i: "fa-network-wired", t: "Orchestrator fuses",          d: "Reports are weighted by farmer goals and ranked." },
            { i: "fa-seedling",    t: "Plan delivered",                d: "A 3-season rotation with reasoning, risks and metrics." },
          ].map(s => `
            <li class="relative">
              <span class="absolute -left-[37px] top-0 h-7 w-7 rounded-full bg-brand-600 text-white grid place-items-center text-xs shadow-glow">
                <i class="fa-solid ${s.i}"></i>
              </span>
              <h3 class="font-display font-bold text-ink-900">${s.t}</h3>
              <p class="text-sm text-ink-500">${s.d}</p>
            </li>
          `).join('')}
        </ol>
      </div>
    </section>
    `;
  }

  ASN.AgentsPage = AgentsPage;
})(window.ASN);