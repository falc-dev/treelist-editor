import React from "react";
import classnames from "classnames";
import styled from "styled-components";

const NodeInfo = ({ className, node }) => {
  return (
    <div className={classnames("node-info", className)}>
      <p>ID: {node?.id}</p>
    </div>
  );
};

export default styled(NodeInfo)`
  & {
    border: solid 1px #ccc;
    padding: 8px;
  }

  &.node-info--unknown {
    font-family: sans-serif;
    font-weight: bold;
    color: #ccc;
    text-transform: uppercase;
    text-align: center;
  }
`;
