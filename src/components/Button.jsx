import React from "react";
import styled from "styled-components";
import classnames from "classnames";

const Button = ({ className, children, image, onClick }) => {
  return (
    <span className={classnames("button", className)} onClick={onClick}>
      {image && <span className="button__image">{image}</span>}
      {children}
    </span>
  );
};

export default styled(Button)`
  box-sizing: border-box;
  display: inline-flex;
  padding: 8px;
  max-height: 64px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.25);
  }

  .button__image {
    max-width: 64px;
  }
`;
