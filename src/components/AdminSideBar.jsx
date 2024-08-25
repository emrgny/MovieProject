import React, { useState } from "react";
import "../styles/AdminSideBar.css";

const AdminSideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="sidebar-toggle" onClick={toggleSidebar}>
        {isOpen ? "❌" : "☰"} {/* Menü simgesi veya kapalı simgesi */}
      </div>
      <aside className={`admin-sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-header">Dashboard</div>
        <ul>
          <li>
            <a href="/admin/dashboard">Dashboard Overview</a>
          </li>
          <li>
            <a href="/admin/users">Manage Users</a>
          </li>
          <li>
            <a href="/admin/reports">View Reports</a>
          </li>
          <li>
            <a href="/admin/settings">Settings</a>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default AdminSideBar;
