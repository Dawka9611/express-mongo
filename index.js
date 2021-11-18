import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import routes from './routes/routes.js'
import morgan from 'morgan'
import errorHandler from './utilities/errorHandler.js'
import { MongoClient } from 'mongodb'
import { userSchema } from './schemas/schemas.js'

dotenv.config()
const port = process.env.PORT
const dbUrl = process.env.DATABASE_URL
const dbName = process.env.DATABASE_NAME

const client = new MongoClient(dbUrl)
const app = express()

async function initMongo() {
   await client.connect()
   console.log('Connected successfully to mongodb server')
   const db = client.db(dbName)

   db.createCollection('users', userSchema)

   app.locals.db = {
      users: db.collection('users'),
      songs: db.collection('songs')
   }
}
initMongo().catch(console.error)

app.use(cors())
   .use(morgan('combined'))
   .use(express.json())
   .use('/', routes)
   .use(errorHandler)

app.listen(port, () => {
   console.log(`Express app listening at http://localhost:${port}`)
})

export const db = () => app.locals.db
