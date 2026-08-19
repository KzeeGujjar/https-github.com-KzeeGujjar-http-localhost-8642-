(function () {
  var translations = {
    en: {
      "nav.about": "About",
      "nav.menu": "Menu",
      "nav.signature": "Signature Pizzas",
      "nav.gallery": "Gallery",
      "nav.reviews": "Reviews",
      "nav.contact": "Contact",
      "nav.book": "Book a Table",
      "hero.h1": "Authentic Italian Taste",
      "hero.subtitle": "Wood-fired pizza crafted the traditional way on the Bologna coastline of flavor — fresh ingredients, family recipes, and a warm welcome for every table.",
      "hero.order": "Order Now",
      "about.eyebrow": "About Us",
      "about.h2": "Our Story",
      "about.p": "La Praia opened its doors in Bologna with one simple goal: bring the taste of authentic Italian coastal pizza to every table. Our dough proofs for 48 hours, our tomatoes come from local growers, and our oven never stops burning wood. Whether you're dining in, taking away, or having it delivered, every pizza is made to order — no shortcuts, no compromises.",
      "about.stat1": "1,227 Google reviews",
      "about.stat2": "Slow-proofed dough",
      "about.stat3": "Wood-fired oven",
      "signature.eyebrow": "Chef's Selection",
      "signature.h2": "Signature Pizzas",
      "signature.subtitle": "The three pizzas our guests order again and again.",
      "signature.badge1": "House Specialty",
      "signature.badge2": "Coastal Classic",
      "signature.badge3": "Guest Favorite",
      "signature.desc1": "The pizza that carries our name — mozzarella, gorgonzola and friarielli, bold and unmistakably ours.",
      "signature.desc2": "Cooked ham and crispy fried calamari over tomato and mozzarella — a taste of the coast.",
      "signature.desc3": "Brie, gorgonzola and radicchio meet in a rich, velvety balance of flavor.",
      "menu.h2": "Our Pizza Menu",
      "menu.subtitle": "A selection from our menu. More items coming soon.",
      "menu.praia": "Mozzarella, gorgonzola, friarielli. Our house specialty.",
      "menu.amalfi": "Tomato, mozzarella, cooked ham, fried calamari.",
      "menu.atrani": "Tomato, mozzarella, brie, gorgonzola, radicchio.",
      "menu.maiori": "Tomato, mozzarella, broccoli, salsiccia.",
      "menu.tramonti": "Tomato, mozzarella, salsiccia, friarielli.",
      "menu.ravello": "Mozzarella, scamorza, friarielli.",
      "menu.positano": "Tomato, mozzarella, wurstel, fried potatoes.",
      "menu.gorgonzola": "Tomato, mozzarella, gorgonzola.",
      "menu.tonno": "Tomato, mozzarella, tuna.",
      "menu.ischia": "Mozzarella, grana.",
      "gallery.eyebrow": "A Look Inside",
      "gallery.h2": "Gallery",
      "gallery.subtitle": "Photography coming soon — this section will host real shots of the kitchen, dishes, and dining room.",
      "reviews.eyebrow": "Word of Mouth",
      "reviews.h2": "What Our Guests Say",
      "reviews.subtitle": "4.2★ average from 1,227 Google reviews.",
      "reviews.note": "Reviews are shown in their original language.",
      "reservation.eyebrow": "Reservations",
      "reservation.p": "Join us for lunch or dinner — reservations are recommended, especially on weekends. Fill in your details and our team will confirm your table.",
      "form.fullName": "Full Name",
      "form.namePlaceholder": "Your name",
      "form.phone": "Phone",
      "form.date": "Date",
      "form.time": "Time",
      "form.guests": "Guests",
      "form.select": "Select",
      "form.notes": "Special Requests",
      "form.notesPlaceholder": "Allergies, occasions, seating preference...",
      "contact.eyebrow": "Contact & Hours",
      "contact.hoursH2": "Opening Hours",
      "contact.day1": "Monday",
      "contact.day2": "Tuesday – Saturday",
      "contact.day3": "Sunday",
      "contact.findUs": "Find Us",
      "contact.directions": "Get Directions",
      "footer.tagline": "Ristorante Pizzeria — Bologna, Italy",
      "footer.copyright": "© 2026 La Praia. All rights reserved."
    },
    it: {
      "nav.about": "Chi Siamo",
      "nav.menu": "Menù",
      "nav.signature": "Pizze Signature",
      "nav.gallery": "Galleria",
      "nav.reviews": "Recensioni",
      "nav.contact": "Contatti",
      "nav.book": "Prenota un Tavolo",
      "hero.h1": "L'Autentico Sapore Italiano",
      "hero.subtitle": "Pizza cotta a legna, preparata secondo la tradizione nel cuore di Bologna — ingredienti freschi, ricette di famiglia e un'accoglienza calorosa per ogni tavolo.",
      "hero.order": "Ordina Ora",
      "about.eyebrow": "Chi Siamo",
      "about.h2": "La Nostra Storia",
      "about.p": "La Praia ha aperto le sue porte a Bologna con un obiettivo semplice: portare il sapore dell'autentica pizza costiera italiana su ogni tavolo. Il nostro impasto lievita per 48 ore, i nostri pomodori arrivano da produttori locali e il nostro forno a legna non si spegne mai. Che tu stia mangiando qui, portando via o ricevendo la consegna a domicilio, ogni pizza è preparata al momento — senza scorciatoie, senza compromessi.",
      "about.stat1": "1.227 recensioni Google",
      "about.stat2": "Impasto a lunga lievitazione",
      "about.stat3": "Forno a legna",
      "signature.eyebrow": "Selezione dello Chef",
      "signature.h2": "Pizze Signature",
      "signature.subtitle": "Le tre pizze che i nostri ospiti ordinano sempre di nuovo.",
      "signature.badge1": "Specialità della Casa",
      "signature.badge2": "Classico Costiero",
      "signature.badge3": "Preferita dagli Ospiti",
      "signature.desc1": "La pizza che porta il nostro nome — mozzarella, gorgonzola e friarielli, decisa e inconfondibilmente nostra.",
      "signature.desc2": "Prosciutto cotto e calamari fritti croccanti su pomodoro e mozzarella — un sapore di mare.",
      "signature.desc3": "Brie, gorgonzola e radicchio si incontrano in un equilibrio di sapori ricco e vellutato.",
      "menu.h2": "Il Nostro Menù Pizze",
      "menu.subtitle": "Una selezione dal nostro menù. Presto altri piatti.",
      "menu.praia": "Mozzarella, gorgonzola, friarielli. La nostra specialità.",
      "menu.amalfi": "Pomodoro, mozzarella, prosciutto cotto, calamari fritti.",
      "menu.atrani": "Pomodoro, mozzarella, brie, gorgonzola, radicchio.",
      "menu.maiori": "Pomodoro, mozzarella, broccoli, salsiccia.",
      "menu.tramonti": "Pomodoro, mozzarella, salsiccia, friarielli.",
      "menu.ravello": "Mozzarella, scamorza, friarielli.",
      "menu.positano": "Pomodoro, mozzarella, wurstel, patate fritte.",
      "menu.gorgonzola": "Pomodoro, mozzarella, gorgonzola.",
      "menu.tonno": "Pomodoro, mozzarella, tonno.",
      "menu.ischia": "Mozzarella, grana.",
      "gallery.eyebrow": "Uno Sguardo all'Interno",
      "gallery.h2": "Galleria",
      "gallery.subtitle": "Foto in arrivo — questa sezione ospiterà scatti reali della cucina, dei piatti e della sala.",
      "reviews.eyebrow": "Il Passaparola",
      "reviews.h2": "Cosa Dicono i Nostri Ospiti",
      "reviews.subtitle": "Media di 4,2★ su 1.227 recensioni Google.",
      "reviews.note": "Le recensioni sono mostrate nella lingua originale.",
      "reservation.eyebrow": "Prenotazioni",
      "reservation.p": "Vieni a pranzo o cena da noi — la prenotazione è consigliata, soprattutto nei weekend. Compila i tuoi dati e il nostro staff confermerà il tuo tavolo.",
      "form.fullName": "Nome Completo",
      "form.namePlaceholder": "Il tuo nome",
      "form.phone": "Telefono",
      "form.date": "Data",
      "form.time": "Ora",
      "form.guests": "Ospiti",
      "form.select": "Seleziona",
      "form.notes": "Richieste Speciali",
      "form.notesPlaceholder": "Allergie, occasioni, preferenze di posto...",
      "contact.eyebrow": "Contatti e Orari",
      "contact.hoursH2": "Orari di Apertura",
      "contact.day1": "Lunedì",
      "contact.day2": "Martedì – Sabato",
      "contact.day3": "Domenica",
      "contact.findUs": "Dove Siamo",
      "contact.directions": "Indicazioni Stradali",
      "footer.tagline": "Ristorante Pizzeria — Bologna, Italia",
      "footer.copyright": "© 2026 La Praia. Tutti i diritti riservati."
    },
    es: {
      "nav.about": "Nosotros",
      "nav.menu": "Menú",
      "nav.signature": "Pizzas Emblemáticas",
      "nav.gallery": "Galería",
      "nav.reviews": "Reseñas",
      "nav.contact": "Contacto",
      "nav.book": "Reservar una Mesa",
      "hero.h1": "El Auténtico Sabor Italiano",
      "hero.subtitle": "Pizza al horno de leña, elaborada de forma tradicional en el corazón de Bolonia — ingredientes frescos, recetas familiares y una cálida bienvenida para cada mesa.",
      "hero.order": "Ordenar Ahora",
      "about.eyebrow": "Sobre Nosotros",
      "about.h2": "Nuestra Historia",
      "about.p": "La Praia abrió sus puertas en Bolonia con un objetivo simple: llevar el sabor de la auténtica pizza costera italiana a cada mesa. Nuestra masa fermenta durante 48 horas, nuestros tomates provienen de productores locales y nuestro horno de leña nunca se apaga. Ya sea que comas aquí, pidas para llevar o recibas la entrega a domicilio, cada pizza se prepara al momento — sin atajos, sin compromisos.",
      "about.stat1": "1.227 reseñas de Google",
      "about.stat2": "Masa de fermentación lenta",
      "about.stat3": "Horno de leña",
      "signature.eyebrow": "Selección del Chef",
      "signature.h2": "Pizzas Emblemáticas",
      "signature.subtitle": "Las tres pizzas que nuestros clientes piden una y otra vez.",
      "signature.badge1": "Especialidad de la Casa",
      "signature.badge2": "Clásico Costero",
      "signature.badge3": "Favorita de los Clientes",
      "signature.desc1": "La pizza que lleva nuestro nombre — mozzarella, gorgonzola y friarielli, audaz e inconfundiblemente nuestra.",
      "signature.desc2": "Jamón cocido y calamares fritos crujientes sobre tomate y mozzarella — un sabor de la costa.",
      "signature.desc3": "Brie, gorgonzola y radicchio se combinan en un equilibrio de sabores rico y aterciopelado.",
      "menu.h2": "Nuestro Menú de Pizzas",
      "menu.subtitle": "Una selección de nuestro menú. Pronto más platos.",
      "menu.praia": "Mozzarella, gorgonzola, friarielli. Nuestra especialidad.",
      "menu.amalfi": "Tomate, mozzarella, jamón cocido, calamares fritos.",
      "menu.atrani": "Tomate, mozzarella, brie, gorgonzola, radicchio.",
      "menu.maiori": "Tomate, mozzarella, brócoli, salchicha.",
      "menu.tramonti": "Tomate, mozzarella, salchicha, friarielli.",
      "menu.ravello": "Mozzarella, scamorza, friarielli.",
      "menu.positano": "Tomate, mozzarella, salchicha wurstel, patatas fritas.",
      "menu.gorgonzola": "Tomate, mozzarella, gorgonzola.",
      "menu.tonno": "Tomate, mozzarella, atún.",
      "menu.ischia": "Mozzarella, queso grana.",
      "gallery.eyebrow": "Una Mirada por Dentro",
      "gallery.h2": "Galería",
      "gallery.subtitle": "Fotos próximamente — esta sección mostrará imágenes reales de la cocina, los platos y el comedor.",
      "reviews.eyebrow": "El Boca a Boca",
      "reviews.h2": "Lo Que Dicen Nuestros Clientes",
      "reviews.subtitle": "Promedio de 4,2★ de 1.227 reseñas de Google.",
      "reviews.note": "Las reseñas se muestran en su idioma original.",
      "reservation.eyebrow": "Reservas",
      "reservation.p": "Acompáñanos a almorzar o cenar — se recomienda reservar, especialmente los fines de semana. Completa tus datos y nuestro equipo confirmará tu mesa.",
      "form.fullName": "Nombre Completo",
      "form.namePlaceholder": "Tu nombre",
      "form.phone": "Teléfono",
      "form.date": "Fecha",
      "form.time": "Hora",
      "form.guests": "Comensales",
      "form.select": "Seleccionar",
      "form.notes": "Solicitudes Especiales",
      "form.notesPlaceholder": "Alergias, ocasiones, preferencia de mesa...",
      "contact.eyebrow": "Contacto y Horarios",
      "contact.hoursH2": "Horario de Apertura",
      "contact.day1": "Lunes",
      "contact.day2": "Martes – Sábado",
      "contact.day3": "Domingo",
      "contact.findUs": "Cómo Encontrarnos",
      "contact.directions": "Cómo Llegar",
      "footer.tagline": "Ristorante Pizzeria — Bolonia, Italia",
      "footer.copyright": "© 2026 La Praia. Todos los derechos reservados."
    }
  };

  var titles = {
    en: "La Praia — Authentic Italian Pizza, Bologna",
    it: "La Praia — Autentica Pizza Italiana, Bologna",
    es: "La Praia — Auténtica Pizza Italiana, Bolonia"
  };

  var STORAGE_KEY = "la-praia-lang";
  var DEFAULT_LANG = "it";

  function applyLanguage(lang) {
    var dict = translations[lang] || translations[DEFAULT_LANG];

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key]) el.textContent = dict[key];
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-placeholder");
      if (dict[key]) el.setAttribute("placeholder", dict[key]);
    });

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });

    document.documentElement.setAttribute("lang", lang);
    if (titles[lang]) document.title = titles[lang];

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* localStorage unavailable (e.g. private mode) — language just won't persist */
    }
  }

  function initLanguage() {
    var saved = null;
    try {
      saved = localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      /* ignore */
    }
    applyLanguage(saved && translations[saved] ? saved : DEFAULT_LANG);
  }

  document.querySelectorAll(".lang-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      applyLanguage(btn.getAttribute("data-lang"));
    });
  });

  initLanguage();
})();

