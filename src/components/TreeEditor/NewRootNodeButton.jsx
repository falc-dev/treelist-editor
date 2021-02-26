import React from "react";
import styled from "styled-components";

import useRootNodes from "hooks/useRootNodes";

const NewRootNodeButton = ({ className }) => {
  const { addRootNode } = useRootNodes();

  return (
    <button
      onClick={() => {
        addRootNode();
      }}
      className={className}
    >
      + ADD NODE
    </button>
  );
};

export default styled(NewRootNodeButton)`
  border: dashed 1px #ccc;
  color: #ccc;
  background: transparent;
  font-weight: bold;
  width: 100%;
  padding: 8px;
`;
