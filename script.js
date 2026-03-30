const STORAGE = {
  theme: 'ranchomarkoTheme',
  favorites: 'ranchomarkoFavorites',
  cookies: 'ranchomarkoCookiesConsent'
};

const PRODUCTS = [
  {
    id: 'brynza',
    category: 'classichni',
    name: 'Бринза',
    image: 'img/brynza.png',
    price: '350 грн/кг',
    description: 'Класична козина бринза з чистим фермерським профілем.',
    taste: 'Солонуватий, щільний, з яскравим молочним післясмаком.',
    format: 'Формат продажу: 350 грн/кг.',
    result: 'Дає знайомий домашній смак, добре підходить для салатів, сніданків і закусок.'
  },
  {
    id: 'rikota',
    category: 'classichni',
    name: 'Рикота',
    image: 'img/rikota.png',
    price: 'уточнювати',
    description: 'Ніжна рикота з м’якою структурою та делікатним смаком.',
    taste: 'Легка, кремова, без різкої солоності.',
    format: 'Формат продажу: ціну та вагу уточнюйте.',
    result: 'Підходить для десертів, сирників, канапок і легкого сімейного меню.'
  },
  {
    id: 'classic',
    category: 'classichni',
    name: 'Класичний сир',
    image: 'img/classic.png',
    price: '750 грн/кг',
    description: 'Твердий сир повсякденного формату з виразним молочним смаком.',
    taste: 'Щільний, збалансований, без зайвої гостроти.',
    format: 'Формат продажу: 750 грн/кг.',
    result: 'Дає універсальний сир для нарізки, бутербродів і теплих страв.'
  },
  {
    id: 'lavanda',
    category: 'kraftovi',
    name: 'Сир з лавандою',
    image: 'img/lavanda.png',
    price: '750 грн/кг',
    description: 'Крафтовий сир з тонким ароматом лаванди.',
    taste: 'Ніжний, ароматний, з ледь помітною квітковою нотою.',
    format: 'Формат продажу: 750 грн/кг.',
    result: 'Створює вишукану подачу для столу й гарно пасує до подарункового набору.'
  },
  {
    id: 'fistashka',
    category: 'kraftovi',
    name: 'Сир з фісташкою',
    image: 'img/fistashka.png',
    price: '750 грн/кг',
    description: 'Сир із фісташкою для тих, хто любить м’яку горіхову глибину.',
    taste: 'Кремовий, горіховий, з м’якою текстурою.',
    format: 'Формат продажу: 750 грн/кг.',
    result: 'Дає щільний і водночас елегантний смак для перекусу або закусок.'
  },
  {
    id: 'coffee',
    category: 'kraftovi',
    name: 'Сир з кавою',
    image: 'img/coffee.png',
    price: '750 грн/кг',
    description: 'Сир із кавовою ноткою для неспішної дегустації.',
    taste: 'Ароматний, м’який, з гірчинкою в післясмаку.',
    format: 'Формат продажу: 750 грн/кг.',
    result: 'Підійде для дегустації, подачі з напоями й особливих дегустаційних сетів.'
  },
  {
    id: 'tomat',
    category: 'kraftovi',
    name: 'Сир томат-базилік',
    image: 'img/tomat.png',
    price: '750 грн/кг',
    description: 'Сир із томатом і базиліком для яскравого середземноморського акценту.',
    taste: 'Свіжий, пікантний, трав’янистий.',
    format: 'Формат продажу: 750 грн/кг.',
    result: 'Добре працює як закуска, для тартів, салатів і бутербродів.'
  },
  {
    id: 'troyanda',
    category: 'kraftovi',
    name: 'Сир з розою',
    image: 'img/troyanda.png',
    price: '750 грн/кг',
    description: 'Ніжний сир з делікатним ароматом троянди.',
    taste: 'М’який, квітковий, дуже делікатний.',
    format: 'Формат продажу: 750 грн/кг.',
    result: 'Створює особливий настрій для подарунка або святкового столу.'
  },
  {
    id: 'pazhitnik',
    category: 'kraftovi',
    name: 'Сир з пажитником',
    image: 'img/pazhitnik.png',
    price: '750 грн/кг',
    description: 'Насичений сир із пажитником для любителів виразного смаку.',
    taste: 'Теплий, пряний, з легким горіхово-трав’яним відтінком.',
    format: 'Формат продажу: 750 грн/кг.',
    result: 'Підходить для нарізки, закусок і сирної тарілки.'
  },
  {
    id: 'balls',
    category: 'kraftovi',
    name: 'Сирні шарики в спеціях',
    image: 'img/balls.png',
    price: '750 грн/кг',
    description: 'Маленькі сирні шарики в ароматних спеціях.',
    taste: 'Пікантні, щільні, з пряною оболонкою.',
    format: 'Формат продажу: 750 грн/кг.',
    result: 'Зручні для фуршету, перекусу і красиво виглядають на подачі.'
  },
  {
    id: 'camembert',
    category: 'kraftovi',
    name: 'Камамбер',
    image: 'img/camembert.png',
    price: '900 грн/кг',
    description: 'Кремовий камамбер із м’якою серцевиною.',
    taste: 'Ніжний, вершковий, делікатно виражений.',
    format: 'Формат продажу: 900 грн/кг.',
    result: 'Дає ресторанний формат подачі вдома або в закладі.'
  },
  {
    id: 'marinated_brynza',
    category: 'marinated',
    name: 'Маринована бринза з маслинами і лимоном',
    image: 'img/marinated_brynza.png',
    price: '100 грн/баночка',
    description: 'Готова баночка з маринованою бринзою, маслинами та лимоном.',
    taste: 'Солонувата, пряна, з виразною цитрусовою свіжістю.',
    format: 'Формат продажу: 100 грн/баночка.',
    result: 'Зручна закуска до столу, для пікніка або як фермерський сувенір.'
  },
  {
    id: 'marinated_olives',
    category: 'marinated',
    name: 'Маринована бринза з паприкою',
    image: 'img/marinated_olives.png',
    price: '100 грн/баночка',
    description: 'Маринована бринза з паприкою для яскравішої подачі.',
    taste: 'Пікантна, м’яка, з теплим папричним відтінком.',
    format: 'Формат продажу: 100 грн/баночка.',
    result: 'Підходить для закусок, канапок і подарункового набору.'
  },
  {
    id: 'palyanytsya',
    category: 'vypichka',
    name: 'Паляниця з бринзою',
    image: 'img/palyanytsya.png',
    price: '100 грн/штука',
    description: 'Домашня паляниця з бринзою всередині.',
    taste: 'М’яка, ароматна, з солонуватим сирним акцентом.',
    format: 'Формат продажу: 100 грн/штука.',
    result: 'Дає теплий хлібний продукт, який легко подати до чаю, супу чи перекусу.'
  },
  {
    id: 'vanilla_bread',
    category: 'vypichka',
    name: 'Ванільний хліб',
    image: 'img/vanilla_bread.png',
    price: '100 грн/штука',
    description: 'Ніжний ванільний хліб для сніданків і десертної подачі.',
    taste: 'Солодкуватий, м’який, ароматний.',
    format: 'Формат продажу: 100 грн/штука.',
    result: 'Підходить для сімейного чаювання та легкого сніданку.'
  },
  {
    id: 'milk_bread',
    category: 'vypichka',
    name: 'Молочний хліб',
    image: 'img/milk_bread.png',
    price: '100 грн/штука',
    description: 'Домашній молочний хліб з м’якою текстурою.',
    taste: 'Ніжний, м’який, з чистим молочним ароматом.',
    format: 'Формат продажу: 100 грн/штука.',
    result: 'Зручно брати для сніданків, бутербродів і дитячого столу.'
  },
  {
    id: 'pumpkin_bread',
    category: 'vypichka',
    name: 'Гарбузовий хліб',
    image: 'img/pumpkin_bread.png',
    price: '100 грн/штука',
    description: 'Гарбузовий хліб із домашнім характером.',
    taste: 'М’який, теплий, з ледь солодкуватим смаком.',
    format: 'Формат продажу: 100 грн/штука.',
    result: 'Підходить для осіннього меню, сніданку або як оригінальна випічка до столу.'
  },
  {
    id: 'onion_garlic_bread',
    category: 'vypichka',
    name: 'Хліб з цибулею та часником',
    image: 'img/onion_garlic_bread.png',
    price: '100 грн/штука',
    description: 'Ароматний хліб із цибулею та часником.',
    taste: 'Пікантний, насичений, домашній.',
    format: 'Формат продажу: 100 грн/штука.',
    result: 'Добре пасує до супів, закусок і сирної тарілки.'
  },
  {
    id: 'milk',
    category: 'inshe',
    name: 'Козине молоко',
    image: 'img/milk.png',
    price: '100 грн/л',
    description: 'Свіже козине молоко з ферми.',
    taste: 'Чистий молочний смак без зайвих домішок.',
    format: 'Формат продажу: 100 грн/л.',
    result: 'Підходить для каш, випічки, напоїв і домашніх рецептів.'
  },
  {
    id: 'butter',
    category: 'inshe',
    name: 'Козине масло',
    image: 'img/butter.png',
    price: 'уточнювати',
    description: 'Фермерське козине масло для щоденного столу.',
    taste: 'Вершкове, щільне, натуральне.',
    format: 'Формат продажу: ціну уточнюйте.',
    result: 'Дає натуральний смак для сніданків, випічки й домашньої кухні.'
  }
];

