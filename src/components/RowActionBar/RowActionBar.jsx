import React from 'react';
import classnames from 'classnames';
import styled from 'styled-components';
import { useRecoilState, useSetRecoilState } from 'recoil';

import { editorVisibilityState, editableNodeState } from 'stores/editor';
import useRowActionBar from './useRowActionBar';

import RowBelow from "icons/RowBelow.svg";
import Ok from "icons/Ok.svg";
import Edit from "icons/Edit.svg";

const RowActionBar = ({ className, index }) => {
    const [ isEditorVisible, setEditorVisibility ] = useRecoilState(editorVisibilityState);
    const setEditableNode = useSetRecoilState(editableNodeState);
    const { insertRowBelow } = useRowActionBar();
    return (
        <div className={classnames(className, "row-action-bar")}>
            <button onClick={() => insertRowBelow(index)} title="Insert row below">
            <RowBelow />
            </button>
            
            {isEditorVisible ? (
                <button onClick={() => { setEditorVisibility(false); }} title="Ok">
                    <Ok />
                </button>
            ) : (
                <button 
                    onClick={() => {setEditorVisibility(true); setEditableNode(index); }} 
                    title="Edit"
                >
                <Edit />
            </button>
            )}
        </div>
    );
};

export default styled(RowActionBar)`
    position: absolute;
    background-color: black;
    bottom: -30px;
    right: 0;
    padding: 2px;
    z-index: 1;

    button {
        border: 0px;
        padding: 1px;
        height: 26px;
        width: 26px;
    }
`;