// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Message, Chat, Review, Appointment, User } = initSchema(schema);

export {
  Message,
  Chat,
  Review,
  Appointment,
  User
};