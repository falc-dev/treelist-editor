import React from 'react';
import { useRecoilValue } from 'recoil';

import TreeViewer from "components/TreeViewer";

import { treeRootState } from "stores/file";

const TreeEditor = ({ className }) => {
    const treeRoot = useRecoilValue(treeRootState);
    return (
        <TreeViewer
            className={className}
            children={treeRoot}
        />
    );
};

export default TreeEditor;