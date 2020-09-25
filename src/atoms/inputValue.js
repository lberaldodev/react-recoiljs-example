import {
  atom,
  selector,
} from 'recoil';

export const inputValue = atom({
  key: 'inputValue',
  default: ''
});

export const charCountState = selector({
  key: 'charCountState',
  get: ({get}) => {
    const text = get(inputValue);
    return text.length;
  },
});