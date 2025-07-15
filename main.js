// 다국어 텍스트 정의
const translations = {
  ko: {
    title: 'Barosa Hub',
    desc: '여러 서비스로 이동할 수 있는 허브 페이지입니다.',
    service1: '서비스 1',
    service2: '서비스 2',
    service3: '서비스 3',
    copyright: '© 2024 Barosa. All rights reserved.'
  },
  en: {
    title: 'Barosa Hub',
    desc: 'This is a hub page to access various services.',
    service1: 'Service 1',
    service2: 'Service 2',
    service3: 'Service 3',
    copyright: '© 2024 Barosa. All rights reserved.'
  },
  es: {
    title: 'Barosa Hub',
    desc: 'Esta es una página central para acceder a varios servicios.',
    service1: 'Servicio 1',
    service2: 'Servicio 2',
    service3: 'Servicio 3',
    copyright: '© 2024 Barosa. Todos los derechos reservados.'
  },
  zh: {
    title: 'Barosa Hub',
    desc: '这是一个可访问各种服务的枢纽页面。',
    service1: '服务 1',
    service2: '服务 2',
    service3: '服务 3',
    copyright: '© 2024 Barosa. 保留所有权利。'
  },
  ja: {
    title: 'Barosa Hub',
    desc: 'さまざまなサービスに移動できるハブページです。',
    service1: 'サービス 1',
    service2: 'サービス 2',
    service3: 'サービス 3',
    copyright: '© 2024 Barosa. All rights reserved.'
  },
  fr: {
    title: 'Barosa Hub',
    desc: 'Ceci est une page hub pour accéder à divers services.',
    service1: 'Service 1',
    service2: 'Service 2',
    service3: 'Service 3',
    copyright: '© 2024 Barosa. Tous droits réservés.'
  },
  de: {
    title: 'Barosa Hub',
    desc: 'Dies ist eine Hub-Seite für den Zugriff auf verschiedene Dienste.',
    service1: 'Dienst 1',
    service2: 'Dienst 2',
    service3: 'Dienst 3',
    copyright: '© 2024 Barosa. Alle Rechte vorbehalten.'
  }
};

// 지원 언어 목록
const supported = ['ko','en','es','zh','ja','fr','de'];

// 언어 감지 및 적용
function getUserLang() {
  const navLang = navigator.language || navigator.userLanguage || 'en';
  const short = navLang.split('-')[0];
  return supported.includes(short) ? short : 'en';
}

function setLang(lang) {
  const t = translations[lang] || translations['en'];
  document.querySelector('.header h1').textContent = t.title;
  document.querySelector('.desc').textContent = t.desc;
  const btnLabels = document.querySelectorAll('.service-btn .label');
  btnLabels[0].textContent = t.service1;
  btnLabels[1].textContent = t.service2;
  btnLabels[2].textContent = t.service3;
  document.querySelector('.footer').textContent = t.copyright;
  document.documentElement.lang = lang;
  document.getElementById('lang-select').value = lang;
}

// 언어 선택 드롭다운 생성
function createLangSelect(current) {
  const select = document.createElement('select');
  select.id = 'lang-select';
  select.style.margin = '0 0 0 18px';
  select.style.padding = '6px 12px';
  select.style.borderRadius = '8px';
  select.style.border = '1px solid #e5e7eb';
  select.style.fontSize = '1rem';
  select.style.background = '#fff';
  select.style.fontFamily = 'inherit';
  select.style.cursor = 'pointer';
  select.style.verticalAlign = 'middle';
  select.style.boxShadow = '0 1px 4px rgba(30,64,175,0.06)';
  select.style.color = '#222';
  const langNames = {
    ko: '한국어', en: 'English', es: 'Español', zh: '中文', ja: '日本語', fr: 'Français', de: 'Deutsch'
  };
  supported.forEach(l => {
    const opt = document.createElement('option');
    opt.value = l;
    opt.textContent = langNames[l];
    select.appendChild(opt);
  });
  select.value = current;
  select.addEventListener('change', e => setLang(e.target.value));
  document.querySelector('.lang-select').appendChild(select);
}

// 초기화
window.addEventListener('DOMContentLoaded', () => {
  const userLang = getUserLang();
  createLangSelect(userLang);
  setLang(userLang);
}); 