const legalTexts = {
  agreement: `
    <h2>Користувацька угода</h2>
    <p>Цей сайт створено для ознайомлення з продукцією, замовлення товарів і запису на екскурсії. Використовуючи сайт, ви погоджуєтесь із його правилами та підтверджуєте, що надаєте коректні контактні дані для зв’язку.</p>
    <p>Інформація про товари, вагу та ціну може змінюватися залежно від наявності, сезону та партії. Остаточні умови замовлення узгоджуються під час зв’язку телефоном або у месенджері.</p>
    <p>Адміністрація сайту може оновлювати зміст сторінок, фото, описи та умови без попереднього повідомлення. Використання сайту означає згоду з актуальною версією матеріалів.</p>
    <p>Сайт може містити посилання на сторонні сервіси зв’язку. Ми не контролюємо роботу цих сервісів, але використовуємо їх лише як зручний канал комунікації.</p>
  `,
  consent: `
    <h2>Згода на обробку персональних даних</h2>
    <p>Надсилаючи заявку, дзвінок або повідомлення через сайт, ви добровільно погоджуєтесь на обробку персональних даних, необхідних для зв’язку, оформлення замовлення та уточнення деталей екскурсії.</p>
    <p>До таких даних можуть належати ім’я, номер телефону, месенджер для зв’язку та інформація, яку ви самостійно повідомляєте в повідомленні.</p>
    <p>Дані використовуються лише для комунікації з вами, не передаються стороннім особам без потреби, окрім випадків, коли це необхідно для виконання замовлення або вимог закону.</p>
    <p>Ви можете відкликати згоду, звернувшись за контактами, вказаними на сайті.</p>
  `,
  cookies: `
    <h2>Повідомлення про cookies</h2>
    <p>Сайт використовує cookies та схоже локальне сховище для трьох цілей: збереження вибраної теми, запам’ятовування списку обраного та фіксації вашої згоди на cookies.</p>
    <p>Cookies і localStorage допомагають зробити сайт зручнішим, але не використовуються для нав’язливої реклами чи складного профілювання.</p>
    <p>Ви можете прийняти використання cookies через банер унизу сторінки. Якщо не погоджуєтесь, частина функцій, зокрема обране і тема, може працювати лише під час поточної сесії.</p>
    <p>Продовжуючи користування сайтом після натискання «Прийняти», ви підтверджуєте згоду на таке збереження технічних налаштувань.</p>
  `
};

