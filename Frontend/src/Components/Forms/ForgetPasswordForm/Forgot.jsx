// import React, { useState } from "react";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Forgot.css";
import { useGlobalContext } from "../../../context/GlobalContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const showPassword = () => {
  // var x = document.getElementById("cur_pass");
  var y = document.getElementById("new_pass");
  var z = document.getElementById("con_pass");
  // if (x.type === "password") {
  //   x.type = "text";
  // } else {
  //   x.type = "password";
  // }
  if (y.type === "password") {
    y.type = "text";
  } else {
    y.type = "password";
  }
  if (z.type === "password") {
    z.type = "text";
  } else {
    z.type = "password";
  }
};

const Forgot = () => {
  const navigate = useNavigate();
  // const [data, setData] = useState([]);
  const [data, setData] = useState({
    newpwd: "",
    conpwd: "",
    otp: "",
  });

  const { state, setState } = useGlobalContext();

  const [screen, setScreen] = useState("email");

  const [email, setEmail] = useState("");

  // useEffect(() => {
  //   if (state?.userData?._id) {
  //     axios
  //       .post(`http://localhost:5000/changepwd/${state.userData._id}`, data)
  //       .then((res) => setData(res.data))
  //       .catch((e) => console.log(e));
  //   }
  // }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const validation = () => {
    if (data.newpwd !== data.conpwd) {
      alert("Passwrord Are Not Same");
    }
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log({ data, email });
    try {
      if (data.newpwd === data.conpwd) {
        const res = await axios.post(`/change-password-with-otp`, {
          password: data.newpwd,
          otp: data.otp,
          email: email,
        });
        if (res.status === 200) {
          alert("Password updated");
          navigate("/login");
        } else {
          alert("something went wrong..!");
        }
      } else {
        alert("new password and confirm password not match");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post(`/send-mail-for-forgot-password`, { email });
    console.log({ res });
    if (res.status === 200) {
      alert("mail sent for verification");
    } else {
      alert("something went wrong..!");
    }
    setScreen("password");
  };

  return (
    <>
      <div className="container mt-3">
        <div className="forget_inner p-4">
          <h2 className="text-center mt-2 h2">Forgot Password</h2>
          <div className="forget_form_field mt-5 p-3 shadow">
            {screen === "email" ? (
              <form onSubmit={handleEmailSubmit}>
                <div className="mb-3">
                  <label for="new_pass" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="email"
                    placeholder=""
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3 forget_btn_con mt-5">
                  <button type="submit" className="forget_sub">
                    sendMail
                  </button>
                </div>
              </form>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <div className="mb-3">
                  <label for="new_pass" className="form-label">
                    New Password
                  </label>
                  <input
                    type="password"
                    name="newpwd"
                    className="form-control"
                    id="new_pass"
                    placeholder=""
                    value={data.newpwd}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label for="con_pass" className="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="conpwd"
                    className="form-control"
                    id="con_pass"
                    placeholder=""
                    value={data.conpwd}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label for="con_pass" className="form-label">
                    Enter Otp
                  </label>
                  <input
                    type="text"
                    name="otp"
                    className="form-control"
                    id="otp"
                    placeholder=""
                    value={data.otp}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <input
                    type="checkbox"
                    style={{ marginRight: "5px" }}
                    onClick={showPassword}
                  />
                  show password
                </div>
                <div className="mb-3 forget_btn_con mt-5">
                  <button
                    type="submit"
                    onClick={validation}
                    className="forget_sub"
                  >
                    Submit
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Forgot;
