import Router from 'express'
import { getSongs, postSongs } from '../controllers/song.controllers.js'

const songRoutes = Router()

songRoutes
   .get('/', getSongs)
   .post('/', postSongs)

export default songRoutes
