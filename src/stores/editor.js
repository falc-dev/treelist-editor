import { atom, selector } from "recoil";
import { treeNodeFamily } from "./file";

export const editorVisibilityState = atom({
  key: "editorVisibility",
  default: false
});

export const editableNodeIdState = atom({
  key: "editableNodeId",
  default: undefined
});

export const editableNodeState = selector({
  key: "editableNode",
  get: ({ get }) => {
    const id = get(editableNodeIdState);
    if (id) {
      return get(treeNodeFamily(id));
    }
    return null;
  },
  set: ({ set }, newValue) => {
    set(editableNodeIdState, newValue);
  }
});
