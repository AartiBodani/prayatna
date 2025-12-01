import React from "react";
import AdminHeader from "../Components/Admin/AdminHeader";
import ReportMain from "../Components/Admin/ReportMain";
import AdminSidebar from "../Components/Admin/AdminSidebar";

const Report = () => {
  return (
    <>
      <div className="admin_body">
        <AdminHeader></AdminHeader>
        <div className="admin_main">
          <AdminSidebar></AdminSidebar>
          <div className="admin_main_right">
            <ReportMain></ReportMain>
          </div>
        </div>
      </div>
    </>
  );
};

export default Report;
