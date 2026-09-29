// Plain-script hash router for AgroShift Nexus
(function () {
  const ASN = window.ASN;
  if (!ASN) {
    console.error("AgroShift Nexus: data.js failed to load before app.js");
    return;
  }

  const ROUTES = {
    home:      { render: ASN.HomePage,      title: "Home" },
    dashboard: { render: ASN.DashboardPage, title: "Farmer Dashboard", bind: ASN.bindDashboardEvents },
    agents:    { render: ASN.AgentsPage,    title: "Technology & Agents" },
    about:     { render: ASN.AboutPage,     title: "About" },
  };

  const app = document.getElementById("app");
  if (!app) return;

  function getRoute() {
    const hash = (window.location.hash || "").replace(/^#/, "");
    const id = hash.split("/")[0];
    return ROUTES[id] ? id : "home";
  }

  function render() {
    const id = getRoute();
    const route = ROUTES[id];
    document.title = "AgroShift Nexus — " + route.title;

    app.innerHTML =
      ASN.Navbar({ active: id }) +
      `<main id="main" class="flex-1 view-enter">${route.render()}</main>` +
      ASN.Footer();

    if (route.bind) setTimeout(() => route.bind(), 0);

    const toggle = document.getElementById("navToggle");
    const mobile = document.getElementById("mobileMenu");
    if (toggle && mobile) {
      toggle.addEventListener("click", () => mobile.classList.toggle("hidden"));
    }

    app.querySelectorAll("[data-route]").forEach(a => {
      a.addEventListener("click", () => {
        if (mobile && !mobile.classList.contains("hidden")) mobile.classList.add("hidden");
      });
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  window.addEventListener("hashchange", render);
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render);
  } else {
    render();
  }
})();