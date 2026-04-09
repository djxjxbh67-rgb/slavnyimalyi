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
    ],
  },
});
