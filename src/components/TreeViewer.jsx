import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import classnames from 'classnames';

import TreeRow from "components/TreeRow/TreeRow";

const TreeViewer = ({ className, children = [], visible = false }) => {
    return (
        <ol className={classnames(className, "tree-viewer", {"tree-viewer__invisible": !visible })}>
            {children.map(id => (
                <TreeRow index={id} key={id}/>
            ))}
        </ol>
    );
};

export default styled(TreeViewer)`
    padding-left: 25px;

    .tree-viewer__invisible {
        height: 0px;
        overflow: hidden;
        visibility: hidden;
    }
`;