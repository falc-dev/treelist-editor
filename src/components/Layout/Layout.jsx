import React, { useState } from "react";
import styled from "styled-components";
import classnames from "classnames";

import TopBar from "components/TopBar";
import SideMenu from "components/SideMenu/SideMenu";
import TreeEditor from "components/TreeEditor/TreeEditor";
import NodePanel from "components/NodePanel/NodePanel";

const Layout = ({ className, children }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <div className={classnames("layout", className)}>
      <TopBar
        onToggleMenu={() => {
          setMenuOpen((_) => !_);
        }}
      />
      <SideMenu
        open={isMenuOpen}
        onClose={() => {
          setMenuOpen(false);
        }}
      />
      <div className="layout__content">
        <TreeEditor className="layout__tree-editor" />
        <NodePanel className="layout__node-panel" />
      </div>
    </div>
  );
};

export default styled(Layout)`
  & {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .layout__content {
    display: flex;
    flex-grow: 1;
    overflow-y: hidden;
  }

  .layout__tree-editor {
    flex: 1 1 0;
  }

  .layout__node-panel {
    flex: 1 1 0;
  }
`;
