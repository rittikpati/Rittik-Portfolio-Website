import express from 'express'

const app = express()

app.disable('x-powered-by')
app.use(express.json({ limit: '1mb' }))

app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    service: 'rittik-portfolio',
    environment: 'production',
    timestamp: new Date().toISOString()
  })
})

app.use('/api', (_req, res) => {
  res.status(404).json({ error: 'Not found' })
})

export default app
