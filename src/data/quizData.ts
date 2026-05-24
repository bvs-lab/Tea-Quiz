export type TeaKey = 'black' | 'green' | 'white' | 'oolong' | 'puer' | 'yellow' | 'herbal' | 'gaba';

export const questions = [
  { question: "Когда вы обычно пьете чай?", answers: [
    { text: "Утром, чтобы проснуться", weights: { black: 3, puer: 3, green: 1 } },
    { text: "Днем, во время работы", weights: { green: 3, oolong: 2, yellow: 1 } },
    { text: "Вечером, для расслабления", weights: { white: 3, oolong: 2, herbal: 2, gaba: 3 } },
    { text: "После еды", weights: { puer: 4, oolong: 2, yellow: 1 } }
  ]},
  { question: "Какой эффект вы хотите получить от чая?", answers: [
    { text: "Мощный заряд бодрости", weights: { black: 3, puer: 3 } },
    { text: "Мягкую активность и концентрацию", weights: { green: 3, yellow: 2 } },
    { text: "Расслабление и умиротворение", weights: { white: 3, oolong: 2, gaba: 4 } },
    { text: "Баланс энергии и спокойствия", weights: { oolong: 3, green: 1, gaba: 3 } }
  ]},
  { question: "Какой вкус вам ближе?", answers: [
    { text: "Насыщенный, терпкий, крепкий", weights: { black: 3, puer: 2 } },
    { text: "Свежий, травянистый, легкий", weights: { green: 3, yellow: 1 } },
    { text: "Нежный, цветочный, сладковатый", weights: { white: 3, oolong: 2, gaba: 3, herbal: 2 } },
    { text: "Сложный, многогранный, глубокий", weights: { oolong: 3, puer: 3, gaba: 3 } }
  ]},
  { question: "Как вы относитесь к горечи в чае?", answers: [
    { text: "Люблю выраженную горчинку", weights: { green: 3, puer: 2 } },
    { text: "Легкая терпкость - в самый раз", weights: { black: 2, oolong: 3 } },
    { text: "Предпочитаю без горечи", weights: { white: 3, yellow: 2, herbal: 2, gaba: 3 } }
  ]},
  { question: "Что для вас важнее?", answers: [
    { text: "Традиции и классика", weights: { black: 3, green: 2 } },
    { text: "Здоровье и польза", weights: { green: 3, white: 2, puer: 1, gaba: 4 } },
    { text: "Необычный опыт и эксперименты", weights: { oolong: 3, puer: 2, gaba: 3 } },
    { text: "Эстетика и атмосфера", weights: { white: 3, yellow: 2, herbal: 2 } }
  ]},
  { question: "Ваш темп жизни?", answers: [
    { text: "Активный, динамичный", weights: { black: 3, puer: 3 } },
    { text: "Умеренный, сбалансированный", weights: { oolong: 3, green: 2 } },
    { text: "Спокойный, размеренный", weights: { white: 3, yellow: 2, gaba: 4 } }
  ]},
  { question: "Какая атмосфера вам нравится?", answers: [
    { text: "Энергичная встреча с друзьями", weights: { black: 2, herbal: 3 } },
    { text: "Рабочая концентрация", weights: { green: 3, yellow: 2 } },
    { text: "Медитативное уединение", weights: { white: 3, oolong: 2, gaba: 4 } },
    { text: "Согревающий домашний уют", weights: { oolong: 2, puer: 4 } }
  ]}
];

export const helperTips = [
  "Подумайте, в какое время дня вы чаще всего тянетесь к чашке — это задаёт тон подбору.",
  "Чётко сформулируйте желаемый эффект: бодрость, фокус или расслабление.",
  "Представьте любимые десерты или ароматы — это поможет выбрать вкус.",
  "Если не любите горечь, выбирайте варианты без неё — зелёные и габа будут мягче.",
  "Решите, важнее ли традиции, здоровье или необычные ощущения.",
  "Темп жизни подскажет силу напитка: динамичным людям нужны более бодрые чаи.",
  "Вспомните, с какой атмосферой хотите связать чаепитие — это завершит образ."
];

