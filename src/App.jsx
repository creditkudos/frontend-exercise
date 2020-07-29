import React from "react";

import { AppWrapper, AppBody } from "./styled";
import AppHeader from "./AppHeader";
import Icon from "./lib/Icon";

function App() {
  return (
    <AppWrapper>
      <AppHeader />
      <AppBody>
        Body content goes here
        <Icon name="utilities"></Icon>
      </AppBody>
    </AppWrapper>
  );
}

export default App;
