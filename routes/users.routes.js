import Router from 'express'
import { getUsers, createUser, getUser, updateUser, deleteUser, deleteUsers } from '../controllers/user.controllers.js'

const userRoutes = Router()

userRoutes
   .get('/', getUsers)
   .post('/', createUser)
   .delete('/', deleteUsers)
   .get('/:id', getUser)
   .put('/:id', updateUser)
   .delete('/:id', deleteUser)

export default userRoutes