function getFavorites(){
  try{
    return JSON.parse(localStorage.getItem(STORAGE.favorites) || '[]');
  }catch{
    return [];
  }
}

function setFavorites(list){
  localStorage.setItem(STORAGE.favorites, JSON.stringify(list));
}

function isFavorite(id){
  return getFavorites().includes(id);
}

function toggleFavorite(id){
  const favorites = getFavorites();
  const idx = favorites.indexOf(id);
  if(idx >= 0) favorites.splice(idx, 1);
  else favorites.push(id);
  setFavorites(favorites);
  renderAllFavoriteButtons();
  renderFavoritesPage();
}

function getTheme(){
  return localStorage.getItem(STORAGE.theme) || 'light';
}

function setTheme(theme){
  document.documentElement.dataset.theme = theme;
  localStorage.setItem(STORAGE.theme, theme);
}

function applyTheme(){
  setTheme(getTheme());
}

function renderProducts(){
  const targets = document.querySelectorAll('[data-product-category]');
  targets.forEach(target => {
    const category = target.dataset.productCategory;
    const items = PRODUCTS.filter(item => item.category === category);
    target.innerHTML = items.map(productCardHTML).join('');
  });

  document.querySelectorAll('[data-favorite-toggle]').forEach(btn => {
    btn.addEventListener('click', () => toggleFavorite(btn.dataset.favoriteToggle));
  });

  renderAllFavoriteButtons();
}

