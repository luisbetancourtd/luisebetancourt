import { defineConfig } from "tinacms";

export default defineConfig({
  branch: process.env.VERCEL_GIT_COMMIT_REF || "main",
  clientId: process.env.TINA_CLIENT_ID || null,
  token: process.env.TINA_TOKEN || null,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },

  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },

  schema: {
    collections: [
      {
        name: "post",
        label: "Entradas",
        path: "content/posts",
        format: "mdx",
        ui: {
          filename: {
            readonly: false,
            slugify: (values) => {
              return `${values?.title?.toLowerCase().replace(/\s+/g, "-")}`;
            },
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Titulo",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Descripcion",
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Fecha de publicacion",
            required: true,
          },
          {
            type: "string",
            name: "sector",
            label: "Sector",
            options: [
              { label: "Migracion", value: "migracion" },
              { label: "Trabajo", value: "trabajo" },
              { label: "Negocios", value: "negocios" },
              { label: "Vida", value: "vida" },
              { label: "Comunidad", value: "comunidad" },
            ],
            required: true,
          },
          {
            type: "string",
            name: "status",
            label: "Estado",
            options: [
              { label: "Borrador", value: "draft" },
              { label: "Publicado", value: "published" },
              { label: "Archivado", value: "archived" },
            ],
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Contenido",
            isBody: true,
          },
        ],
      },
      {
        name: "page",
        label: "Paginas",
        path: "content/pages",
        format: "mdx",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Titulo",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Descripcion",
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Contenido",
            isBody: true,
          },
        ],
      },
    ],
  },
});
