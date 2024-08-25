import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AdminHome from "./components/AdminHome";
import AdminLogin from "./components/AdminLogin";
import UserLogin from "./components/UserLogin";
import AdminLoginProvider from "./context/AdminLoginProvider";
import UserLoginProvider from "./context/UserLoginProvider";
import Guest from "./components/Guest";
import Navbar from "./components/Navbar";

import AdminNavbar from "./components/AdminNavbar";
import AdminSideBar from "./components/AdminSideBar";
import Home from "./components/Home";
import UserRegister from "./components/UserRegister";
import { SearchProvider } from "./context/SearchBarProvider";

function App() {
  const [searchResult, setSearchResult] = useState("");
  const location = useLocation();
  const hideNavbarRoutes = [
    "/UserLogin",
    "/Admin",
    "/AdminLogin",
    "/UserRegister",
    "/AdminHome",
  ];
  const hiddenAdminNavbar = ["/AdminHome"];

  return (
    <>
      <SearchProvider>
        {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
        {hiddenAdminNavbar.includes(location.pathname) && <AdminNavbar />}
        {hiddenAdminNavbar.includes(location.pathname) && <AdminSideBar />}
        <div>
          <AdminLoginProvider>
            <UserLoginProvider>
              <Routes>
                <Route path="/" element={<Guest />}></Route>
                <Route path="/AdminLogin" element={<AdminLogin />}></Route>
                <Route path="/AdminHome" element={<AdminHome />}></Route>

                <Route path="/UserLogin" element={<UserLogin />}></Route>
                <Route path="/Home" element={<Home />}></Route>

                <Route path="/UserRegister" element={<UserRegister />}></Route>
              </Routes>
            </UserLoginProvider>
          </AdminLoginProvider>
        </div>
      </SearchProvider>
    </>
  );
}

export default App;