function productCardHTML(product){
  return `
    <article class="product-card" data-product-id="${product.id}">
      <div class="product-media">
        <img src="${product.image}" alt="${product.name}">
        <button class="favorite-btn ${isFavorite(product.id) ? 'active' : ''}" type="button" data-favorite-toggle="${product.id}" aria-label="Додати до обраного">
          ♥
        </button>
      </div>
      <div class="product-body">
        <h3 class="product-title">${product.name}</h3>
        <p class="meta">${product.description}</p>
        <p class="meta">${product.taste}</p>
        <p class="meta">${product.format}</p>
        <div class="product-price">${product.price}</div>
        <p class="meta">${product.result}</p>
        <div class="product-actions">
          <a class="btn btn-secondary" href="tel:+380971311330">Замовити</a>
          <a class="btn btn-secondary" href="favorites.html">Обране</a>
        </div>
      </div>
    </article>
  `;
}

function renderAllFavoriteButtons(){
  document.querySelectorAll('[data-favorite-toggle]').forEach(btn => {
    const active = isFavorite(btn.dataset.favoriteToggle);
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-label', active ? 'Прибрати з обраного' : 'Додати до обраного');
  });
}

function renderFavoritesPage(){
  const root = document.querySelector('[data-favorites-root]');
  if(!root) return;
  const empty = document.querySelector('[data-empty-state]');
  const favorites = getFavorites();
  const items = PRODUCTS.filter(p => favorites.includes(p.id));
  if(!items.length){
    root.innerHTML = '';
    empty.hidden = false;
    return;
  }
  empty.hidden = true;
  root.innerHTML = items.map(item => `
    <article class="favorite-item">
      <div class="favorite-thumb">
        <img src="${item.image}" alt="${item.name}">
      </div>
      <div class="favorite-content">
        <h3>${item.name}</h3>
        <div class="favorite-meta">${item.description}</div>
        <div class="favorite-meta">${item.taste}</div>
        <div class="favorite-meta">${item.format}</div>
        <div class="favorite-meta"><strong>${item.price}</strong></div>
        <div class="product-actions">
          <button class="btn btn-primary" type="button" data-remove-favorite="${item.id}">Видалити з обраного</button>
          <a class="btn btn-secondary" href="tel:+380971311330">Подзвонити</a>
        </div>
      </div>
    </article>
  `).join('');

  document.querySelectorAll('[data-remove-favorite]').forEach(btn => {
    btn.addEventListener('click', () => toggleFavorite(btn.dataset.removeFavorite));
  });
}

