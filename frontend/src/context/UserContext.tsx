import {
  ContextType,
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";
import React from "react";

export const UserContext = createContext({});

export const UserProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUserContext must be used inside the UserProvider");
  }

  return context;
};
