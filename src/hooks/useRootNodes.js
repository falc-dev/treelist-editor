import { useRecoilCallback } from "recoil";
import { freeKeysState, nextUpperKeyState } from "stores/id";
import { treeNodeFamily, treeRootState } from "stores/file";

export const useRootNodes = () => {
  const generateId = useRecoilCallback(({ snapshot, set }) => () => {
    const freeKeys = snapshot.getLoadable(freeKeysState).contents;
    let newId;
    if (freeKeys.length > 0) {
      newId = freeKeys.shift();
      set(freeKeysState, freeKeys);
    } else {
      newId = snapshot.getLoadable(nextUpperKeyState).contents;
      set(nextUpperKeyState, (_) => _ + 1);
    }
    return newId;
  });

  const addRootNode = useRecoilCallback(({ snapshot, set }) => () => {
    const childId = generateId();
    set(treeRootState, (treeRoot) => {
      return [...treeRoot, childId];
    });
  });

  return {
    generateId,
    addRootNode
  };
};

export default useRootNodes;
