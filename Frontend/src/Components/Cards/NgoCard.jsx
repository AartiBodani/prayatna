import React from "react";
import "./NgoCard.css";
import { Link } from "react-router-dom";

const NgoCard = ({ ngo }) => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          {ngo.map((curNgo) => {
            const { _id, ngo_name, activity, address } = curNgo;
            return (
              <div className="col-12 col-sm-6 col-lg-4 mt-1">
                <div className="card ngo_card shadow mb-3" key={_id}>
                  {/* <img className="ngo_img" src={pic} alt="Card" /> */}
                  <div className="card-body ngo_body shadow">
                    <h4 className="card-title">{ngo_name}</h4>
                    <p className="card-text">{activity}</p>
                    <p className="card-text">{address}</p>
                    <div className="btn_div">
                      <Link
                        to={`/search/request?ngo_id=${_id}`}
                        className="btn btn-primary ngo_btn"
                      >
                        Send Request
                      </Link>
                      <Link
                        to={`/search/report?ngo_id=${_id}`}
                        className="btn btn-primary m-1 ngo_btn"
                      >
                        Fraud Report
                      </Link>
                    </div>
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

export default NgoCard;
