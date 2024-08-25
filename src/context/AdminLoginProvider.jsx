import React, { useState, createContext } from "react";

export const AdminLoginContext = createContext();

const AdminLoginProvider = ({ children }) => {
  const [status, setStatus] = useState(false);

  const login = () => setStatus(true);
  const logout = () => setStatus(false);

  return (
    <AdminLoginContext.Provider value={{ status, login, logout }}>
      {children}
    </AdminLoginContext.Provider>
  );
};
export default AdminLoginProvider;
