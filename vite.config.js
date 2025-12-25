import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'fs'
import path from 'path'

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => ({
  plugins: [tailwindcss(), react()],
  server: {
    // add a simple middleware to serve a mock /api/chargers endpoint from public/chargers.json
    middlewareMode: false,
    port: 5173,
    setupMiddlewares(middlewares, { app, vite }) {
      app.get('/api/chargers', (req, res) => {
        try {
          const file = path.resolve(__dirname, 'public', 'chargers.json')
          const raw = fs.readFileSync(file, 'utf-8')
          let data = JSON.parse(raw)

          // support optional bbox query: south,west,north,east
          const bbox = req.query.bbox || req.query.bounds || null
          if (bbox) {
            const parts = String(bbox).split(',').map((p) => parseFloat(p))
            if (parts.length === 4 && parts.every((n) => !Number.isNaN(n))) {
              const [south, west, north, east] = parts
              data = data.filter((m) => {
                if (!m || typeof m.lat !== 'number' || typeof m.lng !== 'number') return false
                return m.lat >= south && m.lat <= north && m.lng >= west && m.lng <= east
              })
            }
          }

          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify(data))
        } catch (err) {
          res.statusCode = 500
          res.end(JSON.stringify({ error: 'failed to read mock data' }))
        }
      })
      return middlewares
    }
  }
}))
