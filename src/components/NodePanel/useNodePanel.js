import { useRecoilCallback } from "recoil";

import { treeNodeFamily } from "stores/file";

export default () => {
  const changeValue = useRecoilCallback(({ set }) => (id) => (value) => {
    set(treeNodeFamily(id), (node) => ({
      ...node,
      text: value
    }));
  });

  return {
    changeValue
  };
};
