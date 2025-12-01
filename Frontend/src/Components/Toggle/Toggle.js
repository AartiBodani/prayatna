import React, { useState } from "react";
import "./toggle.css";
import Navbar from "../Navbar/Navbar";
import User from "../User_page/Userpage";
import Register from "../Registration/Reg";

const Toggle = () => {
  const [hide, setHide] = useState(false);
  const [show, setShow] = useState(false);
  return (
    // <>
    //   <Navbar />
    //   <div className="container shadow reg-main-form-div">
    //     <div className="title text-center mt-2 pt-3">
    //       <h2 style={{ color: "#00416D" }}>Registration</h2>
    //     </div>
    //     <div className="checks p-3">
    //       <div className="radios d-flex">
    //         <div className="form-check form-check-inline">
    //           <input
    //             className="form-check-input"
    //             type="radio"
    //             name="register"
    //             id="flexRadioDefault1"
    //             vlaue="user"
    //             onClick={(e) => setHide(false) || setShow(true)}
    //           />
    //           <label class="form-check-label chk_lbl" for="flexRadioDefault1">
    //             User
    //           </label>
    //         </div>
    //         <div className="form-check  form-check-inline">
    //           <input
    //             className="form-check-input ml-4"
    //             type="radio"
    //             name="register"
    //             id="flexRadioDefault2"
    //             vlaue="user"
    //             onClick={(e) => setHide(true) || setShow(false)}
    //           />
    //           <label class="form-check-label chk_lbl" for="flexRadioDefault2">
    //             NGO
    //           </label>
    //         </div>
    //       </div>
    //       {/* <div className="text-center p-3">
    //       <input type="radio" name="check" />
    //       User
    //       <label>User</label>
    //       <input
    //         type="radio"
    //         name="check"
    //         value="Ngo"
    //         onClick={(e) => setHide(false) || setShow(true)}
    //       />
    //       <label>Ngo</label>
    //     </div> */}
    //     </div>

    //     {show ? (
    //       <>
    //         <User />
    //       </>
    //     ) : null}
    //     {hide ? (
    //       <>
    //         <Register />
    //       </>
    //     ) : null}
    //   </div>
    // </>
    <>
      <Navbar />
      <div className="container reg-main-form-div p-4 shadow-lg mt-4 mb-3">
        <div className="row">
          <div className="toggle-bg-div col-lg-4 col-sm-6 col-0"></div>
          <div className="col-lg-8 col-sm-6 col-12">
            <div className="title text-center mt-2 pt-3">
              <h2 style={{ color: "black" }}>
                <span className="tog-reg-spn">Sig</span>nup
              </h2>
            </div>
            <div className="checks p-3">
              <div className="radios d-flex">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="register"
                    id="flexRadioDefault1"
                    vlaue="user"
                    defaultChecked
                    onClick={(e) => setHide(false) || setShow(true)}
                  />
                  <label
                    class="form-check-label chk_lbl"
                    for="flexRadioDefault1"
                  >
                    User
                  </label>
                </div>
                <div className="form-check  form-check-inline">
                  <input
                    className="form-check-input ml-4"
                    type="radio"
                    name="register"
                    id="flexRadioDefault2"
                    vlaue="user"
                    onClick={(e) => setHide(true) || setShow(false)}
                  />
                  <label
                    class="form-check-label chk_lbl"
                    for="flexRadioDefault2"
                  >
                    NGO
                  </label>
                </div>
              </div>
              {/* <div className="text-center p-3">
          <input type="radio" name="check" />
          User
          <label>User</label>
          <input
            type="radio"
            name="check"
            value="Ngo"
            onClick={(e) => setHide(false) || setShow(true)}
          />
          <label>Ngo</label>
        </div> */}
            </div>

            {show ? (
              <>
                <User />
              </>
            ) : null}
            {hide ? (
              <>
                <Register />
              </>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Toggle;
