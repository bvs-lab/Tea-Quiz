# Чайный квиз

Интерактивный квиз из 7 вопросов: подбор типа чая по ответам.

## Запуск

```bash
npm install
npm run dev
```

Откройте в браузере адрес из терминала (обычно http://localhost:5173).

## Сборка

```bash
npm run build
npm run preview
```

Готовые файлы — в папке `dist/`.

## Структура

- `src/data/quizData.ts` — вопросы, веса, описания чаёв
- `src/hooks/useQuiz.ts` — логика квиза
- `src/components/` — экраны welcome / quiz / result
