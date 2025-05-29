import { Schema, model, models } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const group = new Schema({
  groupId: {
    type: String,
    required: true,
    default: () => uuidv4(),
    unique: true,
  },
  name: { type: String, required: true },
  description: {
    type: String,
    required: true,
    default: 'Group description',
  },
  icon: {
    type: String,
    required: true,
  },
  members: { type: Array, required: true, default: [] },
  activity: { type: Number, required: true, default: 256 },
  channels: {
    type: Array,
    required: true,
    default: [
      {
        channelId: 'general',
        type: 0,
        name: 'general',
      },
      {
        channelId: 'chat',
        type: 1,
        name: 'chat',
        parent: 'general',
      },
      {
        channelId: 'vc',
        type: 2,
        name: 'vc',
        parent: 'general',
      },
    ],
  },
});

const Group = models?.Group || model('Group', group);

export default Group;
