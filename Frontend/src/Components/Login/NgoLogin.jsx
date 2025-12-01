import React, { useState } from "react";
// import { Alert, Button, IconButton, Snackbar } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NgoLogin.css";
import {
  Typography,
  CssBaseline,
  Box,
  TextField,
  InputAdornment,
  Button,
} from "@mui/material";
import Logo from "../../Images/1-removebg-preview.png";
import MailIcon from "@mui/icons-material/Mail";
import LockIcon from "@mui/icons-material/Lock";
import LoginIcon from "@mui/icons-material/Login";
import { Email } from "@mui/icons-material";
import Navbar from "../Navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Alert, IconButton, Snackbar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useGlobalContext } from "../../context/GlobalContext";

const Login = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState({
    open: false,
    message: "",
    status: "",
  });

  const [user, setUser] = useState(true);

  console.log(user);
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
      const res = await axios.post("/login", { email, password, user });

      console.log({ res });

      if (res) {
        setMessage({
          open: true,
          message: "Login Successfully",
          status: "success",
        });
        alert("Login Successfully");
        console.log({ res });
        const { token, userData } = res.data;
        localStorage.setItem("token", token);
        let userType;
        if (userData.ngo_name) {
          userType = "ngo";
        } else {
          userType = "user";
        }
        setState({
          userType,
          userData,
        });
        navigate("/");
      } else {
        alert("User Not Registerd");
        navigate("/login");
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
      <Navbar />
      <CssBaseline />

      <div className="l-box-container">
        <Box
          sx={{
            width: "45vh",
            height: "80vh",
            backgroundColor: "rgba(255, 255, 255, 1)", //#d5f4e6

            borderRadius: "15px",
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px;",
            // boxShadow:
            // "3.1px 2.5px 5.4px rgba(0, 0, 0, 0.034),6.7px 5.5px 11.3px rgba(0, 0, 0, 0.054),12.7px 10.3px 21.5px rgba(0, 0, 0, 0.072),32px 26px 80px rgba(0, 0, 0, 0.1)",
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

          <div className="checks p-3">
            <div className="radios d-flex">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="register"
                  id="flexRadioDefault1"
                  vlaue="user"
                  // checked
                  defaultChecked
                  onChange={(e) => setUser(true)}
                />
                <label class="form-check-label chk_lbl" for="flexRadioDefault1">
                  User
                </label>
              </div>
              <div className="form-check  form-check-inline">
                <input
                  className="form-check-input ml-4"
                  type="radio"
                  name="register"
                  id="flexRadioDefault2"
                  vlaue="ngo"
                  onChange={(e) => setUser(false)}
                />
                <label class="form-check-label chk_lbl" for="flexRadioDefault2">
                  NGO
                </label>
              </div>
            </div>
          </div>

          <form onSubmit={handleFormSubmit}>
            {/* <label class="log-switch">
              <span style={{ color: "black", marginRight: "10px" }}>User</span>
              <input type="checkbox" onChange={(e) => setUser(false)} />
              <span class="log-slider"></span>

              <span style={{ color: "black", marginLeft: "10px" }}>NGO</span>
            </label> */}
            <div className="l-form-field">
              <TextField
                id="input-with-icon-textfield"
                type={Email}
                label="Email"
                name="email"
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
                // required
                name="password"
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
                  margin: "3vh",
                  width: "34vh",
                  borderRadius: "7px",
                  fontSize: "2vh",
                }}
              >
                Login
              </Button>
              <Link className="l-forgot-password" to="/forgot">
                Forgot Password?
              </Link>
            </div>
            <p className="l-signup">
              Don't have an account?<Link to="/registration">Sign Up</Link>
            </p>
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

export default Login;