export const teaTypes: Record<TeaKey, {
  name: string; description: string; taste: string;
  effect: string; caffeine: string; time: string; brewing: string;
}> = {
  black: { name: "Черный чай", description: "Вам идеально подходит классический черный чай! Насыщенный, терпкий и бодрящий — он станет вашим надежным спутником в начале дня. Попробуйте сорта: Ассам, Дарджилинг, Кимун.", taste: "насыщенный, терпкий, крепкий", effect: "сильная бодрость, согревает", caffeine: "высокий", time: "утро, день", brewing: "95–100 °C, 3–5 мин, 1 ч.л. на 200 мл" },
  green: { name: "Зеленый чай", description: "Зеленый чай — ваш выбор! Свежий, легкий и полезный, он дарит мягкую энергию и ясность ума. Попробуйте: Лунцзин, Билуочунь, Сенча.", taste: "свежий, травянистый", effect: "фокус, освежает", caffeine: "средний", time: "день, утро", brewing: "75–85 °C, 2–3 мин, 1 ч.л. на 200 мл" },
  white: { name: "Белый чай", description: "Белый чай создан для вас! Нежный, утонченный и элегантный — для ценителей тонких вкусов и эстетики. Попробуйте: Бай Хао Инь Чжэнь, Бай Му Дань.", taste: "нежный, сладковатый, цветочный", effect: "расслабление, омоложение", caffeine: "низкий", time: "вечер, день", brewing: "80–85 °C, 3–4 мин, 1 ч.л. на 200 мл" },
  oolong: { name: "Улун (Оолонг)", description: "Улун — ваш идеальный баланс! Сложный, многогранный вкус и гармония бодрости со спокойствием. Попробуйте: Те Гуань Инь, Да Хун Пао, Молочный улун.", taste: "сложный, ароматный, цветочно-фруктовый", effect: "баланс энергии и покоя", caffeine: "средний", time: "любое", brewing: "90–95 °C, 30–60 сек (проливы), 5–7 г на 150 мл" },
  puer: { name: "Пуэр", description: "Пуэр — чай для глубоких натур! Землистый, насыщенный вкус с мощным тонизирующим эффектом. Попробуйте: Шу Пуэр, Шэн Пуэр.", taste: "землистый, глубокий, насыщенный", effect: "детокс, энергия, пищеварение", caffeine: "высокий", time: "утро, после еды", brewing: "95–100 °C, 30–60 сек (проливы), 5–7 г на 150 мл" },
  yellow: { name: "Желтый чай", description: "Желтый чай — редкая находка для утонченной натуры! Мягкий, деликатный, без горечи — он успокаивает и улучшает концентрацию. Попробуйте: Цзюньшань Иньчжэнь.", taste: "мягкий, без горечи, элегантный", effect: "успокоение, фокус", caffeine: "низкий", time: "утро, день", brewing: "80–85 °C, 2–3 мин, 1 ч.л. на 200 мл" },
  herbal: { name: "Фруктовый/травяной чай", description: "Фруктовые и травяные чаи созданы для вас! Яркие, сладкие, поднимающие настроение. Попробуйте: Ройбуш, чай с жасмином, фруктовые смеси.", taste: "яркий, сладкий, разнообразный", effect: "настроение, витамины", caffeine: "без кофеина", time: "вечер, полдень", brewing: "95–100 °C, 5–7 мин, 1–2 ч.л. на 200 мл" },
  gaba: { name: "Габа-чай", description: "Габа-чай — выбор для тех, кто ценит глубокое расслабление и мягкую ясность. Попробуйте: тайваньский Габа Улун, Габа Цзинь Сюань.", taste: "медовый, сливочный, без горчинки", effect: "расслабление без сонливости, гармония", caffeine: "низкий", time: "вечер, поздний день", brewing: "90–95 °C, 2–3 мин, 1 ч.л. на 200 мл" }
};

export const TEA_COLORS: Record<TeaKey, { color: string; bg: string; shadow: string }> = {
  black:  { color: '#2F2F2F', bg: '#f5f0eb', shadow: 'rgba(47,47,47,0.25)' },
  green:  { color: '#228B22', bg: '#f0f5f0', shadow: 'rgba(34,139,34,0.25)' },
  white:  { color: '#8B7355', bg: '#faf6f0', shadow: 'rgba(139,115,85,0.25)' },
  oolong: { color: '#CD853F', bg: '#fdf3e7', shadow: 'rgba(205,133,63,0.25)' },
  puer:   { color: '#8B4513', bg: '#f5ede6', shadow: 'rgba(139,69,19,0.25)' },
  yellow: { color: '#B8860B', bg: '#fdf8e1', shadow: 'rgba(184,134,11,0.25)' },
  herbal: { color: '#DC143C', bg: '#fdf0f3', shadow: 'rgba(220,20,60,0.25)' },
  gaba:   { color: '#7B5EA7', bg: '#f5f0fb', shadow: 'rgba(123,94,167,0.25)' }
};

export const TIE_PRIORITY: TeaKey[] = ['oolong', 'green', 'black', 'gaba', 'white', 'puer', 'yellow', 'herbal'];

function validateQuizData() {
  const teaKeys = Object.keys(teaTypes) as TeaKey[];
  questions.forEach((q, qi) => {
    q.answers.forEach((a, ai) => {
      Object.keys(a.weights).forEach((key) => {
        if (!teaKeys.includes(key as TeaKey)) {
          console.warn(`[Tea Quiz] Неизвестный тип чая "${key}" — вопрос ${qi + 1}, ответ ${ai + 1}`);
        }
      });
    });
  });
}

if (import.meta.env.DEV) {
  validateQuizData();
}
