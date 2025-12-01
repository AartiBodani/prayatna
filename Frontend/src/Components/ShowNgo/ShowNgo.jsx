import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";

const ShowNgo = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/regngos")
      .then((res) => setData(res.data))
      .catch((e) => console.log(e));
  }, []);
  return (
    <>
      <Navbar />
      <div className="container ">
        <h4 className="text-center mt-4 sh_ngo_title">Ngo Details</h4>
        <Link to="/feedback" style={{ textDecoration: "none" }}>
          <div className="feed_addbtn">
            <Button
              variant="contained"
              sx={{
                marginTop: "10px",
                marginBottom: "20px",
              }}
            >
              Fraud Ngo
            </Button>
          </div>
        </Link>
        <div className="row">
          {data.map((curNgo) => {
            const { _id, ngo_name, activity, address } = curNgo;
            return (
              <div className="col-12 col-sm-6 col-lg-4 mt-1">
                <div className="card sh_ngo_card shadow mb-3" key={_id}>
                  {/* <img className="ngo_img" src={pic} alt="Card" /> */}
                  <div className="card-body sh_ngo_body shadow">
                    <h4 className="card-title">{ngo_name}</h4>
                    <p className="card-text">{activity}</p>
                    <p className="card-text">{address}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ShowNgo;
