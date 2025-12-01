import axios from "axios";
import React, { useEffect, useState } from "react";
import AdminHeader from "../Components/Admin/AdminHeader";
import FeedbackMain from "../Components/Admin/FeedbackMain";
import AdminSidebar from "../Components/Admin/AdminSidebar";

const Feedback = () => {
  return (
    <>
      <div className="admin_body">
        <AdminHeader></AdminHeader>
        <div className="admin_main">
          <AdminSidebar></AdminSidebar>
          <div className="admin_main_right">
            <FeedbackMain></FeedbackMain>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedback;
