import { atom, selector } from "recoil";

export const freeKeysState = atom({
  key: "freeKeys",
  default: []
});

export const nextUpperKeyState = atom({
  key: "nextUpperKey",
  default: 1
});

export const idState = selector({
  key: "id",
  get: ({ get }) => {
    return {
      freeKeys: get(freeKeysState),
      nextUpperKey: get(nextUpperKeyState)
    };
  },
  set: ({ set }, { freeKeys = [], nextUpperKey }) => {
    set(freeKeysState, freeKeys);
    set(nextUpperKeyState, nextUpperKey);
  }
});
