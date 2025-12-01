import React from "react";
import "./Feedback.css";
import { Rating } from "@mui/material";
import FeedbackImage from "../../../Images/FeedbackImage.jpg";

const Feedbackform = () => {
  const [value, setValue] = React.useState(0); // for rating
  return (
    <>
      <div className="feedback_wrapper">
        <div className="feed_inner">
          <div className="feed_image-holder">
            <img src={FeedbackImage} alt="" />
          </div>
          <form action="" className="feed_form">
            <h3 className="feed_title">Feedback Form</h3>
            <div className="feed_form-row">
              <input
                type="text"
                className="feed_form-control feed_input"
                placeholder="Name"
              />
            </div>
            <div className="feed_form-row">
              <input
                type="email"
                className="feed_form-control feed_input"
                placeholder="Email"
              />
            </div>

            <textarea
              name=""
              id=""
              rows="3"
              cols="8"
              placeholder="Message"
              className="feed_form-control"
              style={{ height: "130px" }}
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

            {/* <div className="feed_form-row">
              <div className="rate">
                <input
                  type="radio"
                  id="star5"
                  name="rate"
                  value="5"
                  className="feed_input"
                />
                <label for="star5" title="text" className="feed_lbl">
                  5 stars
                </label>
                <input
                  type="radio"
                  id="star4"
                  name="rate"
                  value="4"
                  className="feed_input"
                />
                <label for="star4" title="text" className="feed_lbl">
                  4 stars
                </label>
                <input
                  type="radio"
                  id="star3"
                  name="rate"
                  value="3"
                  className="feed_input"
                />
                <label for="star3" title="text" className="feed_lbl">
                  3 stars
                </label>
                <input
                  type="radio"
                  id="star2"
                  name="rate"
                  value="2"
                  className="feed_input"
                />
                <label for="star2" title="text" className="feed_lbl">
                  2 stars
                </label>
                <input
                  type="radio"
                  id="star1"
                  name="rate"
                  value="1"
                  className="feed_input"
                />
                <label for="star1" title="text" className="feed_lbl">
                  1 star
                </label>
              </div>
            </div> */}

            <button className="feed_btn">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Feedbackform;
