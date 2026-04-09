import { defineConfig } from "tinacms";

// Your hosting provider will pass these env vars in
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

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
              { type: "string", name: "badge", label: "Бейдж (акция)" },
              { type: "string", name: "title_main", label: "Заголовок (основной)", ui: { component: "textarea" } },
              { type: "string", name: "title_gradient", label: "Заголовок (градиент)" },
              { type: "string", name: "subtitle", label: "Подзаголовок", ui: { component: "textarea" } },
              { type: "string", name: "cta_primary", label: "Кнопка (основная)" },
              { type: "string", name: "cta_secondary", label: "Кнопка (вторичная)" },
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
                label: "Список преимуществ",
                ui: {
                  itemProps: (item) => ({ label: item?.title }),
                },
                fields: [
                  { type: "string", name: "icon", label: "Иконка (эмодзи)" },
                  { type: "string", name: "title", label: "Заголовок" },
                  { type: "string", name: "desc", label: "Описание", ui: { component: "textarea" } },
                ],
              },
            ],
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
          }
        ]
      }
    ],
  },
});
