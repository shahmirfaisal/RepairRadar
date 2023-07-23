// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Review, Appointment, User } = initSchema(schema);

export {
  Review,
  Appointment,
  User
};