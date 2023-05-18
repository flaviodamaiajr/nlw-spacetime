import fastify from 'fastify'
import cors from '@fastify/cors'
import { memeoriesRoutes } from './routes/memories'

const app = fastify()

app.register(cors, { origin: true })

app.register(memeoriesRoutes)

app.listen({ port: 3333 }).then(() => {
  console.log('🚀 HTTP server is running on http://localhost:3333')
})
