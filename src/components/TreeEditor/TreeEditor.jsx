import React from "react";
import classnames from "classnames";
import styled from "styled-components";
import { useRecoilValue } from "recoil";

import NewRootNodeButton from "components/TreeEditor/NewRootNodeButton";
import TreeViewer from "components/TreeViewer";

import { treeRootState } from "stores/file";

const TreeEditor = ({ className }) => {
  const treeRoot = useRecoilValue(treeRootState);
  return (
    <div className={classnames("tree-editor", className)}>
      <TreeViewer className="tree-editor__viewer" children={treeRoot} />
      <NewRootNodeButton />
    </div>
  );
};

export default styled(TreeEditor)`
  overflow-y: auto;
  padding: 16px;

  .tree-editor__viewer {
    margin-bottom: 8px;
  }
`;
