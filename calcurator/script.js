const display = document.getElementById('display');
let currentInput = '';
let resultShown = false;

function updateDisplay() {
  display.value = currentInput || '0';
}

function appendValue(value) {
  if (resultShown && /[0-9.]/.test(value)) {
    currentInput = '';
    resultShown = false;
  }
  if (value === '.' && currentInput.split(/[-+*/]/).pop().includes('.')) return;
  currentInput += value;
  updateDisplay();
}

function clearInput() {
  currentInput = '';
  updateDisplay();
}

function calculate() {
  try {
    let expression = currentInput.replace(/÷/g, '/').replace(/×/g, '*');
    // eslint-disable-next-line no-eval
    let evalResult = eval(expression);
    if (evalResult === undefined || isNaN(evalResult)) {
      display.value = '오류';
    } else {
      display.value = evalResult;
      currentInput = evalResult.toString();
      resultShown = true;
    }
  } catch {
    display.value = '오류';
  }
}

document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', e => {
    const value = btn.dataset.value;
    if (value !== undefined) {
      appendValue(value);
    } else if (btn.id === 'clear') {
      clearInput();
    }
  });
});

document.getElementById('equals').addEventListener('click', calculate);

document.addEventListener('DOMContentLoaded', () => {
  const titleMap = {
    ko: '계산기',
    en: 'Calculator',
    ja: '電卓',
    zh: '计算器',
    es: 'Calculadora',
    fr: 'Calculatrice',
    de: 'Taschenrechner',
  };
  const lang = (navigator.language || navigator.userLanguage || 'en').slice(0,2);
  const title = titleMap[lang] || titleMap['en'];
  const titleElem = document.getElementById('calc-title');
  if (titleElem) titleElem.textContent = title;
});

updateDisplay(); 