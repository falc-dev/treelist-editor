import React, { useState } from 'react';
import classnames from 'classnames';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';

import TreeViewer from "components/TreeViewer";
import RowActionBar from "components/RowActionBar/RowActionBar";
import RowSwitch from "components/TreeRow/RowSwitch";
import { treeNodeFamily } from "stores/file";

import useTreeRow from './useTreeRow.js';

const TreeRow = ({ className, index }) => {
    const { children, text, selected } = useRecoilValue(treeNodeFamily(index))
    let hasChildren = children.length > 0;
    const [openChildrenList, setOpenChildrenList] = useState(false);
    const { selectRow } = useTreeRow();

    const handleClick = () => {
      if (!selected) {
        selectRow(index)
      }
    }
    
    return (
        <li
            className={classnames(className, "row", `${hasChildren? "tree" : "root"}`)}
            onClick={ev => { ev.stopPropagation(); }}
        >
          {hasChildren && (
              <RowSwitch
                  open={openChildrenList}
                  onClick={() => { setOpenChildrenList(_ => !_); }} 
              />
          )}

          <div
            className={`row__content ${selected? "selected" : ""}`}
            onClick={handleClick}
          >
              <div className="row__value" dangerouslySetInnerHTML={{ __html: text }} />
              {selected && <RowActionBar index={index} /> }
          </div>

            <TreeViewer
                children={children} 
                visible={hasChildren && openChildrenList}
            />
        </li>
    );
  }

export default styled(TreeRow)`
    display: block;
    counter-increment: row;
    min-height: 25px;

    &.tree {
      list-style-position: outside;
    }

    .row__content {
        display: flex;
        position: relative;
    }

    .row__content.selected {
      outline: solid 2px black;
    outline-offset: -2px;
    }

    .row__content::before {
        content: counter(row);
        display: flex;
        min-height: 25px;
        min-width: 20px;
        justify-content: center;
        align-items: center;
        border: solid 1px grey;
    }
`; 