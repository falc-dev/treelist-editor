import React from 'react';
import styled from 'styled-components';

import Button from "components/Button";
import OpenFile from "icons/OpenFile.svg"
import Save from "icons/Save.svg"

import useSideMenu from './useSideMenu';


const SideMenu = ({ className, open = false, onClose }) => {
    const { loadFile } = useSideMenu();

    if (!open) return null;

    return (
        <div 
            className={className} 
            onClick={onClose}
        >
            <nav
                className="side-menu"
                onClick={ev => { ev.stopPropagation(); }}
            >
                <h3>Trilys</h3>
                <Button image={<OpenFile />} onClick={() => { loadFile(); onClose(); }}>
                    Open file
                </Button>
                <Button image={<Save />} onClick={() => { loadFile(); onClose(); }}>
                    Save file
                </Button>
            </nav>
        </div>
    );
};

export default styled(SideMenu)`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 10;


    .side-menu {
        display: flex;
        flex-direction: column;
        background-color: white;
        width: 50%;
        height: 100%;
        box-shadow: 0 1px 0 0;
    }

    h3 {
        margin: 0px;
    }
`;