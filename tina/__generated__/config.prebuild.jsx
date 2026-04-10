// tina/config.ts
import { defineConfig } from "tinacms";
var branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";
var config_default = defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || null,
  token: process.env.TINA_TOKEN || null,
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      {
        name: "home",
        label: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430",
        path: "content",
        format: "json",
        match: {
          include: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F"
        },
        ui: {
          allowedActions: {
            create: false,
            delete: false
          }
        },
        fields: [
          {
            type: "object",
            name: "hero",
            label: "\u0413\u043B\u0430\u0432\u043D\u044B\u0439 \u0431\u043B\u043E\u043A (Hero)",
            fields: [
              { type: "string", name: "badge", label: "\u0411\u0435\u0439\u0434\u0436" },
              { type: "string", name: "title_main", label: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A (\u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0439)" },
              { type: "string", name: "title_gradient", label: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A (\u0433\u0440\u0430\u0434\u0438\u0435\u043D\u0442\u043D\u044B\u0439)" },
              { type: "string", name: "subtitle", label: "\u041F\u043E\u0434\u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A", ui: { component: "textarea" } },
              { type: "string", name: "cta_primary", label: "\u041A\u043D\u043E\u043F\u043A\u0430 (\u043E\u0441\u043D\u043E\u0432\u043D\u0430\u044F)" },
              { type: "string", name: "cta_secondary", label: "\u041A\u043D\u043E\u043F\u043A\u0430 (\u0432\u0442\u043E\u0440\u043E\u0441\u0442\u0435\u043F\u0435\u043D\u043D\u0430\u044F)" }
            ]
          },
          {
            type: "object",
            name: "advantages",
            label: "\u041F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430",
            fields: [
              { type: "string", name: "title_main", label: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A" },
              { type: "string", name: "title_gradient", label: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A (\u0433\u0440\u0430\u0434\u0438\u0435\u043D\u0442)" },
              { type: "string", name: "subtitle", label: "\u041F\u043E\u0434\u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A", ui: { component: "textarea" } },
              {
                type: "object",
                list: true,
                name: "items",
                label: "\u041F\u0430\u043D\u0435\u043B\u0438",
                ui: { itemProps: (item) => ({ label: item?.title }) },
                fields: [
                  { type: "string", name: "icon", label: "\u0418\u043A\u043E\u043D\u043A\u0430" },
                  { type: "string", name: "title", label: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A" },
                  { type: "string", name: "desc", label: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435" }
                ]
              }
            ]
          }
        ]
      },
      {
        name: "prices",
        label: "\u0426\u0435\u043D\u044B",
        path: "content",
        format: "json",
        match: {
          include: "\u0426\u0435\u043D\u044B"
        },
        ui: {
          allowedActions: { create: false, delete: false }
        },
        fields: [
          {
            type: "object",
            name: "hero",
            label: "\u0412\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0435",
            fields: [
              { type: "string", name: "badge", label: "\u0411\u0435\u0439\u0434\u0436" },
              { type: "string", name: "title_main", label: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A" },
              { type: "string", name: "title_gradient", label: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A (\u0446\u0432\u0435\u0442\u043D\u043E\u0439)" },
              { type: "string", name: "subtitle", label: "\u0422\u0435\u043A\u0441\u0442", ui: { component: "textarea" } }
            ]
          },
          {
            type: "object",
            list: true,
            name: "plans",
            label: "\u0422\u0430\u0440\u0438\u0444\u044B",
            ui: { itemProps: (item) => ({ label: item?.name }) },
            fields: [
              { type: "string", name: "id", label: "ID (\u0430\u043D\u0433\u043B)" },
              { type: "string", name: "emoji", label: "\u0418\u043A\u043E\u043D\u043A\u0430" },
              { type: "string", name: "name", label: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435" },
              { type: "string", name: "time", label: "\u0412\u0440\u0435\u043C\u044F" },
              { type: "string", name: "price", label: "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C" },
              { type: "string", name: "unit", label: "\u0417\u0430 \u043A\u0430\u043A\u043E\u0439 \u043F\u0435\u0440\u0438\u043E\u0434 (\u20BD/\u043C\u0435\u0441)" },
              { type: "boolean", name: "featured", label: "\u0421\u0434\u0435\u043B\u0430\u0442\u044C \u0433\u043B\u0430\u0432\u043D\u044B\u043C" },
              { type: "string", name: "featured_badge", label: "\u041F\u043E\u043B\u043E\u0441\u043A\u0430-\u0431\u0435\u0439\u0434\u0436\u0438\u043A (\u0435\u0441\u043B\u0438 \u0433\u043B\u0430\u0432\u043D\u044B\u0439)" },
              {
                type: "object",
                list: true,
                name: "features",
                label: "\u041E\u043F\u0446\u0438\u0438",
                ui: { itemProps: (item) => ({ label: item?.text }) },
                fields: [
                  { type: "string", name: "text", label: "\u0422\u0435\u043A\u0441\u0442 \u043E\u043F\u0446\u0438\u0438" },
                  { type: "boolean", name: "included", label: "\u0413\u0430\u043B\u043E\u0447\u043A\u0430 \u0438\u043B\u0438 \u043A\u0440\u0435\u0441\u0442\u0438\u043A" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "info",
            label: "\u0414\u043E\u043F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F (\u0441\u043D\u0438\u0437\u0443)",
            fields: [
              { type: "string", name: "title", label: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A" },
              {
                type: "object",
                list: true,
                name: "items",
                label: "\u0411\u043B\u043E\u043A\u0438 \u0438\u043D\u0444\u044B",
                ui: { itemProps: (item) => ({ label: item?.title }) },
                fields: [
                  { type: "string", name: "icon", label: "\u0418\u043A\u043E\u043D\u043A\u0430" },
                  { type: "string", name: "title", label: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A" },
                  { type: "string", name: "desc", label: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435", ui: { component: "textarea" } }
                ]
              }
            ]
          }
        ]
      },
      {
        name: "contacts",
        label: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B",
        path: "content",
        format: "json",
        match: {
          include: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"
        },
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          {
            type: "object",
            name: "hero",
            label: "\u0412\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0435",
            fields: [
              { type: "string", name: "badge", label: "\u0411\u0435\u0439\u0434\u0436" },
              { type: "string", name: "title_main", label: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A" },
              { type: "string", name: "title_gradient", label: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A (\u0446\u0432\u0435\u0442\u043D\u043E\u0439)" },
              { type: "string", name: "subtitle", label: "\u0422\u0435\u043A\u0441\u0442", ui: { component: "textarea" } }
            ]
          },
          {
            type: "object",
            list: true,
            name: "contacts",
            label: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435",
            ui: { itemProps: (item) => ({ label: item?.title }) },
            fields: [
              { type: "string", name: "icon", label: "\u0418\u043A\u043E\u043D\u043A\u0430" },
              { type: "string", name: "title", label: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A (\u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440 '\u0422\u0435\u043B\u0435\u0444\u043E\u043D')" },
              { type: "string", name: "link", label: "\u0421\u0438\u0441\u0442\u0435\u043C\u043D\u0430\u044F \u0441\u0441\u044B\u043B\u043A\u0430 (tel:... \u0438\u043B\u0438 mailto:...)" },
              { type: "string", name: "link_text", label: "\u0422\u0435\u043A\u0441\u0442 \u0441\u0441\u044B\u043B\u043A\u0438" },
              { type: "string", name: "note", label: "\u041F\u0440\u0438\u043F\u0438\u0441\u043A\u0430" },
              { type: "string", list: true, name: "multiline_text", label: "\u0410\u0434\u0440\u0435\u0441 \u0432 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0441\u0442\u0440\u043E\u043A" }
            ]
          },
          {
            type: "object",
            name: "map",
            label: "\u041A\u0430\u0440\u0442\u0430",
            fields: [
              { type: "string", name: "url", label: "\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u042F\u043D\u0434\u0435\u043A\u0441/\u0413\u0443\u0433\u043B \u043A\u0430\u0440\u0442\u0443" },
              { type: "string", name: "caption", label: "\u041F\u043E\u0434\u043F\u0438\u0441\u044C \u043F\u043E\u0434 \u043A\u0430\u0440\u0442\u043E\u0439" }
            ]
          }
        ]
      },
      {
        name: "about",
        label: "\u041E \u043D\u0430\u0441",
        path: "content",
        format: "json",
        match: { include: "\u041E_\u043D\u0430\u0441" },
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          {
            type: "object",
            name: "hero",
            label: "\u0412\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0435",
            fields: [
              { type: "string", name: "badge", label: "\u0411\u0435\u0439\u0434\u0436" },
              { type: "string", name: "title_main", label: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A" },
              { type: "string", name: "title_gradient", label: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A (\u0446\u0432\u0435\u0442\u043D\u043E\u0439)" },
              { type: "string", name: "subtitle", label: "\u0422\u0435\u043A\u0441\u0442", ui: { component: "textarea" } }
            ]
          },
          {
            type: "object",
            name: "mission",
            label: "\u041C\u0438\u0441\u0441\u0438\u044F",
            fields: [
              { type: "string", name: "title", label: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A" },
              { type: "string", list: true, name: "paragraphs", label: "\u0410\u0431\u0437\u0430\u0446\u044B \u0442\u0435\u043A\u0441\u0442\u0430", ui: { component: "textarea" } },
              { type: "string", name: "visual_label", label: "\u041F\u043E\u0434\u043F\u0438\u0441\u044C \u043D\u0430 \u043F\u043B\u0430\u0448\u043A\u0435" },
              { type: "string", name: "visual_emoji", label: "\u042D\u043C\u043E\u0434\u0437\u0438 \u043D\u0430 \u043F\u043B\u0430\u0448\u043A\u0435" }
            ]
          },
          {
            type: "object",
            name: "values",
            label: "\u0426\u0435\u043D\u043D\u043E\u0441\u0442\u0438",
            fields: [
              { type: "string", name: "title", label: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A" },
              { type: "string", name: "subtitle", label: "\u041F\u043E\u0434\u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A" },
              {
                type: "object",
                list: true,
                name: "items",
                label: "\u041F\u0443\u043D\u043A\u0442\u044B",
                ui: { itemProps: (item) => ({ label: item?.title }) },
                fields: [
                  { type: "string", name: "icon", label: "\u0418\u043A\u043E\u043D\u043A\u0430" },
                  { type: "string", name: "title", label: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A" },
                  { type: "string", name: "desc", label: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "environment",
            label: "\u041F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u043E",
            fields: [
              { type: "string", name: "title", label: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A" },
              { type: "string", name: "subtitle", label: "\u041F\u043E\u0434\u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A" },
              { type: "string", list: true, name: "features", label: "\u0421\u043F\u0438\u0441\u043E\u043A \u043E\u0441\u043E\u0431\u0435\u043D\u043D\u043E\u0441\u0442\u0435\u0439" }
            ]
          }
        ]
      },
      {
        name: "services",
        label: "\u0423\u0441\u043B\u0443\u0433\u0438",
        path: "content",
        format: "json",
        match: { include: "\u0423\u0441\u043B\u0443\u0433\u0438" },
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          {
            type: "object",
            name: "hero",
            label: "\u0412\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0435",
            fields: [
              { type: "string", name: "badge", label: "\u0411\u0435\u0439\u0434\u0436" },
              { type: "string", name: "title_main", label: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A" },
              { type: "string", name: "title_gradient", label: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A (\u0446\u0432\u0435\u0442\u043D\u043E\u0439)" },
              { type: "string", name: "subtitle", label: "\u0422\u0435\u043A\u0441\u0442", ui: { component: "textarea" } }
            ]
          },
          {
            type: "object",
            list: true,
            name: "services",
            label: "\u0421\u043F\u0438\u0441\u043E\u043A \u0443\u0441\u043B\u0443\u0433",
            ui: { itemProps: (item) => ({ label: item?.title }) },
            fields: [
              { type: "string", name: "id", label: "ID (\u0430\u043D\u0433\u043B)" },
              { type: "string", name: "emoji", label: "\u0418\u043A\u043E\u043D\u043A\u0430" },
              { type: "string", name: "title", label: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0443\u0441\u043B\u0443\u0433\u0438" },
              { type: "string", name: "description", label: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435", ui: { component: "textarea" } },
              { type: "string", name: "features_title", label: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u0441\u043F\u0438\u0441\u043A\u0430 \u0427\u0442\u043E \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u043E" },
              { type: "string", list: true, name: "features", label: "\u0427\u0442\u043E \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u043E" },
              { type: "string", name: "pricing_title", label: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u0441\u043F\u0438\u0441\u043A\u0430 \u0426\u0435\u043D\u044B" },
              {
                type: "object",
                list: true,
                name: "prices",
                label: "\u041F\u0440\u0430\u0439\u0441",
                ui: { itemProps: (item) => ({ label: item?.name }) },
                fields: [
                  { type: "string", name: "name", label: "\u0423\u0441\u043B\u0443\u0433\u0430" },
                  { type: "string", name: "value", label: "\u0426\u0435\u043D\u0430" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "cta",
            label: "\u041F\u0440\u0438\u0437\u044B\u0432 \u043A \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044E",
            fields: [
              { type: "string", name: "title_main", label: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A" },
              { type: "string", name: "title_gradient", label: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A (\u0446\u0432\u0435\u0442\u043D\u043E\u0439)" },
              { type: "string", name: "subtitle", label: "\u0422\u0435\u043A\u0441\u0442", ui: { component: "textarea" } },
              { type: "string", name: "phone_text", label: "\u0422\u0435\u043A\u0441\u0442 \u043A\u043D\u043E\u043F\u043A\u0438 1" },
              { type: "string", name: "email_text", label: "\u0422\u0435\u043A\u0441\u0442 \u043A\u043D\u043E\u043F\u043A\u0438 2" }
            ]
          }
        ]
      },
      {
        name: "groups",
        label: "\u0413\u0440\u0443\u043F\u043F\u044B",
        path: "content",
        format: "json",
        match: { include: "\u0413\u0440\u0443\u043F\u043F\u044B" },
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          {
            type: "object",
            name: "hero",
            label: "\u0412\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0435",
            fields: [
              { type: "string", name: "badge", label: "\u0411\u0435\u0439\u0434\u0436" },
              { type: "string", name: "title_main", label: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A" },
              { type: "string", name: "title_gradient", label: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A (\u0446\u0432\u0435\u0442\u043D\u043E\u0439)" },
              { type: "string", name: "subtitle", label: "\u0422\u0435\u043A\u0441\u0442", ui: { component: "textarea" } }
            ]
          },
          {
            type: "object",
            list: true,
            name: "items",
            label: "\u0413\u0440\u0443\u043F\u043F\u044B \u043F\u043E \u0432\u043E\u0437\u0440\u0430\u0441\u0442\u0430\u043C",
            ui: { itemProps: (item) => ({ label: item?.title }) },
            fields: [
              { type: "string", name: "id", label: "ID (\u0430\u043D\u0433\u043B)" },
              { type: "string", name: "emoji", label: "\u0418\u043A\u043E\u043D\u043A\u0430" },
              { type: "string", name: "age", label: "\u0412\u043E\u0437\u0440\u0430\u0441\u0442" },
              { type: "string", name: "title", label: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0433\u0440\u0443\u043F\u043F\u044B" },
              { type: "string", name: "desc", label: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435", ui: { component: "textarea" } },
              { type: "string", name: "features_title", label: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u0441\u043F\u0438\u0441\u043A\u0430" },
              { type: "string", list: true, name: "features", label: "\u041E\u0441\u043E\u0431\u0435\u043D\u043D\u043E\u0441\u0442\u0438" },
              { type: "string", name: "cta", label: "\u0422\u0435\u043A\u0441\u0442 \u0441\u0441\u044B\u043B\u043A\u0438 \u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435" },
              { type: "string", name: "link", label: "\u0421\u0441\u044B\u043B\u043A\u0430" }
            ]
          }
        ]
      },
      {
        name: "documents",
        label: "\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B",
        path: "content",
        format: "json",
        match: { include: "\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B" },
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          {
            type: "object",
            name: "hero",
            label: "\u0412\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0435",
            fields: [
              { type: "string", name: "badge", label: "\u0411\u0435\u0439\u0434\u0436" },
              { type: "string", name: "title_main", label: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A" },
              { type: "string", name: "title_gradient", label: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A (\u0446\u0432\u0435\u0442\u043D\u043E\u0439)" },
              { type: "string", name: "subtitle", label: "\u0422\u0435\u043A\u0441\u0442", ui: { component: "textarea" } }
            ]
          },
          {
            type: "object",
            list: true,
            name: "categories",
            label: "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u043E\u0432",
            ui: { itemProps: (item) => ({ label: item?.title }) },
            fields: [
              { type: "string", name: "icon", label: "\u0418\u043A\u043E\u043D\u043A\u0430" },
              { type: "string", name: "title", label: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438" },
              { type: "string", name: "description", label: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435", ui: { component: "textarea" } },
              { type: "string", list: true, name: "items", label: "\u0421\u043F\u0438\u0441\u043E\u043A \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u043E\u0432" }
            ]
          }
        ]
      },
      {
        name: "team",
        label: "\u041A\u043E\u043C\u0430\u043D\u0434\u0430",
        path: "content",
        format: "json",
        match: { include: "\u041A\u043E\u043C\u0430\u043D\u0434\u0430" },
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          {
            type: "object",
            list: true,
            name: "members",
            label: "\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438",
            ui: { itemProps: (item) => ({ label: item?.name }) },
            fields: [
              { type: "string", name: "name", label: "\u0418\u043C\u044F" },
              { type: "string", name: "role", label: "\u0414\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C" },
              { type: "string", name: "emoji", label: "\u0418\u043A\u043E\u043D\u043A\u0430" },
              { type: "string", name: "photo", label: "\u0424\u043E\u0442\u043E (URL)" },
              { type: "string", name: "birthday", label: "\u0414\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F" },
              { type: "string", name: "education", label: "\u041E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435", ui: { component: "textarea" } },
              { type: "string", name: "motto", label: "\u0414\u0435\u0432\u0438\u0437", ui: { component: "textarea" } }
            ]
          }
        ]
      },
      {
        name: "promo",
        label: "\u041F\u0440\u043E\u043C\u043E \u0430\u043A\u0446\u0438\u044F",
        path: "content",
        format: "json",
        match: { include: "\u041F\u0440\u043E\u043C\u043E_\u0430\u043A\u0446\u0438\u044F" },
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: "boolean", name: "enabled", label: "\u0412\u043A\u043B\u044E\u0447\u0435\u043D\u0430?" },
          { type: "string", name: "badge", label: "\u0411\u0435\u0439\u0434\u0436" },
          { type: "string", name: "title", label: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A" },
          { type: "string", name: "text", label: "\u0422\u0435\u043A\u0441\u0442", ui: { component: "textarea" } },
          { type: "string", name: "bannerText", label: "\u0422\u0435\u043A\u0441\u0442 \u0442\u043E\u043D\u043A\u043E\u0439 \u043F\u043E\u043B\u043E\u0441\u043A\u0438 \u0441\u0432\u0435\u0440\u0445\u0443", ui: { component: "textarea" } },
          { type: "string", name: "buttonText", label: "\u0422\u0435\u043A\u0441\u0442 \u043A\u043D\u043E\u043F\u043A\u0438" },
          { type: "string", name: "buttonLink", label: "\u0421\u0441\u044B\u043B\u043A\u0430 \u043A\u043D\u043E\u043F\u043A\u0438" },
          { type: "string", name: "color", label: "\u0426\u0432\u0435\u0442" },
          { type: "string", name: "expiresAt", label: "\u0414\u0430\u0442\u0430 \u043E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u044F (\u0413\u0413\u0413\u0413-\u041C\u041C-\u0414\u0414)" }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
