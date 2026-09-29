// Shared layout: Navbar, Footer, Logo
window.ASN = window.ASN || {};

(function (ASN) {
  const NAV_LINKS = ASN.NAV_LINKS;
  const BRAND = ASN.BRAND;

  function Logo(size) {
    size = size || "md";
    const dim = size === "sm" ? "h-9 w-9" : "h-10 w-10";
    const text = size === "sm" ? "text-base" : "text-lg";
    return `
      <a href="#home" data-route="home" class="flex items-center gap-2.5 group">
        <span class="relative ${dim} rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 grid place-items-center shadow-glow">
          <i class="fa-solid fa-leaf text-white text-lg"></i>
          <span class="absolute -inset-1 rounded-2xl ring-1 ring-brand-200 opacity-60 group-hover:opacity-100 transition"></span>
        </span>
        <span class="font-display ${text} font-extrabold tracking-tight text-ink-900">
          Agro<span class="text-brand-600">Shift</span> Nexus
        </span>
      </a>
    `;
  }

  function Navbar(active) {
    return `
      <header class="sticky top-0 z-40">
        <div class="bg-white/85 backdrop-blur-md border-b border-ink-200">
          <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
              <div class="flex items-center gap-8">
                ${Logo()}
                <nav class="hidden md:flex items-center gap-1">
                  ${NAV_LINKS.map(link => `
                    <a href="#${link.id}" data-route="${link.id}"
                       class="nav-link px-3 py-2 rounded-lg text-sm font-medium inline-flex items-center gap-2 transition
                       ${active === link.id
                         ? 'text-brand-700 bg-brand-50'
                         : 'text-ink-600 hover:text-ink-900 hover:bg-ink-100'}">
                      <i class="fa-solid ${link.icon} text-[13px] opacity-80"></i>
                      ${link.label}
                    </a>
                  `).join('')}
                </nav>
              </div>
              <div class="flex items-center gap-2">
                <span class="hidden sm:inline-flex items-center gap-2 text-xs font-medium text-ink-500 px-3 py-1.5 rounded-full bg-ink-100 border border-ink-200">
                  <span class="relative flex h-2 w-2">
                    <span class="absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75 animate-ping"></span>
                    <span class="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
                  </span>
                  NASA Earthdata live
                </span>
                <a href="#dashboard" data-route="dashboard"
                   class="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold shadow-sm hover:shadow-md transition focus-ring">
                  <i class="fa-solid fa-rocket text-xs"></i>
                  Open Dashboard
                </a>
                <button id="navToggle" class="md:hidden p-2 rounded-lg hover:bg-ink-100 text-ink-700" aria-label="Toggle menu">
                  <i class="fa-solid fa-bars"></i>
                </button>
              </div>
            </div>
          </div>
          <div id="mobileMenu" class="md:hidden hidden border-t border-ink-200 bg-white">
            <div class="px-4 py-3 grid gap-1">
              ${NAV_LINKS.map(link => `
                <a href="#${link.id}" data-route="${link.id}"
                   class="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium
                   ${active === link.id ? 'text-brand-700 bg-brand-50' : 'text-ink-600 hover:bg-ink-100'}">
                  <i class="fa-solid ${link.icon} text-[13px]"></i>${link.label}
                </a>
              `).join('')}
              <a href="#dashboard" data-route="dashboard"
                 class="mt-2 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-brand-600 text-white text-sm font-semibold">
                <i class="fa-solid fa-rocket text-xs"></i>Open Dashboard
              </a>
            </div>
          </div>
        </div>
      </header>
    `;
  }

  function Footer() {
    return `
      <footer class="mt-16 border-t border-ink-200 bg-white">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid gap-8 md:grid-cols-4">
          <div class="md:col-span-2">
            ${Logo()}
            <p class="mt-3 text-sm text-ink-500 max-w-md">${BRAND.tagline} A NASA Space Apps Challenge prototype by Team Nokkhotro.</p>
          </div>
          <div>
            <h4 class="font-semibold text-ink-900 text-sm">Platform</h4>
            <ul class="mt-3 space-y-2 text-sm text-ink-500">
              <li><a href="#home" data-route="home" class="hover:text-brand-700">Home</a></li>
              <li><a href="#dashboard" data-route="dashboard" class="hover:text-brand-700">Farmer Dashboard</a></li>
              <li><a href="#agents" data-route="agents" class="hover:text-brand-700">Technology & Agents</a></li>
              <li><a href="#about" data-route="about" class="hover:text-brand-700">About</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold text-ink-900 text-sm">Data Sources</h4>
            <ul class="mt-3 space-y-2 text-sm text-ink-500">
              <li><i class="fa-solid fa-satellite text-brand-600 mr-1.5"></i>Landsat 8/9</li>
              <li><i class="fa-solid fa-globe text-brand-600 mr-1.5"></i>MODIS / VIIRS</li>
              <li><i class="fa-solid fa-water text-brand-600 mr-1.5"></i>SMAP</li>
              <li><i class="fa-solid fa-cloud-showers-heavy text-brand-600 mr-1.5"></i>GPM / IMERG</li>
              <li><i class="fa-solid fa-sun text-brand-600 mr-1.5"></i>NASA POWER</li>
              <li><i class="fa-solid fa-mountain text-brand-600 mr-1.5"></i>SRTM</li>
            </ul>
          </div>
        </div>
        <div class="border-t border-ink-200">
          <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
            <p class="text-xs text-ink-500">© 2026 Team Nokkhotro. NASA Space Apps Challenge prototype.</p>
            <p class="text-xs text-ink-400">Prototype data is illustrative and not for operational use.</p>
          </div>
        </div>
      </footer>
    `;
  }

  ASN.Logo = Logo;
  ASN.Navbar = Navbar;
  ASN.Footer = Footer;
})(window.ASN);