import { useRecoilCallback } from "recoil";
import { treeNodeFamily, treeRootState } from "stores/file";
import useRootNodes from "hooks/useRootNodes";

export default () => {
  const { generateId } = useRootNodes();
  const insertRowBelow = useRecoilCallback(({ snapshot, set }) => (id) => {
    const { contents: currentNode } = snapshot.getLoadable(treeNodeFamily(id));
    // Get parent node
    const parentId = currentNode.parent;
    const childId = generateId();
    if (parentId === null) {
      set(treeRootState, (treeRoot) => {
        const currentOnRoot = treeRoot.indexOf(id);
        const updatedTreeRootList = treeRoot.slice();
        updatedTreeRootList.splice(currentOnRoot + 1, 0, childId);
        return updatedTreeRootList;
      });
    } else {
      const { contents: parentNode } = snapshot.getLoadable(
        treeNodeFamily(parentId)
      );
      // Generate sibling node
      set(treeNodeFamily(childId), (node) => ({
        ...node,
        id: childId,
        parent: parentId
      }));
      // Insert new node after the current one
      const currentOnParent = parentNode.children.indexOf(id);
      const updatedParentNodeList = parentNode.children.slice();
      updatedParentNodeList.splice(currentOnParent + 1, 0, childId);
      set(treeNodeFamily(parentId), (node) => ({
        ...node,
        children: updatedParentNodeList
      }));
    }
  });

  const addChildren = useRecoilCallback(({ snapshot, set }) => (id) => {
    const childId = generateId();
    set(treeNodeFamily(childId), (node) => ({
      ...node,
      id: childId,
      parent: id
    }));
    set(treeNodeFamily(id), (node) => ({
      ...node,
      children: [...node.children, childId]
    }));
  });

  return {
    insertRowBelow,
    addChildren
  };
};
