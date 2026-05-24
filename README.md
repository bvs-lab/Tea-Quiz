# Чайный квиз

Интерактивный квиз из 7 вопросов: подбор типа чая по ответам.

## Запуск

```bash
npm install
npm run dev
```

Откройте в браузере адрес из терминала (обычно http://localhost:5174).

> Порт **5174** выбран специально, чтобы не пересекаться с другими Vite-проектами на 5173.

## Сборка

```bash
npm run build
npm run preview
```

Готовые файлы — в папке `dist/`.

## Публикация на GitHub Pages

Сайт: [https://bvs-lab.github.io/Tea-Quiz/](https://bvs-lab.github.io/Tea-Quiz/)

Сборка для Pages (путь `/Tea-Quiz/`):

```bash
npm run build:pages
```

При push в `main` workflow `.github/workflows/deploy-pages.yml` собирает и публикует сайт автоматически.

В настройках репозитория GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

## Структура

- `src/data/quizData.ts` — вопросы, веса, описания чаёв
- `src/hooks/useQuiz.ts` — логика квиза
- `src/components/` — экраны welcome / quiz / result
