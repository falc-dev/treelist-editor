import React, { useState, useEffect } from "react";
import styled from "styled-components";
import classnames from "classnames";
import { useRecoilState, useRecoilValue } from "recoil";

import { editorVisibilityState, editableNodeState } from "stores/editor";

import useEditorModal from "./useEditorModal.js";
import Editor from "components/QuillEditor/QuillEditor.jsx";

const EditorModal = ({ className }) => {
  const [isEditorVisible, setEditorVisibility] = useRecoilState(
    editorVisibilityState
  );
  const node = useRecoilValue(editableNodeState);
  const [internalValue, setInternalValue] = useState("");
  const { changeValue } = useEditorModal();

  useEffect(() => {
    if (node) {
      setInternalValue(node.text);
    }
  }, [node]);

  if (!isEditorVisible) return null;

  return (
    <div className={classnames(className, "modal")}>
      <button
        className="modal__close-button"
        onClick={() => {
          setEditorVisibility(false);
        }}
      >
        Close
      </button>
      <Editor
        className="modal__editor"
        onChange={(html) => setInternalValue(html)}
        onSave={() => {
          changeValue(node.id, internalValue);
        }}
        value={internalValue}
      />
    </div>
  );
};

export default styled(EditorModal)`
  background-color: white;
  display: flex;
  flex-direction: column;
  z-index: 5;

  .modal__close-button {
    align-self: flex-start;
  }

  @media screen and (max-width: 500px) {
    & {
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100vw;
      height: 100vh;
    }
  }
`;
