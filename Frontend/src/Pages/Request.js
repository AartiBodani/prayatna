import React from "react";
import AdminHeader from "../Components/Admin/AdminHeader";
import AdminSidebar from "../Components/Admin/AdminSidebar";
import RequestMain from "../Components/Admin/RequestMain";
const Request = () => {
  return (
    <>
      <div className="admin_body">
        <AdminHeader></AdminHeader>
        <div className="admin_main">
          <AdminSidebar></AdminSidebar>
          <div className="admin_main_right">
            <RequestMain></RequestMain>
          </div>
        </div>
      </div>
    </>
  );
};

export default Request;
