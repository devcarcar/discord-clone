export enum ModalType {
  SEARCH_MODAL = 1,
  CREATE_GROUP_MODAL = 999,
  CREATE_MODAL = 989,
  MEMBER_PROFILE_MODAL = 10000000,
}

export enum MemberType {
  GUEST = 100,
  ADMIN = 10000,
  OWNER = 10003000000,
}

export function getRandomUserString() {
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

export enum ChannelType {
  CATEGORY = 0,
  TEXT = 1,
  AUDIO = 2,
}
