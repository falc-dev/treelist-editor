import { atom } from 'recoil';

export const editorVisibilityState = atom({
    key: 'editorVisibility',
    default: false
});

export const editableNodeState = atom({
    key: 'editableNode',
    default: undefined
});