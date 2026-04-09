import { defineConfig } from "tinacms";

const branch =
  process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || null,
  token: process.env.TINA_TOKEN || null,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "home",
        label: "Главная страница",
        path: "content",
        format: "json",
        match: {
          include: "Главная",
        },
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "object",
            name: "hero",
            label: "Главный блок (Hero)",
            fields: [
              { type: "string", name: "badge", label: "Бейдж" },
              { type: "string", name: "title_main", label: "Заголовок (основной)" },
              { type: "string", name: "title_gradient", label: "Заголовок (градиентный)" },
              { type: "string", name: "subtitle", label: "Подзаголовок", ui: { component: "textarea" } },
              { type: "string", name: "cta_primary", label: "Кнопка (основная)" },
              { type: "string", name: "cta_secondary", label: "Кнопка (второстепенная)" },
            ],
          },
          {
            type: "object",
            name: "advantages",
            label: "Преимущества",
            fields: [
              { type: "string", name: "title_main", label: "Заголовок" },
              { type: "string", name: "title_gradient", label: "Заголовок (градиент)" },
              { type: "string", name: "subtitle", label: "Подзаголовок", ui: { component: "textarea" } },
              {
                type: "object",
                list: true,
                name: "items",
                label: "Панели",
                ui: { itemProps: (item) => ({ label: item?.title }) },
                fields: [
                  { type: "string", name: "icon", label: "Иконка" },
                  { type: "string", name: "title", label: "Заголовок" },
                  { type: "string", name: "desc", label: "Описание" },
                ]
              }
            ]
          },
        ],
      },
      {
        name: "prices",
        label: "Цены",
        path: "content",
        format: "json",
        match: {
          include: "Цены",
        },
        ui: {
          allowedActions: { create: false, delete: false },
        },
        fields: [
          {
            type: "object",
            name: "hero",
            label: "Вступление",
            fields: [
              { type: "string", name: "badge", label: "Бейдж" },
              { type: "string", name: "title_main", label: "Заголовок" },
              { type: "string", name: "title_gradient", label: "Заголовок (цветной)" },
              { type: "string", name: "subtitle", label: "Текст", ui: { component: "textarea" } },
            ],
          },
          {
            type: "object",
            list: true,
            name: "plans",
            label: "Тарифы",
            ui: { itemProps: (item) => ({ label: item?.name }) },
            fields: [
              { type: "string", name: "id", label: "ID (англ)" },
              { type: "string", name: "emoji", label: "Иконка" },
              { type: "string", name: "name", label: "Название" },
              { type: "string", name: "time", label: "Время" },
              { type: "string", name: "price", label: "Стоимость" },
              { type: "string", name: "unit", label: "За какой период (₽/мес)" },
              { type: "boolean", name: "featured", label: "Сделать главным" },
              { type: "string", name: "featured_badge", label: "Полоска-бейджик (если главный)" },
              {
                type: "object",
                list: true,
                name: "features",
                label: "Опции",
                ui: { itemProps: (item) => ({ label: item?.text }) },
                fields: [
                  { type: "string", name: "text", label: "Текст опции" },
                  { type: "boolean", name: "included", label: "Галочка или крестик" },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "info",
            label: "Доп информация (снизу)",
            fields: [
              { type: "string", name: "title", label: "Заголовок" },
              {
                type: "object",
                list: true,
                name: "items",
                label: "Блоки инфы",
                ui: { itemProps: (item) => ({ label: item?.title }) },
                fields: [
                  { type: "string", name: "icon", label: "Иконка" },
                  { type: "string", name: "title", label: "Заголовок" },
                  { type: "string", name: "desc", label: "Описание", ui: { component: "textarea" } },
                ]
              }
            ]
          }
        ]
      },
      {
        name: "contacts",
        label: "Контакты",
        path: "content",
        format: "json",
        match: {
          include: "Контакты",
        },
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          {
            type: "object",
            name: "hero",
            label: "Вступление",
            fields: [
              { type: "string", name: "badge", label: "Бейдж" },
              { type: "string", name: "title_main", label: "Заголовок" },
              { type: "string", name: "title_gradient", label: "Заголовок (цветной)" },
              { type: "string", name: "subtitle", label: "Текст", ui: { component: "textarea" } },
            ],
          },
          {
            type: "object",
            list: true,
            name: "contacts",
            label: "Контактные данные",
            ui: { itemProps: (item) => ({ label: item?.title }) },
            fields: [
              { type: "string", name: "icon", label: "Иконка" },
              { type: "string", name: "title", label: "Заголовок (например 'Телефон')" },
              { type: "string", name: "link", label: "Системная ссылка (tel:... или mailto:...)" },
              { type: "string", name: "link_text", label: "Текст ссылки" },
              { type: "string", name: "note", label: "Приписка" },
              { type: "string", list: true, name: "multiline_text", label: "Адрес в несколько строк" },
            ]
          },
          {
            type: "object",
            name: "map",
            label: "Карта",
            fields: [
              { type: "string", name: "url", label: "Ссылка на Яндекс/Гугл карту" },
              { type: "string", name: "caption", label: "Подпись под картой" }
            ]
          }
        ]
      },
      {
        name: "about",
        label: "О нас",
        path: "content",
        format: "json",
        match: { include: "О_нас" },
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          {
            type: "object",
            name: "hero",
            label: "Вступление",
            fields: [
              { type: "string", name: "badge", label: "Бейдж" },
              { type: "string", name: "title_main", label: "Заголовок" },
              { type: "string", name: "title_gradient", label: "Заголовок (цветной)" },
              { type: "string", name: "subtitle", label: "Текст", ui: { component: "textarea" } },
            ],
          },
          {
            type: "object",
            name: "mission",
            label: "Миссия",
            fields: [
              { type: "string", name: "title", label: "Заголовок" },
              { type: "string", list: true, name: "paragraphs", label: "Абзацы текста", ui: { component: "textarea" } },
              { type: "string", name: "visual_label", label: "Подпись на плашке" },
              { type: "string", name: "visual_emoji", label: "Эмодзи на плашке" }
            ]
          },
          {
            type: "object",
            name: "values",
            label: "Ценности",
            fields: [
              { type: "string", name: "title", label: "Заголовок" },
              { type: "string", name: "subtitle", label: "Подзаголовок" },
              {
                type: "object",
                list: true,
                name: "items",
                label: "Пункты",
                ui: { itemProps: (item) => ({ label: item?.title }) },
                fields: [
                  { type: "string", name: "icon", label: "Иконка" },
                  { type: "string", name: "title", label: "Заголовок" },
                  { type: "string", name: "desc", label: "Описание", ui: { component: "textarea" } },
                ]
              }
            ]
          },
          {
            type: "object",
            name: "environment",
            label: "Пространство",
            fields: [
              { type: "string", name: "title", label: "Заголовок" },
              { type: "string", name: "subtitle", label: "Подзаголовок" },
              { type: "string", list: true, name: "features", label: "Список особенностей" }
            ]
          }
        ]
      },
      {
        name: "services",
        label: "Услуги",
        path: "content",
        format: "json",
        match: { include: "Услуги" },
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          {
            type: "object",
            name: "hero",
            label: "Вступление",
            fields: [
              { type: "string", name: "badge", label: "Бейдж" },
              { type: "string", name: "title_main", label: "Заголовок" },
              { type: "string", name: "title_gradient", label: "Заголовок (цветной)" },
              { type: "string", name: "subtitle", label: "Текст", ui: { component: "textarea" } },
            ],
          },
          {
            type: "object",
            list: true,
            name: "services",
            label: "Список услуг",
            ui: { itemProps: (item) => ({ label: item?.title }) },
            fields: [
              { type: "string", name: "id", label: "ID (англ)" },
              { type: "string", name: "emoji", label: "Иконка" },
              { type: "string", name: "title", label: "Название услуги" },
              { type: "string", name: "description", label: "Описание", ui: { component: "textarea" } },
              { type: "string", name: "features_title", label: "Заголовок списка Что включено" },
              { type: "string", list: true, name: "features", label: "Что включено" },
              { type: "string", name: "pricing_title", label: "Заголовок списка Цены" },
              {
                type: "object",
                list: true,
                name: "prices",
                label: "Прайс",
                ui: { itemProps: (item) => ({ label: item?.name }) },
                fields: [
                  { type: "string", name: "name", label: "Услуга" },
                  { type: "string", name: "value", label: "Цена" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "cta",
            label: "Призыв к действию",
            fields: [
              { type: "string", name: "title_main", label: "Заголовок" },
              { type: "string", name: "title_gradient", label: "Заголовок (цветной)" },
              { type: "string", name: "subtitle", label: "Текст", ui: { component: "textarea" } },
              { type: "string", name: "phone_text", label: "Текст кнопки 1" },
              { type: "string", name: "email_text", label: "Текст кнопки 2" }
            ]
          }
        ]
      },
      {
        name: "groups",
        label: "Группы",
        path: "content",
        format: "json",
        match: { include: "Группы" },
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          {
            type: "object",
            name: "hero",
            label: "Вступление",
            fields: [
              { type: "string", name: "badge", label: "Бейдж" },
              { type: "string", name: "title_main", label: "Заголовок" },
              { type: "string", name: "title_gradient", label: "Заголовок (цветной)" },
              { type: "string", name: "subtitle", label: "Текст", ui: { component: "textarea" } },
            ],
          },
          {
            type: "object",
            list: true,
            name: "items",
            label: "Группы по возрастам",
            ui: { itemProps: (item) => ({ label: item?.title }) },
            fields: [
              { type: "string", name: "id", label: "ID (англ)" },
              { type: "string", name: "emoji", label: "Иконка" },
              { type: "string", name: "age", label: "Возраст" },
              { type: "string", name: "title", label: "Название группы" },
              { type: "string", name: "desc", label: "Описание", ui: { component: "textarea" } },
              { type: "string", name: "features_title", label: "Заголовок списка" },
              { type: "string", list: true, name: "features", label: "Особенности" },
              { type: "string", name: "cta", label: "Текст ссылки Подробнее" },
              { type: "string", name: "link", label: "Ссылка" }
            ]
          }
        ]
      },
      {
        name: "documents",
        label: "Документы",
        path: "content",
        format: "json",
        match: { include: "Документы" },
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          {
            type: "object",
            name: "hero",
            label: "Вступление",
            fields: [
              { type: "string", name: "badge", label: "Бейдж" },
              { type: "string", name: "title_main", label: "Заголовок" },
              { type: "string", name: "title_gradient", label: "Заголовок (цветной)" },
              { type: "string", name: "subtitle", label: "Текст", ui: { component: "textarea" } },
            ],
          },
          {
            type: "object",
            list: true,
            name: "categories",
            label: "Категории документов",
            ui: { itemProps: (item) => ({ label: item?.title }) },
            fields: [
              { type: "string", name: "icon", label: "Иконка" },
              { type: "string", name: "title", label: "Название категории" },
              { type: "string", name: "description", label: "Описание", ui: { component: "textarea" } },
              { type: "string", list: true, name: "items", label: "Список документов" }
            ]
          }
        ]
      },
      {
        name: "team",
        label: "Команда",
        path: "content",
        format: "json",
        match: { include: "Команда" },
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          {
            type: "object",
            list: true,
            name: "members",
            label: "Сотрудники",
            ui: { itemProps: (item) => ({ label: item?.name }) },
            fields: [
              { type: "string", name: "name", label: "Имя" },
              { type: "string", name: "role", label: "Должность" },
              { type: "string", name: "emoji", label: "Иконка" },
              { type: "string", name: "photo", label: "Фото (URL)" },
              { type: "string", name: "birthday", label: "День рождения" },
              { type: "string", name: "education", label: "Образование", ui: { component: "textarea" } },
              { type: "string", name: "motto", label: "Девиз", ui: { component: "textarea" } }
            ]
          }
        ]
      },
      {
        name: "promo",
        label: "Промо акция",
        path: "content",
        format: "json",
        match: { include: "Промо_акция" },
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: "boolean", name: "enabled", label: "Включена?" },
          { type: "string", name: "badge", label: "Бейдж" },
          { type: "string", name: "title", label: "Заголовок" },
          { type: "string", name: "text", label: "Текст", ui: { component: "textarea" } },
          { type: "string", name: "bannerText", label: "Текст тонкой полоски сверху", ui: { component: "textarea" } },
          { type: "string", name: "buttonText", label: "Текст кнопки" },
          { type: "string", name: "buttonLink", label: "Ссылка кнопки" },
          { type: "string", name: "color", label: "Цвет" },
          { type: "string", name: "expiresAt", label: "Дата окончания (ГГГГ-ММ-ДД)" }
        ]
      }
    ],
  },
});
