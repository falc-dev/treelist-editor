import { useRecoilCallback } from 'recoil';

import { selectedNodeState, treeNodeFamily } from "stores/file";

export default () => {
    const selectRow = useRecoilCallback(({ snapshot, set }) => (id) => {
        const selectedNode = snapshot.getLoadable(selectedNodeState).contents

        let oldId = selectedNode;
        if (oldId !== undefined) {
            set(treeNodeFamily(oldId), ({ selected, ...n }) => {
                return n;
            });
        }

        set(selectedNodeState, id);
        set(treeNodeFamily(id), n => ({ ...n, selected: true }));
    });
    
    return {
        selectRow
    };
};