import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home.js";
import About from "../Pages/About";
import Contact from "../Components/Contact Us/Contact";
import ForgotPasswordForm from "../Components/Forms/ForgetPasswordForm/Forgot.jsx";
import AdminDashboard from "../Pages/AdminDashboard";
import Search from "../Components/Search/Search.jsx";
import NgoLogin from "../Components/Login/NgoLogin";
import Mydata from "../Components/NGOdeshboeard/Mydata.jsx";
import Update from "../Components/NGOdeshboeard/Update.jsx";
import Fraud from "../Components/Forms/FraudForm/Fraud.js";
import Volunteer from "../Components/Volunteer/Volunteer";
import Changepwd from "../Components/Forms/ChangePasswordForm/Change.jsx";
import Toggle from "../Components/Toggle/Toggle.js";
import Req from "../Components/Forms/RequestForm/Request.js";
import FeedbackForm from "../Components/Forms/FeedbackForm/FeedBackFormV2.js";
import Showfeedback from "../Components/Forms/Showfeedback/Showfeedback.jsx";
import { useGlobalContext } from "../context/GlobalContext.js";
import Volunteerapi from "../Components/Fetch-Api/VolunteerApi/Volunteerapi.js";
import Historydata from "../Components/NGOdeshboeard/Historydata.jsx";
import ShowNgo from "../Components/ShowNgo/ShowNgo.jsx";
import { UserRequest } from "../Components/Userrequest/UserRequest.jsx";
import User from "../Pages/User.js";
import ALogin from "../Components/Admin/AdminLogin/Alogin";
import Aregister from "../Components/Admin/AdminRegistrationForm/ARegistration.js";
import Ngo from "../Pages/Ngo.js";
import Request from "../Pages/Request.js";
import Registration from "../Pages/Registration.js";
import Feedback from "../Pages/Feedback.js";
import Report from "../Pages/Report.js";
import Afraud from "../Pages/Fraud.js";
import Avolunteer from "../Pages/Volunteer.js";
// import AdminDashboard from "../Pages/AdminDashboard";
export const Router = () => {
  const { state, setState } = useGlobalContext();
  function checkLogin() {
    if (state.userData && state.userData._id) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <>
      {/* {checkLogin()} */}
      <BrowserRouter>
        {/* <Navbar /> */}
        {/* <Form /> */}
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
          </Route>
          <Route path="/about">
            <Route index element={<About />} />
          </Route>
          <Route path="/search">
            <Route index element={<Search />} />
          </Route>
          <Route path="/registration">
            <Route index element={<Toggle />} />
          </Route>
          <Route path="/login">
            <Route index element={<NgoLogin />} />
          </Route>
          <Route path="/showfeedback">
            <Route index element={<Showfeedback />} />
          </Route>
          <Route path="/user-request">
            <Route index element={<UserRequest />} />
          </Route>
          <Route path="/forgot">
            <Route index element={<ForgotPasswordForm />} />
          </Route>
          {/* <Route path="/volunteer">
            <Route
              index
              element={checkLogin() ? <Volunteer /> : <NgoLogin />}
            />
          </Route> */}
          <Route path="/volunteer">
            <Route index element={<Volunteer />} />
          </Route>
          <Route path="/feedback">
            <Route
              index
              element={checkLogin() ? <FeedbackForm /> : <NgoLogin />}
            />
          </Route>
          <Route path="/ngo">
            <Route index element={checkLogin() ? <ShowNgo /> : <NgoLogin />} />
          </Route>
          <Route path="/search/report">
            <Route index element={checkLogin() ? <Fraud /> : <NgoLogin />} />
          </Route>
          <Route path="/volunteerdata">
            <Route index element={<Volunteerapi />} />
          </Route>
          <Route path="/myprofile">
            <Route index element={checkLogin() ? <Mydata /> : <NgoLogin />} />
          </Route>
          <Route path="/myprofile/edit">
            <Route index element={checkLogin() ? <Update /> : <NgoLogin />} />
          </Route>
          <Route path="/myprofile/changepassword">
            <Route
              index
              element={checkLogin() ? <Changepwd /> : <NgoLogin />}
            />
          </Route>
          <Route path="/contact">
            <Route index element={<Contact />} />
          </Route>
          <Route path="/historydata">
            <Route index element={<Historydata />} />
          </Route>
          <Route path="/search/request">
            <Route index element={checkLogin() ? <Req /> : <NgoLogin />} />
          </Route>

          {/* Admin Routes */}
          <Route path="/admin-deshboard">
            <Route index element={<AdminDashboard />} />
          </Route>
          <Route path="/deshboard/admin-login">
            <Route index element={<ALogin />} />
          </Route>
          <Route path="/deshboard/admin-register">
            <Route index element={<Aregister />} />
          </Route>
          <Route path="/deshboard/admin-user">
            <Route index element={<User />} />
          </Route>
          <Route path="/deshboard/admin-ngo">
            <Route index element={<Ngo />} />
          </Route>
          <Route path="/deshboard/admin-request">
            <Route index element={<Request />} />
          </Route>
          <Route path="/deshboard/admin-feedback">
            <Route index element={<Feedback />} />
          </Route>
          <Route path="/deshboard/admin-report">
            <Route index element={<Report />} />
          </Route>
          <Route path="/deshboard/admin-fraud">
            <Route index element={<Afraud />} />
          </Route>
          <Route path="/deshboard/admin-volunteer">
            <Route index element={<Avolunteer />} />
          </Route>
          <Route path="/deshboard/admin-request">
            <Route index element={<Request />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
