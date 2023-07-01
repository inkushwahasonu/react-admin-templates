import React, { useContext, useEffect, useState } from "react";

const ToggleContext = React.createContext(true);

const ToggleContextUpdate = React.createContext(() => {
  return;
});

export const useToggle = () => {
  return useContext(ToggleContext);
};
export const useToggleUpdate = () => {
  return useContext(ToggleContextUpdate);
};

export const SidebarProvider = ({ children }: React.PropsWithChildren) => {
  const [toggleValue, setToggleValue] = useState(true);

  const toggleSidebar = () => {
    setToggleValue(!toggleValue);
    console.log(toggleValue);
  };

  useEffect(() => {
    console.log(ToggleContextUpdate);
  }, []);

  return (
    <ToggleContext.Provider value={toggleValue}>
      <ToggleContextUpdate.Provider value={toggleSidebar}>
        {children}
      </ToggleContextUpdate.Provider>
    </ToggleContext.Provider>
  );
};

// SidebarProvider. = {
//   children: HTMLElement,
// };
