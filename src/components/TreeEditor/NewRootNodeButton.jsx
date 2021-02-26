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
      + Add node
    </button>
  );
};

export default styled(NewRootNodeButton)`
  border: dashed 1px silver;
  background: transparent;
  width: 100%;
`;
