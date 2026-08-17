import path from 'node:path'
import { fileURLToPath } from 'node:url'
import dotenv from 'dotenv'
import express from 'express'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const ROOT_DIR = path.resolve(__dirname, '..')

dotenv.config({ path: path.join(ROOT_DIR, '.env') })

const PORT = Number(process.env.PORT) || 8000
const NODE_ENV = process.env.NODE_ENV || 'production'
const DIST_DIR = path.join(ROOT_DIR, 'frontend', 'dist')

const app = express()

app.disable('x-powered-by')
app.use(express.json({ limit: '1mb' }))

app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    service: 'rittik-portfolio',
    environment: NODE_ENV,
    timestamp: new Date().toISOString(),
  })
})

app.use(express.static(DIST_DIR, { index: 'index.html', maxAge: '1d' }))

app.get(/^\/(?!api\/).*/, (_req, res) => {
  res.sendFile(path.join(DIST_DIR, 'index.html'))
})

app.use('/api', (_req, res) => {
  res.status(404).json({ error: 'Not found' })
})

app.listen(PORT, () => {
  console.log(`[server] ${NODE_ENV} — serving on http://localhost:${PORT}`)
  console.log(`[server] static assets: ${DIST_DIR}`)
})
