import React from "react";
import classnames from "classnames";
import styled from "styled-components";

import useNodeActionBar from "./useNodeActionBar";

import RowBelow from "icons/RowBelow.svg";
import AddSubnode from "icons/AddSubnode.svg";

const NodeActionBar = ({ className, node }) => {
  const { insertRowBelow, addChildren } = useNodeActionBar();
  return (
    <div className={classnames(className, "row-action-bar")}>
      <button onClick={() => insertRowBelow(node.id)} title="Insert row below">
        <RowBelow />
      </button>
      <button onClick={() => addChildren(node.id)} title="Add child node">
        <AddSubnode />
      </button>
    </div>
  );
};

export default styled(NodeActionBar)`
  & {
    border: solid 1px #ccc;
    padding: 8px;
  }

  button {
    border: 0px;
    cursor: pointer;
    padding: 1px;
    height: 26px;
    width: 26px;
  }

  button + button {
    margin-left: 4px;
  }
`;
