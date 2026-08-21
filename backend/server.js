const express = require('express')
const cors    = require('cors')
const path    = require('path')

const app = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(cors({ origin: process.env.FRONTEND_URL || '*' }))
app.use(express.json())

// Auth middleware for admin routes
function requireApiKey(req, res, next) {
  const key = req.headers['x-api-key']
  if (!key || key !== process.env.API_KEY) {
    return res.status(401).json({ error: 'Unauthorized' })
  }
  next()
}

// Routes
const eventsRouter = require('./routes/events')
app.use('/api/events', eventsRouter)

// Admin routes (future use)
app.get('/api/admin/ping', requireApiKey, (req, res) => {
  res.json({ message: 'pong', timestamp: new Date().toISOString() })
})

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

app.listen(PORT, () => {
  console.log(`SaquaStraub API running on port ${PORT}`)
})
