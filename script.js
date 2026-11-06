const langButtons = document.querySelectorAll('.lang-btn');
const translatable = document.querySelectorAll('[data-fr][data-ar]');
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

function setLanguage(lang) {
  const isArabic = lang === 'ar';
  document.documentElement.lang = lang;
  document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
  translatable.forEach((element) => {
    element.textContent = element.dataset[isArabic ? 'ar' : 'fr'];
  });
  langButtons.forEach((button) => {
    const active = button.dataset.lang === lang;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  document.title = isArabic
    ? 'نعيمة آيت الطالب | أعلاف الحيوانات في مكناس'
    : "Niama Ait Talb | Aliments pour animaux à Meknès";
  if (mainNav) mainNav.classList.remove('open');
  if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
}

langButtons.forEach((button) => {
  button.addEventListener('click', () => setLanguage(button.dataset.lang));
});

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const open = mainNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
  });
}

document.querySelectorAll('.main-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();
