window.ASN = window.ASN || {};
(function (ASN) {
  function AboutPage() {
    return `
    <section class="bg-grain border-b border-ink-200">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <p class="text-sm font-semibold uppercase tracking-wider text-brand-700">About</p>
        <h1 class="mt-2 font-display text-3xl sm:text-5xl font-extrabold text-ink-900">A prototype born from a NASA Space Apps Challenge.</h1>
        <p class="mt-3 text-ink-500 max-w-3xl">AgroShift Nexus is a multi-agent decision-support concept that helps farmers pick crop rotations suited to a changing climate. It's built on top of free, open NASA Earthdata.</p>
      </div>
    </section>

    <section class="py-14">
      <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 grid gap-10 md:grid-cols-3">
        <div class="md:col-span-2 space-y-8">
          <article>
            <h2 class="font-display text-2xl font-extrabold text-ink-900">Why this project</h2>
            <p class="text-ink-700 mt-3">Climate change is reshaping growing seasons around the world. Farmers — particularly smallholders — need timely, evidence-based guidance about what to plant next. The data exists, but it is scattered across satellites, soil surveys and crop databases.</p>
            <p class="text-ink-700 mt-3">AgroShift Nexus brings those threads together with a team of cooperating AI agents. Each agent is a specialist. Together, they turn terabytes of NASA observations into a simple rotation plan you can act on.</p>

            <h2 class="font-display text-2xl font-extrabold text-ink-900 mt-8">What this prototype does</h2>
            <ul class="mt-3 space-y-2 text-ink-700 list-disc pl-5">
              <li>Reads NASA Earthdata (SMAP, GPM, MODIS, Landsat, SRTM, POWER) for the chosen location.</li>
              <li>Fuses that data with farmer-provided context (soil, size, priorities).</li>
              <li>Recommends a 3-season crop rotation with reasoning and expected outcomes.</li>
              <li>Visualizes every step so the farmer — not a black box — understands the recommendation.</li>
            </ul>

            <h2 class="font-display text-2xl font-extrabold text-ink-900 mt-8">Important disclaimer</h2>
            <p class="text-ink-700 mt-3">This is a <strong>concept prototype</strong>. The numbers and recommendations shown are illustrative. The current repository does not connect to live NASA APIs, an AI model, a database, or any agricultural recommendation service.</p>
          </article>
        </div>

        <aside class="space-y-4">
          <div class="rounded-2xl bg-white border border-ink-200 shadow-card p-5">
            <h3 class="font-display font-bold text-ink-900">Team Nokkhotro</h3>
            <p class="mt-2 text-sm text-ink-500">NASA Space Apps Challenge submission.</p>
            <ul class="mt-4 space-y-2 text-sm text-ink-700">
              <li class="flex items-center gap-2"><i class="fa-solid fa-user text-brand-600"></i> S. H. M. Irfan — Team Leader</li>
              <li class="flex items-center gap-2"><i class="fa-solid fa-user text-brand-600"></i> Arafat Mostofa Alif</li>
              <li class="flex items-center gap-2"><i class="fa-solid fa-user text-brand-600"></i> Nasor Hidar</li>
              <li class="flex items-center gap-2"><i class="fa-solid fa-user text-brand-600"></i> Suhita Srutee</li>
              <li class="flex items-center gap-2"><i class="fa-solid fa-user text-brand-600"></i> Md Monjurul Islam</li>
              <li class="flex items-center gap-2"><i class="fa-solid fa-user text-brand-600"></i> Saad Ahmed</li>
            </ul>
          </div>
          <div class="rounded-2xl bg-brand-50 border border-brand-200 p-5">
            <h3 class="font-display font-bold text-ink-900">Open data, openly built</h3>
            <p class="mt-2 text-sm text-ink-700">Every dataset used is public. No paywalls, no proprietary feeds.</p>
          </div>
        </aside>
      </div>
    </section>
    `;
  }
  ASN.AboutPage = AboutPage;
})(window.ASN);