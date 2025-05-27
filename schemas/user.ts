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
    default: ['brawl-stars'],
  },
  username: {
    type: String,
    required: true,
    default: () => getRandomUserString(),
  },
});

const User = models?.User || model('User', user);

export default User;
