import React from "react";
import classnames from "classnames";
import styled from "styled-components";
import { useRecoilValue } from "recoil";

import TreeViewer from "components/TreeViewer";

import { treeRootState } from "stores/file";

const TreeEditor = ({ className }) => {
  const treeRoot = useRecoilValue(treeRootState);
  return (
    <div className={classnames("tree-editor", className)}>
      <TreeViewer className="tree-editor__viewer" children={treeRoot} />
    </div>
  );
};

export default styled(TreeEditor)`
  padding: 16px;
`;
