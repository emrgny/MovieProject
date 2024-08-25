import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/AdminHome";
import AdminLogin from "./components/AdminLogin";
import UserLogin from "./components/UserLogin";
import AdminLoginProvider from "./context/AdminLoginProvider";
import UserLoginProvider from "./context/UserLoginProvider";
import Guest from "./components/Guest";
import Navbar from "./components/Navbar";
import AdminHome from "./components/AdminHome";
import AdminNavbar from "./components/AdminNavbar";
import AdminSideBar from "./components/AdminSideBar";

function App() {
  const [count, setCount] = useState(0);
  const location = useLocation();
  const hideNavbarRoutes = ["/UserLogin", "/Admin", "/AdminLogin"];
  const hiddenAdminNavbar = ["/UserLogin", "/Admin", "AdminLogin"];
  return (
    <>
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
      {hiddenAdminNavbar.includes(location.pathname) && <AdminNavbar />}
      {hiddenAdminNavbar.includes(location.pathname) && <AdminSideBar />}
      <div>
        <AdminLoginProvider>
          <UserLoginProvider>
            <Routes>
              <Route path="/" element={<Guest />}></Route>
              <Route path="/AdminLogin" element={<AdminLogin />}></Route>
              <Route path="/UserLogin" element={<UserLogin />}></Route>
              <Route path="/Admin" element={<AdminHome />}></Route>
              <Route path="/User" element={<Home />}></Route>
            </Routes>
          </UserLoginProvider>
        </AdminLoginProvider>
      </div>
    </>
  );
}

export default App;
