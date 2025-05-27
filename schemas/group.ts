import { ChannelType } from '@/utils';
import { Schema, model, models } from 'mongoose';

interface Channel {
  channelId: string;
  type: ChannelType;
  parent?: string;
  name: string;
  channelList?: any[];
}

const group = new Schema({
  groupId: { type: String, required: true, default: 'brawl-stars' },
  name: { type: String, required: true, default: 'Brawl Stars' },
  description: {
    type: String,
    required: true,
    default: 'Brawl Stars Official Server',
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
        type: ChannelType.CATEGORY,
        name: 'general',
      },
      {
        channelId: 'general-chat',
        type: ChannelType.TEXT,
        parent: 'general',
        name: 'General Chat',
      },
      {
        channelId: 'vc-1',
        type: ChannelType.AUDIO,
        name: 'Voice call',
      },
    ],
  },
});

const Group = models?.Group || model('Group', group);

export default Group;
