export const userSchema = {
   validator: {
      $jsonSchema: {
         bsonType: 'object',
         required: ['name', 'email', 'gender'],
         properties: {
            name: {
               bsonType: 'string',
            },
            email: {
               bsonType: 'string',
               // eslint-disable-next-line no-useless-escape
               pattern: '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'
            },
            gender: {
               bsonType: 'string',
               enum: ['эрэгтэй', 'эмэгтэй']
            }
         }
      }
   }
}
