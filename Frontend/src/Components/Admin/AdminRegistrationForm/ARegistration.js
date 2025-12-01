import React, { useState } from "react";
import "./ARegistration.css";
import { Alert, Button, IconButton, Snackbar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ARegistration = () => {
  const navigate = useNavigate();
  const [regData, setRegData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [isOtp, setIsOtp] = useState(false);
  const [otp, setOtp] = useState();
  const [message, setMessage] = useState({
    open: false,
    message: "",
    status: "",
  });
  const handleOtpInputChange = (e) => {
    setOtp(e.target.value);
  };
  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    console.log({ otp });

    const res = await axios.post("/admin/verify-otp", {
      email: regData.email,
      vOtp: otp,
    });
    console.log({ res });

    if (res.data.success) {
      setRegData({
        name: "",
        email: "",
        password: "",
      });
      setOtp("");
      setMessage({
        open: true,
        message: "Otp verified",
        status: "success",
      });
      navigate("/deshboard/admin-login");
      console.log("hello");
    } else {
      setMessage({
        open: true,
        message: "OTP Is Invalid...!",
        status: "error",
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRegData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/admin-registration", {
        ...regData,
      });
      console.log(res);
      setMessage({
        open: true,
        message: "User registered successfully.",
        status: "success",
      });
      setIsOtp(true);
    } catch (err) {
      if (err.response?.data?.error) {
        setMessage({
          open: true,
          message: err.response.data.error,
          status: "error",
        });
      }
    }
  };

  const handleClose = () => {
    setMessage({
      open: false,
      message: "",
    });
  };
  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  return (
    <>
      <div className="areg_form-v5">
        <div class="areg_page-content">
          <div class="areg_form-v5-content">
            <form
              class="areg_form-detail"
              onSubmit={handleFormSubmit}
              method="post"
            >
              <h2>Registration Form</h2>
              <div class="areg_form-row">
                <label for="full-name">Name *</label>
                <input
                  type="text"
                  name="name"
                  id="full-name"
                  class="areg_input-text"
                  placeholder="Enter Your Name"
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div class="areg_form-row">
                <label for="your-email">Email *</label>
                <input
                  type="email"
                  name="email"
                  id="your-email"
                  class="areg_input-text"
                  placeholder="Enter Your Email"
                  required
                  onChange={handleInputChange}
                  pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}"
                />
                {/* <i class="fas fa-envelope"></i> */}
              </div>
              <div class="areg_form-row">
                <label for="password">Password *</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  class="areg_input-text"
                  placeholder="Enter Your Password"
                  required
                  onChange={handleInputChange}
                />
                {/* <i class="fas fa-lock"></i> */}
              </div>
              <div class="areg_form-row-last">
                <input
                  type="submit"
                  name="register"
                  class="areg_register"
                  value="Register"
                />
              </div>
            </form>
            {isOtp ? (
              <div className="container " style={{}}>
                <form onSubmit={handleOtpSubmit} className="reg-div">
                  <input
                    type="text"
                    className="form-control"
                    name="otp"
                    onChange={handleOtpInputChange}
                    id="exampleFormControlInput1"
                    placeholder="Enter OTP"
                  />
                  <div className="container reg-btn_access p-2 mt-2">
                    <button type="submit" className="reg-Reg_btn">
                      Verify
                    </button>
                  </div>
                </form>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={message.open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={message.message}
        action={action}
      >
        <Alert
          onClose={handleClose}
          severity={message.status}
          sx={{ width: "100%" }}
        >
          {message.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default ARegistration;
