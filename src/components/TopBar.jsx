import React from "react";
import styled from "styled-components";
import classnames from "classnames";

import Menu from "icons/Menu.svg";
import Button from "components/Button";

const TopBar = ({ className, onToggleMenu }) => {
  return (
    <div className={classnames("top-bar", className)}>
      <Button className="top-bar__menu-button" onClick={onToggleMenu}>
        <Menu />
      </Button>
    </div>
  );
};

export default styled(TopBar)`
  & {
    position: fixed;
    top: 0;
    display: flex;
    background: white;
    height: var(--header-height);
    width: 100%;
    border-bottom: solid 2px black;
    z-index: 5;
  }

  .top-bar__menu-button {
    height: 64px;
    width: 64px;
    border-right: solid 2px black;
  }
`;
