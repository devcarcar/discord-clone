import { Schema, model, models } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

function getRandomUserString() {
  let str = 'user_';
  let arr = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
  ];
  for (let i = 0; i < 15; i++) {
    str += arr[Math.floor(Math.random() * 36)];
  }
  return str;
}

interface Group {
  id: string;
  name: string;
  description: string;
  icon: string;
  members: number;
  activity: number;
}

enum Status {
  ONLINE = 'ONLINE',
  DND = 'DND',
  OFFLINE = 'OFFLINE',
}
const user = new Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
    default: () => uuidv4(),
  },
  email: { type: String, required: true },
  password: { type: String, required: true },
  dms: {
    type: Array,
    required: true,
    default: [
      {
        id: '3423-124912481904891308',
        name: 'user1',
        icon: 'https://h7.alamy.com/comp/W3E09A/example-ribbon-example-isolated-sign-example-banner-W3E09A.jpg',
        status: Status.ONLINE,
        active: true,
      },
      {
        id: '3423-124912481904891309',
        name: 'user2',
        icon: 'https://h7.alamy.com/comp/W3E09A/example-ribbon-example-isolated-sign-example-banner-W3E09A.jpg',
        status: Status.DND,
        active: true,
      },
      {
        id: '3423-124912481904891310',
        name: 'user3',
        icon: 'https://h7.alamy.com/comp/W3E09A/example-ribbon-example-isolated-sign-example-banner-W3E09A.jpg',
        status: Status.ONLINE,
        active: false,
      },
      {
        id: '3423-124912481904891311',
        name: 'user4',
        icon: 'https://h7.alamy.com/comp/W3E09A/example-ribbon-example-isolated-sign-example-banner-W3E09A.jpg',
        status: Status.OFFLINE,
        active: false,
      },
      {
        id: '3423-124912481904891312',
        name: 'user5',
        icon: 'https://h7.alamy.com/comp/W3E09A/example-ribbon-example-isolated-sign-example-banner-W3E09A.jpg',
        status: Status.DND,
        active: false,
      },
    ],
  },
  groups: {
    type: Array,
    required: true,
    default: [
      {
        id: '3423-124912481904891308',
        name: 'Group 1',
        description: 'Group 1 desc',
        icon: 'https://h7.alamy.com/comp/W3E09A/example-ribbon-example-isolated-sign-example-banner-W3E09A.jpg',
        members: 12,
        activity: 2,
      },
      {
        id: '3423-124912481904891309',
        name: 'Group 2',
        description: 'Group 2 desc',
        icon: 'https://h7.alamy.com/comp/W3E09A/example-ribbon-example-isolated-sign-example-banner-W3E09A.jpg',
        members: 12,
        activity: 2,
      },
      {
        id: '3423-124912481904891310',
        name: 'Group 3',
        description: 'Group 3 desc',
        icon: 'https://h7.alamy.com/comp/W3E09A/example-ribbon-example-isolated-sign-example-banner-W3E09A.jpg',
        members: 12,
        activity: 2,
      },
      {
        id: '3423-124912481904891311',
        name: 'Group 4',
        description: 'Group 4 desc',
        icon: 'https://h7.alamy.com/comp/W3E09A/example-ribbon-example-isolated-sign-example-banner-W3E09A.jpg',
        members: 13,
        activity: 2,
      },
    ],
  },
  username: {
    type: String,
    required: true,
    default: () => getRandomUserString(),
  },
});

const User = models?.User || model('User', user);

export default User;
