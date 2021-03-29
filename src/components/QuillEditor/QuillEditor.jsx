import React, { useState, useEffect, useRef, useCallback } from "react";
import classnames from "classnames";
import ReactQuill, { Quill } from "react-quill";
import EditorSave from "icons/EditorSave.svg";

import "react-quill/dist/quill.snow.css";

var Parchment = Quill.import("parchment");
var Block = Parchment.query("block");
Block.tagName = "DIV";
Quill.register(Block, true);

const CustomToolbar = ({ onSave }) => (
  <div id="toolbar">
    <button className="ql-bold"></button>
    <button className="ql-italic"></button>
    <button className="ql-underline"></button>
    <select
      className="ql-header"
      defaultValue={""}
      onChange={(e) => e.persist()}
    >
      <option value="1"></option>
      <option value="2"></option>
      <option value=""></option>
    </select>
    <button className="ql-list" value="ordered"></button>
    <button className="ql-list" value="bullet"></button>
    <button className="ql-indent" value="-1"></button>
    <button className="ql-indent" value="+1"></button>
    <button className="ql-indent" value="+1"></button>
    <button className="ql-color"></button>
    <button className="ql-background"></button>
    <button className="ql-clean"></button>
    <button
      className="ql-save"
      onClick={() => {
        onSave();
      }}
    >
      <EditorSave />
    </button>
  </div>
);

const Editor = ({ className, disabled, onSave, value }) => {
  const [internalValue, setInternalValue] = useState(value);
  return (
    <div>
      <CustomToolbar
        onSave={() => {
          onSave(internalValue);
        }}
      />
      <ReactQuill
        className={classnames(className, "editor")}
        theme="snow"
        readOnly={disabled}
        value={internalValue}
        onChange={(html) => {
          setInternalValue(html);
        }}
        modules={{
          toolbar: {
            container: "#toolbar"
          }
        }}
      />
    </div>
  );
};

Editor.defaultProps = {
  onChange: () => {},
  onSave: () => {},
  value: ""
};

export default Editor;
