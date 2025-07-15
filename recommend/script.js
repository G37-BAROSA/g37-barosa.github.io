const translations = {
    en: {
        title: 'Lotto Number Recommendation',
        language: 'Language:',
        country: 'Country:',
        recommend: 'Recommend Numbers',
        result: 'Recommended Numbers:',
        countries: {
            us: 'USA', kr: 'Korea', uk: 'UK', jp: 'Japan', fr: 'France', de: 'Germany', it: 'Italy', es: 'Spain', au: 'Australia', ca: 'Canada', br: 'Brazil', ru: 'Russia', cn: 'China', in: 'India', za: 'South Africa',
        }
    },
    ko: {
        title: '로또 번호 추천',
        language: '언어:',
        country: '국가:',
        recommend: '번호 추천',
        result: '추천 번호:',
        countries: {
            us: '미국', kr: '한국', uk: '영국', jp: '일본', fr: '프랑스', de: '독일', it: '이탈리아', es: '스페인', au: '호주', ca: '캐나다', br: '브라질', ru: '러시아', cn: '중국', in: '인도', za: '남아프리카',
        }
    },
    ja: {
        title: 'ロト番号おすすめ',
        language: '言語:',
        country: '国:',
        recommend: '番号をおすすめ',
        result: 'おすすめ番号:',
        countries: {
            us: 'アメリカ', kr: '韓国', uk: 'イギリス', jp: '日本', fr: 'フランス', de: 'ドイツ', it: 'イタリア', es: 'スペイン', au: 'オーストラリア', ca: 'カナダ', br: 'ブラジル', ru: 'ロシア', cn: '中国', in: 'インド', za: '南アフリカ',
        }
    },
    fr: {
        title: 'Recommandation de numéros de loto',
        language: 'Langue :',
        country: 'Pays :',
        recommend: 'Recommander des numéros',
        result: 'Numéros recommandés :',
        countries: {
            us: 'États-Unis', kr: 'Corée', uk: 'Royaume-Uni', jp: 'Japon', fr: 'France', de: 'Allemagne', it: 'Italie', es: 'Espagne', au: 'Australie', ca: 'Canada', br: 'Brésil', ru: 'Russie', cn: 'Chine', in: 'Inde', za: 'Afrique du Sud',
        }
    },
    de: {
        title: 'Lottozahlen-Empfehlung',
        language: 'Sprache:',
        country: 'Land:',
        recommend: 'Zahlen empfehlen',
        result: 'Empfohlene Zahlen:',
        countries: {
            us: 'USA', kr: 'Korea', uk: 'Großbritannien', jp: 'Japan', fr: 'Frankreich', de: 'Deutschland', it: 'Italien', es: 'Spanien', au: 'Australien', ca: 'Kanada', br: 'Brasilien', ru: 'Russland', cn: 'China', in: 'Indien', za: 'Südafrika',
        }
    },
    es: {
        title: 'Recomendación de números de Lotería',
        language: 'Idioma:',
        country: 'País:',
        recommend: 'Recomendar números',
        result: 'Números recomendados:',
        countries: {
            us: 'EE.UU.', kr: 'Corea', uk: 'Reino Unido', jp: 'Japón', fr: 'Francia', de: 'Alemania', it: 'Italia', es: 'España', au: 'Australia', ca: 'Canadá', br: 'Brasil', ru: 'Rusia', cn: 'China', in: 'India', za: 'Sudáfrica',
        }
    },
    it: {
        title: 'Raccomandazione numeri Lotto',
        language: 'Lingua:',
        country: 'Paese:',
        recommend: 'Raccomanda numeri',
        result: 'Numeri raccomandati:',
        countries: {
            us: 'USA', kr: 'Corea', uk: 'Regno Unito', jp: 'Giappone', fr: 'Francia', de: 'Germania', it: 'Italia', es: 'Spagna', au: 'Australia', ca: 'Canada', br: 'Brasile', ru: 'Russia', cn: 'Cina', in: 'India', za: 'Sudafrica',
        }
    },
    zh: {
        title: '彩票号码推荐',
        language: '语言:',
        country: '国家:',
        recommend: '推荐号码',
        result: '推荐号码:',
        countries: {
            us: '美国', kr: '韩国', uk: '英国', jp: '日本', fr: '法国', de: '德国', it: '意大利', es: '西班牙', au: '澳大利亚', ca: '加拿大', br: '巴西', ru: '俄罗斯', cn: '中国', in: '印度', za: '南非',
        }
    }
};

const lottoRules = {
    us: { count: 6, max: 69 }, kr: { count: 6, max: 45 }, uk: { count: 6, max: 59 }, jp: { count: 6, max: 43 }, fr: { count: 5, max: 49 }, de: { count: 6, max: 49 }, it: { count: 6, max: 90 }, es: { count: 6, max: 49 }, au: { count: 6, max: 45 }, ca: { count: 6, max: 49 }, br: { count: 6, max: 60 }, ru: { count: 6, max: 45 }, cn: { count: 6, max: 33 }, in: { count: 6, max: 49 }, za: { count: 6, max: 52 },
};

function translateUI(lang) {
    const t = translations[lang] || translations['en'];
    document.getElementById('title').textContent = t.title;
    document.getElementById('language-label').textContent = t.language;
    document.getElementById('country-label').textContent = t.country;
    document.getElementById('recommend-btn').textContent = t.recommend;
    // 국가명 번역
    const countrySelect = document.getElementById('country-select');
    Array.from(countrySelect.options).forEach(opt => {
        opt.textContent = t.countries[opt.value] || translations['en'].countries[opt.value];
    });
}

function getRandomNumbers(count, max) {
    const numbers = new Set();
    while (numbers.size < count) {
        numbers.add(Math.floor(Math.random() * max) + 1);
    }
    return Array.from(numbers).sort((a, b) => a - b);
}

// 브라우저 언어 감지 및 적용
function getDefaultLang() {
    const supported = Object.keys(translations);
    const browserLang = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
    // 'en', 'ko', 'ja', 'fr', 'de', 'es', 'it', 'zh' 등만 지원
    for (const code of supported) {
        if (browserLang.startsWith(code)) return code;
    }
    return 'en';
}

window.addEventListener('DOMContentLoaded', function() {
    const defaultLang = getDefaultLang();
    const langSelect = document.getElementById('language-select');
    langSelect.value = defaultLang;
    translateUI(defaultLang);
});

document.getElementById('language-select').addEventListener('change', function() {
    translateUI(this.value);
});

document.getElementById('recommend-btn').addEventListener('click', function() {
    const lang = document.getElementById('language-select').value;
    const country = document.getElementById('country-select').value;
    const rule = lottoRules[country];
    const t = translations[lang] || translations['en'];
    const numbers = getRandomNumbers(rule.count, rule.max);
    document.getElementById('result').textContent = `${t.result} ${numbers.join(', ')}`;
}); 