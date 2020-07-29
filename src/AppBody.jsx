import React from "react";

import { AppBody as StyledAppBody } from "./styled";
import Icon from "./lib/Icon";
import theme from "./lib/theme";

const AppBody = () => {
  return (
    <StyledAppBody>
      <div style={{ display: "flex", alignItems: "center" }}>
        <span style={{ marginRight: `${theme.SpacingSmMoon}rem` }}>
          App Body content goes here
        </span>
        <Icon name="tick" />
      </div>
    </StyledAppBody>
  );
};

export default AppBody;
