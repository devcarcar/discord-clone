import { Schema, model, models } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const user = new Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
    default: () => uuidv4(),
  },
  email: { type: String, required: true },
  password: { type: String, required: true },
  // username: { type: String, required: true },
});

const User = models?.User || model('User', user);

export default User;
