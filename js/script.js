const PRODUCTS = [
  {
    "id": "brynza",
    "name": "Бринза",
    "category": "Класичні",
    "price": "350 грн/кг",
    "image": "img/brynza.png",
    "desc": "Традиційна козяча бринза з ніжним вершковим смаком. Ідеальна для щоденного столу.",
    "tags": [
      "Ніжна текстура",
      "Легка солонуватість"
    ],
    "group": "classic"
  },
  {
    "id": "rikota",
    "name": "Рікотта",
    "category": "Класичні",
    "price": "уточнювати",
    "image": "img/rikota.png",
    "desc": "Ніжна сиркова маса з легким вершковим смаком. Підходить для сніданків і десертів.",
    "tags": [
      "Кремова консистенція",
      "Низька калорійність"
    ],
    "group": "classic"
  },
  {
    "id": "classic",
    "name": "Класичний сир",
    "category": "Класичні",
    "price": "750 грн/кг",
    "image": "img/classic.png",
    "desc": "Витриманий козя́чий сир з насиченим, збалансованим смаком.",
    "tags": [
      "Тривала витримка",
      "Насичений аромат"
    ],
    "group": "classic"
  },
  {
    "id": "lavanda",
    "name": "Сир з лавандою",
    "category": "Крафтові",
    "price": "750 грн/кг",
    "image": "img/lavanda.png",
    "desc": "Унікальний сир з ароматом прованської лаванди. Витончений смак для особливих моментів.",
    "tags": [
      "Квітковий аромат",
      "Ніжний післясмак"
    ],
    "group": "craft"
  },
  {
    "id": "fistashka",
    "name": "Сир з фісташкою",
    "category": "Крафтові",
    "price": "750 грн/кг",
    "image": "img/fistashka.png",
    "desc": "Сир із цілими фісташками — поєднання кремового та горіхового смаків.",
    "tags": [
      "Цілі фісташки",
      "Горіховий присмак"
    ],
    "group": "craft"
  },
  {
    "id": "coffee",
    "name": "Сир з кавою",
    "category": "Крафтові",
    "price": "750 грн/кг",
    "image": "img/coffee.png",
    "desc": "Оригінальне поєднання козячого сиру та натуральної кави.",
    "tags": [
      "Аромат кави",
      "Легка гіркуватість"
    ],
    "group": "craft"
  },
  {
    "id": "tomat",
    "name": "Сир томат-базилік",
    "category": "Крафтові",
    "price": "750 грн/кг",
    "image": "img/tomat.png",
    "desc": "Середземноморське поєднання в'ялених томатів та ароматного базиліку.",
    "tags": [
      "Соковиті томати",
      "Трав'яний акцент"
    ],
    "group": "craft"
  },
  {
    "id": "troyanda",
    "name": "Сир з трояндою",
    "category": "Крафтові",
    "price": "750 грн/кг",
    "image": "img/troyanda.png",
    "desc": "Романтичний сир з пелюстками справжньої троянди.",
    "tags": [
      "Пелюстки троянди",
      "Ніжний аромат"
    ],
    "group": "craft"
  },
  {
    "id": "pazhitnik",
    "name": "Сир з пажитником",
    "category": "Крафтові",
    "price": "750 грн/кг",
    "image": "img/pazhitnik.png",
    "desc": "Пряний сир з насінням пажитника — східний колорит у кожному шматочку.",
    "tags": [
      "Пряний аромат",
      "Горіхові ноти"
    ],
    "group": "craft"
  },
  {
    "id": "balls",
    "name": "Сирні кульки в спеціях",
    "category": "Крафтові",
    "price": "750 грн/кг",
    "image": "img/balls.png",
    "desc": "Маленькі сирні кульки в оболонці з ароматних спецій.",
    "tags": [
      "Зручна форма",
      "Мікс спецій"
    ],
    "group": "craft"
  },
  {
    "id": "camembert",
    "name": "Камамбер",
    "category": "Крафтові",
    "price": "900 грн/кг",
    "image": "img/camembert.png",
    "desc": "Козячий камамбер з м'якою білою скоринкою та кремовою серединкою.",
    "tags": [
      "Біла пліснява",
      "Кремова текстура"
    ],
    "group": "craft"
  },
  {
    "id": "marinated_brynza",
    "name": "Маринована бринза з маслинами та лимоном",
    "category": "Мариновані",
    "price": "100 грн/баночка",
    "image": "img/marinated_brynza.png",
    "desc": "Бринза в оливковій олії з маслинами та цедрою лимона.",
    "tags": [
      "Оливкова олія",
      "Маслини каламата"
    ],
    "group": "marinated"
  },
  {
    "id": "marinated_olives",
    "name": "Маринована бринза з паприкою",
    "category": "Мариновані",
    "price": "100 грн/баночка",
    "image": "img/marinated_olives.png",
    "desc": "Пікантна бринза з солодкою паприкою та ароматними травами.",
    "tags": [
      "Солодка паприка",
      "Ароматні трави"
    ],
    "group": "marinated"
  },
  {
    "id": "palyanytsya",
    "name": "Паляниця з бринзою",
    "category": "Випічка",
    "price": "100 грн/штука",
    "image": "img/palyanytsya.png",
    "desc": "Традиційна українська паляниця з начинкою з домашньої бринзи.",
    "tags": [
      "Хрустка скоринка",
      "Соковита начинка"
    ],
    "group": "bakery"
  },
  {
    "id": "vanilla_bread",
    "name": "Ванільний хліб",
    "category": "Випічка",
    "price": "100 грн/штука",
    "image": "img/vanilla_bread.png",
    "desc": "Солодкий хліб з натуральною ваніллю та козячим молоком.",
    "tags": [
      "Натуральна ваніль",
      "Козяче молоко"
    ],
    "group": "bakery"
  },
  {
    "id": "milk_bread",
    "name": "Молочний хліб",
    "category": "Випічка",
    "price": "100 грн/штука",
    "image": "img/milk_bread.png",
    "desc": "Ніжний хліб на козячому молоці з золотистою скоринкою.",
    "tags": [
      "Козяче молоко",
      "Золотиста скоринка"
    ],
    "group": "bakery"
  },
  {
    "id": "pumpkin_bread",
    "name": "Гарбузовий хліб",
    "category": "Випічка",
    "price": "100 грн/штука",
    "image": "img/pumpkin_bread.png",
    "desc": "Осінній хліб з натуральним гарбузом та ароматними спеціями.",
    "tags": [
      "Свіжий гарбуз",
      "Теплі спеції"
    ],
    "group": "bakery"
  },
  {
    "id": "onion_garlic_bread",
    "name": "Хліб з цибулею та часником",
    "category": "Випічка",
    "price": "100 грн/штука",
    "image": "img/onion_garlic_bread.png",
    "desc": "Ароматний хліб з карамелізованою цибулею та запеченим часником.",
    "tags": [
      "Карамелізована цибуля",
      "Запечений часник"
    ],
    "group": "bakery"
  },
  {
    "id": "milk",
    "name": "Козяче молоко",
    "category": "Інше",
    "price": "100 грн/л",
    "image": "img/milk.png",
    "desc": "Свіже козяче молоко від щасливих кіз нашої ферми.",
    "tags": [
      "Свіжість щодня",
      "Легке засвоєння"
    ],
    "group": "other"
  },
  {
    "id": "butter",
    "name": "Козяче масло",
    "category": "Інше",
    "price": "уточнювати",
    "image": "img/butter.png",
    "desc": "Натуральне козяче масло ручного збивання.",
    "tags": [
      "Ручне збивання",
      "Ніжний смак"
    ],
    "group": "other"
  }
];

