import React from "react";

import { AppWrapper, AppBody } from "./styled";
import AppHeader from "./AppHeader";

function App() {
  return (
    <AppWrapper>
      <AppHeader />
      <AppBody>Body content goes here</AppBody>
    </AppWrapper>
  );
}

export default App;
