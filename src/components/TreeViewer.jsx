import React from "react";
import styled from "styled-components";
import classnames from "classnames";

import TreeRow from "components/TreeRow/TreeRow";

const TreeViewer = ({ className, children = [], visible = false }) => {
  if (children.length === 0) return null;

  return (
    <ol
      className={classnames(className, "tree-viewer", {
        "tree-viewer__invisible": !visible
      })}
    >
      {children.map((id) => (
        <TreeRow index={id} key={id} />
      ))}
    </ol>
  );
};

export default styled(TreeViewer)`
  padding-left: 25px;
  border: solid 1px #ccc;
  border-left-with: 2px;

  .tree-viewer__invisible {
    height: 0px;
    overflow: hidden;
    visibility: hidden;
  }
`;
