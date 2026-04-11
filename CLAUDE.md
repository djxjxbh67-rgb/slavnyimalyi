# CLAUDE.md — Технические стандарты проекта

## Стек технологий
- **Framework**: Next.js (App Router)
- **CMS**: TinaCMS (Cloud mode)
- **Styling**: Vanilla CSS (CSS Modules)
- **Hosting**: GitHub Pages
- **Deployment**: GitHub Actions

## Сборка и деплой
- Команда сборки: `npm run build` (выполняет `tinacms build && next build`).
- Весь контент хранится в `/content/*.json`.
- Путь к админке: `/admin/index.html`.

## Правила разработки
- Всегда использовать статический экспорт (`output: 'export'`).
- Не удалять файл `.nojekyll` из папки `public` или скрипта сборки.
- При изменении схемы TinaCMS не забывать обновлять `tina-lock.json`.
