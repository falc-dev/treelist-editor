import React from "react";
import styled from "styled-components";
import classnames from "classnames";

const RowSwitch = ({ className, open = false, onClick = () => {} }) => {
  return (
    <span className={classnames(className, "row-switch")}>
      <span
        className={classnames("row-switch-symbol", {
          "row-switch-symbol--open": open
        })}
        onClick={onClick}
      >
        ▶
      </span>
    </span>
  );
};

export default styled(RowSwitch)`
  & {
    --switch-size: 25px;

    display: flex;
    align-items: center;
    justify-content: center;
    left: calc(var(--switch-size) * -1);
    position: absolute;
    height: var(--switch-size);
    width: var(--switch-size);
  }

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
