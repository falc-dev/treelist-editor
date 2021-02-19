import React from "react";
import { RecoilRoot } from "recoil";

import Layout from "components/Layout/Layout.jsx";

const App = () => {
  return (
    <RecoilRoot>
      <Layout />
    </RecoilRoot>
  );
};

export default App;
