import { createContext, useState } from "react";

export const NavContext = createContext(false);

export const NavProvider = ({ children }: React.ReactNode) => {
  return <NavContext.Provider>{children}</NavContext.Provider>;
};
