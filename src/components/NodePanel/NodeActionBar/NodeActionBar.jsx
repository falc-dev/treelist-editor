import React from "react";
import classnames from "classnames";
import styled from "styled-components";
import { useRecoilState, useSetRecoilState } from "recoil";

import useNodeActionBar from "./useNodeActionBar";

import RowBelow from "icons/RowBelow.svg";
import AddSubnode from "icons/AddSubnode.svg";
import Ok from "icons/Ok.svg";
import Edit from "icons/Edit.svg";

const NodeActionBar = ({ className, index }) => {
  const { insertRowBelow } = useNodeActionBar();
  return (
    <div className={classnames(className, "row-action-bar")}>
      <button onClick={() => insertRowBelow(index)} title="Insert row below">
        <RowBelow />
      </button>
      <button onClick={() => {}} title="Add child node">
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
    padding: 1px;
    height: 26px;
    width: 26px;
  }

  button + button {
    margin-left: 4px;
  }
`;
