// =====================================================================
// VIndia — Global UI behaviours (nav, reveal animations, micro-interactions)
// =====================================================================
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {

    /* ---------- Mobile nav toggle ---------- */
    var burger = document.querySelector(".vi-burger");
    var links = document.querySelector(".vi-links");
    if (burger && links) {
      burger.addEventListener("click", function () {
        burger.classList.toggle("is-open");
        links.classList.toggle("is-open");
      });
      links.querySelectorAll("a").forEach(function (a) {
        a.addEventListener("click", function () {
          burger.classList.remove("is-open");
          links.classList.remove("is-open");
        });
      });
    }

    /* ---------- Active nav link (based on current file) ---------- */
    var here = (location.pathname.split("/").pop() || "index.html");
    document.querySelectorAll(".vi-links a").forEach(function (a) {
      var href = a.getAttribute("href");
      if (href === here || (here === "" && href === "index.html")) {
        a.classList.add("active");
      }
    });

    /* ---------- Sticky nav shrink on scroll ---------- */
    var nav = document.querySelector(".vi-nav");
    if (nav) {
      var onScroll = function () {
        nav.classList.toggle("is-scrolled", window.scrollY > 12);
      };
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
    }

    /* ---------- Back to top ---------- */
    var top = document.createElement("button");
    top.className = "vi-top";
    top.setAttribute("aria-label", "Back to top");
    top.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
    document.body.appendChild(top);
    top.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    window.addEventListener("scroll", function () {
      top.classList.toggle("is-visible", window.scrollY > 420);
    }, { passive: true });

    /* ---------- Reveal-on-scroll ---------- */
    var revealEls = document.querySelectorAll(".reveal, .reveal-scale");
    if ("IntersectionObserver" in window && revealEls.length) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
      revealEls.forEach(function (el) { io.observe(el); });
    } else {
      revealEls.forEach(function (el) { el.classList.add("is-visible"); });
    }

    /* ---------- Auto-tag reveal on common content blocks ---------- */
    document.querySelectorAll(
      ".vehicle-card, .logo-item, .team-member, .job-card, .feature-card, .spec-card"
    ).forEach(function (el) {
      if (!el.classList.contains("reveal")) el.classList.add("reveal");
    });
    // Re-run observer pass for late-added reveal class
    if ("IntersectionObserver" in window) {
      var io2 = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io2.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
      document.querySelectorAll(".reveal:not(.is-visible)").forEach(function (el) {
        io2.observe(el);
      });
    }

    /* ---------- Ripple effect on buttons ---------- */
    document.addEventListener("click", function (e) {
      var btn = e.target.closest(".btn");
      if (!btn) return;
      var rect = btn.getBoundingClientRect();
      var ripple = document.createElement("span");
      var size = Math.max(rect.width, rect.height);
      ripple.className = "ripple";
      ripple.style.width = ripple.style.height = size + "px";
      ripple.style.left = (e.clientX - rect.left - size / 2) + "px";
      ripple.style.top = (e.clientY - rect.top - size / 2) + "px";
      btn.appendChild(ripple);
      setTimeout(function () { ripple.remove(); }, 600);
    });

  });
})();
