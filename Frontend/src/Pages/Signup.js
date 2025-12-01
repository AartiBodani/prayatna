import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../Components/Navbar/Navbar";

// import pic from "../Images/1.jpg";
// "proxy":"http://localhost:5000/",

const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    ngo_name: "",
    email: "",
    head_name: "",
    address: "",
    activity: "",
    password: "",
    cpassword: "",
    document: "",
  });

  let names, value;

  const handle = (e) => {
    names = e.target.name;
    value = e.target.value;

    setUser({ ...user, [names]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();
  };

  function validation() {}

  return (
    <>
      <Navbar />
      <div className="container mt-4 my-4 Reg_container">
        <h4 className="text-center mt-4 my-3">Ngo Registration </h4>
        <div className="row align-item-center container_signup ">
          {/* <div className="col images text-center">
            <img
              className="img-fluid justify-content-center align-items-center"
              src={pic}
              alt="Signup_Image"
            />
          </div> */}

          <div className="col text-center col_1 align-items-center col-md-6 col-sm-12">
            {/* <h4 className="text-center pt-2">Ngo Registration Form</h4> */}
            {/* <img src={pic} className="img-fluid" alt="..." /> */}
          </div>

          <div className="col-12 col_2 col-md-6 col-sm-12 col_2 ">
            <form
              method="POST"
              onSubmit={PostData}
              encType="multipart/form-data"
            >
              <div className="detail_from">
                <lable htflFor="ngo_name" >Name : </lable>
                <br />
                <input
                  type="text"
                  name="ngo_name"
                  id="ngo_name"
                  value={user.ngo_name}
                  onChange={handle}
                  autoComplete="off"
                  placeholder="Enter NGO Name"
                />
                <span id="ngo" className="text-danger"></span>
              </div>
              <div className="detail_from">
                <lable htflFor="email">Email : </lable>
                <br />
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={user.email}
                  onChange={handle}
                  autoComplete="off"
                  placeholder="Enter Email "
                />
                <span id="emails" className="text-danger"></span>
              </div>
              <div className="detail_from">
                <lable htflFor="head_name">NGO Trustee Name : </lable>
                <br />
                <input
                  type="text"
                  name="head_name"
                  id="head_name"
                  value={user.head_name}
                  onChange={handle}
                  autoComplete="off"
                  placeholder="Enter Trustee Name"
                />
                <span id="heads" className="text-danger"></span>
              </div>
              <div className="detail_from">
                <label htflFor="address">Address : </label>
                <br />
                <textarea
                  name="address"
                  id="address"
                  value={user.address}
                  onChange={handle}
                  placeholder="Enter Address..."
                ></textarea>
                <span id="add" className="text-danger"></span>
              </div>
              <div className="detail_from">
                <lable htflFor="activity">Activity : </lable>
                <br />
                <input
                  type="text"
                  name="activity"
                  id="activity"
                  value={user.activity}
                  onChange={handle}
                  autoComplete="off"
                  placeholder="Enter NGO Activity"
                />
                <span id="activities" className="text-danger"></span>
              </div>
              <div className="detail_from">
                <lable htflFor="password">Password : </lable>
                <br />
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={user.password}
                  onChange={handle}
                  autocomplete="new-password"
                  placeholder="Enter Password"
                />
                <span id="pwd" className="text-danger"></span>
              </div>
              <div className="detail_from">
                <lable htflFor="cpassword">Confirm Password : </lable>
                <br />
                <input
                  type="password"
                  name="cpassword"
                  id="cpassword"
                  value={user.cpassword}
                  onChange={handle}
                  autoComplete="off"
                  placeholder="Enter Confirm Password"
                />
                <span id="cpwd" className="text-danger"></span>
              </div>
              <div className="d-grid gap-2 col-6 mx-auto mt-2 mb-5">
                <button
                  className="btn"
                  type="submit"
                  onClick={validation}
                  // style={{
                  //   background: "linear-gradient(#6ee2f5, #6454f0)",
                  // }}
                >
                  {/* <Link
                    to="/login"
                    style={{
                      textDecoration: "none",
                      color: "white",
                    }}
                  > */}
                  Signup
                  {/* </Link> */}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Signup;
