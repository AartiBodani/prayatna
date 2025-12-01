import React from "react";
import AdminHeader from "../Components/Admin/AdminHeader";
import AdminMain from "../Components/Admin/AdminMain";
import AdminSidebar from "../Components/Admin/AdminSidebar";
// import "../css/AdminDashboard.css";

const AdminDashboard = () => {
  return (
    <>
      <div className="admin_body">
        <AdminHeader></AdminHeader>
        <div className="admin_main">
          <AdminSidebar></AdminSidebar>
          <div className="admin_main_right">
            <AdminMain></AdminMain>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
