import React, { useState, useEffect } from "react";
import styled from "styled-components";
import classnames from "classnames";
import { useRecoilValue } from "recoil";

import { editableNodeState } from "stores/editor";

import useWindowSize from "../../hooks/useWindowSize.js";
import useNodePanel from "./useNodePanel.js";
import NodeInfo from "./NodeInfo/NodeInfo";
import Editor from "components/QuillEditor/QuillEditor.jsx";

const NodePanel = ({ className }) => {
  const windowSize = useWindowSize();
  const [hidden, setHidden] = useState(true);
  const node = useRecoilValue(editableNodeState);
  const [internalValue, setInternalValue] = useState("");
  const { changeValue } = useNodePanel();

  useEffect(() => {
    setInternalValue(node?.text ?? "");
  }, [node]);

  return (
    <div
      className={classnames(
        "node-panel",
        { "node-panel--hidden": hidden },
        className
      )}
    >
      {windowSize.width <= 768 && (
        <div className="node-panel__close">
          <button
            onClick={() => {
              setHidden(true);
            }}
          >
            Close
          </button>
        </div>
      )}
      <NodeInfo node={node} />
      <Editor
        className="modal__editor"
        disabled={!node}
        onChange={(html) => setInternalValue(html)}
        onSave={() => {
          changeValue(node.id, internalValue);
        }}
        value={internalValue}
      />
    </div>
  );
};

export default styled(NodePanel)`
  border-left: solid 2px black;
  padding: 16px;
  background-color: white;
  display: flex;
  flex-direction: column;

  & > div + div {
    margin-top: 16px;
  }

  .node-panel__close-button {
    align-self: flex-start;
  }

  @media screen and (max-width: 768px) {
    & {
      position: fixed;
      top: 0px;
      left: 0px;
      width: 100vw;
      height: 100vh;
      z-index: 10;
    }

    &.node-panel--hidden {
      display: none;
    }
  }
`;
