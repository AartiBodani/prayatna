import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import AdminDashboard from "./AdminDashboard";
import User from "./User";
import Ngo from "./Ngo";
import Request from "./Request";
import Feedback from "./Feedback";
import Report from "./Report";
import Fraud from "./Fraud";
import Volunteer from "./Volunteer";
const Adminmain = () => {
  return (
    // <Router>
    <Routes>
      {/* <Route path="/admin" element={<AdminDashboard />}></Route>
      <Route path="/admin/user" element={<User />}></Route>
      <Route path="/admin/ngo" element={<Ngo />}></Route>
      <Route path="/admin/request" element={<Request />}></Route>
      {/* <Route path='/admin/register' element={<Registration />}></Route> 
      <Route path="/admin/feedback" element={<Feedback />}></Route>
      <Route path="/admin/report" element={<Report />}></Route>
      <Route path="/admin/fraud" element={<Fraud />}></Route>
      <Route path="/admin/volunteer" element={<Volunteer />}></Route> */}
      <Route path="/admin">
        <Route index element={<AdminDashboard />} />
      </Route>
      <Route path="/admin/user">
        <Route index element={<User />} />
      </Route>
    </Routes>
    // </Router>
  );
};

export default Adminmain;
