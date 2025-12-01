// import React, { useState } from "react";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Change.css";
import { useGlobalContext } from "../../../context/GlobalContext";
import axios from "axios";
const showPassword = () => {
  var x = document.getElementById("cur_pass");
  var y = document.getElementById("new_pass");
  var z = document.getElementById("con_pass");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
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

const Change = () => {
  // const [data, setData] = useState([]);
  const [data, setData] = useState({
    curpwd: "",
    newpwd: "",
    conpwd: "",
  });

  const { state, setState } = useGlobalContext();

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
    try {
      if (data.newpwd === data.conpwd) {
        const res = await axios.put(`/changepwd/${state.userData._id}`, data);
        console.log(res);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container mt-3">
        <div className="change_inner p-4">
          <h2 className="text-center mt-2 h2">Change Password</h2>
          <div className="change_form_field mt-5 p-3 shadow">
            <form onSubmit={handleFormSubmit}>
              <div className="mb-3 ">
                <label for="cur_pass" className="form-label">
                  Current Password
                </label>
                <input
                  type="password"
                  name="curpwd"
                  className="form-control"
                  id="cur_pass"
                  placeholder=""
                  value={data.curpwd}
                  onChange={handleInputChange}
                />
              </div>
              <hr className="m-3" />
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
              <div>
                <input
                  type="checkbox"
                  style={{ marginRight: "5px" }}
                  onClick={showPassword}
                />
                show password
              </div>
              <div className="mb-3 change_btn_con mt-5">
                <button
                  type="submit"
                  onClick={validation}
                  className="change_sub"
                >
                  Change
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Change;
