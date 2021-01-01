import React from 'react';
import styled from "styled-components";
import classnames from 'classnames';

import './Button.css';

const Button = ({ className, children, image, onClick }) => {
    return (
        <span
            className={classnames('button', className)}
            onClick={onClick}
        >
            {image && (
                <span className="button__image">
                    {image}
                </span>
            )}
            {children}
        </span>
    );
};

export default Button;