import React, { useState, useEffect, useRef, useCallback } from "react";
import classnames from "classnames";
import ReactQuill, { Quill } from "react-quill";
import EditorSave from "icons/EditorSave.svg";

import "react-quill/dist/quill.snow.css";

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

const Editor = ({ className, disabled, onChange, onSave, value }) => {
  return (
    <div>
      <CustomToolbar onSave={onSave} />
      <ReactQuill
        className={classnames(className, "editor")}
        theme="snow"
        readOnly={disabled}
        value={value}
        onChange={onChange}
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
