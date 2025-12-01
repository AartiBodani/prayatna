import React, { useState } from "react";
import "./Reg.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import { toast } from "react-toastify";
import { Alert, Button, IconButton, Snackbar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

// const Reg = () => {
//   const navigate = useNavigate();
//   const [choice, setChoice] = useState();
//   const [area, setArea] = useState();
//   const [regData, setRegData] = useState({
//     ngo_name: "",
//     head_name: "",
//     email: "",
//     address: "",
//     password: "",
//     cpassword: "",
//     contact_number: "",
//     document: "",
//   });
//   const [isOtp, setIsOtp] = useState(false);
//   const [otp, setOtp] = useState();
//   const [message, setMessage] = useState({
//     open: false,
//     message: "",
//     status: "",
//   });
//   const handleOtpInputChange = (e) => {
//     setOtp(e.target.value);
//   };
//   const handleOtpSubmit = async (e) => {
//     e.preventDefault();
//     console.log({ otp });

//     const res = await axios.post("/verify-otp", {
//       email: regData.email,
//       vOtp: otp,
//     });
//     console.log({ res });

//     if (res.data.success) {
//       setRegData({
//         ngo_name: "",
//         head_name: "",
//         email: "",
//         address: "",
//         activity: "",
//         password: "",
//         cpassword: "",
//         contact_number: "",
//         document: "",
//       });
//       setOtp("");

//       setMessage({
//         open: true,
//         message: "Otp verified",
//         status: "success",
//       });
//       navigate("/login");
//     } else {
//       setMessage({
//         open: true,
//         message: "Something went wrong...!",
//         status: "error",
//       });
//     }
//   };
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     if (name === "document") {
//       setRegData((prev) => {
//         return { ...prev, [name]: e.target.files[0] };
//       });
//     } else {
//       setRegData((prev) => {
//         return { ...prev, [name]: value };
//       });
//     }
//   };

//   const vlaidation = () => {
//     if (
//       regData.ngo_name === "" ||
//       regData.head_name === "" ||
//       regData.email === "" ||
//       regData.address === "" ||
//       regData.activity === "" ||
//       regData.password === "" ||
//       regData.cpassword === "" ||
//       regData.contact_number === ""
//     ) {
//       setMessage({
//         open: true,
//         message: "All Fields Are Must be Required",
//         status: "error",
//       });
//     } else if (regData.password !== regData.cpassword) {
//       setMessage({
//         open: true,
//         message: "Password Are Not Matched",
//         status: "error",
//       });
//     } else if (
//       parseInt(regData.contact_number.length) > 10 ||
//       parseInt(regData.contact_number.length) < 10
//     ) {
//       setMessage({
//         open: true,
//         message: "Number must be 10 digit",
//         error: "error",
//         status: "error",
//       });
//     }
//   };

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();
//     vlaidation();
//     try {
//       const formData = new FormData();
//       for (let v in regData) {
//         formData.append(v, regData[v]);
//       }
//       const res = await axios.post("/registration", {
//         ...regData,
//         activity: choice,
//         formData,
//         landmark: area,
//       });
//       setMessage({
//         open: true,
//         message: "User registered successfully.",
//         status: "success",
//       });
//       setIsOtp(true);
//     } catch (err) {
//       if (err.response?.data?.error) {
//         setMessage({
//           open: true,
//           message: err.response.data.error,
//           status: "error",
//         });
//       }
//     }
//   };
//   const handleClose = () => {
//     setMessage({
//       open: false,
//       message: "",
//     });
//   };

//   const action = (
//     <React.Fragment>
//       <Button color="secondary" size="small" onClick={handleClose}>
//         UNDO
//       </Button>
//       <IconButton
//         size="small"
//         aria-label="close"
//         color="inherit"
//         onClick={handleClose}
//       >
//         <CloseIcon fontSize="small" />
//       </IconButton>
//     </React.Fragment>
//   );
//   return (
//     <>
//       <div className="container-fluid reg-main_container p-3">
//         {/* <div className="container reg-sub_container p-3"> */}
//         {/* <div className="container reg-sub_inp_container p-2 "> */}
//         {/* <h3 className="text-center mb-2" style={{ color: "white" }}>
//               Registration
//             </h3> */}
//         {/* <hr className='hr_line'/> */}
//         {/* <div className="reg-input_field p-4 mt-3"> */}
//         <form
//           className="reg-form-container"
//           encType="multipart/form-data"
//           onSubmit={handleFormSubmit}
//         >
//           <div className="row">
//             {/* <div className="col-0 col-sm-12 col-lg-3 reg-bg-img"></div> */}
//             <div className="col-12 col-sm-12 col-lg-6">
//               <div className="mb-3 reg-div">
//                 <label
//                   for="exampleFormControlInput1"
//                   className="form-label  rg_lbl"
//                 >
//                   NGO Name
//                 </label>
//                 <input
//                   type="text"
//                   name="ngo_name"
//                   onChange={handleInputChange}
//                   className="form-control"
//                   id="exampleFormControlInput1"
//                   placeholder="Enter NGO Name"
//                 />
//               </div>
//               <div className="mb-3 reg-div">
//                 <label
//                   for="exampleFormControlInput1"
//                   className="form-label  rg_lbl"
//                 >
//                   Trusty Name
//                 </label>
//                 <input
//                   type="text"
//                   name="head_name"
//                   onChange={handleInputChange}
//                   className="form-control"
//                   id="exampleFormControlInput1"
//                   placeholder="Enter NGO Name"
//                 />
//               </div>
//               <div className="mb-3 reg-div">
//                 <label
//                   for="exampleFormControlInput1"
//                   className="form-label  rg_lbl"
//                 >
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   onChange={handleInputChange}
//                   className="form-control"
//                   id="exampleFormControlInput1"
//                   placeholder="Enter Trustee Name"
//                 />
//               </div>
//               <div className="mb-3 reg-div">
//                 <label
//                   for="exampleFormControlInput1"
//                   className="form-label  rg_lbl"
//                 >
//                   Address
//                 </label>
//                 <br />
//                 <textarea
//                   name="address"
//                   id=""
//                   onChange={handleInputChange}
//                   className="form-control"
//                   cols="58"
//                   rows="1"
//                 ></textarea>
//               </div>
//               <div className="mb-3 reg-div">
//                 <label
//                   for="exampleFormControlInput1"
//                   className="form-label  rg_lbl"
//                 >
//                   Landmark
//                 </label>
//                 <select
//                   class="form-select"
//                   name="activity"
//                   onChange={(e) => setArea(e.target.value)}
//                   aria-label="Default select example"
//                 >
//                   <option name="landmark" selected>
//                     Select Landmark
//                   </option>
//                   <option name="landmark" value="Nikol">
//                     Nikol
//                   </option>
//                   <option value="Chandkheda" name="landmark">
//                     Chandkheda
//                   </option>
//                   <option value="AkhbarNagar" name="landmark">
//                     AkhbarNagar
//                   </option>
//                   <option value="BapuNagar" name="landmark">
//                     BapuNagar
//                   </option>
//                   <option value="ManiNagar" name="landmark">
//                     ManiNagar
//                   </option>
//                   <option value="Bopal" name="landmark">
//                     Bopal
//                   </option>
//                   <option value="Naroda" name="landmark">
//                     Naroda
//                   </option>
//                   <option value="NavarangPura" name="landmark">
//                     NavarangPura
//                   </option>
//                 </select>
//               </div>
//             </div>
//             <div className="col-12 col-sm-12 col-lg-6">
//               {/* <div className="mb-3 reg-div">
//                 <label
//                   for="exampleFormControlInput1"
//                   className="form-label  rg_lbl"
//                 >
//                   Activities
//                 </label>
//                 <input
//                   type="text"
//                   name="activity"
//                   onChange={handleInputChange}
//                   className="form-control"
//                   id="exampleFormControlInput1"
//                   placeholder="Enter Your Activity"
//                 />
//               </div> */}
//               <div className="mb-3 reg-div">
//                 <label
//                   for="exampleFormControlInput1"
//                   className="form-label  rg_lbl"
//                 >
//                   Upload legal Document
//                 </label>
//                 <input
//                   type="file"
//                   name="document"
//                   onChange={handleInputChange}
//                   className="form-control"
//                   id="exampleFormControlInput1"
//                   placeholder="NGO legal Document"
//                 />
//               </div>
//               <div className="mb-3 reg-div">
//                 <label
//                   for="exampleFormControlInput1"
//                   className="form-label  rg_lbl"
//                 >
//                   Contact Number
//                 </label>
//                 <input
//                   type="text"
//                   name="contact_number"
//                   onChange={handleInputChange}
//                   className="form-control"
//                   id="exampleFormControlInput1"
//                   placeholder="Enter Contact Number"
//                   maxLength={10}
//                 />
//               </div>
//               <div className="mb-3 reg-div">
//                 <label
//                   for="exampleFormControlInput1"
//                   className="form-label  rg_lbl"
//                 >
//                   Activity
//                 </label>
//                 <select
//                   class="form-select"
//                   name="activity"
//                   onChange={(e) => setChoice(e.target.value)}
//                   aria-label="Default select example"
//                 >
//                   <option name="activity" selected>
//                     Select Activity
//                   </option>
//                   <option name="activity" value="Shelter">
//                     Shelter
//                   </option>
//                   <option value="Education" name="activity">
//                     Education
//                   </option>
//                   <option value="Tree Plantation" name="activity">
//                     Tree Plantation
//                   </option>
//                 </select>
//               </div>
//               <div className="mb-3 reg-div">
//                 <label
//                   for="exampleFormControlInput1"
//                   className="form-label  rg_lbl"
//                 >
//                   Password
//                 </label>
//                 <input
//                   type="password"
//                   className="form-control"
//                   name="password"
//                   onChange={handleInputChange}
//                   id="exampleFormControlInput1"
//                   placeholder="Enter Password"
//                 />
//               </div>
//               <div className="mb-3 reg-div">
//                 <label
//                   for="exampleFormControlInput1"
//                   className="form-label  rg_lbl"
//                 >
//                   Confirm Password
//                 </label>
//                 <input
//                   type="password"
//                   className="form-control"
//                   name="cpassword"
//                   onChange={handleInputChange}
//                   id="exampleFormControlInput1"
//                   placeholder="Enter Password"
//                 />
//               </div>
//             </div>
//             <div className="container reg-btn_access p-2 mt-2">
//               <button type="submit" className="reg-Reg_btn">
//                 Register
//               </button>
//             </div>
//           </div>
//         </form>
//         {/* {isOtp ? (
//           <div className="container " style={{}}>
//             <form onSubmit={handleOtpSubmit} className="reg-div">
//               <input
//                 type="text"
//                 className="form-control"
//                 name="otp"
//                 onChange={handleOtpInputChange}
//                 id="exampleFormControlInput1"
//                 placeholder="Enter OTP"
//               />
//               <div className="container reg-btn_access p-2 mt-2">
//                 <button type="submit" className="reg-Reg_btn">
//                   Verify
//                 </button>
//               </div>
//             </form>
//           </div>
//         ) : null} */}
//         {/* </div> */}
//         {/* </div> */}
//         {/* </div> */}

//         <Snackbar
//           anchorOrigin={{ vertical: "top", horizontal: "right" }}
//           open={message.open}
//           autoHideDuration={6000}
//           onClose={handleClose}
//           message={message.message}
//           action={action}
//         >
//           <Alert
//             onClose={handleClose}
//             severity={message.status}
//             sx={{ width: "100%" }}
//           >
//             {message.message}
//           </Alert>
//         </Snackbar>
//       </div>
//       {isOtp ? (
//         <div className="container " style={{}}>
//           <form onSubmit={handleOtpSubmit} className="reg-div">
//             <input
//               type="text"
//               className="form-control"
//               name="otp"
//               onChange={handleOtpInputChange}
//               id="exampleFormControlInput1"
//               placeholder="Enter OTP"
//             />
//             <div className="container reg-btn_access p-2 mt-2">
//               <button type="submit" className="reg-Reg_btn">
//                 Verify
//               </button>
//             </div>
//           </form>
//         </div>
//       ) : null}
//     </>
//   );
// };

// export default Reg;
// import React, { useState } from "react";
// import "./Reg.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// // import { toast } from "react-toastify";
// import { Alert, Button, IconButton, Snackbar } from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";

const Reg = () => {
  const navigate = useNavigate();
  const [regData, setRegData] = useState({
    ngo_name: "",
    head_name: "",
    email: "",
    address: "",
    activity: "",
    password: "",
    cpassword: "",
    contact_number: "",
    document: "",
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

    const res = await axios.post("/verify-otp", {
      email: regData.email,
      vOtp: otp,
    });
    console.log({ res });

    if (res.data.success) {
      setRegData({
        ngo_name: "",
        head_name: "",
        email: "",
        address: "",
        activity: "",
        password: "",
        cpassword: "",
        contact_number: "",
        document: "",
      });
      setOtp("");

      setMessage({
        open: true,
        message: "Otp verified",
        status: "success",
      });
      navigate("/login");
    } else {
      setMessage({
        open: true,
        message: "Something went wrong...!",
        status: "error",
      });
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "document") {
      setRegData((prev) => {
        return { ...prev, [name]: e.target.files[0] };
      });
    } else {
      setRegData((prev) => {
        return { ...prev, [name]: value };
      });
    }
  };

  const vlaidation = () => {
    if (
      regData.ngo_name === "" ||
      regData.head_name === "" ||
      regData.email === "" ||
      regData.address === "" ||
      regData.activity === "" ||
      regData.password === "" ||
      regData.cpassword === "" ||
      regData.contact_number === ""
    ) {
      setMessage({
        open: true,
        message: "All Fields Are Must be Required",
        status: "error",
      });
    } else if (regData.password !== regData.cpassword) {
      setMessage({
        open: true,
        message: "Password Are Not Matched",
        status: "error",
      });
    } else if (
      parseInt(regData.contact_number.length) > 10 ||
      parseInt(regData.contact_number.length) < 10
    ) {
      setMessage({
        open: true,
        message: "Number must be 10 digit",
        error: "error",
        status: "error",
      });
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    vlaidation();
    try {
      const formData = new FormData();
      for (let v in regData) {
        formData.append(v, regData[v]);
      }
      const res = await axios.post("/registration", formData);
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
    // <>
    //   <div className="container-fluid reg-main_container p-3">
    //     <div className="container reg-sub_container p-3">
    //       <div className="container reg-sub_inp_container p-2 ">
    //         {/* <h3 className="text-center mb-2" style={{ color: "white" }}>
    //           Registration
    //         </h3> */}
    //         {/* <hr className='hr_line'/> */}
    //         <div className="reg-input_field p-4 mt-3">
    //           <form
    //             className="reg-form-container"
    //             encType="multipart/form-data"
    //             onSubmit={handleFormSubmit}
    //           >
    //             <div className="row">
    //               <div className="col-12 col-sm-12 col-lg-6">
    //                 <div className="mb-3">
    //                   <label
    //                     for="exampleFormControlInput1"
    //                     className="form-label  rg_lbl"
    //                   >
    //                     NGO Name
    //                   </label>
    //                   <input
    //                     type="text"
    //                     name="ngo_name"
    //                     onChange={handleInputChange}
    //                     className="form-control"
    //                     id="exampleFormControlInput1"
    //                     placeholder="Enter NGO Name"
    //                   />
    //                 </div>
    //                 <div className="mb-3">
    //                   <label
    //                     for="exampleFormControlInput1"
    //                     className="form-label  rg_lbl"
    //                   >
    //                     Trusty Name
    //                   </label>
    //                   <input
    //                     type="text"
    //                     name="head_name"
    //                     onChange={handleInputChange}
    //                     className="form-control"
    //                     id="exampleFormControlInput1"
    //                     placeholder="Enter NGO Name"
    //                   />
    //                 </div>
    //                 <div className="mb-3">
    //                   <label
    //                     for="exampleFormControlInput1"
    //                     className="form-label  rg_lbl"
    //                   >
    //                     Email
    //                   </label>
    //                   <input
    //                     type="email"
    //                     name="email"
    //                     onChange={handleInputChange}
    //                     className="form-control"
    //                     id="exampleFormControlInput1"
    //                     placeholder="Enter Trustee Name"
    //                   />
    //                 </div>
    //                 <div className="mb-3">
    //                   <label
    //                     for="exampleFormControlInput1"
    //                     className="form-label  rg_lbl"
    //                   >
    //                     Address
    //                   </label>
    //                   <br />
    //                   <textarea
    //                     name="address"
    //                     id=""
    //                     onChange={handleInputChange}
    //                     className="form-control"
    //                     cols="58"
    //                     rows="5"
    //                   ></textarea>
    //                 </div>
    //               </div>
    //               <div className="col-12 col-sm-12 col-lg-6">
    //                 <div className="mb-3">
    //                   <label
    //                     for="exampleFormControlInput1"
    //                     className="form-label  rg_lbl"
    //                   >
    //                     Activities
    //                   </label>
    //                   <input
    //                     type="text"
    //                     name="activity"
    //                     onChange={handleInputChange}
    //                     className="form-control"
    //                     id="exampleFormControlInput1"
    //                     placeholder="Enter Your Activity"
    //                   />
    //                 </div>
    //                 <div className="mb-3">
    //                   <label
    //                     for="exampleFormControlInput1"
    //                     className="form-label  rg_lbl"
    //                   >
    //                     Upload legal Document
    //                   </label>
    //                   <input
    //                     type="file"
    //                     name="document"
    //                     onChange={handleInputChange}
    //                     className="form-control"
    //                     id="exampleFormControlInput1"
    //                     placeholder="NGO legal Document"
    //                   />
    //                 </div>
    //                 <div className="mb-3">
    //                   <label
    //                     for="exampleFormControlInput1"
    //                     className="form-label  rg_lbl"
    //                   >
    //                     Contact Number
    //                   </label>
    //                   <input
    //                     type="text"
    //                     name="contact_number"
    //                     onChange={handleInputChange}
    //                     className="form-control"
    //                     id="exampleFormControlInput1"
    //                     placeholder="Enter Contact Number"
    //                   />
    //                 </div>
    //                 <div className="mb-3">
    //                   <label
    //                     for="exampleFormControlInput1"
    //                     className="form-label  rg_lbl"
    //                   >
    //                     Password
    //                   </label>
    //                   <input
    //                     type="password"
    //                     className="form-control"
    //                     name="password"
    //                     onChange={handleInputChange}
    //                     id="exampleFormControlInput1"
    //                     placeholder="Enter Password"
    //                   />
    //                 </div>
    //                 <div className="mb-3">
    //                   <label
    //                     for="exampleFormControlInput1"
    //                     className="form-label  rg_lbl"
    //                   >
    //                     Confirm Password
    //                   </label>
    //                   <input
    //                     type="password"
    //                     className="form-control"
    //                     name="cpassword"
    //                     onChange={handleInputChange}
    //                     id="exampleFormControlInput1"
    //                     placeholder="Enter Password"
    //                   />
    //                 </div>
    //               </div>
    //               <div className="container reg-btn_access p-2 mt-3">
    //                 <button type="submit" className="reg-Reg_btn">
    //                   Register
    //                 </button>
    //               </div>
    //             </div>
    //           </form>
    //           {isOtp ? (
    //             <div className="container" style={{}}>
    //               <form onSubmit={handleOtpSubmit}>
    //                 <input
    //                   type="text"
    //                   className="form-control"
    //                   name="otp"
    //                   onChange={handleOtpInputChange}
    //                   id="exampleFormControlInput1"
    //                   placeholder="Enter OTP"
    //                 />
    //                 <div className="container reg-btn_access p-2 mt-3">
    //                   <button type="submit" className="reg-Reg_btn">
    //                     Verify
    //                   </button>
    //                 </div>
    //               </form>
    //             </div>
    //           ) : null}
    //         </div>
    //       </div>
    //     </div>

    //     <Snackbar
    //       anchorOrigin={{ vertical: "top", horizontal: "right" }}
    //       open={message.open}
    //       autoHideDuration={6000}
    //       onClose={handleClose}
    //       message={message.message}
    //       action={action}
    //     >
    //       <Alert
    //         onClose={handleClose}
    //         severity={message.status}
    //         sx={{ width: "100%" }}
    //       >
    //         {message.message}
    //       </Alert>
    //     </Snackbar>
    //   </div>
    // </>
    <>
      <div className="container-fluid reg-main_container p-3">
        {/* <div className="container reg-sub_container p-3"> */}
        {/* <div className="container reg-sub_inp_container p-2 "> */}
        {/* <h3 className="text-center mb-2" style={{ color: "white" }}>
              Registration
            </h3> */}
        {/* <hr className='hr_line'/> */}
        {/* <div className="reg-input_field p-4 mt-3"> */}
        <form
          className="reg-form-container"
          encType="multipart/form-data"
          onSubmit={handleFormSubmit}
        >
          <div className="row">
            {/* <div className="col-0 col-sm-12 col-lg-3 reg-bg-img"></div> */}
            <div className="col-12 col-sm-12 col-lg-6">
              <div className="mb-3 reg-div">
                <label
                  for="exampleFormControlInput1"
                  className="form-label  rg_lbl"
                >
                  NGO Name
                </label>
                <input
                  type="text"
                  name="ngo_name"
                  onChange={handleInputChange}
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter NGO Name"
                />
              </div>
              <div className="mb-3 reg-div">
                <label
                  for="exampleFormControlInput1"
                  className="form-label  rg_lbl"
                >
                  Trusty Name
                </label>
                <input
                  type="text"
                  name="head_name"
                  onChange={handleInputChange}
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter NGO Name"
                />
              </div>
              <div className="mb-3 reg-div">
                <label
                  for="exampleFormControlInput1"
                  className="form-label  rg_lbl"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  onChange={handleInputChange}
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter Trustee Name"
                />
              </div>
              <div className="mb-3 reg-div">
                <label
                  for="exampleFormControlInput1"
                  className="form-label  rg_lbl"
                >
                  Address
                </label>
                <br />
                <textarea
                  name="address"
                  id=""
                  onChange={handleInputChange}
                  className="form-control"
                  cols="58"
                  rows="4"
                ></textarea>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-lg-6">
              <div className="mb-3 reg-div">
                <label
                  for="exampleFormControlInput1"
                  className="form-label  rg_lbl"
                >
                  Activities
                </label>
                <input
                  type="text"
                  name="activity"
                  onChange={handleInputChange}
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter Your Activity"
                />
              </div>
              <div className="mb-3 reg-div">
                <label
                  for="exampleFormControlInput1"
                  className="form-label  rg_lbl"
                >
                  Upload legal Document
                </label>
                <input
                  type="file"
                  name="document"
                  onChange={handleInputChange}
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="NGO legal Document"
                />
              </div>
              <div className="mb-3 reg-div">
                <label
                  for="exampleFormControlInput1"
                  className="form-label  rg_lbl"
                >
                  Contact Number
                </label>
                <input
                  type="text"
                  name="contact_number"
                  onChange={handleInputChange}
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter Contact Number"
                  maxLength={10}
                />
              </div>
              <div className="mb-3 reg-div">
                <label
                  for="exampleFormControlInput1"
                  className="form-label  rg_lbl"
                >
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  onChange={handleInputChange}
                  id="exampleFormControlInput1"
                  placeholder="Enter Password"
                />
              </div>
              <div className="mb-3 reg-div">
                <label
                  for="exampleFormControlInput1"
                  className="form-label  rg_lbl"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  name="cpassword"
                  onChange={handleInputChange}
                  id="exampleFormControlInput1"
                  placeholder="Enter Password"
                />
              </div>
            </div>
            <div className="container reg-btn_access p-2 mt-2">
              <button type="submit" className="reg-Reg_btn">
                Register
              </button>
            </div>
          </div>
        </form>
        {/* {isOtp ? (
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
        ) : null} */}
        {/* </div> */}
        {/* </div> */}
        {/* </div> */}

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
      </div>
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
    </>
  );
};

export default Reg;
