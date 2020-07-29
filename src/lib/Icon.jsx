import React from "react";

import interfaceIcons from "./Icon/InterfaceIcons";
import expenditureIcons from "./Icon/ExpenditureIcons";

const icons = {
  ...interfaceIcons,
  ...expenditureIcons,
};

const Icon = ({ name, ...props }) => (
  <i data-testid={name} {...props}>
    {icons[name]}
  </i>
);

export default Icon;
