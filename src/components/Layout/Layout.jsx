import React, { useState } from "react";
import styled from "styled-components";

import TopBar from "components/TopBar";
import SideMenu from "components/SideMenu/SideMenu";
import TreeEditor from "components/TreeEditor";
import EditorModal from "components/EditorModal/EditorModal";

const Layout = ({ className, children }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <div className={className}>
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
        <EditorModal className="layout__editor-modal" />
      </div>
    </div>
  );
};

export default styled(Layout)`
  .layout__content {
    display: flex;
  }

  .layout__tree-editor {
    flex: 1 1 0;
  }

  .layout__editor-modal {
    flex: 1 1 0;
  }
`;
