import { ChannelType } from '@/utils';
import { Schema, model, models } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

interface Channel {
  channelId: string;
  type: ChannelType;
  parent?: string;
  name: string;
  channelList?: any[];
}

const group = new Schema({
  groupId: {
    type: String,
    required: true,
    default: () => uuidv4(),
    unique: true,
  },
  name: { type: String, required: true, default: 'Brawl Stars' },
  description: {
    type: String,
    required: true,
    default: 'Group description',
  },
  icon: {
    type: String,
    required: true,
    default:
      'https://h7.alamy.com/comp/W3E09A/example-ribbon-example-isolated-sign-example-banner-W3E09A.jpg',
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
        channelId: 'vc',
        type: 2,
        name: 'vc',
      },
      {
        channelId: 'chat',
        type: 1,
        name: 'chat',
      },
    ],
  },
});

const Group = models?.Group || model('Group', group);

export default Group;