const EXCURSIONS = [
  {
    "title": "Базова екскурсія",
    "badge": "~1.5 години",
    "subtitle": "ЗНАЙОМСТВО З ФЕРМОЮ",
    "desc": "Годування козочок, дегустація сирів та випічки, можливість придбати продукцію одразу.",
    "items": [
      "Годування та спілкування з козами",
      "Дегустація 5 видів сирів",
      "Скуштувати свіжу випічку",
      "Екскурсія територією ферми",
      "Фото з тваринами"
    ],
    "cta": "Уточнювати по телефону",
    "image": "img/excursion-1.jpg"
  },
  {
    "title": "Екскурсія з обідом",
    "badge": "~3 години",
    "subtitle": "ПОВНЕ ЗАНУРЕННЯ",
    "desc": "Базова екскурсія плюс повноцінний обід на свіжому повітрі: шашлик, юшка або піца на вибір.",
    "items": [
      "Все з базової екскурсії",
      "Обід на вибір (шашлик/юшка/піца)",
      "Напої",
      "Відпочинок у затишній зоні",
      "Інші страви — за домовленістю"
    ],
    "cta": "Уточнювати по телефону",
    "image": "img/excursion-2.jpg"
  },
  {
    "title": "Дитяча екскурсія",
    "badge": "~2 години",
    "subtitle": "СВЯТО ДЛЯ МАЛЕЧІ",
    "desc": "Спеціальна програма для дітей з годуванням тварин, іграми та смаколиками.",
    "items": [
      "Інтерактивне годування козочок",
      "Міні-пічка власного приготування",
      "Попкорн та солодощі",
      "Ігрова зона",
      "Фото з козенятами"
    ],
    "cta": "Уточнювати по телефону",
    "image": "img/excursion-3.jpg"
  }
];

