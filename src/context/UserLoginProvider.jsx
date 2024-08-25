import React, { useState, createContext } from "react";

export const UserLoginContext = createContext();

const UserLoginProvider = ({ children }) => {
  const [status, setStatus] = useState(false);

  const login = () => setStatus(true);
  const logout = () => setStatus(false);

  return (
    <UserLoginContext.Provider value={{ status, login, logout }}>
      {children}
    </UserLoginContext.Provider>
  );
};
export default UserLoginProvider;
