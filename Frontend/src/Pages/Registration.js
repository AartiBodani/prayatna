import React from "react";
import AdminHeader from "../Components/Admin/AdminHeader";
import AdminSidebar from "../Components/Admin/AdminSidebar";

const Registration = () => {
  return (
    <>
      <div className="admin_body">
        <AdminHeader></AdminHeader>
        <div className="admin_main">
          <AdminSidebar></AdminSidebar>
          <div className="admin_main_right">{/* code of request page */}</div>
        </div>
      </div>
    </>
  );
};

export default Registration;
