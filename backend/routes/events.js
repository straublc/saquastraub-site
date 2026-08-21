const express = require('express')
const Database = require('better-sqlite3')
const path = require('path')

const router = express.Router()

// Initialize SQLite database
const DB_PATH = path.join(__dirname, '../db/events.db')
const db = new Database(DB_PATH)

// Create table if not exists
db.exec(`
  CREATE TABLE IF NOT EXISTS events (
    id          TEXT PRIMARY KEY,
    slug        TEXT UNIQUE NOT NULL,
    title       TEXT NOT NULL,
    category    TEXT NOT NULL,
    startDate   TEXT NOT NULL,
    endDate     TEXT NOT NULL,
    locationName    TEXT,
    locationAddress TEXT,
    locationMapsUrl TEXT,
    shortDescription TEXT,
    description TEXT,
    coverImage  TEXT,
    gallery     TEXT,  -- JSON array stored as string
    officialUrl TEXT,
    published   INTEGER DEFAULT 1,
    createdAt   TEXT DEFAULT CURRENT_TIMESTAMP
  )
`)

// Seed from static data if table is empty
const count = db.prepare('SELECT COUNT(*) as n FROM events').get()
if (count.n === 0) {
  try {
    // Seed from the static events file
    const { events } = require('../../src/data/events.js')
    const insert = db.prepare(`
      INSERT OR IGNORE INTO events
        (id, slug, title, category, startDate, endDate, locationName, locationAddress, locationMapsUrl,
         shortDescription, description, coverImage, gallery, officialUrl, published)
      VALUES
        (@id, @slug, @title, @category, @startDate, @endDate, @locationName, @locationAddress, @locationMapsUrl,
         @shortDescription, @description, @coverImage, @gallery, @officialUrl, @published)
    `)
    const seedAll = db.transaction((evts) => {
      for (const e of evts) {
        insert.run({
          id:               e.id,
          slug:             e.slug,
          title:            e.title,
          category:         e.category,
          startDate:        e.startDate,
          endDate:          e.endDate,
          locationName:     e.location.name,
          locationAddress:  e.location.address,
          locationMapsUrl:  e.location.mapsUrl,
          shortDescription: e.shortDescription,
          description:      e.description,
          coverImage:       e.coverImage,
          gallery:          JSON.stringify(e.gallery || []),
          officialUrl:      e.officialUrl || null,
          published:        e.published ? 1 : 0
        })
      }
    })
    seedAll(events)
    console.log(`Seeded ${events.length} events from static data`)
  } catch (err) {
    console.warn('Could not seed events from static data:', err.message)
  }
}

// Helper to format a row back to the API shape
function formatEvent(row) {
  return {
    id:       row.id,
    slug:     row.slug,
    title:    row.title,
    category: row.category,
    startDate: row.startDate,
    endDate:   row.endDate,
    location: {
      name:     row.locationName,
      address:  row.locationAddress,
      mapsUrl:  row.locationMapsUrl
    },
    shortDescription: row.shortDescription,
    description:      row.description,
    coverImage:       row.coverImage,
    gallery:          JSON.parse(row.gallery || '[]'),
    officialUrl:      row.officialUrl,
    published:        row.published === 1
  }
}

// GET /api/events — published events with endDate >= today
router.get('/', (req, res) => {
  const today = new Date().toISOString().split('T')[0]
  const rows = db.prepare(`
    SELECT * FROM events
    WHERE published = 1 AND endDate >= ?
    ORDER BY startDate ASC
  `).all(today)
  res.json(rows.map(formatEvent))
})

// GET /api/events/:slug
router.get('/:slug', (req, res) => {
  const row = db.prepare('SELECT * FROM events WHERE slug = ? AND published = 1').get(req.params.slug)
  if (!row) return res.status(404).json({ error: 'Event not found' })
  res.json(formatEvent(row))
})

module.exports = router
