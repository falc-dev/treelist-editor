import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import classnames from 'classnames';
import { useRecoilState, useRecoilValue } from 'recoil';

import { editorVisibilityState, editableNodeState } from "stores/editor";
import { treeNodesState } from "stores/file";

import useEditorModal from './useEditorModal.js';
import Editor from "components/QuillEditor/QuillEditor.jsx"

const EditorModal = ({ className }) => {
    const [ isEditorVisible, setEditorVisibility ] = useRecoilState(editorVisibilityState);
    const nodeId = useRecoilValue(editableNodeState);
    const treeNodes = useRecoilValue(treeNodesState);
    const [internalValue, setInternalValue] = useState("");
    const { changeValue } = useEditorModal();
  
    useEffect(() => {
        if (treeNodes && nodeId && treeNodes[nodeId]) {
            setInternalValue(treeNodes[nodeId].text)
        }
    }, [treeNodes, nodeId])

    if (!isEditorVisible) return null;

    return (
        <div className={classnames(className, "modal")}>
            <button 
                className="modal__close-button"
                onClick={() => { setEditorVisibility(false) }}
            >
                Close
            </button>
            <Editor
                className="modal__editor"
                onChange={html => setInternalValue(html)}
                onSave={() => { changeValue(nodeId, internalValue); }}
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