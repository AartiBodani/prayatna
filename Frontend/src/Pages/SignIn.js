import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
// import { Link } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");

  const loginData = async (e) => {
    e.preventDefault();

    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    console.log({ res });

    const data = res.json();
    if (!data) {
      alert("All Fields are required");
      console.log("Invalide LogiIn");
    } else if (res.status === 400) {
      alert("Fields are required");
    } else if (res.status === 429) {
      alert("Password is not matched");
    } else if (res.status === 413) {
      alert("user not ~~");
    } else if (res.status === 201) {
      alert("LogiIn Successfully");
      navigate("/");
    }

    // else {
    //   alert("LogiIn Successfully");
    //   console.log("LogiIn Successfully");
    //   // history.push("/login");

    // }
  };

  // Krupa Login Code ..

  //   router.post('/login', (req, res) => {
  //     const user = req.body;
  //     quary = "select user_email,user_password from user where user_email=?";
  //     connection.query(quary, [user.user_email], (err, results) => {
  //         if (!err) {
  //             if (results.length <= 0 || results[0].user_password != user.user_password) {
  //                 return res.status(401).json({ message: "Incorrect username or password" });
  //             }
  //             else if (results[0].user_password == user.user_password) {
  //                 const response = { user_email: results[0].user_email }
  //                 const accessToken = jwt.sign(response,secretkey, { expiresIn: '8h' })
  //                 res.status(200).json({ token: accessToken });
  //             }
  //             else {
  //                 return res.status(400).json({ message: "something went long please try gain later" });
  //             }
  //         }
  //         else {
  //             return res.status(500).json(err);
  //         }
  //     });
  // });

  ////

  return (
    <>
      <Navbar />
      <div className="container container_signup ">
        <h4 className="text-center pt-2">Ngo Login</h4>

        <div className="row container align-items-center">
          <div className="col">
            <form method="POST" className="container mt-1">
              <div class="mb-1">
                <label for="staticEmail" className="form-label">
                  Email
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Email"
                />
              </div>

              <div class="mb-1">
                <label for="password" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  autocomplete="new-password"
                  className="form-control"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter NGO Activities"
                />
              </div>

              <div class="d-grid gap-2 col-2 mx-auto">
                <button
                  class="btn btn-primary"
                  type="submit"
                  onClick={loginData}
                >
                  <Link
                    to="/"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    Login
                  </Link>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
    // <>
    //   <div className="container-fluid  ">
    //     <div className="row align-item-center main-content bg-success text-center">
    //       <div className="col-md-4 text-center company__info">
    //         <span className="company__logo">
    //           <h2>
    //             <span className="fa fa-android"></span>
    //           </h2>
    //         </span>
    //         <h4 className="company_title">Your Company Logo</h4>
    //       </div>
    //       <div className="col-md-8 col-xs-12 col-sm-12 login_form ">
    //         <div className="container-fluid">
    //           <div className="row mt-3  align-items-center justify-content-center col-xs-12">
    //             <h2>Log In</h2>

    //             <form control="" className="form-group">
    //               <div className="row">
    //                 <input
    //                   type="text"
    //                   name="username"
    //                   id="username"
    //                   className="form__input"
    //                   placeholder="Username"
    //                 />
    //               </div>
    //               <div className="row">
    //                 {/* <span className="fa fa-lock"></span> */}
    //                 <input
    //                   type="password"
    //                   name="password"
    //                   id="password"
    //                   className="form__input"
    //                   placeholder="Password"
    //                 />
    //               </div>

    //               {/* <div className="row ms-auto me-auto">
    //                 <input type="submit" value="Submit" className="btn" />
    //               </div> */}
    //               <button className="btn btn-primary" type="submit">
    //                 Submit
    //               </button>
    //             </form>
    //           </div>
    //           <div className="row">
    //             <p>
    //               Don't have an account? <a href="/">Sign Up</a>
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   {/* <!-- Footer --> */}
    //   {/* <div className="container-fluid text-center footer">
    //     <p>
    //       Coded with &hearts; by <a href="https://bit.ly/yinkaenoch">Yinka.</a>
    //     </p>
    //   </div> */}
    // </>
  );
};

export default SignIn;
