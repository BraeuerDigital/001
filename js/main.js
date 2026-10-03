/* BRÄUER.DIGITAL – Header (mobiles Menü) */
(function() {

  function initBraeuerHeader() {

    const header =
      document.getElementById(
        "bd-header"
      );

    const toggle =
      document.getElementById(
        "bd-mobile-toggle"
      );

    const nav =
      document.getElementById(
        "bd-header-nav"
      );

    if (
      !header ||
      !toggle ||
      !nav
    ) {

      return;
    }

    /* =======================================================
       DOPPELTE INITIALISIERUNG VERHINDERN
    ======================================================== */

    if (
      toggle.dataset.bdInitialized ===
      "true"
    ) {

      return;
    }

    toggle.dataset.bdInitialized =
      "true";

    /* =======================================================
       MENÜ ÖFFNEN
    ======================================================== */

    function openMenu() {

      nav.classList.add(
        "bd-open"
      );

      toggle.classList.add(
        "bd-open"
      );

      header.classList.add(
        "bd-menu-active"
      );

      header.style.setProperty(
        "background-color",
        "#0A0D11",
        "important"
      );

      header.style.setProperty(
        "background",
        "#0A0D11",
        "important"
      );

      toggle.setAttribute(
        "aria-expanded",
        "true"
      );

      toggle.setAttribute(
        "aria-label",
        "Menü schließen"
      );

    }

    /* =======================================================
       MENÜ SCHLIESSEN
    ======================================================== */

    function closeMenu() {

      nav.classList.remove(
        "bd-open"
      );

      toggle.classList.remove(
        "bd-open"
      );

      header.classList.remove(
        "bd-menu-active"
      );

      if (
        header.classList.contains(
          "bd-home"
        )
      ) {

        header.style.setProperty(
          "background-color",
          "transparent",
          "important"
        );

        header.style.setProperty(
          "background",
          "transparent",
          "important"
        );

      } else {

        header.style.setProperty(
          "background-color",
          "#0A0D11",
          "important"
        );

        header.style.setProperty(
          "background",
          "#0A0D11",
          "important"
        );

      }

      toggle.setAttribute(
        "aria-expanded",
        "false"
      );

      toggle.setAttribute(
        "aria-label",
        "Menü öffnen"
      );

    }

    /* =======================================================
       BURGER KLICK
    ======================================================== */

    toggle.addEventListener(
      "click",

      function(event) {

        event.preventDefault();

        event.stopPropagation();

        if (
          nav.classList.contains(
            "bd-open"
          )
        ) {

          closeMenu();

        } else {

          openMenu();

        }

      }
    );

    /* =======================================================
       NAVIGATION LINK
    ======================================================== */

    nav
      .querySelectorAll("a")
      .forEach(function(link) {

        link.addEventListener(
          "click",
          closeMenu
        );

      });

    /* =======================================================
       ESC
    ======================================================== */

    document.addEventListener(
      "keydown",

      function(event) {

        if (
          event.key === "Escape" &&
          nav.classList.contains(
            "bd-open"
          )
        ) {

          closeMenu();

          toggle.focus();

        }

      }
    );

    /* =======================================================
       DESKTOP WECHSEL
    ======================================================== */

    window.addEventListener(
      "resize",

      function() {

        if (
          window.innerWidth > 990 &&
          nav.classList.contains(
            "bd-open"
          )
        ) {

          closeMenu();

        }

      }
    );

  }

  /* =========================================================
     INITIALISIERUNG
  ========================================================= */

  if (
    document.readyState ===
    "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      initBraeuerHeader,
      {
        once: true
      }
    );

  } else {

    initBraeuerHeader();

  }

  })();

/* Footer: Copyright-Jahr */
(function () {
  var el = document.getElementById("bd-year");
  if (el) { el.textContent = new Date().getFullYear(); }
})();
