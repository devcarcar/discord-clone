import { getRandomUserString } from '@/helper';
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
  createdAt: { type: Date, required: true, default: () => Date.now() },
  dms: {
    type: Array,
    required: true,
    default: [],
  },
  groups: {
    type: Array,
    required: true,
    default: [],
  },
  username: {
    type: String,
    required: true,
    default: () => getRandomUserString(),
  },
  profilePic: {
    type: String,
  },
  last_seen: { type: Date, default: 0, required: true },
  status: {
    type: Number,
    default: 0,
    required: true,
  },
});

const User = models?.User || model('User', user);

export default User;
