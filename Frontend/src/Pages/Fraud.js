import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminHeader from "../Components/Admin/AdminHeader";
import AdminSidebar from "../Components/Admin/AdminSidebar";
import FraudMain from "../Components/Admin/FraudMain";

const Fraud = () => {
  return (
    <>
      <div className="admin_body">
        <AdminHeader></AdminHeader>
        <div className="admin_main">
          <AdminSidebar></AdminSidebar>
          <div className="admin_main_right">
            <FraudMain></FraudMain>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fraud;
