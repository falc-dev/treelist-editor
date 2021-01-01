import React from 'react';
import styled from 'styled-components';
import classnames from 'classnames';

const RowSwitch = ({ className, open = false, onClick = () => {} }) => {
    return (
        <span className={classnames(className, "row-switch")}>
            <span 
                className={classnames(
                    "row-switch-symbol", 
                    { "row-switch-symbol--open": open }
                )}
                onClick={onClick}
            >
                ▶
            </span>
        </span>
    );
};

export default styled(RowSwitch)`
    display: flex;
    align-items: center;
    justify-content: center;
    left: 0px;
    position: absolute;
    height: 25px;
    width: 25px;

    .row-switch-symbol {
        cursor: pointer;
        display: flex;
        justify-content: center;
        transition: transform 250ms;
        height: 20px;
        width: 20px;
    }

    .row-switch-symbol--open {
        transform: rotate(90deg);
    }
`;