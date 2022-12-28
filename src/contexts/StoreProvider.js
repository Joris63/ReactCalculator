import { createContext, useState } from "react";

const StoreContext = createContext({});

export const StoreProvider = ({ children }) => {
  const [history, setHistory] = useState([]);

  return (
    <StoreContext.Provider
      value={{ history, setHistory }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;