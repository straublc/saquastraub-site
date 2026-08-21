# SaquaStraub

Site oficial da SaquaStraub — casa de praia para aluguel por temporada em Saquarema, RJ.

🌐 [saquastraub.com.br](https://www.saquastraub.com.br)

---

## Stack

| Camada   | Tecnologia              |
|----------|-------------------------|
| Frontend | Vue 3 + Vite            |
| Roteamento | Vue Router 4          |
| Deploy   | Netlify                 |
| Backend  | Node.js + Express       |
| Banco    | SQLite (via better-sqlite3) |
| Hospedagem API | Railway         |

---

## Estrutura do projeto

```
├── src/
│   ├── assets/          # CSS global (design system)
│   ├── components/
│   │   ├── events/      # EventCard, EventFilters, EventGallery...
│   │   ├── layout/      # AppNavbar, AppFooter
│   │   └── ui/          # StatsBar, GalleryLightbox
│   ├── composables/
│   │   ├── useI18n.js   # Internacionalização (pt/en/es)
│   │   └── useEvents.js # Lógica de eventos + filtros
│   ├── data/
│   │   └── events.js    # Cadastro de eventos
│   ├── pages/
│   │   ├── HomePage.vue
│   │   ├── InstalacoesPage.vue
│   │   ├── EventosPage.vue
│   │   └── EventoDetailPage.vue
│   └── router/
│       └── index.js
├── public/
│   └── img/             # Imagens estáticas
├── backend/
│   ├── server.js        # API Express
│   └── routes/
│       └── events.js
├── vite.config.js
├── netlify.toml
└── package.json
```

---

## Desenvolvimento local

```bash
npm install
npm run dev
```

Acesse: http://localhost:5173

---

## Build

```bash
npm run build
```

O output fica em `dist/`.

---

## Deploy — Frontend (Netlify)

1. Conectar repositório no Netlify
2. **Build command:** `npm run build`
3. **Publish directory:** `dist`
4. O arquivo `netlify.toml` já configura o redirect SPA automaticamente

---

## Deploy — Backend (Railway)

```bash
cd backend
npm install
node server.js
```

Variáveis de ambiente necessárias no Railway:
- `PORT` (padrão: 3000)

---

## Adicionar um novo evento

Edite o arquivo `src/data/events.js` e adicione um objeto seguindo o modelo:

```js
{
  id: 'novo-id',
  slug: 'nome-do-evento-2026',
  title: 'Nome do Evento',
  category: 'surf', // surf | esporte | cultural | gastronomia | religioso | musica | reveillon
  startDate: '2026-10-01',
  endDate:   '2026-10-03',
  location: {
    name: 'Local do evento',
    address: 'Endereço completo, Saquarema — RJ',
    mapsUrl: 'https://maps.google.com/...'
  },
  shortDescription: 'Uma linha descrevendo o evento.',
  description: `Texto completo do evento...`,
  coverImage: '/img/eventos/nome-cover.webp',
  gallery: ['/img/eventos/nome-1.webp'],
  officialUrl: 'https://site-oficial.com',
  published: true
}
```

Eventos com `endDate` anterior à data atual **não aparecem automaticamente** no site.

---

## Idiomas

O site suporta **Português**, **English** e **Español**.

As traduções estão em `src/composables/useI18n.js`.  
Para adicionar uma chave nova, adicione nos três idiomas (`pt`, `en`, `es`).
