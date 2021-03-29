import { atom, selector } from "recoil";
import { selectedNodeState, treeNodeFamily } from "./file";

export const editorVisibilityState = atom({
  key: "editorVisibility",
  default: false
});

export const editableNodeState = selector({
  key: "editableNode",
  get: ({ get }) => {
    const id = get(selectedNodeState);
    if (id === null || id === undefined) {
      return null;
    }
    return get(treeNodeFamily(id));
  },
  set: ({ set }, newValue) => {
    set(selectedNodeState, newValue);
  }
});