const FAQ = [
  {
    "q": "Як зберігати сири?",
    "a": "Зберігайте сири у холодильнику при температурі +2…+6°C, у пергаменті або харчовому контейнері."
  },
  {
    "q": "Чи є доставка?",
    "a": "Так, ми обговорюємо доставку індивідуально залежно від замовлення та локації."
  },
  {
    "q": "З чого виготовлені сири?",
    "a": "Наші сири виготовлені з козячого молока, натуральних заквасок і сезонних добавок."
  },
  {
    "q": "Чи можна приїхати на ферму без запису?",
    "a": "Краще домовлятися заздалегідь, щоб ми могли комфортно прийняти гостей."
  },
  {
    "q": "Які способи оплати?",
    "a": "Готівка, переказ на карту та інші варіанти — за домовленістю."
  },
  {
    "q": "Чи підходить козячий сир дітям?",
    "a": "Так, у помірній кількості козяча молочна продукція добре підходить дітям."
  },
  {
    "q": "Скільки коштує екскурсія?",
    "a": "Вартість залежить від формату. Будь ласка, уточнюйте за телефоном."
  },
  {
    "q": "Чи можна замовити сири на свято/захід?",
    "a": "Так, ми готуємо індивідуальні набори та дегустаційні добірки."
  },
  {
    "q": "Чи є продукція для вегетаріанців?",
    "a": "Так, частина продукції підходить для вегетаріанців, але уточнюйте склад кожного виробу."
  },
  {
    "q": "Як довго зберігається випічка?",
    "a": "Випічка найкраща в день приготування, але зберігається 1–2 дні у прохолоді."
  }
];

const STORAGE = {
  theme: "rm_theme_v2",
  favs: "rm_favs_v2",
  cookies: "rm_cookies_v2"
};

let booted = false;

function safeJsonParse(value, fallback) {
  try {
    const parsed = JSON.parse(value);
    return parsed ?? fallback;
  } catch {
    return fallback;
  }
}

function getFavorites() {
  return safeJsonParse(localStorage.getItem(STORAGE.favs), []);
}

