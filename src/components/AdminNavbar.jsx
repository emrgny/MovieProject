import React from "react";
import "../styles/AdminNavbar.css";

const AdminNavbar = () => {
  return (
    <nav className="admin-navbar">
      <div className="logo">Admin Panel</div>
      <div className="nav-items">
        <div className="nav-item">
          <a href="/admin/dashboard">Dashboard</a>
        </div>
        <div className="nav-item">
          <a href="/admin/users">Users</a>
        </div>
        <div className="nav-item">
          <a href="/admin/reports">Reports</a>
        </div>
        <div className="nav-item">
          <a href="/admin/settings">Settings</a>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
