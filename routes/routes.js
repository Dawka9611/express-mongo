import Router from 'express'
import songRoutes from './song.routes.js'
import userRoutes from './users.routes.js'

const routes = Router()

routes.use('/users', userRoutes)
routes.use('/songs', songRoutes)

export default routes
