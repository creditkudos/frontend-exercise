import React from "react";

import theme from "./lib/theme";
import { PlaceholderRow, Marker } from "./styled";

const AppHeader = () => (
  <>
    <PlaceholderRow
      style={{
        marginBottom: `${theme.SpacingSmEarth}rem`,
        padding: `0 ${theme.SpacingSmMars}rem`,
      }}
    >
      <div>
        <Marker
          style={{ width: 50, backgroundColor: theme.ColorCoral50 }}
        ></Marker>
        <Marker style={{ width: 150 }} />
      </div>
      <div>
        <Marker style={{ width: 125 }} />
        <Marker style={{ width: 125 }} />
        <Marker style={{ width: 125 }} />
      </div>
    </PlaceholderRow>
    <PlaceholderRow
      style={{
        borderBottom: `1px solid ${theme.ColorGray20}`,
        margin: `0 ${theme.SpacingSmMars}rem ${theme.SpacingSmEarth}rem`,
        padding: `0 ${theme.SpacingSmMars}rem`,
      }}
    >
      <div>
        <Marker style={{ width: 50 }}></Marker>
        <Marker style={{ width: 250 }}></Marker>
      </div>
      <div>
        <Marker />
        <Marker />
        <Marker />
        <Marker />
        <Marker />
        <Marker />
        <Marker style={{ backgroundColor: theme.ColorViolet50 }} />
      </div>
    </PlaceholderRow>
  </>
);

export default AppHeader;
