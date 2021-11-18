import { ObjectId } from 'bson'
import { db } from '../index.js'

export async function getUsers(req, res) {
   const result = await db().users
      .find().toArray()
      .catch(err => res.status(400).send(err))

   res.send(result)
}

export async function createUser(req, res) {
   const result = await db().users
      .insertOne(req.body)
      .catch(err => res.status(400).send(err))

   res.send(result)
}

export async function getUser(req, res) {
   const id = req.params.id

   const result = await db().users
      .findOne(ObjectId(id))
      .catch(err => res.status(400).send(err))

   res.send(result)
}

export async function updateUser(req, res) {
   const id = req.params.id

   const result = await db().users
      .updateOne({ _id: ObjectId(id) }, { $set: req.body })
      .catch(err => res.status(400).send(err))

   res.send(result)
}

export async function deleteUser(req, res) {
   const id = req.params.id

   const result = await db().users
      .deleteOne({ _id: ObjectId(id) })
      .catch(err => res.status(400).send(err))

   res.send(result)
}

export async function deleteUsers(req, res) {
   const result = await db().users
      .deleteMany()
      .catch(err => res.status(400).send(err))

   res.send(result)
}