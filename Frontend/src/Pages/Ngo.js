import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminHeader from "../Components/Admin/AdminHeader";
import NgoMain from "../Components/Admin/NgoMain";
import AdminSidebar from "../Components/Admin/AdminSidebar";

const Ngo = () => {
  const [data, setData] = useState([]);

  const loadData = async () => {
    const response = await axios.get(`http://localhost:5000/reguser/ngos`);
    console.log(response.data);
    setData((data) => response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <div className="admin_body">
        <AdminHeader></AdminHeader>
        <div className="admin_main">
          <AdminSidebar></AdminSidebar>
          <div className="admin_main_right">
            <NgoMain></NgoMain>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ngo;