function setFavorites(ids) {
  localStorage.setItem(STORAGE.favs, JSON.stringify(ids));
  updateFavBadges();
  refreshFavoritesView();
  refreshProductHearts();
}

function isFav(id) {
  return getFavorites().includes(id);
}

function toggleFav(id) {
  const favs = getFavorites();
  const idx = favs.indexOf(id);
  if (idx >= 0) {
    favs.splice(idx, 1);
  } else {
    favs.push(id);
  }
  setFavorites(favs);
}

function updateFavBadges() {
  const count = getFavorites().length;
  document.querySelectorAll("[data-fav-count]").forEach(el => {
    el.textContent = String(count);
  });
  const total = document.querySelector("[data-fav-total]");
  if (total) total.textContent = String(count);
}

function getProductById(id) {
  return PRODUCTS.find(product => product.id === id);
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem(STORAGE.theme, theme);
  const icon = document.querySelector("[data-theme-icon]");
  if (icon) icon.textContent = theme === "dark" ? "☾" : "☼";
}

function initTheme() {
  const saved = localStorage.getItem(STORAGE.theme);
  if (saved === "dark" || saved === "light") {
    applyTheme(saved);
  } else {
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    applyTheme(prefersDark ? "dark" : "light");
  }

  document.querySelector("[data-theme-toggle]")?.addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(next);
  });
}

function initMobileMenu() {
  const toggle = document.querySelector("[data-mobile-toggle]");
  const menu = document.querySelector("[data-mobile-menu]");
  const submenuToggle = document.querySelector("[data-mobile-products]");
  const submenu = document.querySelector("[data-mobile-submenu]");

  if (toggle && menu) {
    const closeMenu = () => menu.classList.remove("is-open");
    toggle.addEventListener("click", (event) => {
      event.stopPropagation();
      menu.classList.toggle("is-open");
    });
    document.addEventListener("click", (event) => {
      if (!menu.contains(event.target) && !toggle.contains(event.target)) {
        closeMenu();
      }
    });
    menu.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));
  }

  submenuToggle?.addEventListener("click", (event) => {
    event.stopPropagation();
    submenu?.classList.toggle("is-open");
  });
}

