import axios from "axios";
import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../context/GlobalContext";
import { useSearchParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Navbar/Navbar";
import "./UseRequest.css";
export const UserRequest = () => {
  const [data, setData] = useState([]);
  const { state, setState } = useGlobalContext();

  const [searchParams, setSearchParams] = useSearchParams();
  const user_id = searchParams.get("user_id");
  console.log({ searchParams });

  useEffect(() => {
    axios
      .get(`http://localhost:5000/user-request/${state.userData._id}`)
      .then((res) => setData(res.data))
      .catch((e) => console.log(e));
  }, [state]);

  console.log(state);

  return (
    <>
      <Navbar />
      <div className="user-req-main">
        <h2 className="text-center p-4">Need Status</h2>
        <div className="container-fluid ">
          <div className="row">
            {data.map((curUser) => {
              const { _id, user_name, status, message, time } = curUser;
              return (
                <div className="col-12 col-sm-6 col-lg-3 mt-3 ">
                  <div className="card sh_ngo_card shadow mb-3" key={_id}>
                    {/* <img className="ngo_img" src={pic} alt="Card" /> */}
                    <div className="card-body sh_ngo_body shadow user-req-card">
                      <h4
                        className="card-title text-center"
                        style={{ color: "#3d8de19a" }}
                      >
                        {status}
                      </h4>
                      {/* <h4 className="card-title">{_id}</h4> */}
                      <p className="card-text ">{user_name}</p>
                      <p className="card-text ">{time}</p>
                      <p className="card-text ">{message}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
