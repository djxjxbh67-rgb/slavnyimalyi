# Проект «Славный Малый»

## Статус деплоя (11.04.2026)
- **Хостинг**: GitHub Pages (статичный экспорт).
- **Домен**: slavniymaliy.ru
- **CMS**: TinaCMS (управление через /admin/index.html).
- **CI/CD**: GitHub Actions (автоматическая сборка при каждом сохранении).

## Важные настройки
- В корне проекта создан `.nojekyll` для работы стилей.
- В GitHub Secrets добавлены `NEXT_PUBLIC_TINA_CLIENT_ID` и `TINA_TOKEN`.
- Настройка `output: 'export'` в `next.config.mjs` обязательна.

## Как вносить правки
1. Зайти на `slavniymaliy.ru/admin/index.html`.
2. Авторизоваться через GitHub или TinaCloud.
3. Внести изменения и нажать **Save**.
4. Подождать 3-5 минут (прогресс виден во вкладке Actions репозитория).
