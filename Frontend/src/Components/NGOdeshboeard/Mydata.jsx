import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Mydata.css";
import MyActivity from "./MyActivity";
import RequestCard from "./RequestCard";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import { useGlobalContext } from "../../context/GlobalContext";

const Mydata = () => {
  const [data, setData] = useState([]);

  const { state, setState } = useGlobalContext();

  useEffect(() => {
    if (state?.userData?._id) {
      axios
        .get(`http://localhost:5000/regngos/${state.userData._id}`)
        .then((res) => setData(res.data))
        .catch((e) => console.log(e));
    }
  }, [state]);

  return (
    <>
      <Navbar />
      <div className="data-bg_blur container-fluid">
        <div className="container data-ngo_heading">
          {/* <h4>{data.id}</h4> */}
          <h1
            className="h1 data-Ngo_name"
            // value={data.ngo_name}
            // onChange={(e) => setData(e.target.value)}
          >
            {data.ngo_name}
          </h1>
          <div className="data-btn_two">
            <Link to="/myprofile/edit">
              <button className=" data-btn_edit">Edit Profile</button>
            </Link>
            <Link to="/myprofile/changepassword">
              <button className="data-btn_change">Change Password</button>
            </Link>
          </div>
        </div>
      </div>
      <RequestCard title="Requests" />
      <MyActivity />
    </>
  );
};

export default Mydata;
