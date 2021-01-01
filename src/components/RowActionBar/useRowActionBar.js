import { useRecoilCallback } from 'recoil';
import { treeNodeFamily, treeRootState } from "stores/file";

export default () => {
    const insertRowBelow = useRecoilCallback(({ snapshot, set }) => (id) => {
        const currentNode = snapshot.getLoadable(treeNodeFamily(id));
        // Get parent node
        const parentId = currentNode.parent;
        const childId = generateId();
        if (parentId === null) {
            set(treeRootState, treeRoot => {
                const currentOnRoot = treeRoot.indexOf(currentId);
                const updatedTreeRootList = treeRoot.slice();
                updatedTreeRootList.splice(currentOnRoot + 1, 0, childId);
                return updatedTreeRootList
            });
        } else {
            const parentNode = snapshot.getLoadable(treeNodeFamily(parentId));
            // Generate sibling node
           
            set(treeNodeFamily(childId), node => ({
                ...node,
                id: childId,
                parent: parentId
            }))
            // Insert new node after the current one
            const currentOnParent = parentNode.list.indexOf(currentId);
            const updatedParentNodeList = parentNode.list.slice();
            updatedParentNodeList.splice(currentOnParent + 1, 0, childId);
            set(treeNodeFamily(parentId), node => ({
                ...node,
                list: updatedParentNodeList
            }));
        }
        
    });

    const addChildren = () => {};

    return {
        insertRowBelow,
        addChildren
    }
};