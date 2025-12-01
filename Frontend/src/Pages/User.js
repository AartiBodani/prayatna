import React from "react";
import AdminHeader from "../Components/Admin/AdminHeader";
import UserMain from "../Components/Admin/UserMain";
import AdminSidebar from "../Components/Admin/AdminSidebar";

const User = () => {
  return (
    <>
      <div className="admin_body">
        <AdminHeader></AdminHeader>
        <div className="admin_main">
          <AdminSidebar></AdminSidebar>
          <div className="admin_main_right">
            <UserMain></UserMain>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
