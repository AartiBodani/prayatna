import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import axios from "axios";

const Dashboard = () => {
  const [data, setData] = useState([]);

  const loadData = async () => {
    const response = await axios.get(`http://localhost:5000/reguser/users`);
    console.log(response.data);
    setData((data) => response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <Header />
      <div>
        <Sidebar />
        <div></div>
      </div>
    </>
  );
};

export default Dashboard;
