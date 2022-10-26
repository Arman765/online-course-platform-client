import React, { createContext } from "react";
import { useState } from "react";

export const ColorContext = createContext();

const ColorProvider = ({ children, theme }) => {
  const [color, setColor] = useState(theme);

  const colorInfo = { color };

  return (
    <ColorContext.Provider value={colorInfo}>{children}</ColorContext.Provider>
  );
};

export default ColorProvider;
