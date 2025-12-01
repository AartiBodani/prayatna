import React from "react";
import AdminHeader from "../Components/Admin/AdminHeader";
import VolunteerMain from "../Components/Admin/VolunteerMain";
import AdminSidebar from "../Components/Admin/AdminSidebar";

const Volunteer = () => {
  return (
    <>
      <div className="admin_body">
        <AdminHeader></AdminHeader>
        <div className="admin_main">
          <AdminSidebar></AdminSidebar>
          <div className="admin_main_right">
            <VolunteerMain></VolunteerMain>
          </div>
        </div>
      </div>
    </>
  );
};

export default Volunteer;
