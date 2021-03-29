import React, { useState, useEffect } from "react";
import styled from "styled-components";
import classnames from "classnames";
import { useRecoilValue } from "recoil";

import { editableNodeState } from "stores/editor";

import useWindowSize from "../../hooks/useWindowSize.js";
import useNodePanel from "./useNodePanel.js";
import NodeActionBar from "./NodeActionBar/NodeActionBar";
import Editor from "components/QuillEditor/QuillEditor.jsx";

const NodePanel = ({ className }) => {
  const windowSize = useWindowSize();
  const [hidden, setHidden] = useState(true);
  const node = useRecoilValue(editableNodeState);
  const { changeValue } = useNodePanel();

  if (!node) {
    return (
      <div className={classnames("node-info", "node-info--unknown", className)}>
        No selected node
      </div>
    );
  }

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
              setHidden((_) => !_);
            }}
          >
            Close
          </button>
        </div>
      )}
      <NodeActionBar node={node} />
      <Editor
        className="modal__editor"
        disabled={!node}
        onSave={changeValue(node?.id)}
        value={node?.text}
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
`;
