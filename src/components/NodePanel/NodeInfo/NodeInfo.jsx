import React from "react";
import classnames from "classnames";

const NodeInfo = ({ className, node }) => {
  if (!node) {
    return (
      <div className={classnames("node-info", "node-info--unknown", className)}>
        No selected node
      </div>
    );
  }
  return (
    <div className={classnames("node-info", className)}>
      <p>ID: {node?.id}</p>
    </div>
  );
};

export default NodeInfo;
