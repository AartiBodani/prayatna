import React, { useEffect, useState } from "react";
import "./feedback.css";
import { Rating } from "@mui/material";
import { Alert, Button, IconButton, Snackbar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import FeedbackImage from "../../../Images/FeedbackImage.jpg";
// import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useGlobalContext } from "../../../context/GlobalContext";
import axios from "axios";
// import { Link } from "react-router-dom";

const Feedbackform = () => {
  const [value, setValue] = React.useState(0); // for rating

  const [data, setData] = useState({
    user_name: "",
    emailfeedback: "",
    message: "",
  });

  const [message, setMessage] = useState({
    open: false,
    message: "",
    status: "",
  });

  // const [user, setUser] = useState();
  const { state, setState } = useGlobalContext();

  useEffect(() => {
    if (state?.userData?._id) {
      axios
        .get(`http://localhost:5000/feeduser/${state.userData._id}`)
        .then((res) => {
          setData(res.data);
        })
        .catch((e) => console.log(e));
    }
  }, [state]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleFormSubmit = async (e) => {
    try {
      e.preventDefault();
      if (data.message === undefined) {
        setMessage({
          open: true,
          message: "Please Fille The Message.",
          status: "error",
        });
      }
      const rating = value;
      console.log(data, rating);
      const res = await axios.post("/feedback", { ...data, rating });

      setMessage({
        open: true,
        message: "Send Feedback successfully.",
        status: "success",
      });
    } catch (err) {
      console.log(err);
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
      <div className="feedback_wrapper">
        <div className="feed_inner">
          {/* <Link to="/search">
            <KeyboardBackspaceIcon
              style={{
                position: "relative",
                left: "20px",
                top: "30px",
                fontSize: "30px",
                color: "black",
              }}
            />
          </Link> */}
          <div className="feed_image-holder">
            <img src={FeedbackImage} alt="" />
          </div>
          <form className="feed_form" onSubmit={handleFormSubmit}>
            <h3 className="feed_title">Feedback Form</h3>
            <div className="feed_form-row">
              <input
                name="emailfeedback"
                type="email"
                className="feed_form-control feed_input"
                placeholder="Email"
                value={data?.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="feed_form-row">
              <input
                name="user_name"
                type="text"
                className="feed_form-control feed_input"
                placeholder="Name"
                value={data?.user_name}
                onChange={handleInputChange}
              />
            </div>

            <textarea
              name="message"
              rows="3"
              cols="8"
              placeholder="Message"
              className="feed_form-control"
              value={data?.message}
              style={{ height: "130px" }}
              onChange={handleInputChange}
            ></textarea>
            <br />
            <div className="feed_from-row">
              <h4 className="feed_title">Rateing</h4>
            </div>

            <div className="feed_from-row">
              <div className="rate_control">
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
              </div>
            </div>

            <button type="submit" className="feed_btn">
              Submit
            </button>
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

export default Feedbackform;
