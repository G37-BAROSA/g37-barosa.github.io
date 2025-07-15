const translations = {
    en: {
        title: 'Lotto Number Recommendation',
        language: 'Language:',
        country: 'Country:',
        recommend: 'Recommend Numbers',
        result: 'Recommended Numbers:',
        countries: {
            us: 'USA',
            kr: 'Korea',
            uk: 'UK',
            jp: 'Japan',
            fr: 'France',
            de: 'Germany',
            it: 'Italy',
            es: 'Spain',
            au: 'Australia',
            ca: 'Canada',
            br: 'Brazil',
            ru: 'Russia',
            cn: 'China',
            in: 'India',
            za: 'South Africa',
        }
    },
    ko: {
        title: '로또 번호 추천',
        language: '언어:',
        country: '국가:',
        recommend: '번호 추천',
        result: '추천 번호:',
        countries: {
            us: '미국',
            kr: '한국',
            uk: '영국',
            jp: '일본',
            fr: '프랑스',
            de: '독일',
            it: '이탈리아',
            es: '스페인',
            au: '호주',
            ca: '캐나다',
            br: '브라질',
            ru: '러시아',
            cn: '중국',
            in: '인도',
            za: '남아프리카',
        }
    }
};

const lottoRules = {
    us: { count: 6, max: 69 }, // Powerball (main numbers)
    kr: { count: 6, max: 45 }, // Korea Lotto 6/45
    uk: { count: 6, max: 59 }, // UK Lotto
    jp: { count: 6, max: 43 }, // Japan Loto 6
    fr: { count: 5, max: 49 }, // France Loto (main numbers)
    de: { count: 6, max: 49 }, // Germany Lotto 6aus49
    it: { count: 6, max: 90 }, // Italy SuperEnalotto
    es: { count: 6, max: 49 }, // Spain La Primitiva
    au: { count: 6, max: 45 }, // Australia Saturday Lotto
    ca: { count: 6, max: 49 }, // Canada Lotto 6/49
    br: { count: 6, max: 60 }, // Brazil Mega-Sena
    ru: { count: 6, max: 45 }, // Russia Gosloto 6/45
    cn: { count: 6, max: 33 }, // China Welfare Lotto
    in: { count: 6, max: 49 }, // India Playwin
    za: { count: 6, max: 52 }, // South Africa Lotto
};

function translateUI(lang) {
    document.getElementById('title').textContent = translations[lang].title;
    document.getElementById('language-label').textContent = translations[lang].language;
    document.getElementById('country-label').textContent = translations[lang].country;
    document.getElementById('recommend-btn').textContent = translations[lang].recommend;
    // 국가명 번역
    const countrySelect = document.getElementById('country-select');
    Array.from(countrySelect.options).forEach(opt => {
        opt.textContent = translations[lang].countries[opt.value];
    });
}

function getRandomNumbers(count, max) {
    const numbers = new Set();
    while (numbers.size < count) {
        numbers.add(Math.floor(Math.random() * max) + 1);
    }
    return Array.from(numbers).sort((a, b) => a - b);
}

document.getElementById('language-select').addEventListener('change', function() {
    translateUI(this.value);
});

document.getElementById('recommend-btn').addEventListener('click', function() {
    const lang = document.getElementById('language-select').value;
    const country = document.getElementById('country-select').value;
    const rule = lottoRules[country];
    const numbers = getRandomNumbers(rule.count, rule.max);
    document.getElementById('result').textContent = `${translations[lang].result} ${numbers.join(', ')}`;
});

// 초기 언어 세팅
translateUI('en'); 