// Everything interactive on the page: language switch, entrance motion, video, menu, 3D truck, map and quote form.
// Moved from the original index.html script; SiteBehavior (./site-behavior.tsx) runs it once after hydration.

// next/font gives each web font a generated family name, exposed as a CSS variable on <html>
const fontVar = name => getComputedStyle(document.documentElement).getPropertyValue(name).trim() || "serif";

let started = false;

export function initSite() {
  if (started) return;
  started = true;

  /* ===== Edit your business details here ===== */
  const CONFIG = {
    phoneDisplay: "+968 7636 8205",  // number as shown on the site
    phoneIntl:    "96876368205",     // digits only, with country code (used for phone calls)
    whatsappDisplay: "+968 7806 1190", // WhatsApp number as shown on the site
    whatsappIntl: "96878061190",     // digits only, with country code (used for WhatsApp)
    email:        "shafit.mianmajari@gmail.com"
  };
  /* =========================================== */

  (function () {
    const site = document.getElementById("site");

    document.querySelectorAll("[data-tel]").forEach(a => a.href = "tel:+" + CONFIG.phoneIntl);
    document.querySelectorAll("[data-wa]").forEach(a => a.href = "https://wa.me/" + CONFIG.whatsappIntl);
    document.querySelectorAll("[data-wa-text]").forEach(el => el.textContent = CONFIG.whatsappDisplay);
    document.querySelectorAll("[data-phone]").forEach(el => el.textContent = CONFIG.phoneDisplay);
    document.querySelectorAll("[data-email]").forEach(a => a.href = "mailto:" + CONFIG.email);
    document.querySelectorAll("[data-email-text]").forEach(el => el.textContent = CONFIG.email);
    document.getElementById("yr").textContent = new Date().getFullYear();

    // Language: English at /, Arabic at /ar; the page arrives in its language, and the switch is a plain link.

    /* ===== Motion ===== */
    window.__rv = true;
    const header = document.querySelector(".head");
    const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    /* ===== Mobile menu ===== */
    const menuBtn = document.querySelector(".menu-btn");
    if (menuBtn) {
      const setMenu = open => { header.classList.toggle("open", open); menuBtn.setAttribute("aria-expanded", String(open)); };
      menuBtn.addEventListener("click", () => setMenu(!header.classList.contains("open")));
      document.querySelectorAll("#mainNav a").forEach(a => a.addEventListener("click", () => setMenu(false)));
      document.addEventListener("keydown", e => { if (e.key === "Escape" && header.classList.contains("open")) { setMenu(false); menuBtn.focus(); } });
      document.addEventListener("click", e => { if (header.classList.contains("open") && !header.contains(e.target)) setMenu(false); });
    }

    if (document.documentElement.classList.contains("motion")) {
      const setDelay = (el, ms) => { el.style.setProperty("--d", ms + "ms"); el._d = ms; };
      const reveal = (sel, variant, delay = 0) => document.querySelectorAll(sel).forEach(el => {
        el.classList.add("rv");
        if (variant) el.dataset.rv = variant;
        setDelay(el, delay);
      });
      const stagger = (sel, variant, step, base = 0) => document.querySelectorAll(sel).forEach((el, i) => {
        el.classList.add("rv");
        if (variant) el.dataset.rv = variant;
        setDelay(el, base + Math.min(i, 8) * step);
      });
      // Wrap each word in a span so headings can rise word by word (counter restarts for each language span)
      const words = (sel, delay = 0) => document.querySelectorAll(sel).forEach(el => {
        el.dataset.words = "";
        setDelay(el, delay);
        let i = 0;
        (function walk(node) {
          [...node.childNodes].forEach(n => {
            if (n.nodeType === 1) { if (n.matches(".en, .ar")) i = 0; walk(n); return; }
            if (n.nodeType !== 3 || !n.textContent.trim()) return;
            const frag = document.createDocumentFragment();
            n.textContent.split(/(\s+)/).forEach(part => {
              if (!part) return;
              if (!part.trim()) { frag.append(part); return; }
              const w = document.createElement("span");
              w.className = "w";
              w.textContent = part;
              w.style.setProperty("--i", i++);
              frag.append(w);
            });
            n.replaceWith(frag);
          });
        })(el);
      });

      reveal(".hero .eyebrow");
      reveal(".loc-badge", null, 80);
      words(".hero .hero-title .calli", 120);
      words(".hero .hero-title .name-en", 520);
      reveal(".hero .lede", null, 700);
      reveal(".hero-cta", null, 850);
      stagger(".plate > div", null, 110, 1000);

      reveal(".sec-head .eyebrow, #clients .eyebrow");
      words(".sec-head h2, .sub-h", 80);
      reveal(".sec-head > p:not(.eyebrow)", null, 320);
      stagger(".svc-grid > .svc", null, 90);
      reveal(".feat-art", "zoom");
      stagger(".feat-list > li", "start", 80);
      stagger(".shots > .shot", null, 110);
      reveal(".reel", "zoom");
      stagger(".fleet-row", null, 120);
      reveal(".fleet-note", null, 200);
      document.querySelector(".steps").dataset.io = "";
      stagger(".steps > li", null, 160, 200);
      stagger(".chips > li", "zoom", 45);
      stagger(".why > li", "start", 100);
      stagger(".faq details", null, 70);
      stagger(".lines > *", "start", 90);
      reveal(".form", "zoom", 150);
      reveal(".map-wrap", null, 250);

      // Count numbers up from zero when they come into view
      document.querySelectorAll(".plate b.ltr, .gal").forEach(el => el.dataset.count = "");
      const countUp = el => {
        const node = [...el.childNodes].find(n => n.nodeType === 3 && /\d/.test(n.textContent));
        if (!node) return;
        const tpl = node.textContent;
        const nums = tpl.match(/\d[\d,]*/g).map(s => +s.replace(/,/g, ""));
        const t0 = performance.now(), dur = 1400;
        (function tick(now) {
          // rAF timestamps can precede t0 on the first frame; clamp so the count never goes negative
          const p = Math.min(Math.max((now - t0) / dur, 0), 1), e = 1 - Math.pow(1 - p, 3);
          let k = 0;
          node.textContent = tpl.replace(/\d[\d,]*/g, () => Math.round(nums[k++] * e).toLocaleString("en-US"));
          if (p < 1) requestAnimationFrame(tick);
        })(t0);
      };

      const show = el => {
        el.classList.add("in");
        const d = el._d || 0;
        el.querySelectorAll("[data-count]").forEach(c => setTimeout(() => countUp(c), d));
        // Once revealed, drop the reveal transition so the element's own hover transitions take over
        setTimeout(() => el.classList.add("done"), d + 1000);
      };
      const io = new IntersectionObserver(entries => entries.forEach(({ isIntersecting, target }) => {
        if (isIntersecting) { io.unobserve(target); show(target); }
      }), { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
      // The hero is the first view, so it plays on load (after one painted frame); the rest waits until scrolled into view
      document.querySelectorAll(".rv, [data-words], [data-io]").forEach(el =>
        el.closest(".hero") ? requestAnimationFrame(() => requestAnimationFrame(() => show(el))) : io.observe(el));

      // Looping effects (pulse, button ring, marker rings, beacon) pause while their part of the page is off screen, so the phone isn't repainting what nobody sees
      const loops = new IntersectionObserver(entries => entries.forEach(({ isIntersecting, target }) =>
        target.classList.toggle("off", !isIntersecting)));
      document.querySelectorAll(".strip, .hero, #work, #features").forEach(el => loops.observe(el));
    }

    /* ===== Hero photos of the tanker, shown one after another ===== */
    const tkPhotos = document.getElementById("tkPhotos");
    if (tkPhotos) {
      const slides = [...tkPhotos.querySelectorAll(".tk-stage img")];
      const dots = tkPhotos.querySelector(".tk-dots");
      if (slides.length > 1) {
        let at = 0, timer = 0;
        const show = n => {
          at = (n + slides.length) % slides.length;
          slides.forEach((img, k) => img.classList.toggle("on", k === at));
          buttons.forEach((b, k) => b.setAttribute("aria-pressed", String(k === at)));
        };
        const rest = () => { clearInterval(timer); timer = setInterval(() => show(at + 1), 4000); };
        const stop = () => clearInterval(timer);
        const buttons = slides.map((img, n) => {
          const b = document.createElement("button");
          b.type = "button";
          b.setAttribute("aria-label", "Photo " + (n + 1) + " of " + slides.length);
          b.setAttribute("aria-pressed", String(n === 0));
          b.addEventListener("click", () => { show(n); rest(); });
          dots.append(b);
          return b;
        });
        // Hold still while someone is looking at one photo, or while the tab is in the background
        tkPhotos.addEventListener("pointerenter", stop);
        tkPhotos.addEventListener("pointerleave", rest);
        tkPhotos.addEventListener("focusin", stop);
        tkPhotos.addEventListener("focusout", rest);
        document.addEventListener("visibilitychange", () => document.hidden ? stop() : rest());
        if (!matchMedia("(prefers-reduced-motion: reduce)").matches) rest();
      }
    }

    /* ===== Video reel: loops with sound on. Browsers refuse sound until the visitor has tapped, clicked or
       pressed a key on the page, so until then it plays muted and the sound comes on with that first interaction ===== */
    const reel = document.getElementById("reel");
    if (reel) {
      const video = document.getElementById("reelVideo");
      let userPaused = matchMedia("(prefers-reduced-motion: reduce)").matches;  // visitors who ask for less motion start paused
      let wantSound = true;                   // false once the visitor presses Mute
      let retry = 0, tries = 0;
      const sync = () => reel.classList.toggle("paused", video.paused);
      // At least a quarter of the video on screen, measured at the moment of asking so a late layout change can't leave it stale
      const onScreen = () => {
        const r = reel.getBoundingClientRect();
        return Math.min(r.bottom, innerHeight) - Math.max(r.top, 0) >= r.height * 0.25;
      };
      // Called by everything that might let the video start; does nothing unless it should be playing right now
      const play = () => {
        clearTimeout(retry);
        if (userPaused || document.hidden || !video.paused || video.readyState < 2 || !onScreen()) return;
        video.muted = !wantSound;
        video.play().catch(e => {
          if (e && e.name === "NotAllowedError" && !video.muted) {
            video.muted = true;               // only the sound was refused: keep playing, muted
            reel.classList.add("needs-tap");  // and make the Sound on button stand out
            return video.play();
          }
          throw e;
        }).catch(() => {
          // Refused even muted (for example the tab isn't showing yet): try again shortly rather than stay stuck
          if (++tries <= 5) retry = setTimeout(play, 1000);
        });
      };
      const unlockEvents = ["click", "keydown", "touchend"];
      const stopUnlock = () => unlockEvents.forEach(t => document.removeEventListener(t, unlock, true));
      function unlock(e) {
        if (e.target.closest && e.target.closest(".reel-ctrl")) return;                   // the reel's own buttons decide
        if (navigator.userActivation && !navigator.userActivation.hasBeenActive) return;  // e.g. a swipe, which doesn't count
        stopUnlock();
        if (wantSound && video.muted) video.muted = false;
        tries = 0;
        play();                               // also starts a video the browser had refused to play
      }
      unlockEvents.forEach(t => document.addEventListener(t, unlock, true));

      const onMeta = () => reel.classList.toggle("landscape", video.videoWidth > video.videoHeight);
      const onData = () => { reel.classList.add("ready"); sync(); play(); };
      video.addEventListener("loadedmetadata", onMeta);
      video.querySelector("source").addEventListener("error", () => reel.classList.add("landscape"));
      video.addEventListener("loadeddata", onData);
      video.addEventListener("canplay", play);
      video.addEventListener("playing", () => { tries = 0; });
      video.addEventListener("play", sync);
      video.addEventListener("pause", sync);
      video.addEventListener("volumechange", () => {
        reel.classList.toggle("sound", !video.muted);
        if (!video.muted) reel.classList.remove("needs-tap");
      });
      document.getElementById("reelPlay").addEventListener("click", () => {
        userPaused = !video.paused;
        tries = 0;
        if (video.paused) play(); else video.pause();
      });
      document.getElementById("reelSound").addEventListener("click", () => {
        stopUnlock();
        wantSound = video.muted;
        video.muted = !wantSound;
        if (wantSound && video.paused) { userPaused = false; tries = 0; play(); }
      });
      // Play when the video comes on screen or the tab comes back; pause when either goes away, to save battery and data
      new IntersectionObserver(() => {
        if (!reel.classList.contains("ready")) return;
        if (onScreen()) play(); else video.pause();
      }, { threshold: [0, 0.25, 0.5] }).observe(reel);
      document.addEventListener("visibilitychange", () => {
        if (!reel.classList.contains("ready")) return;
        if (document.hidden) video.pause(); else play();
      });
      // The video downloads as soon as the page itself has loaded, so it doesn't slow the first view but is ready
      // well before the visitor scrolls to it
      const preload = () => { if (video.preload !== "auto") { video.preload = "auto"; video.load(); } };
      if (document.readyState === "complete") preload(); else window.addEventListener("load", preload, { once: true });
      if (video.readyState >= 1) onMeta();
      if (video.readyState >= 2) onData();
      else if (video.networkState === HTMLMediaElement.NETWORK_NO_SOURCE) reel.classList.add("landscape");
    }

    /* ===== Tanker features: hovering, focusing or tapping a feature lights its marker on the drawing ===== */
    const featItems = document.querySelectorAll(".feat-list li");
    const featMarks = document.querySelectorAll(".mk");
    const lightFeature = n => {
      featItems.forEach(li => li.classList.toggle("on", li.dataset.f === n));
      featMarks.forEach(m => m.classList.toggle("on", m.dataset.f === n));
    };
    featItems.forEach(li => {
      li.tabIndex = 0;
      ["mouseenter", "focus", "click"].forEach(ev => li.addEventListener(ev, () => lightFeature(li.dataset.f)));
    });
    featMarks.forEach(m => m.addEventListener("click", () => lightFeature(m.dataset.f)));
    if (featItems.length) lightFeature("1");

    /* ===== 3D tanker — Three.js is fetched only when the section nears the screen ===== */
    function fallback3d(stage) {
      const p = document.createElement("p");
      p.className = "fallback";
      p.innerHTML = '<span class="en">The 3D view needs an internet connection and a browser with WebGL.</span>' +
                    '<span class="ar">يحتاج العرض ثلاثي الأبعاد إلى اتصال بالإنترنت ومتصفح يدعم WebGL.</span>';
      stage.querySelector(".hint").hidden = true;
      stage.append(p);
      document.getElementById("views3d").hidden = true;
    }

    function initTruck3D(stage) {
      const T = THREE;
      const renderer = new T.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.outputEncoding = T.sRGBEncoding;
      renderer.toneMapping = T.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.05;
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = T.PCFSoftShadowMap;
      stage.prepend(renderer.domElement);

      const scene = new T.Scene();
      const camera = new T.PerspectiveCamera(32, 2, 0.1, 100);
      scene.add(new T.HemisphereLight(0xfff4d6, 0x13212f, 0.75));
      const sun = new T.DirectionalLight(0xfff1d0, 1.35);
      sun.position.set(6, 10, 7);
      sun.castShadow = true;
      sun.shadow.mapSize.set(1024, 1024);
      Object.assign(sun.shadow.camera, { left: -8, right: 8, top: 8, bottom: -8, near: 1, far: 30 });
      scene.add(sun);
      const rim = new T.DirectionalLight(0x9cc3ff, 0.45);
      rim.position.set(-8, 5, -6);
      scene.add(rim);
      const ground = new T.Mesh(new T.CircleGeometry(9, 64), new T.ShadowMaterial({ opacity: 0.35 }));
      ground.rotation.x = -Math.PI / 2;
      ground.receiveShadow = true;
      scene.add(ground);

      const mat = (hex, opts = {}) => {
        const m = new T.MeshStandardMaterial(Object.assign({ roughness: 0.5, metalness: 0.15 }, opts));
        m.color.setHex(hex).convertSRGBToLinear();
        return m;
      };
      // Canvas-painted texture; repainted once the web fonts are ready so the lettering uses Lemonada
      const canvasTex = (w, h, draw) => {
        const c = document.createElement("canvas");
        c.width = w; c.height = h;
        const tex = new T.CanvasTexture(c);
        tex.encoding = T.sRGBEncoding;
        tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
        const paint = () => { draw(c.getContext("2d"), w, h); tex.needsUpdate = true; };
        paint();
        Promise.all(['700 120px ' + fontVar("--font-lemonada"), '64px ' + fontVar("--font-marcellus"), '700 108px ' + fontVar("--font-public-sans")].map(f => document.fonts.load(f)))
          .catch(() => {}).then(paint);
        return tex;
      };

      const yellow = mat(0xF2B705, { roughness: 0.38, metalness: 0.2 });
      const yellowDark = mat(0xC99200, { roughness: 0.45, metalness: 0.2 });
      const navy = mat(0x14202B, { roughness: 0.6 });
      const rubber = mat(0x16191C, { roughness: 0.92, metalness: 0 });
      const steel = mat(0xD5DDDD, { roughness: 0.35, metalness: 0.4 });
      const glass = mat(0x1C2C3A, { roughness: 0.08, metalness: 0.6 });
      const hoseMat = mat(0xF4F7F6, { roughness: 0.55, metalness: 0 });
      const beaconMat = mat(0xFF8A1F, { emissive: 0xFF6A00, emissiveIntensity: 1 });
      const lampMat = mat(0xFFF4C8, { emissive: 0xFFE9A8, emissiveIntensity: 0.7 });
      const tailMat = mat(0xD9534F, { emissive: 0x7A1010, emissiveIntensity: 0.6 });

      const chevCanvas = document.createElement("canvas");
      chevCanvas.width = 128; chevCanvas.height = 64;
      const cg = chevCanvas.getContext("2d");
      cg.fillStyle = "#F2B705"; cg.fillRect(0, 0, 128, 64);
      cg.fillStyle = "#14202B";
      [0, 64].forEach(x => {
        cg.beginPath();
        cg.moveTo(x + 6, 0); cg.lineTo(x + 30, 0); cg.lineTo(x + 54, 32);
        cg.lineTo(x + 30, 64); cg.lineTo(x + 6, 64); cg.lineTo(x + 30, 32);
        cg.closePath(); cg.fill();
      });
      const chevMat = repeat => {
        const tx = new T.CanvasTexture(chevCanvas);
        tx.encoding = T.sRGBEncoding;
        tx.wrapS = T.RepeatWrapping;
        tx.repeat.set(repeat, 1);
        return new T.MeshStandardMaterial({ map: tx, roughness: 0.5 });
      };

      // truck spins on its own group; model is shifted so the rotation centre sits mid-truck
      const truck = new T.Group(), model = new T.Group();
      model.position.x = 0.6;
      truck.add(model);
      scene.add(truck);
      const add = (geo, material, x, y, z, parent = model) => {
        const m = new T.Mesh(geo, material);
        m.position.set(x, y, z);
        m.castShadow = m.receiveShadow = true;
        parent.add(m);
        return m;
      };

      // Tank: an open cylinder wrapped in one painted canvas (circumference × length).
      // Canvas centre column faces +z; the -z side straddles the wrap seam, so it is painted at both edges.
      const R = 1.12, L = 5.4, TX = -1.0, TY = 2.25;
      const tankTex = canvasTex(2048, Math.round(2048 * L / (2 * Math.PI * R)), (g, W, H) => {
        g.fillStyle = "#F2B705";
        g.fillRect(0, 0, W, H);
        const lettering = (x, turn) => {
          g.save();
          g.translate(x, H / 2);
          g.rotate(turn);
          g.fillStyle = "#14202B";
          g.textAlign = "center";
          g.textBaseline = "middle";
          g.font = '64px ' + fontVar("--font-marcellus") + ', Georgia, serif';
          g.fillText("SEWERAGE WATER TANK", 0, -250);
          g.fillRect(-380, -195, 760, 5);
          g.direction = "rtl";
          g.font = '700 120px ' + fontVar("--font-lemonada") + ', ' + fontVar("--font-amiri") + ', serif';
          g.fillText("الشفط میاں مجاری", 0, -40);
          g.direction = "ltr";
          g.font = '700 108px ' + fontVar("--font-public-sans") + ', sans-serif';
          g.fillText(CONFIG.whatsappDisplay, 0, 190);
          g.restore();
        };
        lettering(W / 2, -Math.PI / 2);
        lettering(0, Math.PI / 2);
        lettering(W, Math.PI / 2);
      });
      const tank = add(new T.CylinderGeometry(R, R, L, 72, 1, true, Math.PI, Math.PI * 2),
        mat(0xFFFFFF, { map: tankTex, roughness: 0.38, metalness: 0.2 }), TX, TY, 0);
      tank.rotation.z = -Math.PI / 2;
      [-1, 1].forEach(s => {
        const dome = add(new T.SphereGeometry(R, 48, 24), yellow, TX + s * L / 2, TY, 0);
        dome.scale.x = 0.28;
        add(new T.CylinderGeometry(R + 0.04, R + 0.04, 0.14, 72), yellowDark, TX + s * (L / 2 - 0.06), TY, 0).rotation.z = Math.PI / 2;
      });
      [-2.3, 0.3].forEach(x => add(new T.CylinderGeometry(0.36, 0.4, 0.18, 32), yellowDark, x, TY + R, 0));
      [0.6, -0.6].forEach(z => {
        add(new T.CylinderGeometry(0.035, 0.035, 4.6, 8), yellowDark, TX, TY + 1.45, z).rotation.z = Math.PI / 2;
        [-3.1, -1.0, 1.1].forEach(x => add(new T.CylinderGeometry(0.03, 0.03, 0.55, 8), yellowDark, x, TY + 1.2, z));
      });

      // Front ladder between tank and cab
      [0.32, -0.32].forEach(z => add(new T.BoxGeometry(0.06, 2.6, 0.06), yellowDark, 2.12, 2.35, z));
      for (let y = 1.3; y < 3.6; y += 0.36) add(new T.BoxGeometry(0.05, 0.05, 0.64), yellowDark, 2.12, y, 0);

      // Chassis
      add(new T.BoxGeometry(8.2, 0.28, 1.1), navy, -0.05, 0.95, 0);
      [-3.2, -1.0, 1.2].forEach(x => add(new T.BoxGeometry(0.2, 0.2, 1.4), navy, x, 1.15, 0));

      // Cab
      add(new T.BoxGeometry(2.1, 2.5, 2.4), yellow, 3.25, 2.45, 0);
      add(new T.BoxGeometry(1.95, 0.2, 2.25), yellow, 3.2, 3.8, 0);
      add(new T.BoxGeometry(0.28, 0.08, 2.3), navy, 4.22, 3.6, 0);
      add(new T.BoxGeometry(0.06, 0.95, 2.1), glass, 4.31, 3.05, 0);
      [1.21, -1.21].forEach(z => add(new T.BoxGeometry(1.0, 0.8, 0.04), glass, 3.6, 3.05, z));
      add(new T.BoxGeometry(0.06, 0.7, 1.5), navy, 4.31, 2.05, 0);
      [0.85, -0.85].forEach(z => add(new T.BoxGeometry(0.06, 0.22, 0.4), lampMat, 4.32, 1.5, z));
      add(new T.BoxGeometry(0.3, 0.34, 2.5), navy, 4.3, 1.12, 0);
      add(new T.BoxGeometry(0.02, 0.2, 2.4), chevMat(8), 4.46, 1.12, 0);
      [1.42, -1.42].forEach(z => add(new T.BoxGeometry(0.1, 0.5, 0.1), navy, 4.15, 3.0, z));
      add(new T.BoxGeometry(0.42, 0.16, 0.32), beaconMat, 3.25, 3.98, 0);
      const doorTex = canvasTex(256, 128, (g, W, H) => {
        g.clearRect(0, 0, W, H);
        g.fillStyle = "#14202B";
        g.textAlign = "center";
        g.textBaseline = "middle";
        g.font = '700 84px ' + fontVar("--font-public-sans") + ', sans-serif';
        g.fillText("24/7", W / 2, H / 2);
      });
      const doorMat = new T.MeshStandardMaterial({ map: doorTex, transparent: true, roughness: 0.5 });
      [1, -1].forEach(s => {
        const plate = add(new T.PlaneGeometry(0.8, 0.4), doorMat, 3.3, 1.95, s * 1.205);
        plate.rotation.y = s < 0 ? Math.PI : 0;
        plate.castShadow = false;
      });

      // Wheels (lug nuts make the turning readable)
      const tireGeo = new T.CylinderGeometry(0.58, 0.58, 0.46, 40);
      const hubGeo = new T.CylinderGeometry(0.3, 0.3, 0.48, 24);
      const nutGeo = new T.BoxGeometry(0.07, 0.07, 0.5);
      [-2.7, -1.45, 3.25].forEach(x => [1.02, -1.02].forEach(z => {
        const w = new T.Group();
        w.position.set(x, 0.58, z);
        model.add(w);
        add(tireGeo, rubber, 0, 0, 0, w).rotation.x = Math.PI / 2;
        add(hubGeo, steel, 0, 0, 0, w).rotation.x = Math.PI / 2;
        for (let i = 0; i < 6; i++) add(nutGeo, navy, Math.cos(i * Math.PI / 3) * 0.18, Math.sin(i * Math.PI / 3) * 0.18, 0, w);
      }));

      // Chevron guards, tail lights
      [1.1, -1.1].forEach(z => add(new T.BoxGeometry(3.2, 0.22, 0.04), chevMat(10), 0.9, 0.72, z));
      add(new T.BoxGeometry(0.1, 0.26, 2.2), chevMat(7), -4.2, 0.85, 0);
      [0.9, -0.9].forEach(z => add(new T.BoxGeometry(0.06, 0.14, 0.3), tailMat, -4.26, 1.1, z));

      // Rear valve, suction hose, manhole
      add(new T.CylinderGeometry(0.12, 0.12, 0.35, 16), steel, -4.1, 1.45, 0.55).rotation.z = Math.PI / 2;
      const hosePath = new T.CatmullRomCurve3([
        [-4.25, 1.45, 0.55], [-4.8, 1.35, 0.75], [-5.2, 0.9, 1.15],
        [-5.35, 0.35, 1.65], [-5.55, 0.13, 2.15], [-5.95, 0.1, 2.35]
      ].map(p => new T.Vector3(p[0], p[1], p[2])));
      add(new T.TubeGeometry(hosePath, 90, 0.11, 14), hoseMat, 0, 0, 0);
      add(new T.CylinderGeometry(0.55, 0.55, 0.04, 40), navy, -6.15, 0.02, 2.4);

      // Interaction: drag with inertia, preset views, gentle auto-turn when idle
      const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
      const viewAngles = { side: 0, three: -0.6, front: -Math.PI / 2, rear: Math.PI / 2 };
      const buttons = document.querySelectorAll("#views3d [data-view]");
      let rot = -0.6, target = rot, vel = 0, dragging = false, lastX = 0;
      let autoUntil = performance.now() + 2500, visible = false, raf = 0;

      const wake = () => { if (visible && !raf) raf = requestAnimationFrame(frame); };
      const unpress = () => buttons.forEach(b => b.setAttribute("aria-pressed", "false"));
      function frame() {
        raf = 0;
        if (!visible) return;
        const now = performance.now();
        if (!dragging) {
          if (Math.abs(vel) > 0.0005) { rot += vel; vel *= 0.92; target = rot; }
          else if (!reduce && now > autoUntil) { rot += 0.004; target = rot; }
          else rot += (target - rot) * (reduce ? 1 : 0.09);
        }
        truck.rotation.y = rot;
        beaconMat.emissiveIntensity = reduce ? 1 : 0.4 + 0.9 * Math.abs(Math.sin(now / 1000 * 3.2));
        renderer.render(scene, camera);
        raf = requestAnimationFrame(frame);
      }

      buttons.forEach(b => b.addEventListener("click", () => {
        let d = (viewAngles[b.dataset.view] - rot) % (Math.PI * 2);
        if (d > Math.PI) d -= Math.PI * 2;
        if (d < -Math.PI) d += Math.PI * 2;
        target = rot + d;
        vel = 0;
        autoUntil = performance.now() + 8000;
        unpress();
        b.setAttribute("aria-pressed", "true");
        wake();
      }));
      stage.addEventListener("pointerdown", e => {
        dragging = true;
        lastX = e.clientX;
        vel = 0;
        stage.setPointerCapture(e.pointerId);
        unpress();
      });
      stage.addEventListener("pointermove", e => {
        if (!dragging) return;
        const dx = e.clientX - lastX;
        lastX = e.clientX;
        rot += dx * 0.012;
        vel = dx * 0.012;
        target = rot;
        autoUntil = performance.now() + 5000;
      });
      const release = () => { dragging = false; autoUntil = performance.now() + 4000; };
      stage.addEventListener("pointerup", release);
      stage.addEventListener("pointercancel", release);
      stage.addEventListener("keydown", e => {
        if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
        e.preventDefault();
        target = rot + (e.key === "ArrowLeft" ? -0.4 : 0.4);
        vel = 0;
        autoUntil = performance.now() + 6000;
        unpress();
      });

      // Keep the whole truck in frame at any stage size (narrow screens pull the camera back)
      const fit = () => {
        const w = stage.clientWidth, h = stage.clientHeight;
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        const half = Math.tan(T.MathUtils.degToRad(camera.fov / 2));
        const dist = Math.max(7.2 / (half * camera.aspect), 3.4 / half);
        camera.position.set(0, 1.9 + dist * 0.22, dist);
        camera.lookAt(0, 1.7, 0);
        camera.updateProjectionMatrix();
        truck.rotation.y = rot;
        renderer.render(scene, camera);
      };
      new ResizeObserver(fit).observe(stage);
      fit();
      new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; wake(); }).observe(stage);
    }

    const stage3d = document.getElementById("stage3d");
    if (stage3d) {
      const lazy3d = new IntersectionObserver(([entry]) => {
        if (!entry.isIntersecting) return;
        lazy3d.disconnect();
        new Promise((ok, fail) => {
          if (window.THREE) return ok();
          const s = document.createElement("script");
          s.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";
          s.integrity = "sha512-dLxUelApnYxpLt6K2iomGngnHO83iUvZytA3YjDUCjT0HDOHKXnVYdf3hU4JjM8uEhxf9nD1/ey98U3t2vZ0qQ==";
          s.crossOrigin = "anonymous";
          s.onload = ok;
          s.onerror = fail;
          document.head.append(s);
        }).then(() => initTruck3D(stage3d)).catch(() => fallback3d(stage3d));
      }, { rootMargin: "400px 0px" });
      lazy3d.observe(stage3d);
    }

    /* ===== Map: the buttons above it switch between the two locations ===== */
    const mapFrame = document.getElementById("mapFrame");
    const mapButtons = document.querySelectorAll(".map-tabs [data-map]");
    mapButtons.forEach(b => b.addEventListener("click", () => {
      mapButtons.forEach(o => o.setAttribute("aria-pressed", String(o === b)));
      mapFrame.title = b.dataset.title;
      mapFrame.src = "https://www.google.com/maps?q=" + encodeURIComponent(b.dataset.map) + "&output=embed";
    }));

    const form = document.getElementById("quote");
    const status = document.getElementById("formStatus");
    form.addEventListener("submit", e => {
      e.preventDefault();
      const ar = site.dataset.lang === "ar";
      const v = id => document.getElementById(id).value.trim();
      const name = v("q-name"), phone = v("q-phone");
      if (!name || !phone) {
        status.textContent = ar ? "يرجى كتابة الاسم ورقم الهاتف لنتمكن من التواصل معك."
                                : "Add your name and phone number so we can call you back.";
        (!name ? document.getElementById("q-name") : document.getElementById("q-phone")).focus();
        return;
      }
      const sel = id => { const s = document.getElementById(id); return s.options[s.selectedIndex].text; };
      const msg = [
        ar ? "طلب صهريج شفط" : "Tanker request",
        (ar ? "الاسم: " : "Name: ") + name,
        (ar ? "الهاتف: " : "Phone: ") + phone,
        (ar ? "الخدمة: " : "Service: ") + sel("q-service"),
        (ar ? "الحجم: " : "Tanker: ") + sel("q-size"),
        (ar ? "الموقع: " : "Location: ") + (v("q-area") || "-"),
        v("q-notes") ? (ar ? "تفاصيل: " : "Details: ") + v("q-notes") : ""
      ].filter(Boolean).join("\n");
      const url = "https://wa.me/" + CONFIG.whatsappIntl + "?text=" + encodeURIComponent(msg);
      window.open(url, "_blank", "noopener");
      status.innerHTML = "";
      status.append(ar ? "تم تجهيز رسالتك في واتساب. إن لم تفتح، " : "Your message is ready in WhatsApp. If it didn't open, ");
      const link = document.createElement("a");
      link.href = url; link.target = "_blank"; link.rel = "noopener";
      link.textContent = ar ? "اضغط هنا" : "tap here";
      status.append(link, ".");
    });
  })();
}