function initDropdowns() {
  document.querySelectorAll("[data-dropdown]").forEach(dropdown => {
    const btn = dropdown.querySelector("[data-dropdown-btn]");
    if (!btn) return;

    btn.addEventListener("click", (event) => {
      event.stopPropagation();
      const open = dropdown.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  });

  document.addEventListener("click", () => {
    document.querySelectorAll("[data-dropdown].is-open").forEach(dropdown => {
      dropdown.classList.remove("is-open");
      dropdown.querySelector("[data-dropdown-btn]")?.setAttribute("aria-expanded", "false");
    });
  });
}

function initReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    els.forEach(el => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  els.forEach(el => observer.observe(el));
}

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function placeholderSVG(title, accent = "#c77d4a") {
  const safe = escapeHTML(title);
  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="1500" viewBox="0 0 1200 1500">
    <defs>
      <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stop-color="${accent}"/>
        <stop offset="100%" stop-color="#f2dcc5"/>
      </linearGradient>
      <filter id="blur" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="32"/>
      </filter>
    </defs>
    <rect width="1200" height="1500" fill="url(#g)"/>
    <circle cx="180" cy="270" r="180" fill="rgba(255,255,255,.26)" filter="url(#blur)"/>
    <circle cx="980" cy="220" r="220" fill="rgba(255,255,255,.16)" filter="url(#blur)"/>
    <circle cx="850" cy="1020" r="360" fill="rgba(70,45,22,.16)" filter="url(#blur)"/>
    <text x="72" y="1260" font-family="Georgia, serif" font-size="70" fill="rgba(255,255,255,.92)" font-weight="700">${safe}</text>
    <text x="72" y="1342" font-family="Inter, Arial, sans-serif" font-size="34" fill="rgba(255,255,255,.82)">Ранчо Марко</text>
  </svg>`;
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}

function imageWithFallback(path, title) {
  const img = document.createElement("img");
  img.loading = "lazy";
  img.alt = title;
  img.src = path;
  img.addEventListener("error", () => {
    if (!img.dataset.fallbackUsed) {
      img.dataset.fallbackUsed = "1";
      img.src = placeholderSVG(title);
    }
  }, { once: true });
  return img;
}

function productCard(product) {
  const el = document.createElement("article");
  el.className = "product-card";
  el.dataset.category = product.group;
  el.dataset.id = product.id;

  const active = isFav(product.id);
  el.innerHTML = `
    <div class="product-card__image">
      <button class="product-card__heart ${active ? "is-active" : ""}" type="button" aria-label="${active ? "Прибрати з обраного" : "Додати в обране"}" data-fav-btn data-id="${product.id}">${active ? "♥" : "♡"}</button>
      <span class="product-card__tag">${escapeHTML(product.category)}</span>
    </div>
    <div class="product-card__body">
      <h3 class="product-card__title">${escapeHTML(product.name)}</h3>
      <p class="product-card__desc">${escapeHTML(product.desc)}</p>
      <div class="tags">${product.tags.map(tag => `<span class="tag">${escapeHTML(tag)}</span>`).join("")}</div>
      <div class="price">${escapeHTML(product.price)}</div>
    </div>
  `;
  el.querySelector(".product-card__image").prepend(imageWithFallback(product.image, product.name));
  return el;
}

function enhanceExistingProductCards() {
  document.querySelectorAll(".product-card[data-id]").forEach(card => {
    const id = card.dataset.id;
    const heart = card.querySelector("[data-fav-btn]");
    if (!heart) return;
    const active = isFav(id);
    heart.classList.toggle("is-active", active);
    heart.textContent = active ? "♥" : "♡";
    heart.setAttribute("aria-label", active ? "Прибрати з обраного" : "Додати в обране");
  });
}

function renderProductsPage() {
  const containers = document.querySelectorAll("[data-product-grid]");
  if (!containers.length) return;

  const hasCardsAlready = Array.from(containers).some(container => container.querySelector(".product-card"));
  if (!hasCardsAlready) {
    const byGroup = PRODUCTS.reduce((acc, product) => {
      (acc[product.group] ||= []).push(product);
      return acc;
    }, {});
    containers.forEach(container => {
      container.replaceChildren();
      const group = container.dataset.productGrid;
      (byGroup[group] || []).forEach(product => {
        container.appendChild(productCard(product));
      });
    });
  }

  const sections = Array.from(document.querySelectorAll(".catalog-section"));
  const chips = document.querySelectorAll("[data-category-chips] .chip");
  const catalogAnchor = document.getElementById("catalog");

  const applyFilter = (filter, shouldScroll = false) => {
    chips.forEach(ch => ch.classList.toggle("is-active", ch.dataset.filter === filter));

    sections.forEach(section => {
      const show = filter === "all" || section.dataset.category === filter;
      section.hidden = !show;
      section.style.display = show ? "" : "none";
      if (show) section.classList.add("is-visible");
    });

    if (shouldScroll) {
      const target = filter === "all" ? catalogAnchor : document.querySelector(`#${filter}`);
      if (target) {
        window.setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 80);
      }
    }
  };

  chips.forEach(btn => {
    if (btn.dataset.bound) return;
    btn.dataset.bound = "1";
    btn.addEventListener("click", () => {
      applyFilter(btn.dataset.filter, true);
    });
  });

  applyFilter("all", false);

  const hash = location.hash.replace("#", "");
  if (hash && document.querySelector(`#${hash}`)) {
    window.setTimeout(() => {
      document.querySelector(`#${hash}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 150);
  } else if (window.matchMedia && window.matchMedia("(max-width: 640px)").matches) {
    window.setTimeout(() => {
      catalogAnchor?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 180);
  }
}

function refreshProductHearts() {
  document.querySelectorAll("[data-fav-btn]").forEach(btn => {
    const id = btn.dataset.id;
    const active = isFav(id);
    btn.classList.toggle("is-active", active);
    btn.textContent = active ? "♥" : "♡";
    btn.setAttribute("aria-label", active ? "Прибрати з обраного" : "Додати в обране");
  });
}

function refreshFavoritesView() {
  const list = document.querySelector("[data-favorites-list]");
  if (!list) return;

  const empty = document.querySelector("[data-favorites-empty]");
  const favs = getFavorites();

  list.replaceChildren();

  if (!favs.length) {
    if (empty) empty.hidden = false;
    list.style.display = "none";
    return;
  }

  if (empty) empty.hidden = true;
  list.style.display = "";

  favs.map(id => getProductById(id)).filter(Boolean).forEach(product => {
    const row = document.createElement("article");
    row.className = "product-card favorite-row";
    row.innerHTML = `
      <div class="favorite-row__thumb"></div>
      <div>
        <h3 class="favorite-row__title">${escapeHTML(product.name)}</h3>
        <p class="favorite-row__meta">${escapeHTML(product.category)}</p>
        <div class="price">${escapeHTML(product.price)}</div>
      </div>
      <div class="favorite-row__actions">
        <button class="icon-remove" type="button" aria-label="Прибрати" data-remove="${product.id}">🗑</button>
      </div>
    `;
    row.querySelector(".favorite-row__thumb").appendChild(imageWithFallback(product.image, product.name));
    row.querySelector("[data-remove]")?.addEventListener("click", () => toggleFav(product.id));
    list.appendChild(row);
  });

  const clear = document.querySelector("[data-clear-favorites]");
  if (clear && !clear.dataset.bound) {
    clear.dataset.bound = "1";
    clear.addEventListener("click", () => setFavorites([]));
  }
}

function renderExcursions() {
  const grid = document.querySelector("[data-excursion-grid]");
  if (!grid) return;
  if (grid.querySelector(".excursion-card")) return;

  grid.replaceChildren();

  EXCURSIONS.forEach(ex => {
    const card = document.createElement("article");
    card.className = "excursion-card";
    card.innerHTML = `
      <div class="excursion-card__image"></div>
      <div class="excursion-card__body">
        <span class="excursion-card__badge">${escapeHTML(ex.badge)}</span>
        <div class="excursion-card__subtitle">${escapeHTML(ex.subtitle)}</div>
        <h3>${escapeHTML(ex.title)}</h3>
        <p>${escapeHTML(ex.desc)}</p>
        <ul class="check-list">${ex.items.map(item => `<li>${escapeHTML(item)}</li>`).join("")}</ul>
        <span class="price">${escapeHTML(ex.cta)}</span>
      </div>
    `;
    card.querySelector(".excursion-card__image").appendChild(imageWithFallback(ex.image, ex.title));
    grid.appendChild(card);
  });
}


function forceProductsVisibleOnMobile() {
  if (!document.body.classList.contains("page-products")) return;
  if (!window.matchMedia || !window.matchMedia("(max-width: 900px)").matches) return;

  document.querySelectorAll(".page-products .reveal").forEach(el => {
    el.classList.add("is-visible");
  });

  document.querySelectorAll(".page-products .catalog-section").forEach(section => {
    section.hidden = false;
    section.style.display = "";
    section.classList.add("is-visible");
  });

  const catalogAnchor = document.getElementById("catalog");
  if (catalogAnchor) {
    const top = Math.max(0, catalogAnchor.getBoundingClientRect().top + window.scrollY - 92);
    window.scrollTo({ top, behavior: "auto" });
  }
}

function renderFAQ() {
  const accordion = document.querySelector("[data-accordion]");
  if (!accordion) return;
  if (accordion.querySelector(".accordion-item")) return;

  accordion.replaceChildren();

  FAQ.forEach(({
    q, a
  }) => {
    const item = document.createElement("details");
    item.className = "accordion-item";
    item.innerHTML = `<summary>${escapeHTML(q)}</summary><div class="accordion-body">${escapeHTML(a)}</div>`;
    accordion.appendChild(item);
  });
}

function initCookies() {
  const banner = document.querySelector("[data-cookie-banner]");
  if (!banner) return;

  const accepted = localStorage.getItem(STORAGE.cookies) === "1";
  banner.hidden = accepted;
  banner.style.display = accepted ? "none" : "";

  const acceptCookie = () => {
    localStorage.setItem(STORAGE.cookies, "1");
    banner.hidden = true;
    banner.style.display = "none";
    closeModal("cookiesModal");
  };

  document.querySelectorAll("[data-cookie-accept]").forEach(btn => {
    if (btn.dataset.bound) return;
    btn.dataset.bound = "1";
    btn.addEventListener("click", acceptCookie);
  });
}

function initActiveNav() {
  const page = document.body.dataset.page;
  const activeMap = {
    home: ["index.html"],
    products: ["products.html"],
    favorites: ["favorites.html"],
    excursions: ["excursions.html"],
    contacts: ["contacts.html"]
  };

  document.querySelectorAll(".nav-link").forEach(link => {
    const href = link.getAttribute("href") || "";
    if ((activeMap[page] || []).includes(href)) {
      link.classList.add("is-active");
    }
  });
}

function openModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.hidden = false;
  modal.classList.add("is-open");
  document.body.classList.add("modal-open");
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.remove("is-open");
  modal.hidden = true;
  if (!document.querySelector(".modal.is-open")) {
    document.body.classList.remove("modal-open");
  }
}

function initModals() {
  document.querySelectorAll("[data-modal-open]").forEach(btn => {
    if (btn.dataset.bound) return;
    btn.dataset.bound = "1";
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      openModal(btn.dataset.modalOpen);
    });
  });

  document.querySelectorAll("[data-modal-close]").forEach(btn => {
    if (btn.dataset.bound) return;
    btn.dataset.bound = "1";
    btn.addEventListener("click", () => {
      const target = btn.dataset.modalClose || btn.closest(".modal")?.id;
      if (target) closeModal(target);
    });
  });

  document.querySelectorAll(".modal").forEach(modal => {
    if (modal.dataset.bound) return;
    modal.dataset.bound = "1";
    modal.addEventListener("click", (event) => {
      if (event.target === modal) closeModal(modal.id);
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      document.querySelectorAll(".modal.is-open").forEach(modal => closeModal(modal.id));
    }
  });
}

function buildModals() {
  const modals = document.getElementById("site-modals");
  if (!modals) return;
  modals.innerHTML = `
    <section class="modal" id="termsModal" hidden aria-hidden="true">
      <div class="modal__panel" role="dialog" aria-modal="true" aria-labelledby="termsTitle">
        <button class="modal__close" type="button" data-modal-close="termsModal" aria-label="Закрити">×</button>
        <div class="modal__eyebrow">ПУБЛІЧНА ІНФОРМАЦІЯ</div>
        <h2 class="modal__title" id="termsTitle">Умови використання</h2>
        <div class="modal__body">
          <p>Цей сайт створено для ознайомлення з продукцією, екскурсіями та контактами ферми «Ранчо Марко “Бабусині Кози”».</p>
          <p>Використовуючи сайт, ви погоджуєтесь не пошкоджувати його роботу, не копіювати матеріали у спосіб, що порушує права власника, та не виконувати дії, які заважають іншим користувачам.</p>
          <p>Інформація на сайті може оновлюватися без попередження. Актуальні ціни, наявність і час екскурсій уточнюються напряму у менеджера ферми.</p>
        </div>
        <div class="modal__actions">
          <a class="button button--secondary" href="contacts.html">Перейти до контактів</a>
          <button class="button" type="button" data-modal-close="termsModal">Зрозуміло</button>
        </div>
      </div>
    </section>

    <section class="modal" id="privacyModal" hidden aria-hidden="true">
      <div class="modal__panel" role="dialog" aria-modal="true" aria-labelledby="privacyTitle">
        <button class="modal__close" type="button" data-modal-close="privacyModal" aria-label="Закрити">×</button>
        <div class="modal__eyebrow">ЗАХИСТ ДАНИХ</div>
        <h2 class="modal__title" id="privacyTitle">Політика конфіденційності</h2>
        <div class="modal__body">
          <p>Ми не збираємо зайві персональні дані через сайт. Контакт із нами відбувається через телефон, Telegram або Viber.</p>
          <p>Технічні дані можуть використовуватися для коректної роботи сайту, збереження теми, обраного та підтвердження cookies. Ці налаштування зберігаються локально у вашому браузері.</p>
          <p>Якщо ви зв'язуєтесь із нами через зовнішні сервіси, діють правила та політики відповідних платформ.</p>
        </div>
        <div class="modal__actions">
          <button class="button" type="button" data-modal-close="privacyModal">Зрозуміло</button>
        </div>
      </div>
    </section>

    <section class="modal" id="cookiesModal" hidden aria-hidden="true">
      <div class="modal__panel" role="dialog" aria-modal="true" aria-labelledby="cookiesTitle">
        <button class="modal__close" type="button" data-modal-close="cookiesModal" aria-label="Закрити">×</button>
        <div class="modal__eyebrow">НАЛАШТУВАННЯ БРАУЗЕРА</div>
        <h2 class="modal__title" id="cookiesTitle">Політика cookies</h2>
        <div class="modal__body">
          <p>Cookies потрібні для збереження обраної теми, списку обраного товару та підтвердження вашої згоди на показ банера.</p>
          <p>Ми використовуємо лише мінімальні локальні налаштування для зручності користування сайтом. Жодні сторонні рекламні профілі тут не створюються.</p>
        </div>
        <div class="modal__actions">
          <button class="button" type="button" data-cookie-accept>Прийняти cookies</button>
          <button class="button button--secondary" type="button" data-modal-close="cookiesModal">Закрити</button>
        </div>
      </div>
    </section>
  `;
}

function initFooterLinks() {
  document.querySelectorAll("[data-modal-open]").forEach(btn => {
    if (!btn.dataset.bound) {
      btn.dataset.bound = "1";
      btn.addEventListener("click", e => {
        e.preventDefault();
        openModal(btn.dataset.modalOpen);
      });
    }
  });
}

function bootstrap() {
  if (booted) return;
  booted = true;

  buildModals();
  initTheme();
  initMobileMenu();
  initDropdowns();
  initReveal();
  initCookies();
  initActiveNav();
  initModals();
  initFooterLinks();
  renderFAQ();
  renderExcursions();
  renderProductsPage();
  forceProductsVisibleOnMobile();
  refreshFavoritesView();
  updateFavBadges();
  refreshProductHearts();

  document.addEventListener("click", (event) => {
    const favBtn = event.target.closest("[data-fav-btn]");
    if (favBtn) {
      event.preventDefault();
      toggleFav(favBtn.dataset.id);
      return;
    }
  });

  window.addEventListener("storage", () => {
    updateFavBadges();
    refreshProductHearts();
    refreshFavoritesView();
  });

  window.addEventListener("load", () => {
    forceProductsVisibleOnMobile();
  });

  window.addEventListener("pageshow", () => {
    forceProductsVisibleOnMobile();
  });

  window.addEventListener("resize", () => {
    forceProductsVisibleOnMobile();
  });
}

document.addEventListener("DOMContentLoaded", bootstrap);
