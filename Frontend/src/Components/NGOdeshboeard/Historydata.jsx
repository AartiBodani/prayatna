import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useGlobalContext } from "../../context/GlobalContext";
import { Link } from "react-router-dom";
import DateRangeIcon from "@mui/icons-material/DateRange";
import CallIcon from "@mui/icons-material/Call";
import HelpIcon from "@mui/icons-material/Help";
import ApprovalIcon from "@mui/icons-material/Approval";
const Historydata = () => {
  const [data, setData] = useState([]);
  const { state, setState } = useGlobalContext();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/historydata/${state.userData._id}`)
      .then((res) => setData(res.data))
      .catch((e) => console.log(e));
  }, [state]);
  return (
    <>
      <div className="container mt-3">
        <Link
          to="/myprofile"
          style={{ textDecoration: "none", color: "black" }}
        >
          <KeyboardBackspaceIcon
            sx={{
              position: "relative",
              // top: "70px",
              left: "10px",
              fontSize: "30px",
              marginRight: "10px",
            }}
          />
          Back
        </Link>
        <h3 className="text-center">Request History</h3>
        <div className="row">
          {data.map((curUser) => {
            const { _id, user_name, contact_number, time, message, status } =
              curUser;
            console.log(user_name, time, message, status);
            return (
              <div className="col-12 col-sm-6 col-lg-4 mt-3">
                <div className="card shadow mb-3" key={_id}>
                  <div className="card-body">
                    <span
                      className="fa user_icon fa-user d-flex  ms-1"
                      aria-hidden="true"
                    >
                      <h4 className="card-title d-flex reqcard_title">
                        {user_name}
                      </h4>
                    </span>
                    <p className="card-text">
                      <b>
                        <DateRangeIcon sx={{ marginRight: "10px" }} />
                      </b>
                      {time}
                    </p>
                    <p className="card-text">
                      <b>
                        <CallIcon sx={{ marginRight: "10px" }} />
                      </b>
                      {contact_number}
                    </p>
                    <p className="card-text">
                      <b>
                        <HelpIcon sx={{ marginRight: "10px" }} />
                      </b>
                      {message}
                    </p>
                    <p className="card-text">
                      <b>
                        <ApprovalIcon sx={{ marginRight: "10px" }} />
                      </b>
                      {status}
                    </p>
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

export default Historydata;