function initThemeToggle(){
  document.querySelectorAll('[data-theme-toggle]').forEach(btn => {
    btn.addEventListener('click', () => {
      setTheme(getTheme() === 'dark' ? 'light' : 'dark');
    });
  });
}

function initDropdowns(){
  document.querySelectorAll('[data-dropdown]').forEach(dropdown => {
    const toggle = dropdown.querySelector('[data-product-toggle]');
    const panel = dropdown.querySelector('[data-dropdown-panel]');
    if(!toggle || !panel) return;

    toggle.addEventListener('click', (e) => {
      const isOpen = dropdown.classList.contains('open');
      if(!isOpen){
        e.preventDefault();
        closeAllDropdowns();
        dropdown.classList.add('open');
        toggle.setAttribute('aria-expanded', 'true');
        return;
      }
      // second click while open navigates to products page
      if(location.pathname.endsWith('products.html')) {
        return;
      }
      location.href = 'products.html';
    });

    panel.addEventListener('click', (e) => {
      if(e.target.closest('a')){
        closeAllDropdowns();
      }
    });
  });

  document.addEventListener('click', (e) => {
    if(!e.target.closest('[data-dropdown]')) closeAllDropdowns();
  });
}

function closeAllDropdowns(){
  document.querySelectorAll('[data-dropdown].open').forEach(dd => {
    dd.classList.remove('open');
    const btn = dd.querySelector('[data-product-toggle]');
    if(btn) btn.setAttribute('aria-expanded', 'false');
  });
}

function initLegalModals(){
  const modal = document.getElementById('legalModal');
  const content = modal?.querySelector('[data-modal-content]');
  if(!modal || !content) return;

  const open = (key) => {
    content.innerHTML = legalTexts[key] || '<p>Матеріал не знайдено.</p>';
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('no-scroll');
  };

  const close = () => {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('no-scroll');
  };

  document.querySelectorAll('[data-open-legal]').forEach(btn => {
    btn.addEventListener('click', () => open(btn.dataset.openLegal));
  });

  document.querySelectorAll('[data-modal-close]').forEach(btn => btn.addEventListener('click', close));
  modal.addEventListener('click', (e) => { if(e.target === modal) close(); });
  document.addEventListener('keydown', (e) => { if(e.key === 'Escape') close(); });
}

function initCookies(){
  const banner = document.getElementById('cookieBanner');
  if(!banner) return;

  const accepted = localStorage.getItem(STORAGE.cookies) === 'accepted';
  if(!accepted) banner.hidden = false;

  const acceptBtn = banner.querySelector('[data-accept-cookies]');
  acceptBtn?.addEventListener('click', () => {
    localStorage.setItem(STORAGE.cookies, 'accepted');
    banner.hidden = true;
  });
}

function setActiveNav(){
  const page = document.body.dataset.page || document.documentElement.dataset.page;
  document.querySelectorAll('.main-nav .nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if(!href) return;
    if(page === 'home' && href === 'index.html') link.classList.add('active');
    if(page === 'products' && href === 'products.html') link.classList.add('active');
    if(page === 'favorites' && href === 'favorites.html') link.classList.add('active');
    if(page === 'excursions' && href === 'excursions.html') link.classList.add('active');
    if(page === 'contacts' && href === 'contacts.html') link.classList.add('active');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  applyTheme();
  setActiveNav();
  initThemeToggle();
  initDropdowns();
  initLegalModals();
  initCookies();

  if(document.querySelector('[data-product-category]')) renderProducts();
  renderFavoritesPage();

  if(location.hash && document.querySelector(location.hash)) {
    setTimeout(() => document.querySelector(location.hash)?.scrollIntoView({behavior:'smooth', block:'start'}), 200);
  }
});


// BURGER
const burger = document.querySelector(".burger");
const nav = document.querySelector(".main-nav");

if (burger && nav) {
    burger.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
}