(function () {
  var items = document.querySelectorAll(".reveal");
  if (!items.length) return;

  var prefersReduced = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReduced || !("IntersectionObserver" in window)) {
    items.forEach(function (el) { el.classList.add("is-visible"); });
    return;
  }

  items.forEach(function (el) {
    var siblings = Array.prototype.filter.call(el.parentElement.children, function (c) {
      return c.classList.contains("reveal");
    });
    var index = siblings.indexOf(el);
    el.style.transitionDelay = Math.min(index * 90, 360) + "ms";
  });

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });

  items.forEach(function (el) { observer.observe(el); });
})();

(function () {
  var toggle = document.getElementById("chat-toggle");
  var win = document.getElementById("chat-window");
  var closeBtn = document.getElementById("chat-close");
  var form = document.getElementById("chat-form");
  var input = document.getElementById("chat-input");
  var messages = document.getElementById("chat-messages");
  var emptyState = document.getElementById("chat-empty");

  if (!toggle || !win || !form || !input || !messages) return;

  var MOCK_REPLY = "Hi! I'm CafeBot. My AI brain isn't connected yet.";

  function addBubble(text, sender) {
    if (emptyState) {
      emptyState.remove();
      emptyState = null;
    }
    var bubble = document.createElement("div");
    bubble.className = "chat-bubble chat-bubble-" + sender;
    bubble.textContent = text;
    messages.appendChild(bubble);
    messages.scrollTop = messages.scrollHeight;
  }

  function openChat() {
    win.hidden = false;
    requestAnimationFrame(function () {
      win.classList.add("open");
      toggle.classList.add("open");
    });
    toggle.setAttribute("aria-expanded", "true");
    input.focus();
  }

  function closeChat() {
    win.classList.remove("open");
    toggle.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");

    var hideAfterTransition = function (e) {
      if (e.target === win && e.propertyName === "opacity") {
        win.hidden = true;
        win.removeEventListener("transitionend", hideAfterTransition);
      }
    };
    win.addEventListener("transitionend", hideAfterTransition);
  }

  toggle.addEventListener("click", function () {
    if (win.hidden) {
      openChat();
    } else {
      closeChat();
    }
  });

  if (closeBtn) closeBtn.addEventListener("click", closeChat);

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var text = input.value.trim();
    if (!text) return;

    addBubble(text, "user");
    input.value = "";

    setTimeout(function () {
      addBubble(MOCK_REPLY, "bot");
    }, 500);
  });
})();
