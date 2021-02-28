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
    display: flex;
    background: white;
    width: 100%;
    border-bottom: solid 2px black;
  }

  .top-bar__menu-button {
    height: 64px;
    width: 64px;
    border-right: solid 2px black;
  }
`;
