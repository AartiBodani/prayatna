import React, { useEffect, useState } from "react";
import "./Fraud.css";
import FormImage from "../../../Images/requestImage.jpg";
import { useSearchParams } from "react-router-dom";
import { useGlobalContext } from "../../../context/GlobalContext";
import axios from "axios";
import { Link } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Alert, Button, IconButton, Snackbar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
const Fraud = () => {
  // const [user, setUser] = useState({
  //   ngo_name: "",
  //   email: "",
  //   message: "",
  //   activity: "",
  // });

  const [message, setMessage] = useState({
    open: false,
    message: "",
    status: "",
  });

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

  const [data, setData] = useState({
    email: "",
    message: "",
    activity: "",
    address: "",
  });

  const [searchParams, setSearchParams] = useSearchParams();
  const ngo_id = searchParams.get("ngo_id");
  console.log({ searchParams });

  const { state } = useGlobalContext();

  useEffect(() => {
    if (state?.userData?._id) {
      axios
        .get(`http://localhost:5000/regngos/${ngo_id}`)
        .then((res) => {
          console.log({ res });
          setData(res.data);
        })
        .catch((e) => console.log(e));
    }
  }, [state]);

  console.log({ state });
  console.log({ data });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const validation = () => {
    console.log(data.message);
    if (data?.message === undefined) {
      // console.log();

      setMessage({
        open: true,
        message: "All Fields Must Be Required",
        status: "error",
      });
    } else {
      setMessage({
        open: true,
        message: "Message Send Successfully",
        status: "success",
      });
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    validation();
    try {
      const res = await axios.post("/report", {
        ...data,
        user_id: state.userData._id,
        ngo_id,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="fraud_wrapper">
        <div className="fraud_inner">
          <Link to="/search">
            <KeyboardBackspaceIcon
              style={{
                position: "relative",
                left: "20px",
                top: "20px",
                fontSize: "30px",
                color: "black",
              }}
            />
          </Link>
          <div className="fraud_image-holder">
            <img src={FormImage} alt="" className="fraud_img" />
          </div>
          <form onSubmit={handleFormSubmit} className="fraud_form">
            <h3 className="fraud_title">Fraud NGO </h3>
            <div className="fraud_form-row">
              <input
                name="ngo_name"
                type="text"
                className="fraud_form-control"
                placeholder="Enter a Name"
                value={data?.ngo_name}
                onChange={handleInputChange}
              />
            </div>
            <div className="fraud_form-row">
              <input
                name="email"
                type="email"
                className="fraud_form-control"
                placeholder="Enter Email"
                value={data?.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="fraud_form-row">
              <input
                name="address"
                type="address"
                className="fraud_form-control"
                placeholder="Address"
                value={data?.address}
                onChange={handleInputChange}
              />
            </div>
            <div class="fraud_form-row">
              <input
                name="activity"
                type="text"
                className="fraud_form-control"
                placeholder="activity"
                value={data?.activity}
                onChange={handleInputChange}
              />
            </div>

            <textarea
              name="message"
              id=""
              rows="3"
              cols="8"
              placeholder="Description"
              className="fraud_form-control"
              style={{ height: "130px" }}
              onChange={handleInputChange}
            ></textarea>

            <button className="fraud_button">Submit</button>
          </form>
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

export default Fraud;
