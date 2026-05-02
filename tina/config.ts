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
            type: "image",
            name: "image",
            label: "Imagen destacada",
            required: false,
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
          // --- Campos Homepage (planos, se mapean directo al frontmatter) ---
          {
            type: "string",
            name: "heroEyebrow",
            label: "Hero — Eyebrow (texto superior)",
          },
          {
            type: "string",
            name: "heroHeadline",
            label: "Hero — Headline (linea 1)",
          },
          {
            type: "string",
            name: "heroHighlight",
            label: "Hero — Headline destacado (dorado)",
          },
          {
            type: "string",
            name: "heroSubheadline",
            label: "Hero — Subheadline",
            ui: { component: "textarea" },
          },
          {
            type: "string",
            name: "heroSubHighlight",
            label: "Hero — Subheadline destacado",
          },
          {
            type: "string",
            name: "heroCTA1",
            label: "Hero — Boton 1 Texto",
          },
          {
            type: "string",
            name: "heroCTA1Url",
            label: "Hero — Boton 1 URL",
          },
          {
            type: "string",
            name: "heroCTA2",
            label: "Hero — Boton 2 Texto",
          },
          {
            type: "string",
            name: "heroCTA2Url",
            label: "Hero — Boton 2 URL",
          },
          {
            type: "string",
            name: "sectorsEyebrow",
            label: "Sectores — Eyebrow",
          },
          {
            type: "string",
            name: "sectorsHeadline",
            label: "Sectores — Headline",
          },
          {
            type: "string",
            name: "sectorsCount",
            label: "Sectores — Texto contador",
          },
          {
            type: "string",
            name: "briefingEyebrow",
            label: "Briefing — Eyebrow",
          },
          {
            type: "string",
            name: "briefingHeadline",
            label: "Briefing — Headline",
          },
          {
            type: "string",
            name: "briefingCTA",
            label: "Briefing — Boton CTA",
          },
          {
            type: "string",
            name: "finalHeadline",
            label: "CTA Final — Headline parte 1",
          },
          {
            type: "string",
            name: "finalHighlight",
            label: "CTA Final — Headline destacado (dorado)",
          },
          {
            type: "string",
            name: "finalBody",
            label: "CTA Final — Cuerpo",
            ui: { component: "textarea" },
          },
          {
            type: "string",
            name: "finalCTA",
            label: "CTA Final — Boton Texto",
          },
          {
            type: "string",
            name: "finalCTAUrl",
            label: "CTA Final — Boton URL",
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
        name: "portfolio",
        label: "Portafolio",
        path: "content/portfolio",
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
            label: "Titulo del proyecto",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Descripcion breve",
            required: true,
            ui: { component: "textarea" },
          },
          { type: "image", name: "image", label: "Imagen principal" },
          {
            type: "string",
            name: "tech_stack",
            label: "Tech Stack (ej: Next.js, Tailwind, Tina CMS)",
            ui: { component: "textarea" },
          },
          { type: "string", name: "link", label: "URL externa del proyecto" },
          { type: "boolean", name: "featured", label: "Destacado (aparece primero)" },
          {
            type: "datetime",
            name: "date",
            label: "Fecha de publicacion",
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
            label: "Caso de estudio detallado",
            isBody: true,
          },
        ],
      },
    ],
  },
});
