import { atom, selector, atomFamily } from "recoil";
import { idState } from "./id.js";

export const fileNameState = atom({
  key: "fileName",
  default: ""
});

export const treeRootState = atom({
  key: "treeRoot",
  default: []
});

export const treeNodeListState = atom({
  key: "treeNodeList",
  default: []
});

export const treeNodeFamily = atomFamily({
  key: "node",
  default: ({
    id,
    parent = null,
    children = [],
    text = "",
    selected = false
  }) => ({
    id,
    parent,
    children,
    text,
    selected
  })
});

export const treeNodesState = selector({
  key: "treeNodes",
  get: ({ get }) => {
    let treeNodes = {};
    const treeNodeList = get(treeNodeListState);
    for (const id in treeNodeList) {
      treeNodes[id] = get(treeNodeFamily(id));
    }
    return treeNodes;
  },
  set: ({ set }, newValue) => {
    let treeNodeList = [];
    for (const id in newValue) {
      const idNumber = parseInt(id, 10);
      treeNodeList.push(idNumber);
      const node = newValue[id];
      set(treeNodeFamily(idNumber), node);
    }
    set(treeNodeListState, treeNodeList);
  }
});

export const selectedNodeState = atom({
  key: "selectedNode",
  default: undefined
});

export const fileState = selector({
  key: "file",
  get: ({ get }) => {
    return {
      treeRoot: get(treeRootState),
      treeNodes: get(treeNodesState),
      fileName: get(fileNameState)
    };
  },
  set: ({ set }, newValue) => {
    const {
      fileName,
      treeRoot,
      treeNodes = {},
      freeKeys = [],
      nextUpperKey
    } = newValue;
    set(treeRootState, treeRoot);
    set(treeNodesState, treeNodes);
    set(fileNameState, fileName);
    set(idState, { freeKeys, nextUpperKey });
  }
});
