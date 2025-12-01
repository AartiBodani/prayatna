import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./Alogin.css";
import {
  Typography,
  CssBaseline,
  Box,
  TextField,
  InputAdornment,
  Button,
} from "@mui/material";
import Logo from "../../../Images/1-removebg-preview.png";
import MailIcon from "@mui/icons-material/Mail";
import LockIcon from "@mui/icons-material/Lock";
import LoginIcon from "@mui/icons-material/Login";
import { Email } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Alert, IconButton, Snackbar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useGlobalContext } from "../../../context/GlobalContext";

const ALogin = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState({
    open: false,
    message: "",
    status: "",
  });

  //   const [user, setUser] = useState(true);

  //   console.log(user);
  const { state, setState } = useGlobalContext();

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLogin((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const { email, password } = login;

      console.log(email);
      console.log(password);

      if (!email || !password) {
        setMessage({
          open: true,
          message: "Fields Are Required",
          status: "error",
        });
      }
      const res = await axios.post("/admin-login", { email, password });

      console.log({ res });

      if (res) {
        setMessage({
          open: true,
          message: "Login Successfully",
          status: "success",
        });
        alert("Login Successfully");
        console.log({ res });
        // const { token } = res.data;
        // localStorage.setItem("token", token);
        // let userType;
        // if (userData.ngo_name) {
        //   userType = "ngo";
        // } else {
        //   userType = "user";
        // }
        // setState({
        //   userType,
        //   userData,
        // });
        navigate("/admin-deshboard");
      } else {
        alert("User Not Registerd");
        navigate("/deshboard/admin-login");
      }
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
      <CssBaseline />

      <div className="l-box-container">
        <Box
          sx={{
            width: "45vh",
            height: "65vh",
            backgroundColor: "rgba(255, 255, 255, 1)", //#d5f4e6

            borderRadius: "15px",
            boxShadow:
              "3.1px 2.5px 5.4px rgba(0, 0, 0, 0.034),6.7px 5.5px 11.3px rgba(0, 0, 0, 0.054),12.7px 10.3px 21.5px rgba(0, 0, 0, 0.072),32px 26px 80px rgba(0, 0, 0, 0.1)",
            //  boxShadow:"0px 0px 3.6px rgba(0, 0, 0, 0.021),0px 0px 7.2px rgba(0, 0, 0, 0.037),0px 0px 11.3px rgba(0, 0, 0, 0.055),0px 0px 17px rgba(0, 0, 0, 0.079),0px 0px 28.3px rgba(0, 0, 0, 0.117),0px 0px 80px rgba(0, 0, 0, 0.2)",
          }}
        >
          <img
            src={Logo}
            className="rounded mx-auto d-block l-logo-img"
            alt="Praytan Logo"
          ></img>
          <Typography
            variant="h4"
            align="center"
            sx={{
              input: { color: "black" },
              color: "#1f1f1f",
              fontSize: "5vh",
              marginTop: "2vh",
              fontFamily: "Montserrat,sans-serif",
              fontWeight: "600",
            }}
          >
            Login
          </Typography>
          <form onSubmit={handleFormSubmit}>
            {/* <label class="log-switch">
              <span style={{ color: "black", marginRight: "10px" }}>User</span>
              <input type="checkbox" />
              <span class="log-slider"></span>

              <span style={{ color: "black", marginLeft: "10px" }}>NGO</span>
            </label> */}
            <div className="l-form-field">
              <TextField
                id="input-with-icon-textfield"
                type={Email}
                name="email"
                label="Email"
                required
                onChange={handleInputChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <MailIcon />
                    </InputAdornment>
                  ),
                }}
                variant="standard"
                sx={{
                  width: "34vh",
                  color: "#fff",
                  fontFamily: "Poppins",
                }}
              />

              <TextField
                id="input-with-icon-textfield"
                label="Password"
                name="password"
                required
                onChange={handleInputChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon />
                    </InputAdornment>
                  ),
                }}
                type="password"
                variant="standard"
                sx={{
                  width: "34vh",
                  color: "#fff",
                }}
              />
            </div>
            <div className="l-link-container">
              <Button
                type="submit"
                variant="contained"
                endIcon={<LoginIcon />}
                sx={{
                  margin: "3vh auto",
                  width: "34vh",
                  borderRadius: "7px",
                  fontSize: "2vh",
                  // backgroundColor:"#A997DF",
                  // "&:hover":{
                  //    backgroundColor:"#A997DF",
                  // }
                }}
              >
                <Link
                  className="l-login-btn"
                  to="/admin-deshboard"
                  style={{ textDecoration: "none", color: "White" }}
                >
                  Login
                </Link>
              </Button>
              {/* <a className="forgot-password" href="https://www.google.com/">
                Forgot Password?
              </a> */}
            </div>
            {/* <p className="signup">
              Don't have an account?<a href="hey.com">Sign Up</a>
            </p> */}
          </form>
        </Box>
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

export default ALogin;
